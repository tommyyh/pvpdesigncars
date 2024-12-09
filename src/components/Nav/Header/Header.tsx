import React from 'react';
import style from './header.module.scss';
import LocationSvg from '@/public/icons/location.svg';
import MailSvg from '@/public/icons/mail.svg';
import PhoneSvg from '@/public/icons/phone.svg';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={style.header}>
      <ul>
        <li>
          <a href="https://maps.app.goo.gl/KXUDbEBf3ZxVfZ459" target="_blank">
            <Image src={LocationSvg} alt="Mail" /> Sokolská 27, Zbůch
          </a>
        </li>

        <li>
          <a href="mailto:pvpdesigncars@gmail.com">
            <Image src={MailSvg} alt="Mail" /> pvpdesigncars@gmail.com
          </a>
        </li>

        <li>
          <a href="tel:+420795835093">
            <Image src={PhoneSvg} alt="Phone" /> +420 795 835 093
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
