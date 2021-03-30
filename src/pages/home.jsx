import React from 'react';

import SnackBar from '../features/snackBar';
import SectionA from '../features/home/sectionA';
import SectionB from '../features/home/sectionB';
import SectionC from '../features/home/sectionC';
import Subscription from '../features/subscription';
import Footer from '../features/footer';

export default function HomePage() {
  return (
    <>
      <SnackBar />
      <SectionA />
      <SectionB />
      <SectionC />
      <Subscription />
      <Footer />
    </>
  );
}
