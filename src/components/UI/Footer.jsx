import React from 'react';
import logo from '../../assets/logo.svg';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-skBlue text-white">
      <div className="sm:w-11/12 m-auto">
          <section className="grid gap-16 grid-cols-1 sm:grid-cols-4 pt-28 pb-28 sm:pl-12">
            <div className="px-3 md:px-0">
              <div className="mb-10">
                <img src={logo} alt="Logo" className="inline-block pr-3" />
                <span className="text-2xl">Skupos</span>
              </div>
              <div className="border p-4 rounded border-gray-100 border-solid border-opacity-10 text-xs flex items-center mb-2">
                <p className="pr-6">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <p className="font-bold">&#62;</p>
              </div>
            <div className="border p-4 rounded border-gray-100 border-solid border-opacity-10 text-xs flex items-center">
                <p className="pr-6">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <p className="font-bold">&#62;</p>
              </div>
            </div>
            <div className="grid grid-cols-2 mx-4 md:mx-0 md:grid-cols-4 md:gap-10 gap-2 sm:col-span-3">
            <div className="">
              <p className="font-semibold text-xs">CONVENIENCE RETAIL</p>
              <ul className="font-light from-gray-300 text-xs">
                <li className="my-5 text-gray-300">Overview</li>
                <li className="my-5 text-gray-300">Scan Data</li>
                <li className="my-5 text-gray-300">Engage</li>
                <li className="my-5 text-gray-300">Pricing</li>
              </ul>
            </div>
            <div className="">
              <p className="font-semibold text-xs">ENTERPRISE BRAND</p>
              <ul className="font-light from-gray-300 text-xs">
                <li className="my-5 text-gray-300">Overview</li>
                <li className="my-5 text-gray-300">Insight</li>
                <li className="my-5 text-gray-300">Engage for Brands</li>
                <li className="my-5 text-gray-300">Predict</li>
              </ul>
            </div>
            <div className="">
              <p className="font-semibold text-xs">RESOURCES</p>
              <ul className="font-light from-gray-300 text-xs">
                <li className="my-5 text-gray-300">Customer Stories</li>
                <li className="my-5 text-gray-300">Blog</li>
                <li className="my-5 text-gray-300">Product Update</li>
                <li className="my-5 text-gray-300">Events</li>
                <li className="my-5 text-gray-300">Videos</li>
                <li className="my-5 text-gray-300">Downloads</li>
              </ul>
            </div>
            <div className="">
              <p className="font-semibold text-xs">COMPANY</p>
              <ul className="font-light from-gray-300 text-xs">
                <li className="my-5 text-gray-300">About Us</li>
                <li className="my-5 text-gray-300">Press</li>
                <li className="my-5 text-gray-300">Career</li>
                <li className="my-5 text-gray-300">Contact</li>
                <li className="my-5 text-gray-300">Referral Program</li>
                <li className="my-5 text-gray-300">Support</li>
              </ul>
            </div>
            </div>
          </section>
          <section className="text-xs font-medium flex sm:flex-row flex-col justify-between py-3 sm:pl-12">
          <div>
              <p className="sm:mr-8 sm:inline-block text-center sm:text-left">&copy; {year} SKUPOS. ALL RIGHTS RESERVED.</p>
              <p className="inline-block mr-4 mx-20 sm:mx-0 mt-2 sm:mt-0">TERMS</p>
              <p className="inline-block mt-2 sm:mt-0">PRIVACY</p>
          </div>
          <div className="flex sm:justify-end justify-center">
            <img src={facebook} className="w-4 mr-5" alt="facebook" />
            <img src={twitter} className="w-4 mr-5" alt="facebook" />
            <img src={linkedin} className="w-4 mr-5" alt="facebook" />
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;