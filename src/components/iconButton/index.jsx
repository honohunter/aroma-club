import React from 'react';

import styles from './style.module.css';

export default function Button({ icon, ...props }) {
  return (
    <button type="button" className={styles.root} {...props}>
      <img alt="icon" src={icon} />
    </button>
  );
}
