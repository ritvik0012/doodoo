import Link from 'next/link';
export default function Footer(){
    /*<div className = "bg-[url('/bg.jpg')]">*/
    return (
        <>
        <div className="flex items-center justify-center mx-auto border-t-4 border-black bg-achu min-w-screen">
        <div className="sm:w-1/5">
            <div className="image object-center text-center mt-10">
                <img src="/logo.jpeg" />
            </div>
        </div>
        <div className="sm:w-1/5 p-5">
            <div className="text">
                {/*<span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>*/}
                <h1 className="my-4 font-ubuntu text-gray-900 font-bold text-3xl ">IMPORTANT <span className="text-bull">LINKS</span>
                </h1> 

                    <Link href="/investmentcharter" className="text-l text-bold font-ubuntu font-semi-bold text-gray-900 hover:underline decoration-sky-600 hover:decoration-gray-800">
            INVESTMENT CHARTER
          </Link>
               
            </div>
            {/*<button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">Learn more</button>*/}
        </div>
        
    </div>
    <div className="bg-achu p-6">© 2024 Equity Street Investment Advisor Private Limited. All Rights Reserved.</div>
    </>
    )
}