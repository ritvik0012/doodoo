import {useEffect, useState} from 'react'
import axios from 'axios'
import {useRouter} from 'next/router';
import {redirect} from 'next/navigation'
export default function Login() {

    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onButtonClick = () => {
        if(!email || !password){
            window.alert("Fields are empty!");
        }
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
            window.alert('Invalid email format');
        }
        else {
            axios.post("api/login" ,{email: email, password: password})
            .then((response) => {
                console.log(response.data.message)
                if(response.data.message === "success"){
                    let user = response.data.doesUserExist;
                    localStorage.setItem("user",JSON.stringify({email: email, username: user.username, documentId: user.documentId}))
                    window.alert('Successfully logged in! Welcome ' + response.data.doesUserExist.username);
                    if(response.data.doesUserExist.isAdmin){
                        router.push('/admin')
                    }
                    else{
                        router.push('/home')
                    }
                }
                else{
                    window.alert(response.data.message);
                }
            })
        }
    }

    return (
        <section className="bg-gray-900 min-h-screen">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="/" className="flex items-center mb-6 text-5xl font-test font-semibold text-gray-900 text-white">
         EQUITYSTREET
      </a>
      <div className="w-full rounded-lg shadow dark:border md:mt-10 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <div className="space-y-4 md:space-y-6" >
                  <div>
                      <label className="block mb-2 text-sm font-medium text-white">Your email</label>
                      <input type="email" name="email" id="email" onChange={ev => setEmail(ev.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-white">Password</label>
                      <input type="password" name="password" id="password" onChange={ev => setPassword(ev.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-white hover:underline dark:text-blue-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" onClick={onButtonClick} className="w-full text-white bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-primary-800">Sign in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </div>
          </div>
      </div>
  </div>
</section>
    )
  }