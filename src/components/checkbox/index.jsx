import React from 'react';

import styles from './style.module.css';

import boxIcon from '../../assets/icons/box.svg';

export default function CheckBox({ label }) {
  const [isExpended, setExpend] = React.useState(false);

  const handleClick = () => {
    setExpend(!isExpended);
  };

  return (
    <div className={styles.root}>
      <button type="button" className={styles.button} onClick={handleClick}>
        <img className={styles.icon} alt="icon" src={boxIcon} />
      </button>
      <p>{label}</p>
    </div>
  );
}
