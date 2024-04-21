export default function About(){
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
                <h1 className="my-4 font-bold text-6xl ">About <span className="text-indigo-600">Doodoo</span>
                </h1>
                <p className=" my-4 font-semi-bold text-white text-3xl">
                Experience unbiased, product-agnostic investment advice personalised to your goals & aspirations.
                </p>
            </div>
        </div>
    </div>
    )
}