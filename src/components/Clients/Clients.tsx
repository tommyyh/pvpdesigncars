import React from 'react';
import style from './clients.module.scss';
import Logo1 from '@/public/logos/1.png';
import Logo2 from '@/public/logos/2.png';
import Logo3 from '@/public/logos/3.png';
import Logo4 from '@/public/logos/4.png';
import Logo6 from '@/public/logos/6.png';
import Logo7 from '@/public/logos/7.png';
import Logo8 from '@/public/logos/8.png';
import Logo9 from '@/public/logos/9.png';
import Logo10 from '@/public/logos/10.png';
import Logo11 from '@/public/logos/11.png';
import Logo12 from '@/public/logos/12.png';
import Logo13 from '@/public/logos/13.png';
import Logo14 from '@/public/logos/14.png';
import Logo15 from '@/public/logos/15.png';
import Logo16 from '@/public/logos/16.png';
import Logo17 from '@/public/logos/17.png';
import Logo18 from '@/public/logos/18.png';
import Logo19 from '@/public/logos/19.png';
import Logo20 from '@/public/logos/20.png';
import Logo21 from '@/public/logos/21.png';
import Image from 'next/image';

const Clients = () => {
  return (
    <section className={style.clients}>
      <h2>Naši klienti</h2>

      <div className={style.carousel}>
        <LogoImage src={Logo1} />
        <LogoImage src={Logo21} />
        <LogoImage src={Logo2} />
        <LogoImage src={Logo3} />
        <LogoImage src={Logo4} />
        <LogoImage src={Logo6} />
        <LogoImage src={Logo7} />
        <LogoImage src={Logo8} />
        <LogoImage src={Logo9} />
        <LogoImage src={Logo10} />
        <LogoImage src={Logo11} />
        <LogoImage src={Logo12} />
        <LogoImage src={Logo13} />
        <LogoImage src={Logo14} />
        <LogoImage src={Logo15} />
        <LogoImage src={Logo16} />
        <LogoImage src={Logo17} />
        <LogoImage src={Logo18} />
        <LogoImage src={Logo19} />
        <LogoImage src={Logo20} />
      </div>
    </section>
  );
};

// Logo image
type LogoImageType = {
  src: any;
};

const LogoImage = ({ src }: LogoImageType) => {
  return <Image src={src} alt={'Klient'} />;
};

export default Clients;
