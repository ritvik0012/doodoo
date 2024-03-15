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
                <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-indigo-600">Doodoo</span>
                </h2>
                <p className=" my-4 font-semi-bold text-white">
                My name is James Willer. I graduated from MIT a month ago. Now, I am looking for my first full-time job. I have been working as a freelance web developer for the last three years and cooperated with several startups. I cannot say with 100% confidence where I see myself in five years or what my big career goal is. The world is changing rapidly, and I don’t have enough professional experience to be certain about such things. However, I know that I can provide a fresh take and an extraordinary approach to every project. I am always open to challenges and constructive feedback. I am open-minded and learn new things quickly. I want to become a team player and dedicate all my skills and talents to develop high-quality and unique products.
                </p>
            </div>
        </div>
    </div>
    )
}