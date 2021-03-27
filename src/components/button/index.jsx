import React from 'react';

import styles from './style.module.css';

import RightArrow from '../../assets/icons/rightArrow.svg';

export default function Button({ children, size }) {
  return (
    <button type="button" className={styles.root}>
      <span className={size === 'large' ? styles.textLarge : styles.textSmall}>{children}</span>
      <img className={styles.icon} alt="icon" src={RightArrow} />
    </button>
  );
}
