import React, { useState } from 'react';
import { menus } from '../constants';
import logo from '../../assets/Frame.svg';

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
    <nav className="py-5 px-1 pl-5 text-sm w-full bg-skYellow border-b border-grey border-solid border-opacity-10 hidden md:flex justify-between items-center">
      <ul>
        {menus.map((menu) => (
          <li className="inline-block mx-3 font-medium"><a href="./">{menu}</a></li>
        ))}
        
      </ul>
      <div className="">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="ml-3">
        <li className="inline-block mr-8 font-medium"><a href="./">Log in</a></li>
        <li className="inline-block mr-8 font-medium">
          <button className="rounded-full py-3 px-6 text-white bg-skGreen">Get Started</button>
        </li>
      </ul>
    </nav>
    <nav className="p-8 w-full bg-skYellow border-grey border-opacity-10 border-b border-solid md:hidden flex justify-between items-center">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <span className="text-2xl cursor-pointer" onClick={() => setShow(!show)}>&#9776;</span>
        </div>
        {show && (
        <div className="fixed right-0 p-4 top-0 h-full w-9/12 border-l border-gray-300 border-solid bg-skBlue">
          <div>
              <div className="text-3xl text-right text-gray-200 transition-all" onClick={() => setShow(!show)}>&times;</div>
            <ul>
            {menus.map((menu) => (
              <li className="p-5 text-center text-white text-xl"><a href="./">{menu}</a></li>
            ))}
            <li className="p-5 text-center text-white text-xl"><a href="./">Log in</a></li>
            <li className="p-5 text-center text-white text-xl"><a href="./">Get Started</a></li>
            </ul>
          </div>
        </div>
        )}
      </nav>
    </>
  )
}
export default Navbar;