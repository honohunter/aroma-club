import React from 'react';
import clsx from 'clsx';

import { Link } from '@reach/router';

import styles from './style.module.css';
import IconButton from '../../components/iconButton';

import logoAlt from '../../assets/images/logo-alt.svg';
import logo from '../../assets/images/logo.svg';
import userIcon from '../../assets/icons/user.svg';
import cartIcon from '../../assets/icons/cart.svg';
import cartAltIcon from '../../assets/icons/cart-alt.svg';
import userAltIcon from '../../assets/icons/user-alt.svg';

export default function NavBar({ alt }) {
  return (
    <div className={clsx(styles.root, alt && styles.alt)}>
      <div className={styles.main}>
        <div className={styles.leftContainer}>
          <Link to="/" className={styles.navigationItem}>
            Shop
          </Link>
          <Link to="/" className={styles.navigationItem}>
            Ons verhaal
          </Link>
          <Link to="/" className={styles.navigationItem}>
            Magazine
          </Link>
        </div>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img alt="logo" src={alt ? logoAlt : logo} />
          </Link>
        </div>
        <div className={styles.rightContainer}>
          <select className={styles.langSelector}>
            <option className={styles.selectItem}>NL</option>
            <option className={styles.selectItem}>RU</option>
            <option className={styles.selectItem}>EN</option>
          </select>

          <IconButton icon={alt ? userAltIcon : userIcon} />
          <IconButton icon={alt ? cartAltIcon : cartIcon} />
        </div>
      </div>
    </div>
  );
}
