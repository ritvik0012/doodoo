import { Fragment, useState, useEffect } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import {useRouter} from 'next/router';
import Image from 'next/image'
import axios from 'axios'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'


export default function Navbar({admin}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const curUser = localStorage.getItem('user');
    const fetchToken = async () => {
      const response = await fetch('api/token');
      const result = await response.json();
      setIsAdmin(result.isAdmin)
    };

    fetchToken();
}, []);
  const onButtonClick = () => {
    axios.post("api/logout")
            .then((response) => {
                  localStorage.removeItem("user")
                  window.alert("Logged out!")
                  router.push('/')
            })

  }

  return (
    <header className="bg-gray-50 dark:bg-gray-800">
      <nav className="mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1 items-center">
  <a href="#" className="flex items-center -m-1.5 p-1.5">
    <div className="flex items-center">
      <span className="ml-3 text-3xl font-bold text-white">DooDoo.</span>
      {/*<Image className="h-20 w-auto" src="/doodoo.png" alt="Your Company" width={700} height={800} />*/}
    </div>
  </a>
</div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">


            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              </Popover.Panel>
            </Transition>
          </Popover>
          {isAdmin && (<Link href='/admin' className="text-xl font-semibold text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 p-2 h-15 w-35 leading-6 text-white">
            Admin Panel
          </Link>)}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {!admin && <button onClick={onButtonClick} className="text-xl font-semibold leading-6 text-white">
          Log out <span aria-hidden="true">&rarr;</span>
          </button> }       </div>
      </nav>
      <Dialog as="div" className="lg:hidden bg-gray-50 dark:bg-gray-800" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10 bg-gray-50 dark:bg-gray-800" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-50 dark:bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 bg-gray" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              {isAdmin && (<Link href='/admin' className="text-xl font-semibold leading-6 hover:bg-gray-100 text-white">
            Admin Panel
          </Link>)}
              </div>
              <div className="py-6">
                {!isAdmin && <button
                  onClick={onButtonClick}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text- hover:bg-gray-50"
                >
                  Log out
                </button>}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
