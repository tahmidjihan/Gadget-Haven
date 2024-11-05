import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

function Product() {
  const loaderData = useLoaderData();
  const loaderId = loaderData.id;
  const [data, setData] = useState({});
  const [theRating, setTheRating] = useState(0);
  const [specs, setSpecs] = useState([]);

  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/tahmidjihan/2f0dd11b77a04478218032863106a820/raw/140e9f88527a693c730b7f064ced3e8ade519a1d/devices.json'
    )
      .then((res) => res.json())
      .then((data) => manageCards(data));
  }, []);
  const manageCards = (resData) => {
    const newData = resData.filter(
      (dat) => parseInt(dat.product_id) === parseInt(loaderId)
    );

    const dataObj = newData[0];
    setData(dataObj);

    if (dataObj && dataObj.Specification) {
      setSpecs(
        Array.isArray(dataObj.Specification)
          ? dataObj.Specification
          : Object.entries(dataObj.Specification)
      );
    }
  };
  const {
    price,
    rating,
    description,
    product_title,
    product_image,
    Specification,
  } = data;
  console.log(Specification);

  return (
    <>
      <div className='min-h-screen relative'>
        <div className='bg-brand w-full h-[60vh] lg:h-[40vh]'>
          <div className='text-center  text-white py-10 max-w-2xl mx-auto'>
            <h1 className='text-4xl font-bold '>Product Details</h1>
            <p className=''>
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
        <div className='bg-base-300 w-full lg:h-[60vh] h-[100vh]'></div>
        <div className=' mx-auto overflow-hidden absolute flex lg:w-[1100px] top-1/2 -translate-y-1/2 md:left-1/2 md:-translate-x-1/2 border-2 bg-white rounded-2xl p-[15px]'>
          <div className='lg:flex'>
            <div className='img'>
              <img
                src={product_image}
                alt=''
                className='size-cover center rounded-xl w-[300px] lg:w-[400px] w-xs min-h-[563px] md:h-[563px]'
              />
            </div>
            <div className='text pl-5 '>
              <h1 className='font-bold text-2xl'>{product_title}</h1>
              <h3 className='text-lg font-medium text-gray-600'>{price}</h3>
              <div className='badge badge-success badge-outline p-5 my-5'>
                In Stocks
              </div>
              <p className='text-gray-400'>{description}</p>
              <h2 className='text-black font-bold my-5'>Specification:</h2>
              <p className='text-gray-400'>
                <ol>
                  {specs.map((spec, idx) => {
                    return (
                      <li key={idx}>
                        {idx + 1}. {spec}
                      </li>
                    );
                  })}
                </ol>
              </p>
              <h2 className='text-black font-bold'>Rating ⭐ </h2>
              <div className='flex'>
                <Rating
                  style={{ maxWidth: 130 }}
                  value={theRating}
                  onChange={setTheRating}
                />
                <button className='btn rounded-full'>{rating}</button>
              </div>
              <div>
                <button className='btn rounded-full tex-xl bg-brand text-white'>
                  Add to cart <IoCartOutline />
                </button>
                <button className='btn rounded-full tex-xl text-black'>
                  <FaRegHeart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
