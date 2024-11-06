import React from 'react';
import { Helmet } from 'react-helmet';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (p) => toast.success(p);
function Warranty() {
  function submit(e) {
    e.preventDefault();
    notify('We will reach you soon!');
  }
  return (
    <>
      <Helmet>
        <title>Warranty | Gadgets-heaven</title>
      </Helmet>
      <ToastContainer />
      <div className='min-h-screen relative'>
        <div className='bg-brand w-full h-[60vh] lg:h-[40vh]'>
          <div className='text-center  text-white py-10 max-w-2xl mx-auto'>
            <h1 className='text-4xl font-bold '>Warranty</h1>
            <p className=''>
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
        <div className='bg-base-300 w-full h-[60vh]'></div>
        <div className=' mx-auto overflow-hidden absolute flex w-[290px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border-2 bg-white rounded-2xl p-[15px]'>
          <div className=''>
            <form
              action=''
              onSubmit={submit}
              className='flex flex-col gap-4 mx-auto'>
              <label className='input input-bordered flex items-center gap-2 w-[255px]'>
                Name
                <input
                  type='text'
                  className='grow'
                  placeholder='John Doe'
                  required
                />
              </label>
              <label className='input input-bordered flex items-center gap-2 w-[255px]'>
                Email
                <input
                  type='text'
                  className='grow'
                  placeholder='email@example.com'
                  required
                />
              </label>
              <label className='input input-bordered flex items-center gap-2 w-[255px]'>
                <input
                  type='text'
                  className='grow'
                  placeholder='Product Id'
                  required
                />
              </label>
              <label className='input input-bordered flex items-center gap-2 w-[255px]'>
                <input
                  type='text'
                  className='grow'
                  placeholder='Warranty Id'
                  required
                />
              </label>
              <label className='btn bg-brand text-white input input-bordered flex items-center gap-2'>
                <input type='Submit' className='grow' placeholder='Search' />
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Warranty;
