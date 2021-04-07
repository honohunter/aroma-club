import React from 'react';

import styles from './style.module.css';

import Tabs, { Tab } from '../../../components/tabs';
import IconButton from '../../../components/iconButton';
import ProductCard from '../../../components/productCard';

import gridIcon from '../../../assets/icons/grid.svg';
import listIcon from '../../../assets/icons/list.svg';

import image from '../../../assets/images/product.png';
import logo from '../../../assets/images/logo_2.png';

export default function SectionA() {
  return (
    <section className={styles.root}>
      <div className="container">
        <Tabs>
          <Tab>ALL JURA</Tab>
          <Tab active>KOFFIEMACHINES</Tab>
          <Tab>ONDERHOUDSPRODUCTEN</Tab>
          <Tab>ACCESSOIRES</Tab>
        </Tabs>
      </div>
      <div className={styles.main}>
        <div className={styles.drawer}>
          <div>
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className={styles.content}>
          <h1 className="mb-4">JURA koffiemachines</h1>
          <p className={styles.text}>
            Op zoek naar een gebruiksvriendelijke, duurzame en mooie koffiemachine? Dan zit je goed met een JURA
            koffiemachine. Op smaak lever je ook niet in, want deze JURA machines beschikken stuk voor stuk over de
            beste technologieën. Het is niet voor niets dat JURA marktleider is in hoogwaardige volautomatische
            koffiemachines. En de keuze is reuze. Van groot tot klein, van simpel tot supersmart en van weinig tot veel
            koffiespecialiteiten. Wij helpen je de juiste JURA koffiemachine te kiezen.
          </p>
          <div className={styles.navSort}>
            <div>Toon 1 - 29 van 29 producten</div>
            <div>
              <select className={styles.select}>
                <option>Sorteer op: Prijs: laag naar hoog</option>
              </select>
            </div>
            <div className="flex">
              <IconButton icon={gridIcon} />
              <IconButton icon={listIcon} />
            </div>
          </div>
          <div className={styles.productsContainer1}>
            <ProductCard name="JURA A1 Piano Black" price="€669.99" image={image} />
            <ProductCard name="JURA A1 Piano Black" price="€669.99" image={image} />
            <ProductCard name="JURA A1 Piano Black" price="€669.99" image={image} promotion="€669.99" />
            <ProductCard name="JURA A1 Piano Black" price="€669.99" image={image} />
            <ProductCard name="JURA A1 Piano Black" price="€669.99" image={image} />
            <ProductCard name="JURA A1 Piano Black" price="€669.99" image={image} promotion="€669.99" best/>
          </div>
        </div>
      </div>
    </section>
  );
}
