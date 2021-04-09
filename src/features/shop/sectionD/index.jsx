import React from 'react';

import styles from './style.module.css';
import Button from '../../../components/button';

import image from '../../../assets/images/bg-image-2.png';

import markIcon from '../../../assets/icons/mark.svg';
import phoneIcon from '../../../assets/icons/phone.svg';
import carIcon from '../../../assets/icons/car.svg';

export default function SectionA() {
  return (
    <section className={styles.root}>
      <img alt="img" src={image} />
      <div className={styles.contactContainer}>
        <div className="flex flex-col">
          <i className="text-20px pb-2">Let’s drink a coffee</i>
          <h1 className="paragraph">Visit our showroom</h1>
          <div className="grid grid-cols-2 gap-6">
            <div className={styles.schedule}>
              <div className="flex">
                <span className="mr-auto">Monday</span>
                <span>12:00 - 18:00</span>
              </div>
              <div className="flex">
                <span className="mr-auto">Tuesday</span>
                <span>12:00 - 18:00</span>
              </div>{' '}
              <div className="flex">
                <span className="mr-auto">Wednesday</span>
                <span>12:00 - 18:00</span>
              </div>
              <div className="flex">
                <span className="mr-auto">Thursday</span>
                <span>12:00 - 18:00</span>
              </div>
              <div className="flex">
                <span className="mr-auto">Friday</span>
                <span>Closed</span>
              </div>{' '}
              <div className="flex">
                <span className="mr-auto">Saturday</span>
                <span>12:00 - 18:00</span>
              </div>{' '}
              <div className="flex">
                <span className="mr-auto">Sunday</span>
                <span>Closed</span>
              </div>
            </div>
            <div className={styles.location}>
              <div className="flex items-start pb-6">
                <img alt="icon" src={markIcon} className="mr-4" />
                <p>Pedro de Medinalaan 53 1086 XP Amsterdam Nederland</p>
              </div>
              <div className="flex items-start pb-6">
                <img alt="icon" src={phoneIcon} className="mr-4" />
                <p>+31 (0) 85 004 3161</p>
              </div>
              <div className="flex items-start pb-3">
                <img alt="icon" src={carIcon} className="mr-4" />
                <p>Free private parking</p>
              </div>
            </div>
          </div>
          <div>
            <Button alt>Maak afspraak</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
