import { star } from '../assets/icons';

const ReviewCard = ({ imgURL, feedback, rating, customerName }) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img
        src={imgURL}
        alt='image'
        className='rounded-full object-cover w-[120px] h-[120px]'
      />
      <p className='mt-4 info-text max-w-sm'>{feedback}</p>
      <div className='flex justify-center items-center mt-3 gap-2'>
        <img
          src={star}
          alt='star'
          width={24}
          height={24}
          className='object-contain m-0'
        />
        <p className='text-slate-gray font-montserrat text-xl'>({rating})</p>
      </div>
      <h3 className='mt-1 font-palanquin text-3xl font-bold text-center'>
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
