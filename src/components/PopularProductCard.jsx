import { star } from '../assets/icons';

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className='flex flex-col'>
      <img src={imgURL} alt={name} className='w-52 h-52' />
      <div className='mt-2 flex justify-start ml-1'>
        <img src={star} alt='star' />
        <p className='font-montserrat text-xl text-slate-gray'>(4.5)</p>
      </div>
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
        {name}
      </h3>
      <p className='mt-2 text-xl font-montserrat text-coral-red '>{price}</p>
    </div>
  );
};

export default PopularProductCard;
