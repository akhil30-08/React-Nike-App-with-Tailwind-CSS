const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className='flex-1 sm:min-w-[200px] sm:min-h-[270px] w-full  shadow-3xl rounded-2xl px-10 py-14'>
      <div className='w-10 h-10 flex justify-center items-center bg-coral-red rounded-full'>
        <img src={imgURL} alt={label} width={25} height={25} />
      </div>
      <h3 className='font-palanquin leading-normal mt-4 text-3xl font-bold'>
        {label}
      </h3>
      <p className='font-montserrat break-words mt-2 text-lg text-slate-gray '>
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
