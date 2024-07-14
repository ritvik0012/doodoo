export default function About(){
    /*<div className = "bg-[url('/bg.jpg')]">*/
    return (
        <div className="sm:flex items-center justify-center max-w-screen-xl mx-auto mt-10">
        <div className="sm:w-2/3 p-10">
            <div className="image object-center text-center mt-10">
                <img src="/logo.jpeg" />
            </div>
        </div>
        <div className="sm:w-2/3 p-5">
            <div className="text">
                {/*<span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>*/}
                <h1 className="my-4 font-ubuntu text-gray-900 font-bold text-5xl ">WHO WE <span className="text-bull">ARE</span>
                </h1> 
                <p className=" my-4 mt-10 font-semi-bold text-gray-900 font-ubuntu text-2xl">
                We are Equity Street Investment Advisor, a SEBI registered financial investment advisory firm based in Bangalore. We offer personalized financial planning and advisory services to a diverse range of clients including Non Resident Indians, Entrepreneurs,  HNW Individuals and young professionals seeking expert financial advice.

                <br/><br/>
Equity Street Investment Advisor was founded with a vision to provide customer specific financial plans and solutions to individuals looking to  grow, diversify and preserve their wealth. We focus on personalized services and a client-centric approach to build long-lasting relationships with our clients based on trust, transparency, confidence and exceptional service.

                </p>
            </div>
            {/*<button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">Learn more</button>*/}
        </div>
    </div>
    )
}