
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
        name: 'FINANCIAL PLANNING',
        description: (
            <ul className="space-y-4 text-left ml-15 text-white dark:text-white">
            <li className="">
            <span className="text-3xl before:content-['>'] text-bold text-achu"></span>  
                <span className="pl-2">Personalized financial planning services  to meet  specific financial life goals.</span>
            </li>
            <li className="">
            <span className="text-3xl before:content-['>'] text-bold text-achu"></span> 
                <span className="pl-2"> Customized & well structured financial models based on  life goals, client risk profile and financials.</span>
            </li>
            {/*
            <li className="">
            <span className="text-3xl before:content-['>'] text-bold text-achu"></span> 
                <span className="pl-2">  Strategic asset allocation methodology with  tactical asset allocation adapting to market dynamism to maximize rewards with minimum risk.</span>
            </li>
    */}
        </ul>
        ),
        image: '/nri.png',
      },
      {
        name: 'FINANCIAL ASSET MANAGEMENT',
        description: (
            <ul className="space-y-4 text-left ml-15 text-white dark:text-white">
            <li className="">
                <span className="text-3xl before:content-['>'] text-bold text-achu"></span>  <span className="pl-2">Client specific financial asset services to create long term client wealth.</span>
            </li>
            
            <li className="">
    
            <span className="text-3xl before:content-['>'] text-bold text-achu"></span>  <span className="pl-2">  Client specific asset allocation & equity diversification to optimise risk return reward. </span>
            </li>

        </ul>
        ),
        image: '/busy.png',
      },
      {
        name: 'RETIREMENT PLANNING',
        description: (
            <ul className="space-y-4 text-left mt-5 ml-15 text-white dark:text-white">
            <li className="">
            <span className="text-3xl before:content-['>'] text-bold text-achu"></span> 
                <span className="pl-2">  Customized retirement planning and strategies ensuring financial security during happy retired years.</span>
            </li>
            <li className="">
            <span className="text-3xl before:content-['>'] text-bold text-achu"></span> 
                <span className="pl-2">  Suitable asset allocation and investment diversification as per client risk profile.</span>
            </li>
        </ul>
        ),
        image: '/web-development.png',
      },
      {
        name: 'ADVISORY SERVICES',
        description: (
            <ul className="space-y-4 text-left ml-15 text-white dark:text-white">
            <li className="">
            <span className="text-3xl before:content-['>'] text-bold text-achu"></span> 
                <span className="pl-2">  Comprehensive advice and report tailored to specific investment decision requirements of clients.</span>
            </li>
            <li className="">
            <span className="text-3xl before:content-['>'] text-bold text-achu"></span> 
                <span className="pl-2">  Advice on financial assessment of new projects and investment decisions.</span>
            </li>
        </ul>
        ),
        image: '/web-development.png',
      }]
  return (
    <>
        <div className='px-4 py-20 mt-15 md:px-20 font-ubuntu bg-achu'>
      <div className="relative">
      <h3 className="pl-3 text-5xl font-ubuntu font-bold text-gray-900 text-center">WHAT WE <span className="text-bull">DO</span></h3>
    </div>
      <div className="mt-10 grid gap-8 md:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={classNames('rounded-2xl py-8 px-4 shadow-md md:px-8 hover:border-zinc-50 border-transparent border-4 hover:shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]', getBackgroundClass(index))}
          >
            <div className='flex'>
            {/*<Image src={service.image} height={80} width={80} alt={service.name} />*/}
            </div>
            <h4 className="mt-1 text-xl text-orange-400 font-semibold">{service.name}</h4>
            <div className="mt-4 text-l">{service.description}</div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
  function CheckmarkIcon() {
    return (
        <svg className="flex-shrink-0 w-3.5 h-3.5 text-achu" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
        </svg>
    );
}
};