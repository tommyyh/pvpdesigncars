import React from 'react';
import style from './services.module.scss';

interface Service {
  title: string;
  text: string;
  price: string;
}

type ServicesType = {
  row: Service[];
};

const Services = ({ row }: ServicesType) => {
  return (
    <div className={style.services}>
      {row.map((service, index) => (
        <Service
          key={index}
          title={service.title}
          text={service.text}
          price={service.price}
        />
      ))}
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
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>

      <h4>{price}</h4>
    </div>
  );
};

export default Services;
