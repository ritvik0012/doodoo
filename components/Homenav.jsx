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


export default function Homenav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-red-800">
      <nav className="mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1 items-center">
  <div className="flex items-center -m-1.5 p-1.5">
    <div className="flex items-center">
      <Link href="/" className="ml-3 text-5xl font-test font-bold text-achu">EQUITYSTREET <br/><div className="text-[1.375rem]">SEBI&nbsp;Registered&nbsp;Investment&nbsp;Advisor</div></Link>
      {/*<Image className="h-20 w-auto" src="/doodoo.png" alt="Your Company" width={700} height={800} />*/}
    </div>
  </div>
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
          <Link href='/whoweare' className="text-l text-bold font-ubuntu text-gray-900 dark:text-orange-400 hover:underline decoration-sky-600 hover:decoration-gray-800 ">
            Who we are
          </Link>
          <Link href='/whatwedo' className="text-l text-bold font-ubuntu text-gray-900 dark:text-orange-400 hover:underline decoration-sky-600 hover:decoration-gray-800 ">
            What we do
          </Link>
          <Link href='/whoweassist' className="text-l text-bold font-ubuntu text-gray-900 dark:text-orange-400 hover:underline decoration-sky-600 hover:decoration-gray-800 ">
            Who we assist
          </Link>
          <Link href='/contactus' className="text-l text-bold font-ubuntu text-gray-900 dark:text-orange-400 hover:underline decoration-sky-600 hover:decoration-gray-800">
            Contact us
          </Link>
          <Link href='/talktous' className="text-l text-bold font-ubuntu text-gray-900 dark:text-orange-400 hover:underline decoration-sky-600 hover:decoration-gray-800">
            Talk to us
          </Link>
        </Popover.Group>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/login" className="text-2xl text-white bg-gray-800 font-test hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-2xl px-4 py-3 me-2 mb-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
          Login <span aria-hidden="true"></span>
          </Link> </div>
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
              </div>
              <div className="py-6">
              <div
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 w-40 hover:bg-gray-700 text-center"
                >
                  <Link href="/whoweare">
                  WHO WE ARE
                  </Link>
                </div>
                <div
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 w-40 hover:bg-gray-700 text-center"
                >
                  <Link href="/whatwedo">
                  WHAT WE DO
                  </Link>
                </div>
                <div
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 w-40 hover:bg-gray-700 text-center"
                >
                  <Link href="/whoweassist">
                  WHO WE ASSIST
                  </Link>
                </div>
                <div
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 w-40 hover:bg-gray-700 text-center"
                >
                  <Link href="/contactus">
                  CONTACT US
                  </Link>
                </div>
                <div
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 w-40 hover:bg-gray-700 text-center"
                >
                  <Link href="/talktous">
                  TALK TO US
                  </Link>
                </div>
                <div
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 w-40 hover:bg-gray-700 text-center"
                >
                  <Link href="/login">
                  LOGIN
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
