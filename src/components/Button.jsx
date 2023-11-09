import React from 'react';

const Button = ({ label, iconURL }) => {
  return (
    <button className='flex justify-center items-center gap-2 p-3 border font-montserrat text-lg bg-coral-red rounded-full text-white'>
      {label}
      <img src={iconURL} alt='icon' className='ml-2 rounded-full w-5 h-5' />
    </button>
  );
};

export default Button;
