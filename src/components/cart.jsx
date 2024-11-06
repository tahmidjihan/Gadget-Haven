import React, { useEffect, useState } from 'react';
import { HiOutlineAdjustments } from 'react-icons/hi';
import HorizontalCard from './horizontalCard';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart() {
  const notify = (p) => toast.success(p);

  const [data, setData] = useState([]);
  const [price, setPrice] = useState(0);

  const mainFunc = () => {
    const cartRaw = localStorage.getItem('cart');
    const cart = JSON.parse(cartRaw) || [];

    const dataRaw = localStorage.getItem('data');
    const data = JSON.parse(dataRaw) || [];

    const filteredData = data.filter((item) => cart.includes(item.product_id));
    setData(filteredData);

    let total = 0;
    for (let i = 0; i < filteredData.length; i++) {
      total += parseInt(filteredData[i].price);
    }
    setPrice(total);
  };
  useEffect(() => {
    mainFunc();
  }, []);
  function sortByPrice() {
    const newData = [...data].sort((a, b) => b.price - a.price);
    setData(newData);
    notify('Price sorting successful!');
  }
  function purchase() {
    document.getElementById('my_modal_5').showModal();
    localStorage.removeItem('cart');
  }
  return (
    <div>
      <div className='flex justify-between w-10/12 mx-auto'>
        <ToastContainer />
        <h2 className='font-bold text-3xl '>Cart</h2>
        <div className='flex flex-wrap gap-5'>
          <h2 className='font-bold text-3xl'>Total: {price}</h2>
          <button
            className='btn rounded-full w-[200px] text-brand text-bold border-brand'
            onClick={sortByPrice}>
            Sort by price <HiOutlineAdjustments />
          </button>
          <button
            className='btn rounded-full w-[200px] text-white text-bold bg-brand'
            onClick={purchase}>
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
      <dialog id='my_modal_5' className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box text-center'>
          <span>
            <img src='assets/Group.png' alt='' className='mx-auto my-7' />
          </span>
          <h3 className='font-bold text-3xl'>Payment Successfully</h3>
          <div className='divider'></div>
          <p className='text-gray-400'>
            Thanks for purchasing.
            <br />
            Total:{price}
          </p>
          <div className=' mt-4'>
            <form method='dialog'>
              <button
                className='btn w-full bg-base-300 rounded-full btn-sm'
                onClick={mainFunc}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Cart;
