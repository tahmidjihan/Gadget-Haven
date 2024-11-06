import React from 'react';
import { Helmet } from 'react-helmet';

function Err() {
  return (
    <>
      <Helmet>
        <title>404 not found | Gadgets-heaven</title>
      </Helmet>
      <div className='bg-base-300 py-16 h-screen pt-[33vh]'>
        <h1 className='font-extrabold text-5xl text-center'>404</h1>
        <h1 className='font-extrabold text-5xl text-center'>oops!</h1>
        <h3 className='font-extrabold text-3xl text-center'>
          Don't Cry Go back to home.
        </h3>
      </div>
    </>
  );
}

export default Err;
