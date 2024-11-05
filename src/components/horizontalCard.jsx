import React from 'react';
import { BsXCircle } from 'react-icons/bs';

function HorizontalCard({ btn }) {
  return (
    <>
      <div className='card card-side bg-base-100 shadow-xl max-w-6xl mx-auto flex-wrap md:flex-nowrap'>
        <figure className='p-6'>
          <img
            src='https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp'
            alt='Movie'
            className='rounded-xl h-[124px] w-[200px]'
          />
        </figure>
        <div className='card-body flex flex-row align-middle justify-between '>
          <div className='flex flex-col justify-between '>
            <h2 className='card-title'>Samsung Galaxy S23 Ultra</h2>
            <span className='text-gray-400'>
              Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
              display.
            </span>
            <span className='text-gray-500 font-bold '>Price: 999</span>
            {btn ? (
              <button className='btn rounded-full w-[120px] bg-brand text-bold text-white'>
                Add to cart
              </button>
            ) : (
              ''
            )}
          </div>
          <button className='btn but-ghost h-full text-6xl text-red-500'>
            <BsXCircle />
          </button>
        </div>
      </div>
    </>
  );
}

export default HorizontalCard;
