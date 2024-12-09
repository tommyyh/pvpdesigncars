import Cta from '@/components/Home/Cta/Cta';
import Landing from '@/components/Home/Landing/Landing';
import WhatWeDo from '@/components/Home/WhatWeDo/WhatWeDo';
import Work from '@/components/Home/Work/Work';

const Home = () => {
  return (
    <>
      <Landing />
      <WhatWeDo />
      <Work />
      <Cta />
    </>
  );
};

export default Home;
