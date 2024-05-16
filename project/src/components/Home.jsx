import React from 'react'
import banner from '../assets/logo.png'
import '../App.css'


const Home = () => {
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-28'>
        <div className='gradientBg rounded-xl rounded-br-[80px]'>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>

            <div>
                  <img src={banner} alt=""  className='lg:h-[386px]'/>
                </div>



<div className='md: w-3/5'>
                <h2>
                Streamline Success with Effortless Assignment Management
                </h2>
                <p>
                Utilize Umukoro to explore a plethora of assignments that will
         enhance your skills and capabilities significantly
                </p>
                <div>
                  <button>Get Started</button>
                  <button>Discount</button>
                </div>
                </div>
               
            </div>
        </div>

    </div>
  )
}

export default Home