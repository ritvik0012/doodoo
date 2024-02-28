// components/Sidebar.js
import { useState } from 'react';

// Example navigation items. You can replace these with your actual navigation links and icons.
const navigation = [
  { name: 'Dashboard', href: 'Dashboard', icon: '🏠' },
  { name: 'Portfolio', href: 'Portfolio', icon: '⚙️' },
  // Add more navigation items here
];

export default function Sidebar({setPortfolio, setDashboard}) {
  const [activeItem, setActiveItem] = useState(navigation[0].href);

  const handleItemClick = (href) => {
    setActiveItem(href);
    if(href === 'Dashboard'){
        setDashboard(true)
        setPortfolio(false)
    }
    else{
        setPortfolio(true)
        setDashboard(false)
    }
  };

  return (
    <div className="h-full w-64 bg-white text-black">
      <div className="py-2 px-2">
        {navigation.map((item) => (
          <button
            key={item.name}
            onClick={() => handleItemClick(item.href)}
            className={`flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-200 ${
              activeItem === item.href ? 'bg-gray-100' : ''
            } w-full text-left`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="ml-3">{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
