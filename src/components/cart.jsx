import React from 'react';
import { HiOutlineAdjustments } from 'react-icons/hi';
import HorizontalCard from './horizontalCard';

function Cart() {
  return (
    <div>
      <div className='flex justify-between w-10/12 mx-auto'>
        <h2 className='font-bold text-3xl '>Cart</h2>
        <div className='flex flex-wrap gap-5'>
          <h2 className='font-bold text-3xl'>Total: 999.99</h2>
          <button className='btn rounded-full w-[200px] text-brand text-bold border-brand'>
            Sort by price <HiOutlineAdjustments />
          </button>
          <button className='btn rounded-full w-[200px] text-white text-bold bg-brand'>
            Purchase
          </button>
        </div>
      </div>
      <div className='py-10'>
        <HorizontalCard />
      </div>
    </div>
  );
}

export default Cart;
