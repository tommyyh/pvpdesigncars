import React from 'react';
import style from './landing.module.scss';
import Button from '@/components/Button/Button';
import LandingPng from '@/public/landing/landing.png';
import ImageComponent from '@/components/Image/Image';

type LandingType = {
  setContactOpen: any;
};

const Landing = ({ setContactOpen }: LandingType) => {
  return (
    <main className={style.landing}>
      <h4>Nechte si u nás udělat polep, reklama jste vy!</h4>

      <div className={style.content}>
        <h1>
          <span>Přeměňte své vozidlo. </span>{' '}
          <span>celolepy, polepy, tuning,</span>
          <span>samolepky, vše na míru</span>
        </h1>

        <Button
          title="Začít dnes"
          customClass={style.button}
          onClick={() => setContactOpen(true)}
        />
      </div>

      <div className={style.img}>
        <ImageComponent src={LandingPng} alt="Auta" />
      </div>
    </main>
  );
};

export default Landing;
