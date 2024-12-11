'use client';

import Clients from '@/components/Clients/Clients';
import Contact from '@/components/Contact/Contact';
import Cta from '@/components/Home/Cta/Cta';
import Landing from '@/components/Home/Landing/Landing';
import WhatWeDo from '@/components/Home/WhatWeDo/WhatWeDo';
import Work from '@/components/Home/Work/Work';
import Nav from '@/components/Nav/Nav';
import { useState } from 'react';

const Home = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <Nav setContactOpen={setContactOpen} />
      <Landing setContactOpen={setContactOpen} />
      <WhatWeDo />
      <Clients />
      <Work />
      <Cta setContactOpen={setContactOpen} />

      <Contact contactOpen={contactOpen} setContactOpen={setContactOpen} />
    </>
  );
};

export default Home;
