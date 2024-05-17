import React from 'react';
import banner from '../assets/logo.png';
import '../App.css';
import Banner from '../shared/Banner'

const Home = () => {
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24'>
     <Banner banner ={banner} heading =
"Streamline Success with Effortless Assignment Management!" subheading ="Utilize Umukoro to explore a plethora of assignments that will
enhance your skills and capabilities significantly" btn1={'Get Started'} btn2={'Discount'}/>
    </div>
  );
}

export default Home;
