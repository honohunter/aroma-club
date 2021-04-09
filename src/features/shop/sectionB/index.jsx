import React from 'react';

import styles from './style.module.css';

import Tabs, { Tab } from '../../../components/tabs';
import IconButton from '../../../components/iconButton';
import ProductCard from '../../../components/productCard';
import ProductSpecialCard from '../../../components/productSpecialCard';
import Button from '../../../components/button';
import DropdownList from '../../../components/dropdownList';
import Checkbox from '../../../components/checkbox';

import gridIcon from '../../../assets/icons/grid.svg';
import listIcon from '../../../assets/icons/list.svg';
import checkIcon from '../../../assets/icons/check.svg';

import image from '../../../assets/images/product.png';
import image2 from '../../../assets/images/product_2.png';
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
            <img src={logo} alt="logo" className="mb-6" />
            <div>
              <DropdownList text="Bediening">
                <Checkbox label="Knoppen" />
                <Checkbox label="Touch" />
              </DropdownList>
              <DropdownList text="Capiciteit">
                <Checkbox label="Slank" />
                <Checkbox label="Krachtig" />
              </DropdownList>
              <DropdownList text="Koffiespecialiteiten">
                <Checkbox label="Met melkfunctie" />
                <Checkbox label="Zonder melkfunctie" />
              </DropdownList>
              <DropdownList text="serie">
                <Checkbox label="A-Serie" />
                <Checkbox label="D-Serie" />
                <Checkbox label="E-Serie" />
                <Checkbox label="ENA-Serie" />
                <Checkbox label="GIGA-Serie" />
                <Checkbox label="J-Serie" />
                <Checkbox label="S-Serie" />
                <Checkbox label="Z-Serie" />
              </DropdownList>
            </div>
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
            <ProductCard name="JURA A1 Piano Black" price="€669.99" image={image} promotion="€669.99" best />
          </div>
          <div className={styles.infoContainer}>
            <div className="flex">
              <img alt="icon" src={checkIcon} className="mr-5" />
              <p className="text-13px font-GS items-center">Voor 23:00 besteld, morgen in huis</p>
            </div>
            <div className="flex">
              <img alt="icon" src={checkIcon} className="mr-5" />
              <p className="text-13px font-GS items-center">Deskundig advies in onze showroom </p>
            </div>
            <div className="flex">
              <img alt="icon" src={checkIcon} className="mr-5" />
              <p className="text-13px font-GS items-center">Gratis bezorgd</p>
            </div>
          </div>
          <div className={styles.productsContainer2}>
            <div className="row-span-2 col-span-2">
              <ProductSpecialCard
                image={image2}
                name="Not sure which machine suits you?"
                text="Absolutely free of charge "
              >
                <i className="text-20px">Machine selection</i>
                <h1 className="paragraph">Find The Right JURA Machine For You</h1>
                <p className="text-13px font-GS">
                  Bang & Olufsen connected speakers give you an immersive listening experience throughout the home. Our
                  diverse selection means there&#39;s a perfect speaker to match any space and taste - from bold living
                  rooms to minimal kitchens. Find yours now.
                </p>
                <div className="pt-14">
                  <Button>Start now</Button>
                </div>
              </ProductSpecialCard>
            </div>
            <ProductCard name="JURA A1 Piano Black" price="€669.99" image={image} promotion="€669.99" />
            <ProductCard name="JURA A1 Piano Black" price="€669.99" image={image} promotion="€669.99" />
            <ProductCard name="JURA A1 Piano Black" price="€669.99" image={image} />
            <ProductCard name="JURA A1 Piano Black" price="€669.99" image={image} />
            <ProductCard name="JURA A1 Piano Black" price="€669.99" image={image} promotion="€669.99" />
          </div>
          <div className={styles.loadMoreContainer}>
            <div className={styles.divider} />
            <button type="button" className={styles.button}>
              <p className="text-15px font-GP">Load more</p>
            </button>
            <div className={styles.divider} />
          </div>
        </div>
      </div>
    </section>
  );
}
