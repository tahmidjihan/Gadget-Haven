import React, { useEffect, useState } from 'react';
import { HiOutlineAdjustments } from 'react-icons/hi';
import HorizontalCard from './horizontalCard';

function Cart() {
  const [data, setData] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const cartRaw = localStorage.getItem('cart');
    const cart = JSON.parse(cartRaw);

    const dataRaw = localStorage.getItem('data');
    const data = JSON.parse(dataRaw);

    console.log(data);
    const filteredData = data.filter((item) => cart.includes(item.product_id));
    setData(filteredData);

    data.map((dat) => {
      setPrice(price + parseInt(dat.price));
    });
  }, []);

  return (
    <div>
      <div className='flex justify-between w-10/12 mx-auto'>
        <h2 className='font-bold text-3xl '>Cart</h2>
        <div className='flex flex-wrap gap-5'>
          <h2 className='font-bold text-3xl'>Total: {price}</h2>
          <button className='btn rounded-full w-[200px] text-brand text-bold border-brand'>
            Sort by price <HiOutlineAdjustments />
          </button>
          <button className='btn rounded-full w-[200px] text-white text-bold bg-brand'>
            Purchase
          </button>
        </div>
      </div>
      <div className='py-10'>
        {data.map((dat, idx) => {
          return (
            <HorizontalCard
              key={idx}
              name={dat.product_title}
              image={dat.product_image}
              id={dat.product_id}
              description={dat.description}
              price={dat.price}
              idx={idx}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
