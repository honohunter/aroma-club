import React from 'react';

import styles from './style.module.css';

import Button from '../../../components/button';

export default function SectionC() {
  return (
    <section className={styles.root}>
      <h1 className="paragraph">Got any questions that remain unanswered?</h1>
      <p className="text-18px"> Just give us a call or shoot us an email - Details below.</p>
      <p className="text-18px">+31681430614 | help@aromaclub.com</p>
      <div className="pt-8">
        <Button>Contact us</Button>
      </div>
    </section>
  );
}
