import PopularProductCard from '../components/PopularProductCard';
import { products } from '../constants';
import React from 'react';

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-6'>
      <div className='flex flex-col justify-start gap-3'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-coral-red'>Popular</span> Products
        </h2>
        <p className='font-montserrat lg:max-w-lg text-slate-gray'>
          Experience top notch quality and style with our sought after
          selections. Discover a world of comfort,style and value.
        </p>
      </div>

      <div className='mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 place-items-center'>
        {products.map((product) => {
          return (
            <React.Fragment key={product.name}>
              <PopularProductCard {...product} />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default PopularProducts;
