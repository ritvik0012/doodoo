
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
        name: 'NRI\'S',
        description: 'Seeking customised & personal financial guidance for investing in India while living abroad, growing their wealth sustainably with trust , confidence and long term relationships.',
        image: '/nri.png',
      },
      {
        name: 'ENTREPRENEURS',
        description: 'Seeking financial advice to manage their financial assets by optimizing risk reward and asset allocation strategies.',
        image: '/busy.png',
      },
      {
        name: 'YOUNG PRO\'S',
        description: 'Seeking guidance on building a strong financial foundation, planning for future milestones with long term investment strategies.',
        image: '/web-development.png',
      },
      {
        name: 'TO BE RETIREES',
        description: 'Seeking secure retirement planning and ensuring financial stability in their golden years.',
        image: '/web-development.png',
      }]
  return (
    <>
        <div className='px-4 py-20 mt-15 sm:px-20 font-ubuntu min-w-screen bg-achu'>
      <div className="relative">
      <h3 className="pl-3 text-5xl font-ubuntu font-bold text-gray-900 text-center ">WHO WE <span className="text-bull">ASSIST</span></h3>
    </div>
      <div className="mt-10 grid gap-8 md:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={classNames('rounded-2xl py-8 px-4 shadow-md sm:px-8 hover:border-zinc-50 border-transparent border-4 hover:shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]', getBackgroundClass(index))}
          >
            <div className='flex'>
            {/*<Image src={service.image} height={80} width={80} alt={service.name} />*/}
            </div>
            <h4 className="mt-1 text-xl text-orange-400 font-semibold">{service.name}</h4>
            <div className="mt-4 text-l text-white">{service.description}</div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};