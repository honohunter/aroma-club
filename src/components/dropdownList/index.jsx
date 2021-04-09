import React from 'react';

import styles from './style.module.css';

import downArrowIcon from '../../assets/icons/downArrow.png';

export default function Dropdown({ text, children }) {
  const [isExpended, setExpend] = React.useState(true);

  const handleClick = () => {
    setExpend(!isExpended);
  };

  return (
    <div>
      <button type="button" className={styles.button} onClick={handleClick}>
        <p className={styles.title}>{text}</p>
        <img className={styles.icon} alt="icon" src={downArrowIcon} />
      </button>
      {isExpended && children}
    </div>
  );
}
