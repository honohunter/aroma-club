import React from 'react';

import SnackBar from '../features/snackBar';
import Subscription from '../features/subscription';
import Footer from '../features/footer';

import SectionA from '../features/shop/sectionA';
import SectionB from '../features/shop/sectionB';
import SectionC from '../features/shop/sectionC';
import SectionD from '../features/shop/sectionD';

export default function HomePage() {
  return (
    <>
      <SnackBar />
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
      <Subscription />
      <Footer />
    </>
  );
}
