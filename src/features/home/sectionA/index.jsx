import React from 'react';

import styles from './style.module.css';

import Navbar from '../../navbar';

export default function SectionA() {
  return (
    <section className={styles.root}>
      <Navbar alt/>
      <div className={styles.contain}>
        <div className="p-9">
          <i className={styles.caption}>Our story</i>
          <h1>
            Great coffee beans, <br />
            made simple…
          </h1>
        </div>
      </div>
    </section>
  );
}
