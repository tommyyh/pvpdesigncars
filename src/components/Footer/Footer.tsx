import React from 'react';
import style from './footer.module.scss';
import Image from 'next/image';
import FacebookSvg from '@/public/icons/facebook.svg';
import InstagramSvg from '@/public/icons/instagram.svg';
import Link from 'next/link';
import LogoPng from '@/public/icons/logo.png';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <a href={'https://www.instagram.com/pvpdesigncars/'} target="_blank">
        <div className={style.logo}>
          <Image src={LogoPng} alt="logo" fill />
        </div>
      </a>

      <div className={style.main}>
        <ul>
          <li>
            <a href={'#home'}>Home</a>
          </li>
          <li>
            <a href={'#services'}>Naše Služby</a>
          </li>
          <li>
            <a href={'#work'}>Naše Práce</a>
          </li>
          <li>
            <a href="https://www.instagram.com/pvpdesigncars/" target="_blank">
              Kontakt
            </a>
          </li>
        </ul>

        <div>
          <ul>
            <li>
              <a href="mailto:pvpdesigncars@gmail.com">
                Email: pvpdesigncars@gmail.com
              </a>
            </li>

            <li>
              <a href="tel:+420795835093">Tel: +420 795 835 093</a>
            </li>
          </ul>

          <div className={style.socials}>
            <span>
              <a href="https://www.facebook.com/PVPCars/" target="_blank">
                <Image src={FacebookSvg} alt="Facebook" />
              </a>
            </span>

            <span className={style.instagram}>
              <a
                href="https://www.instagram.com/pvpdesigncars/"
                target="_blank"
              >
                <Image src={InstagramSvg} alt="Instagram" />
              </a>
            </span>
          </div>
        </div>

        <h6>© Copyright 2024 PVPDesignCars. Všechna práva vyhrazena</h6>
      </div>
    </footer>
  );
};

export default Footer;
