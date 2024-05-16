import React from 'react';
import banner from '../assets/logo.png';
import '../App.css';

const Home = () => {
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-28'>
      <div className='bg-gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
        <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
          <div>
            <img src={banner} alt="" className='lg:h-[386px]' />
          </div>
          <div className='md:w-3/5'>
            <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed
              '>Streamline Success with Effortless Assignment Management</h2>
            <p className='text-[#EBEBEB] text-2xl mb-8'>Utilize Umukoro to explore a plethora of assignments that will enhance your skills and capabilities significantly</p>
            <div className='space-x-5 space-y-4'>
              <button className='btnPrimary
             '>Get Started</button>
              <button className='btnPrimary'>Discount</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
