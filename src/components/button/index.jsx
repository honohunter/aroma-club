import React from 'react';

import styles from './style.module.css';

import RightArrow from '../../assets/icons/rightArrow.svg';
import RightArrowAlt from '../../assets/icons/rightArrowAlt.png';

export default function Button({ children, size, alt }) {
  return (
    <button type="button" className={alt ? styles.rootAlt : styles.root}>
      <span className={size === 'large' ? styles.textLarge : styles.textSmall}>{children}</span>
      <img className={styles.icon} alt="icon" src={alt ? RightArrowAlt : RightArrow} />
    </button>
  );
}
