import React from 'react';
import clsx from 'clsx';

import { Link } from '@reach/router';

import style from './style.module.css';
import IconButton from '../../components/iconButton';

import logoAlt from '../../assets/images/logo-alt.svg';
import logo from '../../assets/images/logo.svg';
import userIcon from '../../assets/icons/user.svg';
import cartIcon from '../../assets/icons/cart.svg';
import cartAltIcon from '../../assets/icons/cart-alt.svg';
import userAltIcon from '../../assets/icons/user-alt.svg';

export default function NavBar({ alt }) {
  return (
    <div className={clsx(style.root, alt && style.alt)}>
      <div className={style.leftContainer}>
        <Link to="/" className={style.navigationItem}>
          Shop
        </Link>
        <Link to="/" className={style.navigationItem}>
          Ons verhaal
        </Link>
        <Link to="/" className={style.navigationItem}>
          Magazine
        </Link>
      </div>
      <div className={style.logoContainer}>
        <Link to="/">
          <img alt="logo" src={alt ? logoAlt : logo} />
        </Link>
      </div>
      <div className={style.rightContainer}>
        <select className={style.langSelector}>
          <option className={style.selectItem}>NL</option>
          <option className={style.selectItem}>RU</option>
          <option className={style.selectItem}>EN</option>
        </select>

        <IconButton icon={alt ? userAltIcon : userIcon} />
        <IconButton icon={alt ? cartAltIcon : cartIcon} />
      </div>
    </div>
  );
}
