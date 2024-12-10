import React from 'react';
import style from './button.module.scss';

type ButtonProps = {
  title: string;
  onClick?: any;
  customClass?: string;
};

const Button = ({ title, onClick, customClass }: ButtonProps) => {
  return (
    <button className={`${style.button} ${customClass}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
