import React from 'react';
import style from './cta.module.scss';
import Button from '@/components/Button/Button';

type CtaType = {
  setContactOpen: any;
};

const Cta = ({ setContactOpen }: CtaType) => {
  return (
    <section className={style.cta}>
      <div className={style.inner}>
        <div>
          <h4>Začněte dnes</h4>

          <h2>Přeměňte své vozidlo s našimi kvalitními službami ještě dnes!</h2>
        </div>

        <div>
          <p>
            Naše úpravy nejsou jen vizuální záležitostí. Používáme pouze ty
            nejkvalitnější materiály a dbáme na každý detail. Důvěřuj
            profesionálům a investuj do budoucnosti svého vozidla.
          </p>

          <Button title="Začněte dnes" onClick={() => setContactOpen(true)} />
        </div>
      </div>
    </section>
  );
};

export default Cta;
