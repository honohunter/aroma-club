/* eslint-disable no-unused-vars */
import React from 'react';

import styles from './style.module.css';

export default function ProductCard({ image, name, text, children }) {
  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <img src={image} alt="img" className={styles.imageWrapper} />

        <div className={styles.content}>{children}</div>
      </div>
      <div className="flex">
        <p className={styles.name}>{name}</p>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}
