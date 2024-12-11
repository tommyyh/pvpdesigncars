import React from 'react';
import style from './contact.module.scss';
import MailSvg from '@/public/icons/mail.svg';
import PhoneSvg from '@/public/icons/phone.svg';
import LocationSvg from '@/public/icons/location.svg';
import Image from 'next/image';
import FacebookSvg from '@/public/icons/facebook.svg';
import InstagramSvg from '@/public/icons/instagram.svg';

type ContactType = {
  contactOpen: boolean;
  setContactOpen: any;
};

const Contact = ({ contactOpen, setContactOpen }: ContactType) => {
  return (
    <>
      <div
        className={contactOpen ? `${style.blur} ${style.blurOpen}` : style.blur}
        onClick={() => setContactOpen(false)}
      ></div>

      <div
        className={
          contactOpen ? `${style.contact} ${style.contactOpen}` : style.contact
        }
      >
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
            <a href="tel:+420730823339">
              <Image src={PhoneSvg} alt="Phone" /> +420 730 823 339
            </a>
          </li>
        </ul>

        <div className={style.bot}>
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

          <h6 onClick={() => setContactOpen(false)}>Zavřít</h6>
        </div>
      </div>
    </>
  );
};

export default Contact;
