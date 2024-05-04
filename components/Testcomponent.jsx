import React from 'react';

export default function TestComponent() {
    const services = [
        {
            id: 1,
            title: "PERSONALISED FINANCIAL PLANNING ",
            description: (
                <ul className="space-y-4 text-left ml-15 text-gray-500 dark:text-gray-400">
                <li className="flex items-center space-x-3">
                    <CheckmarkIcon />
                    <span>The demand for personalized financial planning services is on the rise</span>
                </li>
                <li className="flex items-center space-x-3">
                    <CheckmarkIcon />
                    <span> Based on  life goals , we design, execute and monitor financial plans for the identified goals.</span>
                </li>
                <li className="flex items-center space-x-3">
                    <CheckmarkIcon />
                    <span>Team size: <span className="font-semibold text-gray-900 dark:text-white">1 developer</span></span>
                </li>
                <li className="flex items-center space-x-3">
                    <CheckmarkIcon />
                    <span>Premium support: <span className="font-semibold text-gray-900 dark:text-white">6 months</span></span>
                </li>
                <li className="flex items-center space-x-3">
                    <CheckmarkIcon />
                    <span>Free updates: <span className="font-semibold text-gray-900 dark:text-white">6 months</span></span>
                </li>
            </ul>
            ),
            bgColor: "bg-gray-800",
        },
        {
            id: 2,
            title: "PORTFOLIO MANAGEMENT",
            description: (<ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
            <li className="flex items-center space-x-3">
                <CheckmarkIcon />
                <span>Individual configuration</span>
            </li>
            <li className="flex items-center space-x-3">
                <CheckmarkIcon />
                <span>No setup, or hidden fees</span>
            </li>
            <li className="flex items-center space-x-3">
                <CheckmarkIcon />
                <span>Team size: <span className="font-semibold text-gray-900 dark:text-white">1 developer</span></span>
            </li>
            <li className="flex items-center space-x-3">
                <CheckmarkIcon />
                <span>Premium support: <span className="font-semibold text-gray-900 dark:text-white">6 months</span></span>
            </li>
            <li className="flex items-center space-x-3">
                <CheckmarkIcon />
                <span>Free updates: <span className="font-semibold text-gray-900 dark:text-white">6 months</span></span>
            </li>
        </ul>),
            bgColor: "bg-gray-800",
        },
        {
            id: 3,
            title: "RETIREMENT PLANNING",
            description: (<ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
            <li className="flex items-center space-x-3">
                <CheckmarkIcon />
                <span>Individual configuration</span>
            </li>
            <li className="flex items-center space-x-3">
                <CheckmarkIcon />
                <span>No setup, or hidden fees</span>
            </li>
            <li className="flex items-center space-x-3">
                <CheckmarkIcon />
                <span>Team size: <span className="font-semibold text-gray-900 dark:text-white">1 developer</span></span>
            </li>
            <li className="flex items-center space-x-3">
                <CheckmarkIcon />
                <span>Premium support: <span className="font-semibold text-gray-900 dark:text-white">6 months</span></span>
            </li>
            <li className="flex items-center space-x-3">
                <CheckmarkIcon />
                <span>Free updates: <span className="font-semibold text-gray-900 dark:text-white">6 months</span></span>
            </li>
        </ul>),
            bgColor: "bg-gray-800",
        },
        {
            id: 4,
            title: "INVESTMENT ADVISORY SERVICES",
            description: (<ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
            <li className="flex items-center space-x-3">
                <CheckmarkIcon />
                <span>Individual configuration</span>
            </li>
            <li className="flex items-center space-x-3">
                <CheckmarkIcon />
                <span>No setup, or hidden fees</span>
            </li>
            <li className="flex items-center space-x-3">
                <CheckmarkIcon />
                <span>Team size: <span className="font-semibold text-gray-900 dark:text-white">1 developer</span></span>
            </li>
            <li className="flex items-center space-x-3">
                <CheckmarkIcon />
                <span>Premium support: <span className="font-semibold text-gray-900 dark:text-white">6 months</span></span>
            </li>
            <li className="flex items-center space-x-3">
                <CheckmarkIcon />
                <span>Free updates: <span className="font-semibold text-gray-900 dark:text-white">6 months</span></span>
            </li>
        </ul>),
            bgColor: "bg-gray-800",
        },
    ];

    return (
      <>
      <div className="px-4 py-20 md:px-20">
          <div className="text-center mb-10">
              <h3 className="text-6xl font-bold">What We Do</h3>
          </div>
          <div className="flex flex-wrap justify-center md:flex-nowrap">
              <div className="w-full md:w-2/3 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {services.map((service) => ( 
                          <div key={service.id} className={`p-6 rounded-lg shadow ${service.bgColor}`}>
                              <h2 className="font-bold text-2xl mb-2 text-orange-400">{service.title}</h2>
                              <div className="text-xl text-center overflow-auto">{service.description}</div>
                          </div>
                      ))}
                  </div>
              </div>{/*
              <div className="w-full md:w-1/3 p-6 flex justify-center items-center">
                  <img src="https://i.imgur.com/WbQnbas.png" alt="Service Image" className="max-w-full h-auto rounded-lg shadow" />
              </div>
              */
}
          </div>
              
      </div>
  </>
            
    );
    function CheckmarkIcon() {
        return (
            <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
            </svg>
        );
    }
}
