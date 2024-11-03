import React from 'react';
import { Link } from 'react-router-dom';

function Card({ image, name, price, id }) {
  return (
    <>
      <div className='card bg-base-100 w-[310px] mx-auto md:mx-0 shadow-xl rounded-4'>
        <figure className='px-5 pt-5 rounded-3'>
          <img src={image} alt='Shoes' className='rounded-xl' />
        </figure>
        <div class='card-body text-start'>
          <h2 className='text-2xl font-bold text-start'>{name}</h2>
          <p className='text-gray-500 text-lg'>{price}</p>
          <div className='card-actions items-center'>
            <button className='btn bg-white border-2 border-brand-dark rounded-full text-md text-brand-dark'>
              <Link to={`/products/${id}`}>Shop Now!</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
