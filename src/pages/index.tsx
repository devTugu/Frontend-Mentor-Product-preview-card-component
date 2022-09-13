import React from 'react';
import Product from '../components/Product';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='grid h-screen justify-center content-center px-[16px]'>
      <div className='max-w-[700px]'>
        <Product 
          imageDesk={'/images/image-product-desktop.jpg'}
          imageMob={'/images/image-product-mobile.jpg'}
          tag={'perfume'} 
          title={'Gabrielle Essence Eau De Parfum'} 
          description={'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.'} 
          price={149.99} 
          discount={169.99}        
        />
      </div>
      <div className='mt-[80px]'>
        <p className='text-[14px] font-sans-serif'>Challenge by <Link href="https://www.frontendmentor.io?ref=challenge" target="_blank" passHref>Frontend Mentor</Link>.</p>
        <p className='text-[14px] font-sans-serif'>Coded by <Link href="https://www.frontendmentor.io/profile/devTugu" passHref>Tuguldur Unurtsetseg</Link>.</p>
        <p className='text-[14px] font-sans-serif'><Link href="https://github.com/devTugu/Frontend-Mentor-Product-preview-card-component" passHref>Source code right here.</Link>.</p>
      </div>
    </div>
  )
}
