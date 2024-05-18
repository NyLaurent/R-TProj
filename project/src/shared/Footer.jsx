import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
      <div className="my-12 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-8">
          <a href="/" className="text-2xl font-semibold flex items-center space-x-3 text-primary">
            <img src={logo} alt="" className="w-10 inline-block" />
            <span className="text-white">Umukoro</span>
          </a>
          <p className="md:w-1/2">
            dolor sit amet, te minim disputando nec Ut nam justo nostro, ea quot postea propriae eos
          </p>
          <div>
            <input
              type="email"
              placeholder="Your email"
              className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none"
            />
            <input
              type="submit"
              value="Subscribe"
              className="px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary transition-all duration-300"
            />
          </div>
        </div>


        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Platform</h4>
            <ul className="space-y-3">
              <li><a href="/" className="block hover:text-gray-300">Overview</a></li>
              <li><a href="/" className="block hover:text-gray-300">Overview</a></li>
              <li><a href="/" className="block hover:text-gray-300">Overview</a></li>
              <li><a href="/" className="block hover:text-gray-300">Overview</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl">Help</h4>
            <ul className="space-y-3">
              <li><a href="/" className="block hover:text-gray-300">Overview</a></li>
              <li><a href="/" className="block hover:text-gray-300">Overview</a></li>
              <li><a href="/" className="block hover:text-gray-300">Overview</a></li>
              <li><a href="/" className="block hover:text-gray-300">Overview</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl">Contact</h4>
            <ul className="space-y-3">
              <li><p className="hover:text-gray-300">07886676765</p></li>
              <li><p className="hover:text-gray-300">Umokoro</p></li>
              <li><p className="hover:text-gray-300"></p></li>
              <li><p className="hover:text-gray-300">07886676765</p></li>
            </ul>
          </div>
        </div>
      </div>

      <hr />
      <div>
        <p>@ UMUKORO 20XX ---20XX. All rights reserved</p>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
