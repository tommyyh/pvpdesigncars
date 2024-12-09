import React from 'react';
import style from './cta.module.scss';
import Button from '@/components/Button/Button';

const Cta = () => {
  return (
    <section className={style.cta}>
      <div className={style.inner}>
        <div>
          <h4>Začněte dnes</h4>

          <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing</h2>
        </div>

        <div>
          <p>
            Our real-time energy management system maximizes your investment.
            Save money, gain independence, and optimize your energy use with
            intelligent automation.
          </p>

          <Button
            title="Začněte dnes"
            href="https://www.instagram.com/pvpdesigncars/"
          />
        </div>
      </div>
    </section>
  );
};

export default Cta;
