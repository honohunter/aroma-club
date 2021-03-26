import React from 'react';

import styles from './style.module.css';

import SnackBar from '../../snackBar';
import Navbar from '../../navbar';

export default function SectionA() {
  return (
    <section className={styles.root}>
      <SnackBar />

      <Navbar alt />

      <div className={styles.contain}>
        <div>
          <p className={styles.caption}>Our story</p>
          <h1>
            Great coffee beans, <br />
            made simple…
          </h1>
        </div>
      </div>
    </section>
  );
}
