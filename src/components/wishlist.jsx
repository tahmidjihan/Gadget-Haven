import React, { useEffect, useState } from 'react';
import HorizontalCard from './horizontalCard';
import useLocalState from '../hooks/useLocalState';

function Wishlist() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const cartRaw = localStorage.getItem('like');
    const cart = JSON.parse(cartRaw);

    const dataRaw = localStorage.getItem('data');
    const data = JSON.parse(dataRaw);

    console.log(data);
    const filteredData = data.filter((item) => cart.includes(item.product_id));
    setData(filteredData);
  }, []);

  return (
    <div className='py-10'>
      <div className='py-10'>
        {data.map((dat, idx) => {
          return (
            <HorizontalCard
              key={idx}
              name={dat.product_title}
              image={dat.product_image}
              description={dat.description}
              price={dat.price}
              idx={idx}
              id={dat.product_id}
              btn={true}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Wishlist;
