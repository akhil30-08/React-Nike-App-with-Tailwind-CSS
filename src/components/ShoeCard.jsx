const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
  const handleClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImage === imgURL.bigShoe
          ? 'border-coral-red'
          : 'border-transparent'
      }
      cursor-pointer max-sm:flex-1
      `}
      onClick={handleClick}
    >
      <div className='flex justify-center items-start bg-card bg-center bg-cover sm:w-28 sm:h-28 max-sm:p-4 rounded-xl'>
        <img
          src={imgURL.thumbnail}
          alt='shoe-collection'
          width={150}
          height={150}
          className='object-contain'
        />
      </div>
    </div>
  );
};

export default ShoeCard;
