import React, { useEffect, useState } from 'react';
import Card from './../components/card';

function Home() {
  const [devices, setDevices] = useState([]);
  const [fullDevices, setFullDevices] = useState([]);
  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/tahmidjihan/2f0dd11b77a04478218032863106a820/raw/140e9f88527a693c730b7f064ced3e8ade519a1d/devices.json'
    )
      .then((res) => res.json())
      .then((data) => {
        setDevices(data);
        setFullDevices(data);
      });
  }, []);
  const filterDevices = (category) => {
    const filtered = fullDevices.filter(
      (device) => device.category.toLowerCase() === category
    );
    setDevices(filtered);
    console.log(devices);
  };
  function sortByCategory(e) {
    const targetData = e.target.innerText.toLowerCase();
    if (targetData === 'show all') {
      setDevices(fullDevices);
    } else if (targetData === '') {
    } else {
      filterDevices(targetData);
    }
  }
  return (
    <>
      <div className=' bg-brand min-h-screen md:mb-[70vh] md:min-h-[70vh] my-10 md:w-10/12 mx-auto rounded-3xl flex flex-col relative'>
        <div className='text-white text-center w-md md:max-w-4xl flex flex-col gap-7 mx-auto pt-36'>
          <h1 className='text-5xl font-extrabold '>
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className=''>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className='btn bg-white rounded-full text-bold text-xl text-brand-dark max-w-40 mx-auto mb-10'>
            Shop now
          </button>
        </div>
        <div className='bg-brand w-full min-h-[30vh]'></div>
        <figure className=' overflow-hidden lg:absolute flex top-[50vh] lg:left-1/2 lg:-translate-x-1/2 border-2 bg-[rgba(255,255,255,0.4)] border-white rounded-2xl p-[15px]'>
          <img
            src='../assets/banner.jpg'
            alt=''
            className='size-cover center rounded-xl w-xs md:max-w-[1062px] min-h-[533px] md:h-[563px]'
          />
        </figure>
      </div>
      <section>
        <h1 className='font-extrabold text-4xl text-center my-10'>
          Explore Cutting-Edge Gadgets
        </h1>
        <div className='flex md:flex-row xl:w-9/12 mx-auto justify-between flex-col'>
          <div className='mx-auto md:mx-1'>
            <div className='card bg-base-100 shadow-xl'>
              <div className='card-body items-center text-center'>
                <div
                  className='card-actions flex flex-col'
                  onClick={sortByCategory}>
                  <button className='btn bg-brand text-white rounded-full w-[150px] text-md text-start'>
                    Show All
                  </button>
                  <button className='btn bg-base-300 text-gray-500 rounded-full w-[150px] text-md text-start'>
                    Laptops
                  </button>
                  <button className='btn bg-base-300 text-gray-500 rounded-full w-[150px] text-md text-start'>
                    Phones
                  </button>
                  <button className='btn bg-base-300 text-gray-500 rounded-full w-[150px] text-md text-start'>
                    Accessories
                  </button>
                  <button className='btn bg-base-300 text-gray-500 rounded-full w-[150px] text-md text-start'>
                    Smart Watches
                  </button>
                  <button className='btn bg-base-300 text-gray-500 rounded-full w-[150px] text-md text-start'>
                    MacBooks
                  </button>
                  <button className='btn bg-base-300 text-gray-500 rounded-full w-[150px] text-md text-start'>
                    IPhones
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20  mx-auto md:mx-1'>
            {devices.map((device) => (
              <Card
                key={device.product_id}
                id={device.product_id}
                name={device.product_title}
                image={device.product_image}
                price={device.price}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
