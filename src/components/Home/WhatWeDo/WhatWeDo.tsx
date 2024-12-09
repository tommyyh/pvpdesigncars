import React from 'react';
import style from './whatWeDo.module.scss';
import Services from './Services/Services';

const WhatWeDo = () => {
  return (
    <section className={style.wwd} id="services">
      <div className={style.top}>
        <h4>Co děláme?</h4>

        <div className={style.content}>
          <h2>Nabízíme několik kvalitních služeb pro všechny vaše vozidla</h2>

          <p>
            Chcete výrazně stylizovat vaše vozidlo? Využijte naše kvalitní
            služby pro všechna vozidla od návrhu až po realizaci celopolepů,
            reklamních polepů a výroby samolepek na míru.
          </p>
        </div>
      </div>

      {/* Services */}
      <Services />
      {/* <Services />
      <Services /> */}
    </section>
  );
};

export default WhatWeDo;
