import React from 'react';
import style from './landing.module.scss';
import Button from '@/components/Button/Button';
import LandingJpg from '@/public/landing/landing.jpg';
import ImageComponent from '@/components/Image/Image';

const Landing = () => {
  return (
    <main className={style.landing}>
      <h4>Vítejte u nás</h4>

      <div className={style.content}>
        <h1>
          <span>Lorem ipsum dolor</span> <span>sit amet, consectetuer</span>{' '}
          <span>adipiscing elit dolor prem.</span>
        </h1>

        <Button
          title="Začít dnes"
          href="https://www.instagram.com/pvpdesigncars/"
          customClass={style.button}
        />
      </div>

      <div className={style.img}>
        <ImageComponent src={LandingJpg} alt="Auta" />
      </div>
    </main>
  );
};

export default Landing;
