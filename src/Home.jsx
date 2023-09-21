
import React from 'react'
import LastSection from './LastSection';
import FirstSection from './FirstSection';

import Second from './Second';


const Home = () => {
      

  return (

    <>
  
    <div className='puracontent'>
    <div className='main-home order-0 order-lg-0'>
<FirstSection/>
    </div>

<div className="sidething m-5 order-1 order-lg-0 ">
<Second/>
</div>


<div className='order-2 order-lg-0 mt-5'>
<LastSection/>
</div>
</div>
    </>
  );
};

export default Home;