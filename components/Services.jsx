
import Image from 'next/image';
import React from 'react';
import classNames from 'classnames'

const bgClasses = [
  'bg-indigo-500 text-indigo-100',
  'bg-yellow-400 text-yellow-900',
  'bg-pink-400 text-pink-900',
  'bg-purple-500 text-purple-100',
  'bg-green-500 text-green-100',
  'bg-blue-500 text-blue-100',
  'bg-red-500 text-red-100',
  'bg-slate-500 text-slate-100',
  'bg-teal-500 text-teal-100',
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
            <h4 className="mt-4 text-xl font-semibold">{service.name}</h4>
            <p className="mt-4">{service.description}</p>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};