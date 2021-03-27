import React from 'react';
import { Link } from '@reach/router';

import styles from './style.module.css';

import IconButton from '../../components/iconButton';

import closeIcon from '../../assets/icons/close.svg';

export default function SnackBar() {
  const [isOpen, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    isOpen && (
      <div className={styles.root}>
        <div className={styles.main}>
          <div className={styles.leftContainer}>
            <Link to="/" className={styles.navigationItem}>
              Particulier
            </Link>
            <Link to="/" className={styles.navigationItem}>
              Zakelijk
            </Link>
          </div>
          <div className={styles.middleContainer}>Onze winkels zijn open • Gratis verzending voor alle bestellingen</div>
          <div className={styles.rightContainer}>
            <IconButton icon={closeIcon} onClick={handleClose} />
          </div>
        </div>
      </div>
    )
  );
}
