import { arrowRight } from '../assets/icons';
import { bigShoe1 } from '../assets/images';
import Button from '../components/Button';
import ShoeCard from '../components/ShoeCard';
import { shoes, statistics } from '../constants';
import React, { useState } from 'react';
const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
  return (
    <section
      id='hero'
      className='w-full flex lg:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative lg:w-2/5 flex flex-col justify-center items-start w-full max-lg:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>
          Our Summer Collection
        </p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[60px] max-sm:leading-none font-bold'>
          <span className='xl:bg-white  xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red relative z-20'>Nike</span>
          <span className=' relative z-20 '> Shoes</span>
        </h1>

        <p className='font-montserrat text-slate-gray text-lg mt-6 mb-14 sm:max-w-sm leading-8'>
          Discover stylish Nike arrivals, quality comfort and innovation for
          your active life.
        </p>
        <Button label='Shop Now' iconURL={arrowRight} />

        <div className='flex justify-start  items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => {
            return (
              <div key={index}>
                <p className='text-4xl font-palanquin font-bold'>
                  {stat.value}
                </p>
                <p className='font-montserrat text-slate-gray'>{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className='flex justify-center items-center relative xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImage}
          alt='shoe-image'
          className='object-contain z-10 relative'
          width={450}
          height={400}
        />

        <div className='flex gap-4 sm:gap-6 absolute -bottom-8 max-sm:px-4'>
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => {
                  setBigShoeImage(shoe);
                }}
                bigShoeImage={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
