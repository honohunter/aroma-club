import React from 'react';
import clsx from 'clsx';

import styles from './style.module.css';

export function Tab({ children, active }) {
  return <div className={clsx(styles.tab, active && styles.active)}>{children}</div>;
}

export default function Tabs({ children }) {
  return (
    <div>
      <div className={styles.tabs}>{children}</div>
      <div className={styles.divider} />
    </div>
  );
}
