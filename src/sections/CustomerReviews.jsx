import React from 'react';
import { reviews } from '../constants';
import ReviewCard from '../components/ReviewCard';

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='text-4xl font-palanquin text-center font-bold break-words'>
        What Our
        <span className='text-coral-red'> Customers </span>
        Say?
      </h3>

      <p className='info-text m-auto mt-4 max-w-lg text-center'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className='mt-10 flex flex-1 justify-evenly items-center max-lg:flex-col gap-10'>
        {reviews.map((review) => {
          return (
            <React.Fragment key={review.customerName}>
              <ReviewCard
                imgURL={review.imgURL}
                customerName={review.customerName}
                feedback={review.feedback}
                rating={review.rating}
              />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default CustomerReviews;
