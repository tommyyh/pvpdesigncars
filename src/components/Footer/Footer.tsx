import React from 'react';
import style from './footer.module.scss';
import Image from 'next/image';
import FacebookSvg from '@/public/icons/facebook.svg';
import InstagramSvg from '@/public/icons/instagram.svg';
import LocationSvg from '@/public/icons/location_w.svg';
import MailSvg from '@/public/icons/mail_w.svg';
import PhoneSvg from '@/public/icons/phone_w.svg';
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
          <li style={{ margin: '2rem 0 0 0' }}>
            <a href="https://betalab.vercel.app/en" target="_blank">
              Designoval: Betalab
            </a>
          </li>
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

        <h6>© Copyright 2024 PVPDesignCars. Všechna práva vyhrazena</h6>
      </div>
    </footer>
  );
};

export default Footer;
