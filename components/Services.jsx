
import Image from 'next/image';
import React from 'react';
import classNames from 'classnames'

const bgClasses = [
  'bg-gray-800 text-white',
];

const getBackgroundClass = (index) => {
  return bgClasses[index % bgClasses.length];
};

export default function Services (){
    const services = [{
        name: 'Web Development',
        description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.',
        image: '/web-development.png',
      },
      {
        name: 'UI/UX Design',
        description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.',
        image: '/web-development.png',
      },
      {
        name: 'Mobile Application',
        description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.',
        image: '/web-development.png',
      },]
  return (
    <>
        <div className='px-4 py-10 md:px-20'>
      <div className="relative">
      <h3 className="pl-3 text-6xl font-bold">Services</h3>
    </div>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className={classNames('rounded-2xl py-8 px-4 text-center shadow-md md:px-8', getBackgroundClass(index))}
          >
            <div className='flex justify-center'>
            <Image src={service.image} height={80} width={80} alt={service.name} />
            </div>
            <h4 className="mt-4 text-xl text-red font-semibold">{service.name}</h4>
            <p className="mt-4">{service.description}</p>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};