import React from 'react';

const Subscribe = ({ bgCol, desc, mb }) => {
  return(
    <section className={`mt-40 flex justify-center items-center h-base ${bgCol} ${mb && 'mb-40'}`}>
      <div className="sm:w-8/12 px-5 sm:px-0">
        <p className="mb-16 md:text-5xl text-3xl font-semibold text-center text-gray-800">{desc}</p>
        <div className="border border-grey border-opacity-10 py-1 pl-8 pr-1 md:w-7/12 w-full m-auto bg-white rounded-full flex justify-between">
          <input placeholder="Enter your email address" className="border-none w-8/12 focus:outline-none placeholder-gray-800" />
          <button className="rounded-full py-3 px-8 font-semibold focus:outline-none bg-skGreen text-white">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;