
import Image from 'next/image';
import React from 'react';
import classNames from 'classnames'

const bgClasses = [
  'bg-gray-800',
];

const getBackgroundClass = (index) => {
  return bgClasses[index % bgClasses.length];
};

export default function Services (){
    const services = [{
        name: 'Non-Resident Indians (NRIs)',
        description: 'seeking customised & personal financial guidance for investing in India while living abroad, growing their wealth sustainably with trust , confidence and long term relationships.',
        image: '/nri.png',
      },
      {
        name: 'Busy Entrepreneurs',
        description: 'seeking financial advice to manage their financial assets by optimizing risk reward and asset allocation strategies.',
        image: '/busy.png',
      },
      {
        name: 'Young Professionals',
        description: 'seeking guidance on building a strong financial foundation, planning for future milestones with long term investment strategies',
        image: '/web-development.png',
      },
      {
        name: 'To be Retirees',
        description: 'looking for secure retirement planning and ensuring financial stability in their golden years.',
        image: '/web-development.png',
      }]
  return (
    <>
        <div className='px-4 py-20 mt-15 md:px-20'>
      <div className="relative">
      <h3 className="pl-3 text-6xl font-test font-bold text-gray-900 text-center">WHO WE <span className="text-bull">ASSIST</span></h3>
    </div>
      <div className="mt-10 grid gap-8 md:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={classNames('rounded-2xl py-8 px-4 text-center shadow-md md:px-8', getBackgroundClass(index))}
          >
            <div className='flex justify-center'>
            <Image src={service.image} height={80} width={80} alt={service.name} />
            </div>
            <h4 className="mt-4 text-2xl text-orange-400 font-semibold">{service.name}</h4>
            <div className="mt-4 text-lg">{service.description}</div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};