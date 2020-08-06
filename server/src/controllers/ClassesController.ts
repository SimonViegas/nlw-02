import { Request, Response } from 'express';
import db from '../database/connection';
import convertHourToMinute from '../util/convertHourToMinute';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

interface Filters {
  week_day: number;
  from: string;
  to: string;
}

export default class ClassesController {
  async index(request: Request, response: Response) {
    console.log('### Acessou a rota Get "/classes"');

    const filters = request.query;

    const subject = filters.subject as string;
    const week_day = filters.week_day as string;
    const time = filters.time as string;

    if (!filters.subject || !filters.subject || !filters.time) {
      return response.status(400).json({
        erro: "Missging filters to search classes"
      });
    }

    const timeInMinuts = convertHourToMinute(time)

    const classes = await db('classes')
      .whereExists(function() {
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinuts])
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinuts]);
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*']);

    return response.json(classes);
  }

  async create(request: Request, response: Response) {
    console.log('### Acessou a rota Post "/classes"');
  
    const {
      name,
      avatar,
      whatsap,
      bio,
      subject,
      cost,
      schedule
    } = request.body;
  
    // Transacion
    const trx = await db.transaction();
  
    try {
      const insertUsersIds = await trx('users').insert({
        name,
        avatar,
        whatsap,
        bio,
      });
    
      const user_id = insertUsersIds[0];
    
      const insertClassesId = await trx('classes').insert({
        subject,
        cost,
        user_id
      });
      
      const class_id = insertClassesId[0];
    
      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinute(scheduleItem.from),
          to: convertHourToMinute(scheduleItem.to),
        };
      })
      
      await trx.commit();
  
      return response.status(201).send();
  
    } catch (err) {
      console.log(err);
  
      await trx.rollback();
  
      return response.status(400).json({
        erro: "Unexpected erro while creating new class",
      })
    }
  }

  async totalConections(request: Request, response: Response) {
    console.log('### Acessou a rota Get "/totalConections"');

    return response.send('aaaaaaaaa');
    
  }
}