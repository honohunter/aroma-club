import React from 'react';

import styles from './style.module.css';

import Navbar from '../../navbar';

import bg from '../../../assets/images/shop-bg.png';

export default function SectionA() {
  return (
    <section className={styles.root}>
      <Navbar />
      <div className="container">
        <div className={styles.imageWrapper}>
          <img src={bg} alt="bg" />
        </div>
      </div>
    </section>
  );
}
