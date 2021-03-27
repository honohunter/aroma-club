import React from 'react';

import styles from './style.module.css';

import image1 from '../../../assets/images/image-1.webp';
import image2 from '../../../assets/images/image-2.webp';
import image3 from '../../../assets/images/image-3.webp';
import image4 from '../../../assets/images/image-4.webp';

import Tabs, { Tab } from '../../../components/tabs';
import SpecialGrid from '../../../components/specialGrid';
import SpecialContent from '../../../components/specialContent';
import Button from '../../../components/button';

export default function SectionB() {
  return (
    <section className={styles.root}>
      <Tabs>
        <Tab active>About us</Tab>
        <Tab>Our values</Tab>
        <Tab>responsibility</Tab>
        <Tab>questions</Tab>
      </Tabs>
      <div className="container">
        <div className={styles.gridContainer}>
          <SpecialGrid image={image1}>
            <i className={styles.caption}>About us</i>
            <h1 className="paragraph">Uplift science and nature to advance health and cultivate wellbeing.</h1>
            <p className="paragraph">
              No. 1 Elegant Vesper is een heerlijke 100% arabica koffie uit Costa Rica. Wij branden de koffie volgens de
              ambachtelijke slow-roast methode. De arabica boon voorziet de koffie van een frisse milde smaak en body.
            </p>
            <p className="paragraph">
              We are wellness advocates, science enthusiasts and changemakers with a deep respect for nature — and a
              firm belief in its ability to bring us back to balance. We founded Prima to provide the products, tools
              and education that will help us get there.
            </p>
            <div className="pt-8">
              <Button>Alle onderhoudsproducten</Button>
            </div>
          </SpecialGrid>
        </div>
      </div>
      <div className={styles.gridContainer}>
        <SpecialContent image={image2}>
          <i className="text-26px">
            We are wellness advocates, science enthusiasts and changemakers with a deep respect for nature — and a firm
            belief in its ability to bring us back to balance. We founded Prima to provide the products, tools and
            education that will help us get there.
          </i>
          <div className="pt-8">
            <Button size="large">Lees verder</Button>
          </div>
        </SpecialContent>
      </div>
      <div className="container">
        <div className={styles.gridContainer}>
          <SpecialGrid image={image3}>
            <i className={styles.caption}>Responsibility</i>
            <h1 className="paragraph">Served With A Smile....</h1>
            <p className="paragraph">
              Coffee doesn’t have to be complicated. I mean, we’re obsessed about roast profiles, balancing beans and
              grind-levels but we realise that sometimes, simplicity is key. So if you&#39;ve got any questions
              whatsoever, feel free to get in contact with us; we&#39;ll be happy to help any way we can!
            </p>
            <p className="paragraph">
              We are wellness advocates, science enthusiasts and changemakers with a deep respect for nature — and a
              firm belief in its ability to bring us back to balance. We founded Prima to provide the products, tools
              and education that will help us get there.
            </p>
          </SpecialGrid>
        </div>
      </div>
      <div className={styles.gridContainer}>
        <SpecialContent image={image4}>
          <i className="text-26px">
            Coffee can make you feel good, even before you taste it. So everything we do considers the people and planet
            around us. That means fair trade and organic coffee, ethically sourced. Production and packaging that
            minimise our impact on the planet.
          </i>
          <div className="pt-8">
            <Button size="large">Lees verder</Button>
          </div>
        </SpecialContent>
      </div>
    </section>
  );
}
