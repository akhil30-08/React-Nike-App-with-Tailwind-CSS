import React from 'react';
import { services } from '../constants';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  return (
    <section className='flex justify-center items-center flex-wrap gap-4 max-container'>
      {services.map((service) => (
        <React.Fragment key={service.label}>
          <ServiceCard {...service} />
        </React.Fragment>
      ))}
    </section>
  );
};

export default Services;
