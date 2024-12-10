import React from 'react';
import style from './whatWeDo.module.scss';
import Services from './Services/Services';

const services = [
  [
    {
      title: 'Celolepy',
      text: 'Kompletně polepený vůz. Široká škála barev a druhů fólií. Ceny se odvíjejí od typu fólie a velikosti vozu.',
      price: 'od 50 000 Kč',
    },
    {
      title: 'Částečné polepy',
      text: 'Polep vybraných částí vozu. Ideální pro menší úpravy a zvýraznění detailů. Ceny jsou individuální.',
      price: 'od 10 000 Kč',
    },
    {
      title: 'Reklamní polepy',
      text: 'Profesionální polepy vozů reklamními motivy. Vysoká odolnost a životnost. Ceny zahrnují návrh grafiky a aplikaci.',
      price: '- Dle dohody',
    },
  ],
  // ---
  [
    {
      title: 'Samolepky',
      text: 'Výroba a aplikace samolepek na různé povrchy. Ceny závisí na velikosti, materiálu a množství.',
      price: '- Dle dohody',
    },
    {
      title: 'Potisk oblečení',
      text: 'Potisk triček a dalších textilií vlastním designem. Ceny se odvíjejí od typu textilie a složitosti motivu.',
      price: '- Dle dohody',
    },
    {
      title: 'Zatmavování světel',
      text: 'Zatmavení předních a zadních světel fólií různých odstínů.',
      price: '- Dle dohody',
    },
  ],
  // ---
  [
    {
      title: 'Dechrom',
      text: 'Odstranění chromových prvků a jejich nahrazení černými nebo barevnými fóliemi.',
      price: '- Dle dohody',
    },
    {
      title: 'Zatmavování oken',
      text: 'Zatmavení bočních a zadního okna fólií různých odstínů. Zvýšení soukromí a tepelného komfortu.',
      price: '- Dle dohody',
    },
    {
      title: '2D polepy',
      text: 'Polep plochými motivy. Ideální pro menší plochy a jednoduché designy. Ceny jsou velmi příznivé.',
      price: '- Dle dohody',
    },
  ],
];

const WhatWeDo = () => {
  return (
    <section className={style.wwd} id="services">
      <div className={style.top}>
        <h4>Co děláme?</h4>

        <div className={style.content}>
          <h2>Nabízíme mnoho kvalitních služeb pro všechny druhy vozidel</h2>

          <p>
            Chcete výrazně stylizovat vaše vozidlo? Využijte naše kvalitní
            služby pro všechna vozidla od návrhu až po realizaci celopolepů,
            reklamních polepů výroby samolepek a více.
          </p>
        </div>
      </div>

      {/* Services */}
      {services.map((row, index) => (
        <Services row={row} key={index} />
      ))}
    </section>
  );
};

export default WhatWeDo;
