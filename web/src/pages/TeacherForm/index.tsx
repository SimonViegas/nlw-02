import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import TextArea from '../../components/TextArea';
import warningIcon from '../../assets/images/icons/warning.svg';

import './style.css'


function TeacherForm() {
  const [ scheduleItems, setScheduleItems] = useState([
    { week_day: 1, from: '', to: '' }
  ]);

  function addNewSchedureItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 1, from: '', to: '' }
    ])
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher este formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome completo"/>
          <Input name="avatar" label="Avatar"/>
          <Input name="whatsapp" label="Whatsapp"/>
          <TextArea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
          <Select
            name="subject"
            label="Matéria"
            options={[
              {value: 'História', label: 'História'},
              {value: 'Matemática', label: 'Matemática'},
              {value: 'JavaScript', label: 'JavaScript'},
              {value: 'Física', label: 'Física'},
            ]}
          />
          <Input name="cost" label="Custo da tua hora por aula"/>
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewSchedureItem}>+ Novo Horário</button>
          </legend>

          { scheduleItems.map(scheduleItem => {
            return (
               <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dia da semana"
                    options={[
                      {value: '0', label: 'Domingo'},
                      {value: '1', label: 'Segunda-feira'},
                      {value: '2', label: 'Terça-feira'},
                      {value: '3', label: 'Quarta-feira'},
                      {value: '4', label: 'Quinta-feira'},
                      {value: '5', label: 'Sexta-feira'},
                      {value: '6', label: 'Sábado'},
                    ]}
                  />
                  <Input name="from" label="Das" type="time"/>
                  <Input name="to" label="Até" type="time"/>
                </div>);
          }) }
        </fieldset>
        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm;
