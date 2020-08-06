import React from 'react';
import PageHeader from '../../components/PageHeader';

import './style.css'
import Input from '../../components/Input';

function TeacherForm() {
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
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
          <Input name="subject" label="Mateéria"/>
          <Input name="cost" label="Custo da tua hora por aula"/>
          <Input name="whatsapp" label="Whatsapp"/>
        </fieldset>
      </main>
    </div>
  )
}

export default TeacherForm;
