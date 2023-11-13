import { offer } from '../assets/images';
import { arrowRight } from '../assets/icons';
import Button from '../components/Button';

const SpecialOffers = () => {
  return (
    <section className='flex justify-center items-center max-lg:flex-col-reverse gap-6 max-container'>
      <div className='flex-1 flex max-lg:justify-end'>
        <img
          src={offer}
          alt='offer'
          height={687}
          width={773}
          className='object-contain w-full'
        />
      </div>

      <div className='flex fex-1 flex-col'>
        <h2 className=' font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className='text-coral-red '> Special </span>
          Offer
        </h2>

        <p className='mt-4 lg:max-w-lg info-text '>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='mt-4 lg:max-w-lg info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className='mt-3 flex gap-4'>
          <Button label='Shop Now' iconURL={arrowRight} />
          <Button
            label='Learn More'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
