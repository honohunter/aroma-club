import React from 'react';

import styles from './style.module.css';

export default function SpecialGrid({ image, children }) {
  return (
    <div className={styles.root}>
      <div className={styles.leftSection}>{children}</div>
      <img alt="img" src={image} className={styles.image} />
    </div>
  );
}
