import express from 'express';
import db from './database/connection';
import convertHourToMinute from './util/convertHourToMinute';

const routes = express.Router();

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

routes.post('/classes', async (request, response) => {
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
})

export default routes;
