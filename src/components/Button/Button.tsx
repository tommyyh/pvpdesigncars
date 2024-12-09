import React from 'react';
import style from './button.module.scss';

type ButtonProps = {
  title: string;
  href: string;
  customClass?: string;
};

const Button = ({ title, href, customClass }: ButtonProps) => {
  return (
    <a className={`${style.button} ${customClass}`} href={href} target="_blank">
      {title}
    </a>
  );
};

export default Button;
