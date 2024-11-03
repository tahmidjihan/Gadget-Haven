import React from 'react';

function Footer() {
  return (
    <>
      <footer className='bg-base-200 text-center flex flex-col items-center justify-center align-middle'>
        <h1 className='font-extrabold text-3xl my-3 pt-10'>Gadgets-heaven</h1>
        <p>Leading the way in cutting-edge technology and innovation.</p>
        <div class='divider'></div>
        <div className='flex justify-around w-10/12 mx-auto text-gray-500 my-7'>
          <nav className='flex flex-col text-center gap-2'>
            <h6 className='footer-title text-black'>Services</h6>
            <a className='link link-hover'>Branding</a>
            <a className='link link-hover'>Design</a>
            <a className='link link-hover'>Marketing</a>
            <a className='link link-hover'>Advertisement</a>
          </nav>
          <nav className='flex flex-col text-center gap-2'>
            <h6 className='footer-title text-black'>Company</h6>
            <a className='link link-hover'>About us</a>
            <a className='link link-hover'>Contact</a>
            <a className='link link-hover'>Jobs</a>
            <a className='link link-hover'>Press kit</a>
          </nav>
          <nav className='flex flex-col text-center gap-2'>
            <h6 className='footer-title text-black'>Legal</h6>
            <a className='link link-hover'>Terms of use</a>
            <a className='link link-hover'>Privacy policy</a>
            <a className='link link-hover'>Cookie policy</a>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default Footer;
