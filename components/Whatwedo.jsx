
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
        name: 'PERSONALIZED FINANCIAL PLANNING',
        description: (
            <ul className="space-y-4 text-left ml-15 text-white dark:text-white">
            <li className="flex items-center space-x-3">
                <CheckmarkIcon />
                <span>Personalized financial planning services  to meet  specific financial life goals</span>
            </li>
            <li className="flex items-center space-x-3">
                <CheckmarkIcon />
                <span> Customized & well structured financial models based on  life goals, disciplined approach and client risk profile.</span>
            </li>
            <li className="flex items-center space-x-3">
                <CheckmarkIcon />
                <span>Strategic asset allocation methodology with  tactical asset allocation adapting to market dynamism to maximize rewards with minimum risk.</span>
            </li>
        </ul>
        ),
        image: '/nri.png',
      },
      {
        name: 'FINANCIAL ASSET MANAGEMENT',
        description: (
            <ul className="space-y-4 text-left ml-15 text-white dark:text-white">
            <li className="flex items-center space-x-3">
                <CheckmarkIcon />
                <span>Client specific financial asset management services to create long term client wealth. </span>
            </li>
            <li className="flex items-center space-x-3">
                <CheckmarkIcon />
                <span>Client specific asset allocation & equity diversification to optimise risk return reward  </span>
            </li>
            <li className="flex items-center space-x-3">
                <CheckmarkIcon />
                <span>Client specific equity portfolio models and continuous monitoring & rebalancing as required. </span>
            </li>
        </ul>
        ),
        image: '/busy.png',
      },
      {
        name: 'RETIREMENT PLANNING',
        description: (
            <ul className="space-y-4 text-left mt-12 ml-15 text-white dark:text-white">
            <li className="flex items-center space-x-3">
                <CheckmarkIcon />
                <span>Customized financial planning and strategies ensuring financial security during happy retired years.</span>
            </li>
            <li className="flex items-center space-x-3">
                <CheckmarkIcon />
                <span>Suitable asset allocation and investment diversification as per client risk profile.</span>
            </li>
            <li className="flex items-center space-x-3">
                <CheckmarkIcon />
                <span>Experience magic of compounding by starting early.</span>
            </li>
        </ul>
        ),
        image: '/web-development.png',
      },
      {
        name: 'INVESTMENT ADVISORY SERVICES',
        description: (
            <ul className="space-y-4 text-left ml-15 text-white dark:text-white">
            <li className="flex items-center space-x-3">
                <CheckmarkIcon />
                <span>Comprehensive advice and report tailored to specific investment decision requirements of clients.</span>
            </li>
            <li className="flex items-center space-x-3">
                <CheckmarkIcon />
                <span>Advice and optimization of specific equity and mutual fund portfolios.</span>
            </li>
            <li className="flex items-center space-x-3">
                <CheckmarkIcon />
                <span>Advice on financial assessment of new projects and investment decisions.</span>
            </li>
        </ul>
        ),
        image: '/web-development.png',
      }]
  return (
    <>
        <div className='px-4 py-20 mt-15 md:px-20 font-test'>
      <div className="relative">
      <h3 className="pl-3 text-6xl font-test font-bold text-gray-900 text-center">WHAT WE <span className="text-bull">DO</span></h3>
    </div>
      <div className="mt-10 grid gap-8 md:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={classNames('rounded-2xl py-8 px-4 text-center shadow-md md:px-8', getBackgroundClass(index))}
          >
            <div className='flex justify-center'>
            {/*<Image src={service.image} height={80} width={80} alt={service.name} />*/}
            </div>
            <h4 className="mt-1 text-3xl text-orange-400 font-semibold">{service.name}</h4>
            <div className="mt-4 text-xl text-justify">{service.description}</div>
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