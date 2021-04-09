import React from 'react';

import styles from './style.module.css';

// eslint-disable-next-line no-unused-vars
export default function Accordion({ title, children }) {
  const [isExpended, setExpend] = React.useState(false);

  const handleClick = () => {
    setExpend(!isExpended);
  };

  return (
    <div className={styles.accordion}>
      <button type="button" className={styles.accordionSummary} onClick={handleClick}>
        <p className={styles.title}>{title}</p>
        <div className={styles.icon}>{isExpended ? '-' : '+'}</div>
      </button>
      {isExpended && <div className={styles.content}>{children}</div>}
    </div>
  );
}
