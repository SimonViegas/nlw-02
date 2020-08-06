import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

import './styles.css';

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
     <div className="top-bar-container">
        <Link to="/" >
          <img src={backIcon} alt="Voltar"/>
        </Link>
        <img src={logoImg} alt="Proffy"/>
      </div>
      
      <div className="header-content">
        <strong>{props.title}</strong>
        { props.description && <p>{props.description}</p> }

        {props.children}
      </div>

      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <div className="input-block">
            <label htmlFor="name">Nome completo</label>
            <input type="text" id="name"/>
          </div>
          <div className="input-block">
            <label htmlFor="avatar">Avatar</label>
            <input type="text" id="avatar"/>
          </div>
          <div className="input-block">
            <label htmlFor="whatsapp">Whatsapp</label>
            <input type="text" id="whatsapp"/>
          </div>
        </fieldset>

       <fieldset>
          <legend>Seus dados</legend>
          <div className="input-block">
            <label htmlFor="name">Nome completo</label>
            <input type="text" id="name"/>
          </div>
          <div className="input-block">
            <label htmlFor="avatar">Avatar</label>
            <input type="text" id="avatar"/>
          </div>
          <div className="input-block">
            <label htmlFor="whatsapp">Whatsapp</label>
            <input type="text" id="whatsapp"/>
          </div>
        </fieldset>

      </main>
      </header>
  );
}

export default PageHeader;