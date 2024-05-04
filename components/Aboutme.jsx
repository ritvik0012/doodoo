export default function About(){
    /*<div className = "bg-[url('/bg.jpg')]">*/
    return (
        <div className="sm:flex items-center justify-center max-w-screen-xl mx-auto">
        <div className="sm:w-1/3 p-10">
            <div className="image object-center text-center">
                <img src="https://i.imgur.com/WbQnbas.png" />
            </div>
        </div>
        <div className="sm:w-2/3 p-5">
            <div className="text">
                {/*<span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>*/}
                <h1 className="my-4 font-bold text-6xl ">Equity <span className="text-indigo-600">Trust</span>
                </h1>
                <p className=" my-4 font-semi-bold text-white text-2xl">
                Experience unbiased, product-agnostic investment advice personalised to your goals & aspirations.
                </p>
            </div>
            <button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">Learn more</button>
        </div>
    </div>
    )
}