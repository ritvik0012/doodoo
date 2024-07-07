import Image from 'next/image';
import React from 'react';
import {useState} from 'react'
import axios from 'axios'
const Contact = () => {
  const [email,setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const onButtonClick = () => {
    axios.post("api/contactus", {email:email, subject:subject, message:message})
            .then((response) => {
                  console.log(response.data);
                  if(response.data.message === 'success'){
                    window.alert("Message successfully sent!");
                  }
                  else{
                    window.alert('The entered email id does not exist!');
                  }
             })
            .catch((err) => {
                  console.log(err);
             });
  }
  return (
    <>
    <div className='px-4 py-20 mt-15 md:px-20 font-ubuntu bg-achu'>
      <div className="relative">
      <h3 className="pl-3 text-5xl font-ubuntu font-bold text-gray-900 text-center ">TALK TO <span className="text-bull">US</span></h3>
    </div>
<div className="container my-24 mx-auto md:px-6 bg-gradient-to-r from-gray-800 to-black w-8/12 rounded-3xl">
<section class="">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <p class="mb-8 lg:mb-16 font-light text-center text-white sm:text-2xl">For any investment advisory requirements please reach out to us as below!</p>
      <div class="space-y-8 text-xl">
          <div>
              <label for="email" class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email"  onChange={ev => setEmail(ev.target.value)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
          </div>
          <div>
              <label for="subject" class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" onChange={ev => setSubject(ev.target.value)} class="block p-3 w-full text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Your message</label>
              <textarea id="message" rows="6" onChange={ev => setMessage(ev.target.value)} class="block p-2.5 w-full text-xl text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" onClick={onButtonClick} class="py-3 px-5 text-xl font-medium text-center justify-center items-center text-white rounded-lg bg-gray-700 sm:w-fit hover:bg-gray-800 hover:border-zinc-50 border-transparent border-2 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </div>
  </div>
</section>
</div>
</div>
    </>
  );
};

export default Contact;