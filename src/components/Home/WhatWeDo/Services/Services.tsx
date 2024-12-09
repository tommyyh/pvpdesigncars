import React from 'react';
import style from './services.module.scss';

const Services = () => {
  return (
    <div className={style.services}>
      <Service
        title="Celolepy & částečné polepy"
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lectus justo vulputate eget mollis sed."
        price="5 300, - Kč"
      />
      <Service
        title="Reklamní polepy"
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lectus justo vulputate eget mollis sed."
        price="8 300, - Kč"
      />
      <Service
        title="Samolepky"
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lectus justo vulputate eget mollis sed."
        price="2 300, - Kč"
      />
    </div>
  );
};

// Service
type ServiceType = {
  title: string;
  text: string;
  price: string;
};

const Service = ({ title, text, price }: ServiceType) => {
  return (
    <div className={style.service}>
      <h3>{title}</h3>
      <p>{text}</p>

      <h4>{price}</h4>
    </div>
  );
};

export default Services;
