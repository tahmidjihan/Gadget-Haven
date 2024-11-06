import React from 'react';
import { Helmet } from 'react-helmet';

function Statistics() {
  return (
    <>
      <Helmet>
        <title>Statistics | Gadgets-heaven</title>
      </Helmet>
      <div className='bg-base-300 py-16'>
        <h1 className='font-extrabold text-5xl text-center'>No Data To Show</h1>
      </div>
    </>
  );
}

export default Statistics;
