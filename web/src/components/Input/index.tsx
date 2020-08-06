import React, { InputHTMLAttributes }from 'react';

import './style.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

// function Input() {
// const Input:React.FC<InputProps> = (props) => {
const Input:React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest}/>
    </div>
  );
}

export default Input;
