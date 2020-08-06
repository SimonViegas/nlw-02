import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import warningIcon from '../../assets/images/icons/warning.svg';

import './style.css'


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
          <TextArea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
          <Input name="subject" label="Matéria"/>
          <Input name="cost" label="Custo da tua hora por aula"/>
          <Input name="whatsapp" label="Whatsapp"/>
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
