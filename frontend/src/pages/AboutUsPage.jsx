import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import FooterComp from '../components/FooterComp'
import axios from 'axios';
import '../style/AboutUs.scss'
import { images } from '../javascripts/images';

export default function AboutUsPage() {
const [name, setname] = useState('')
const [email, setemail] = useState('')
const [message, setmessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/userMessages', {name, email, message})
    .then((res) => {
      console.log(res);
      setemail('')
      setname('')
      setmessage('')
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <Navbar/>
    <div className="w-full min-h-screen flex flex-col">
      <div className="px-4 md:px-6 py-12 md:py-20 lg:py-24 flex-1">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text- text-white md:text-5xl">About Us</h1>
          <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
            We are a team of passionate developers dedicated to creating innovative solutions. Learn more about our team
            members below.
          </p>
        </div>
        <div className="creatorPhotos">
          <div className='tejPhoto'>
            <img src={images.photo1} alt="" />
          </div>
          <div className="ganeshPhoto">
            <img src={images.photo1} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-gray-200 dark:bg-gray-700 w-12 h-12 flex items-center justify-center text-2xl font-bold">
                TM
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Tej MH</h3>
                <p className="text-gray-500 dark:text-gray-400">Frontend and Authentication </p>
                <div className="flex items-center gap-5 mt-2">
                  <a href="https://www.linkedin.com/in/tej-hagargi-/" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a href="https://github.com/tejhagargi9" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/tej.hagargi/?hl=en" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              Hi! I'm Tej curently pursuing Bachelor's in Computer Application in KLE SOCIETY'S COLLEGE OF BCA, GOKAK passionate about coding and web development specific in MERN Stack, I have finished my high school and puc in Gokak itself, hit the linkedIn and let's connect and explore.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-gray-200 dark:bg-gray-700 w-12 h-12 flex items-center justify-center text-2xl font-bold">
                GM
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Ganesh MK</h3>
                <p className="text-gray-500 dark:text-gray-400">Structure and Backend</p>
                <div className="flex items-center gap-5 mt-2">
                  <a href="https://www.linkedin.com/in/ganesh-koparde/" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a href="https://github.com/Ganesh-Mk/" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/ganesh_mk_247/?hl=en" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <p className="text-gray-500 dark:text-gray-400">
            Hi! I'm Ganesh curently pursuing Bachelor's in Computer Application in KLE SOCIETY'S COLLEGE OF BCA, GOKAK passionate about coding and web development specific in MERN Stack, I have finished my high school and puc in Gokak itself, hit the linkedIn and let's connect and explore.
            </p>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mt-10 grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  placeholder="Enter your name"
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  placeholder="Enter your email"
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setmessage(e.target.value)}
                  rows="4"
                  placeholder="Enter your message"
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 h-auto w-auto text-2xl font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 space-y-4">
            <h2 className="text-2xl font-bold">Get In Touch</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laborum quae culpa enim tempora.
            </p>
            <div className="space-y-2">
              <div>
                <h3 className="text-lg font-semibold text-white">Address</h3>
                <p className="text-gray-500 dark:text-gray-400">Gokak, KA</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Phone Number</h3>
                <p className="text-gray-500 dark:text-gray-400">+91 8888898989</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">E-Mail</h3>
                <p className="text-gray-500 dark:text-gray-400">xyz@abcde.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterComp/>
    </div>
  );
}
