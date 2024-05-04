import React from 'react';

export default function TestComponent() {
    const services = [
        {
            id: 1,
            title: "PERSONALISED FINANCIAL PLANNING ",
            description: "The demand for personalized financial planning services is on the rise, as individuals seek tailored strategies to meet their specific investment goals. . Based on  life goals , we design, execute and monitor financial plans for the identified goals.",
            bgColor: "bg-gray-800",
        },
        {
            id: 2,
            title: "PORTFOLIO MANAGEMENT",
            description: "Investment portfolio management services are increasingly sought after by non-resident Indians, entrepreneurs, and high net worth individuals looking to grow and protect their wealth. We offer portfolio management services focusing on asset allocation, diversification and risk return reward  to optimize investment portfolios for clients based on their risk profile.",
            bgColor: "bg-gray-800",
        },
        {
            id: 3,
            title: "RETIREMENT PLANNING",
            description: "Retirement planning services are becoming essential as people look to create customized financial planning and strategies for a secure and comfortable retirement.",
            bgColor: "bg-gray-800",
        },
        {
            id: 4,
            title: "INVESTMENT ADVISORY SERVICES",
            description: "We offer investment advisory services that provide comprehensive advice and report tailored to individual goals and risk tolerance for their investment decision and  requirements.",
            bgColor: "bg-gray-800",
        },
    ];

    return (
      <>
      <div className="px-4 py-20 md:px-20">
          <div className="text-center mb-10">
              <h3 className="text-6xl font-bold">What we do</h3>
          </div>
          <div className="flex flex-wrap justify-center md:flex-nowrap">
              <div className="w-full md:w-2/3 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {services.map((service) => ( 
                          <div key={service.id} className={`p-6 rounded-lg shadow ${service.bgColor}`}>
                              <h2 className="font-bold text-3xl mb-2 text-orange-400 text-center">{service.title}</h2>
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
}
