import React from 'react';

import styles from './style.module.css';

import image from '../../assets/images/club.png';
import facebookIcon from '../../assets/icons/facebook.svg';
import instagramIcon from '../../assets/icons/instagram.svg';

import IconButton from '../../components/iconButton';

export default function SnackBar() {
  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <div className="mx-6">
          <img alt="logo" src={image} className={styles.image} />
        </div>
        <div className="mx-6">
          <i className="text-14px">
            Enjoy 10% off your first online purchase
            <br /> and stay up to date on al things.
          </i>
        </div>
        <div className="flex">
          <input type="text" className={styles.input} placeholder="Enter email" />
          <button type="button" className={styles.button}>
            <span>Subscribe</span>
          </button>
        </div>
        <div className="flex mx-8">
          <IconButton icon={facebookIcon} />
          <IconButton icon={instagramIcon} />
        </div>
      </div>
    </div>
  );
}
