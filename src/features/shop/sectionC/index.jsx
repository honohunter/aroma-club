import React from 'react';

import styles from './style.module.css';

import Accordion from '../../../components/accordion';

export default function SectionA() {
  return (
    <section className={styles.root}>
      <div className="container">
        <div>
          <h1 className={styles.title}>Frequently asked questions</h1>
        </div>
        <Accordion title="Wat is de levertijd?">
          Met de JURA A1 Piano zet je in no-time de perfecte espresso, gewoon thuis. Dankzij de P.E.P zetmethode komt
          het water langer in contact met de koffie. Dit zorgt voor een vollere espresso met meer smaak en aroma. Kies
          uit 1 van de 3 koffiespecialiteiten en bepaal zelf de sterkte van de koffie. Veel onderhoud vraagt de JURA A1
          niet, want dit apparaat heeft een automatisch ontkalkingsprogramma waarmee je hem gemakkelijk in goede staat
          houdt. De machine is elegant en compact waardoor deze in geen een keuken misstaat.
        </Accordion>{' '}
        <Accordion title="Ontvang ik 24 maanden garantie?">
          Met de JURA A1 Piano zet je in no-time de perfecte espresso, gewoon thuis. Dankzij de P.E.P zetmethode komt
          het water langer in contact met de koffie. Dit zorgt voor een vollere espresso met meer smaak en aroma. Kies
          uit 1 van de 3 koffiespecialiteiten en bepaal zelf de sterkte van de koffie. Veel onderhoud vraagt de JURA A1
          niet, want dit apparaat heeft een automatisch ontkalkingsprogramma waarmee je hem gemakkelijk in goede staat
          houdt. De machine is elegant en compact waardoor deze in geen een keuken misstaat.
        </Accordion>{' '}
        <Accordion title="Ontvang ik een proefpakket?">
          Met de JURA A1 Piano zet je in no-time de perfecte espresso, gewoon thuis. Dankzij de P.E.P zetmethode komt
          het water langer in contact met de koffie. Dit zorgt voor een vollere espresso met meer smaak en aroma. Kies
          uit 1 van de 3 koffiespecialiteiten en bepaal zelf de sterkte van de koffie. Veel onderhoud vraagt de JURA A1
          niet, want dit apparaat heeft een automatisch ontkalkingsprogramma waarmee je hem gemakkelijk in goede staat
          houdt. De machine is elegant en compact waardoor deze in geen een keuken misstaat.
        </Accordion>
      </div>
    </section>
  );
}
