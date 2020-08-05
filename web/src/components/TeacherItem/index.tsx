import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars0.githubusercontent.com/u/33127367?s=460&v=4" alt="Simon Viegas"/>
      <div>
        <strong>Simon Viegas</strong>
        <span>Developer</span>
      </div>
    </header>
    <p>
      dadasd aa dadsad ada dsada daadasdadas da
      <br /><br />
      s adadad ad
    </p>
    <footer>
      <p>
        Preço/hora
        <strong>R$80,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>
    </article>
  )
}

export default TeacherItem;
