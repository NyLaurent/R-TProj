
import rectImg from '../assets/rect.png'
import React, { useState } from 'react'

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);
    const packages = [
        {
            name: "Start",
            monthlyPrice: 19,
            yearlyPrice: 199,
            description: "Lorem ipsum dolor sit amet, te minim disputando nec Ut nam justo nostro, ea quot postea propriae eos",
            green:'/src/assets/rect.png'
        },
        {
            name: "Advance",
            monthlyPrice: 19,
            yearlyPrice: 199,
            description: "Lorem ipsum dolor sit amet, te minim disputando nec Ut nam justo nostro, ea quot postea propriae eos",
            green:'/src/assets/rect.png'
        },
        {
            name: "Premium",
            monthlyPrice: 19,
            yearlyPrice: 199,
            description: "Lorem ipsum dolor sit amet, te minim disputando nec Ut nam justo nostro, ea quot postea propriae eos"
            ,
            green:'/src/assets/rect.png'
        },
    ]

    return (
        <div className='md:px-14 p-4 max-w-s mx-auto py-10' id='pricing'>
            <div className='text-center'>
                <h2 className='md:text-5xl text-3xl font-extrabold text-primary mb-2'>
                    Here are our plans
                </h2>
                <p className='text-tartiary md:w-1/3 mx-auto px-4'>Lorem ipsum dolor sit amet, te minim disputando nec.
                    Ut nam justo nostro, ea quot postea propriae eos. Noster molestiae vituperatoribus duo eu.
                    Equidem maiestatis sed an, qui labitur principes at.</p>

                <div className='mt-16'>
                    <label htmlFor="toggle" className='inline-flex items-center cursor-pointer'>
                        <span className='mr-8 text-2xl font-semibold'>Monthly</span>
                        <div className='relative'>
                            <input type="checkbox" id='toggle' className='sr-only' checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
                            <div className='block bg-gray-300 w-14 h-8 rounded-full'></div>
                            <div className={`dot absolute left-1 top-1 bg-gray-500 w-6 h-6 rounded-full transition ${isYearly ? "transform translate-x-full bg-primary" : ""}`}></div>
                        </div>
                        <span className='ml-8 text-2xl font-semibold'>Yearly</span>
                    </label>
                </div>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx:auto'>
                {
                    packages.map((pkg,index) => <div key={index} className='border py-10 md:px-6 px-4 rounded-lg shadow-3xl'>
                        <h3 className='text-3xl font-bold text-center text-primary'>{pkg.name}</h3>
                        <p className='text-tartiary text-center my-5'>{pkg.description}</p>
                        <p className='mt-5 text-center text-secondary text-4xl font-bold'>
                            {isYearly ? `$${pkg.yearlyPrice}`:`$${pkg.monthlyPrice}`}
                            <span className='text-base text-tartiary font-medium'>/{isYearly ? 'year':'month'}</span>
                        </p>

                        <ul className='mt-4 space-y-2 px-4'>
                            <li className='flex gap-3 items-center'> <img src={pkg.green} alt="" className='w-4 h-4'/>Videos of Lessons</li>
                            <li className='flex gap-3 items-center'> <img src={pkg.green} alt="" className='w-4 h-4'/>Videos of Lessons</li>
                            <li className='flex gap-3 items-center'> <img src={pkg.green} alt="" className='w-4 h-4'/>Videos of Lessons</li>
                            <li className='flex gap-3 items-center'> <img src={pkg.green} alt="" className='w-4 h-4'/>Videos of Lessons</li>
                            <li className='flex gap-3 items-center'> <img src={pkg.green} alt="" className='w-4 h-4'/>Videos of Lessons</li>
                        </ul>
                        <div className='w-full mx-auto mt-8 flex items-center justify-center'>
                            <button className='btnPrimary'>Get Started</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Pricing
