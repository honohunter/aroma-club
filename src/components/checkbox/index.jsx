import React from 'react';

import styles from './style.module.css';

export default function CheckBox({ label }) {
  const [checked, setCheck] = React.useState(false);

  const handleClick = () => {
    setCheck(!checked);
  };

  return (
    <div className={styles.root}>
      <button type="button" className={styles.button} onClick={handleClick}>
        <span className={styles.icon}>
          {checked ? (
            <svg width="20" height="20" version="1.1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <clipPath id="w9wya">
                  <path d="M0 0h20v20H0z" fill="#fff" />
                </clipPath>
              </defs>
              <path d="M0 0h20v20H0z" fill="#f9f9f9" />
              <path
                d="m0 0h20v20h-20z"
                clipPath='url("#w9wya")'
                fill="none"
                stroke="#2c3136"
                strokeMiterlimit="20"
                strokeWidth="2"
              />
              <path
                d="m15.414 3.7921-7.3743 7.5586-3.4542-3.2745-2.427 2.4283 5.8812 5.7034 9.8019-9.9882z"
                fill="#2c3136"
                strokeWidth=".65346"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <defs>
                <clipPath id="w9wya">
                  <path fill="#fff" d="M0 0h20v20H0z" />
                </clipPath>
              </defs>
              <g>
                <g>
                  <path fill="#f9f9f9" d="M0 0h20v20H0z" />
                  <path
                    fill="none"
                    stroke="#2c3136"
                    strokeMiterlimit="20"
                    strokeWidth="2"
                    d="M0 0v0h20v20H0v0z"
                    clipPath='url("#w9wya")'
                  />
                </g>
              </g>
            </svg>
          )}
        </span>
      </button>
      <p>{label}</p>
    </div>
  );
}
