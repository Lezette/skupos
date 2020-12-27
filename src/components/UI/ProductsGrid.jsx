import React from 'react';
import { grid1 } from '../constants';

const ProductsGrid = ({ more }) => {  
  return (
    <>
      <section className="grid md:grid-cols-3 gap-10 grid-cols-1 w-10/12 m-auto my-10 sm:grid-cols-2">
        {grid1.map(grid => (
        <div className="mb-14">
          <div className="h-sm bg-gray-800">
            <img src={grid.image} alt="Grid" className="h-sm w-full" />
          </div>
          <div className="px-1">
              <p className={`mt-4 ${grid.color} font-semibold`}>{grid.category}</p>
              <p className="text-2xl my-2 font-semibold text-gray-800">{grid.title}</p>
            <p className="font-light">{grid.subtitle}</p>
          </div>
        </div>
        ))}
    </section>
      {more && (
        <div className="text-center mb-32">
          <button className="rounded-full py-4 px-10 text-white bg-skBlue font-semibold">Load More</button>
        </div>
      )}
    </>
  )
}

export default ProductsGrid;