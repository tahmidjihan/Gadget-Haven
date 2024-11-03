import React from 'react';

function Home() {
  return (
    <>
      <div class=' bg-brand min-h-screen md:mb-[70vh] md:min-h-[70vh] md:w-10/12 mx-auto rounded-3xl flex flex-col relative'>
        <div class='text-white text-center w-md md:max-w-4xl flex flex-col gap-7 mx-auto pt-36'>
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
        <figure className=' overflow-hidden lg:absolute flex top-[50vh] lg:left-1/2 lg:-translate-x-1/2 '>
          <img
            src='assets/banner.jpg'
            alt=''
            className='size-cover center rounded-xl w-xs md:max-w-[1062px] min-h-[563px] md:h-[563px]'
          />
        </figure>
      </div>
    </>
  );
}

export default Home;
