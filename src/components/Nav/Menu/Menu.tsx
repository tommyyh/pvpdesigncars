import React from 'react';
import css from './style.module.scss';
import Link from 'next/link';
import LocationSvg from '@/public/icons/location.svg';
import MailSvg from '@/public/icons/mail.svg';
import PhoneSvg from '@/public/icons/phone.svg';
import Image from 'next/image';

type MenuType = {
  menuOpen: boolean;
  setMenuOpen: any;
};

const Menu = ({ menuOpen, setMenuOpen }: MenuType) => {
  return (
    <div
      className={
        menuOpen ? `${css['menu']} ${css['menu-active']}` : css['menu']
      }
    >
      <ul className={css['menu-ul']}>
        <li onClick={() => setMenuOpen(false)}>
          <Link href={'/'}>Home</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link href={'#services'}>Naše Služby</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link href={'#work'}>Naše Práce</Link>
        </li>
      </ul>

      <ul className={css.contact}>
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
          <a href="tel:+420730823339">
            <Image src={PhoneSvg} alt="Phone" /> +420 730 823 339
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
