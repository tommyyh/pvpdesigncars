import React from 'react';
import style from './nav.module.scss';
import Header from './Header/Header';
import Image from 'next/image';
import FacebookSvg from '@/public/icons/facebook.svg';
import InstagramSvg from '@/public/icons/instagram.svg';
import Link from 'next/link';
import LogoPng from '@/public/icons/logo.png';

type NavType = {
  setContactOpen: any;
};

const Nav = ({ setContactOpen }: NavType) => {
  return (
    <nav id="home">
      <Header />

      <div className={style.nav}>
        <div className={style.left}>
          <span>
            <a href="https://www.facebook.com/PVPCars/" target="_blank">
              <Image src={FacebookSvg} alt="Facebook" />
            </a>
          </span>

          <span className={style.instagram}>
            <a href="https://www.instagram.com/pvpdesigncars/" target="_blank">
              <Image src={InstagramSvg} alt="Instagram" />
            </a>
          </span>
        </div>

        {/* Links + Logo */}
        <div className={style.right}>
          <ul>
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'#services'}>Naše Služby</Link>
            </li>
            <li>
              <Link href={'#work'}>Naše Práce</Link>
            </li>
            <li
              style={{ cursor: 'pointer' }}
              onClick={() => setContactOpen(true)}
            >
              Kontakt
            </li>
          </ul>

          <a
            href={'`https://www.instagram.com/pvpdesigncars/`'}
            target="_blank"
          >
            <Image src={LogoPng} alt="logo" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
