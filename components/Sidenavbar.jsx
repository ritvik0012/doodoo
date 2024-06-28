import { useState } from 'react';

const navigation = [
  { name: 'Dashboard', href: 'Dashboard', icon: '🏠' },
  { name: 'MF under advice', href: 'Portfolio', icon: '⚙️' },
  { name: 'Equity Stocks under advice', href: 'Stocks', icon: '⚙️' },
  { name: 'Assets under advice', href: 'Assets', icon: '⚙️' },
];

export default function Sidebar({ setPortfolio, setDashboard, setAsset, setStock }) {
  const [activeItem, setActiveItem] = useState(navigation[0].href);
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (href) => {
    setActiveItem(href);
    setIsOpen(false);
    if (href === 'Dashboard') {
      setDashboard(true);
      setPortfolio(false);
      setAsset(false)
      setStock(false)
    } else if(href === 'Portfolio'){
      setPortfolio(true);
      setDashboard(false);
      setAsset(false)
      setStock(false)
    } else if(href === 'Assets'){
      setAsset(true)
      setDashboard(false);
      setPortfolio(false);
      setStock(false)

    } else if(href === 'Stocks'){
      setStock(true)
      setAsset(false)
      setDashboard(false);
      setPortfolio(false);
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0 sm:relative`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
          <ul className="space-y-2 font-medium">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  onClick={() => handleItemClick(item.href)}
                  className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer ${
                    activeItem === item.href ? 'bg-gray-200 dark:bg-gray-700' : ''
                  }`}
                >
                  <span className="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400">
                    {item.icon}
                  </span>
                  <span className="ms-3">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
