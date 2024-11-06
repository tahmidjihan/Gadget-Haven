import React from 'react';
import { BsXCircle } from 'react-icons/bs';
import useLocalState from '../hooks/useLocalState';

function HorizontalCard({ btn, name, image, description, price, idx, id }) {
  function addToCart(idn) {
    useLocalState(idn, 'cart', true);
  }

  function removeItem(idn) {
    const dataRaw = localStorage.getItem('cart');
    const data = JSON.parse(dataRaw);

    const newData = data.filter((item) => {
      return item !== idn;
    });
    useLocalState(newData, 'cart');
  }
  return (
    <>
      <div className='card card-side bg-base-100 shadow-xl max-w-6xl mx-auto flex-wrap md:flex-nowrap m-10'>
        <figure className='p-6'>
          <img
            src={image}
            alt='Movie'
            className='rounded-xl h-[124px] w-[200px]'
          />
        </figure>
        <div className='card-body flex flex-row align-middle justify-between '>
          <div className='flex flex-col justify-between '>
            <h2 className='card-title'>{name}</h2>
            <span className='text-gray-400'>{description}</span>
            <span className='text-gray-500 font-bold '>Price: {price}</span>
            {btn ? (
              <button
                className='btn rounded-full w-[120px] bg-brand text-bold text-white'
                onClick={() => addToCart(id)}>
                Add to cart
              </button>
            ) : (
              ''
            )}
          </div>
          <button
            className='btn but-ghost h-full text-6xl text-red-500'
            onClick={() => removeItem(id)}>
            <BsXCircle />
          </button>
        </div>
      </div>
    </>
  );
}

export default HorizontalCard;
