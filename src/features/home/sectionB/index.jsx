import React from 'react';

import styles from './style.module.css';

import Tabs, { Tab } from '../../../components/tabs';

export default function SectionB() {
  return (
    <section className={styles.root}>
      <Tabs>
        <Tab active>About us</Tab>
        <Tab>Our values</Tab>
        <Tab>responsibility</Tab>
        <Tab>questions</Tab>
      </Tabs>
    </section>
  );
}
