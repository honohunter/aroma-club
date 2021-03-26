import React from 'react';
import { Link } from '@reach/router';

import style from './style.module.css';

import IconButton from '../../components/iconButton';

import closeIcon from '../../assets/icons/close.svg';

export default function SnackBar() {
  const [isOpen, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    isOpen && (
      <div className={style.root}>
        <div className={style.main}>
          <div className={style.leftContainer}>
            <Link to="/" className={style.navigationItem}>
              Particulier
            </Link>
            <Link to="/" className={style.navigationItem}>
              Zakelijk
            </Link>
          </div>
          <div className={style.middleContainer}>Onze winkels zijn open • Gratis verzending voor alle bestellingen</div>
          <div className={style.rightContainer}>
            <IconButton icon={closeIcon} onClick={handleClose} />
          </div>
        </div>
      </div>
    )
  );
}
