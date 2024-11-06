import React, { useState } from 'react';

import Cart from '../components/cart';
import Wishlist from '../components/wishlist';

import { Helmet } from 'react-helmet';

function Dashboard() {
  const [isCart, setIsCart] = useState(true);

  const toggleIsCart = () => {
    return setIsCart(!isCart);
  };
  return (
    <>
      <Helmet>
        <title>Dashboard | Gadgets-heaven</title>
      </Helmet>
      <div className='min-h-screen relative'>
        <div className='bg-brand w-full h-[40vh] lg:h-[20vh]'>
          <div className='text-center  text-white py-10 max-w-2xl mx-auto'>
            <h1 className='text-4xl font-bold '>Dashboard</h1>
            <p className=''>
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <p>
              <button
                className={`btn rounded-full mr-3 w-[150px] ${
                  isCart
                    ? 'bg-white text-brand border-1 border-brand'
                    : 'bg-brand text-white'
                }`}
                onClick={toggleIsCart}>
                Cart
              </button>
              <button
                className={`btn rounded-full w-[150px] ${
                  !isCart
                    ? 'bg-white text-brand border-1 border-brand'
                    : 'bg-brand text-white'
                }`}
                onClick={toggleIsCart}>
                Wishlist
              </button>
            </p>
          </div>
        </div>
        <div className='bg-base-300 w-full min-h-[60vh] py-20'>
          {isCart ? <Cart /> : <Wishlist />}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
