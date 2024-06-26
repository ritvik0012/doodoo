import {useState} from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';


export default function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const onButtonClick = () => {
        if(!email || !password || !username){
            window.alert("Fields are empty!");
        }
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
            window.alert('Invalid email format');
        }
        else {
            axios.post("api/signup" ,{email: email, password: password, username: username})
            .then((response) => {
                console.log(response.data.message)
                if(response.data.message === "success"){
                    window.alert('Successfully registered user');
                    router.push('/login')
                }
                else{
                    window.alert(response.data.message);
                }
            })
        }
    }
    return (
        <section className="bg-gray-50 bg-gray-900 min-h-screen">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="/" className="flex font-test items-center mb-6 text-5xl font-semibold text-gray-900 text-white">
         EQUITYSTREET
      </a>
      <div className="w-full rounded-lg shadow dark:border md:mt-10 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-white">
                   Register an account
              </h1>
              <div className="space-y-4 md:space-y-6" >
                  <div>
                      <label className="block mb-2 text-sm font-medium text-white">Your email</label>
                      <input type="email" name="email" id="email" onChange={ev => setEmail(ev.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-white">Your username</label>
                      <input type="username" name="username" id="username" onChange={ev => setUsername(ev.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-white">Password</label>
                      <input type="password" name="password" id="password" onChange={ev => setPassword(ev.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                
                  <button type="submit" onClick={onButtonClick} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800">Sign up</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Log in</a>
                  </p>
              </div>
          </div>
      </div>
  </div>
</section>
    )
  }