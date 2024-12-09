import React from 'react';
import style from './work.module.scss';
import ImageComponent from '@/components/Image/Image';
import Link from 'next/link';
import ArrowRight from '@/public/icons/arrow-right.svg';
import Image from 'next/image';
import Work1Png from '@/public/work/1.png';
import Work2Png from '@/public/work/2.png';
import Work3Png from '@/public/work/3.png';
import Work4Png from '@/public/work/4.png';
import Work5Png from '@/public/work/5.png';
import Work6Png from '@/public/work/6.png';

const Work = () => {
  return (
    <section className={style.work} id="work">
      <h2>Naše práce</h2>

      <div className={style.images}>
        <div className={style.img}>
          <ImageComponent src={Work1Png} alt="Ukázka práce" />
        </div>

        <div className={style.img}>
          <ImageComponent src={Work2Png} alt="Ukázka práce" />
        </div>

        <div className={style.img}>
          <ImageComponent src={Work3Png} alt="Ukázka práce" />
        </div>

        <div className={style.img}>
          <ImageComponent src={Work4Png} alt="Ukázka práce" />
        </div>

        <div className={style.img}>
          <ImageComponent src={Work5Png} alt="Ukázka práce" />
        </div>

        <div className={style.img}>
          <ImageComponent src={Work6Png} alt="Ukázka práce" />
        </div>
      </div>

      <a
        href={'https://www.instagram.com/pvpdesigncars/'}
        className={style.link}
        target="_blank"
      >
        Zobrazit vše <Image src={ArrowRight} alt="arrow" />
      </a>
    </section>
  );
};

export default Work;
