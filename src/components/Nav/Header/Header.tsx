import React from 'react';
import style from './header.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
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
    </header>
  );
};

export default Header;
