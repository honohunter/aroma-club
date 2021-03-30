/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from '@reach/router';

import styles from './style.module.css';

import phoneIcon from '../../assets/icons/phone.svg';
import mailIcon from '../../assets/icons/mail.svg';
import chatIcon from '../../assets/icons/chat.svg';

const links = {
  about: [
    {
      text: 'Ons verhaal',
      link: '/',
    },
    {
      text: 'Koffiebonen',
      link: '/',
    },
    {
      text: 'Magazine',
      link: '/',
    },
    {
      text: 'Koffie zakelijk',
      link: '/',
    },
    {
      text: 'JURA keuzehulp',
      link: '/',
    },
    {
      text: 'Vacatures',
      link: '/',
    },
  ],
  help: [
    {
      text: 'Help centre',
      link: '/',
    },
    {
      text: 'Shipping',
      link: '/',
    },
    {
      text: 'Return Policy',
      link: '/',
    },
    {
      text: 'Wholesale',
      link: '/',
    },
  ],
  learn: [
    {
      text: 'Magazine',
      link: '/',
    },
    {
      text: 'Our Ingredients',
      link: '/',
    },
    {
      text: 'Glossary',
      link: '/',
    },
    {
      text: 'Wholesale',
      link: '/',
    },
  ],
  Learn: [
    {
      text: 'Magazine',
      link: '/',
    },
    {
      text: 'Our Ingredients',
      link: '/',
    },
    {
      text: 'Glossary',
      link: '/',
    },
    {
      text: 'Wholesale',
      link: '/',
    },
  ],
};

export default function Footer() {
  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <div className={styles.topContainer}>
          <div className={styles.linksContainer}>
            {Object.keys(links).map((key, index) => (
              <div className="mr-14">
                <ul key={index}>
                  <li className={styles.linkCaption}>{key}</li>
                  {links[key].map((ele, idx) => (
                    <li key={idx} className={styles.links}>
                      <Link to={ele.link}>{ele.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={styles.contactContainer}>
            <div className="pb-3">
              <h6 className={styles.title}>Neem contact op met Aroma Club</h6>
              <p className={styles.subtitle}>
                Whenever you&#39;re a Aroma Club fan or visitng for the very first time, we&#39;re here to assist!
              </p>
            </div>
            <div className={styles.contactInfoContainer}>
              <div className={styles.contactInfo}>
                <img className={styles.contactIcon} alt="icon" src={phoneIcon} />
                <p className={styles.caption}>+31 (0) 85 130 9613</p>
              </div>
              <div className={styles.contactInfo}>
                <img className={styles.contactIcon} alt="icon" src={mailIcon} />
                <p className={styles.caption}>hello@aromaclub.com</p>
              </div>
              <div className={styles.contactInfo}>
                <img className={styles.contactIcon} alt="icon" src={chatIcon} />
                <p className={styles.caption}>Chat with us</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className="flex-grow">
            <p className={styles.caption}>© 2021 Aroma Club. Alle rechten voorbehouden.</p>
          </div>
          <div className="flex">
            <Link to="/">
              <p className={styles.privacy}>Terms & conditions</p>
            </Link>
            <Link to="/">
              <p className={styles.privacy}>Cookies</p>
            </Link>
            <Link to="/">
              <p className={styles.privacy}>Privacy</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
