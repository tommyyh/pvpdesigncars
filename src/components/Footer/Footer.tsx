'use client';

import React, { SetStateAction } from 'react';
import style from './footer.module.scss';
import Image from 'next/image';
import FacebookSvg from '@/public/icons/facebook.svg';
import InstagramSvg from '@/public/icons/instagram.svg';
import LocationSvg from '@/public/icons/location.svg';
import MailSvg from '@/public/icons/mail.svg';
import PhoneSvg from '@/public/icons/phone.svg';
import LogoPng from '@/public/icons/logo.png';

type FooterType = {
  setContactOpen: React.Dispatch<SetStateAction<boolean>>;
};

const Footer = ({ setContactOpen }: FooterType) => {
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
          <li onClick={() => setContactOpen(true)}>Kontakt</li>
        </ul>

        <div>
          <ul>
            <li>
              <a
                href="https://maps.app.goo.gl/KXUDbEBf3ZxVfZ459"
                target="_blank"
              >
                <Image src={LocationSvg} alt="Mail" /> Sokolská 27, Zbůch
              </a>
            </li>

            <li>
              <a href="mailto:pvpdesigncars@gmail.com">
                <Image src={MailSvg} alt="Mail" /> pvpdesigncars@gmail.com
              </a>
            </li>

            <li>
              <a href="tel:+420730823339">
                <Image src={PhoneSvg} alt="Phone" /> +420 730 823 339
              </a>
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

        <div className={style.right}>
          <a href="https://betalab.vercel.app/en" target="_blank">
            Designoval: Betalab
          </a>

          <h6>© Copyright 2024 PVPDesignCars. Všechna práva vyhrazena</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
