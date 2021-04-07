import React from 'react';

import styles from './style.module.css';

import tag from '../../assets/images/best.png'

export default function ProductCard({ image, name, price, promotion, best}) {
  return (
    <div className={styles.root}>
      {best && <img src={tag} alt="img" className={styles.bestTag}/>}
      <div className={styles.imageWrapper}>
        <img src={image} alt="img" />
      </div>
      <div className="flex">
        <p className={styles.name}>{name}</p>
        {promotion ? (
          <div>
            <p className={styles.oldPrice}>{price}</p>
            <p className={styles.newPrice}>{promotion}</p>
          </div>
        ) : (
          <p className={styles.price}>{price}</p>
        )}
      </div>
    </div>
  );
}
