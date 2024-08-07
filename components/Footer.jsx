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
        <div className="sm:w-3/5 p-5">
            <div className="text">
                {/*<span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>*/}
                <h1 className="my-4 font-ubuntu text-gray-900 font-bold text-xl ">IMPORTANT <span className="text-bull">LINKS</span>
                </h1> 

                    <Link href="/investmentcharter" className="text-l text-bold text-bull font-ubuntu font-semi-bold hover:underline decoration-sky-600 hover:decoration-gray-800">
            INVESTMENT CHARTER
          </Link>
          <br></br><br></br>
          Equitystreet Investment advisor is an Individual registered Investment Advisor (RIA)
SEBI Reg.No. INA000019363 | Validity 2nd July 2024 – Perpetual 
BASL membership ID 2185
<br></br><br></br>
Proprietor : MAHESH THANGARAJU, +91 9629484649
Address    : A504, Brigade Exotica , Old Madras Road, Before Budigere Cross, Avalahalli, 
Virgo Nagar post , Bangalore 560049
<br></br><br></br>
SEBI Office Details: SEBI Bhavan BKC, Address: Plot No.C4-A, 'G' Block Bandra-Kurla Complex, 
Bandra (East), Mumbai - 400051, Maharashtra | Tel : +91-22-26449000 / 40459000 | 
Email: sebi@sebi.gov.in SCORES: https://www.scores.gov.in/ | SMARTODR: https://smartodr.in/login
            </div>
            {/*<button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">Learn more</button>*/}
        </div>
        
    </div>
    <div className="bg-achu p-6">© 2024 Equity Street Investment Advisor Private Limited. All Rights Reserved.</div>
    </>
    )
}