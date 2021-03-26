import React from 'react';

import styles from './style.module.css';

import RightArrow from '../../assets/icons/rightArrow.svg';

export default function Button({ children }) {
  return (
    <button type="button" className={styles.root}>
      <span className={styles.textSmall}>{children}</span>
      <img className={styles.icon} alt="icon" src={RightArrow} />
    </button>
  );
}
