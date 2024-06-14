// Ensure you have installed Next.js and Tailwind CSS in your project.

import React from "react";
import FooterComp from "../components/FooterComp.jsx";
import { images } from "../javascripts/images";

export default function AboutUsPage() {
  return (
        <div className="container overflow-y-scroll h-screen">
          <div className="text-center space-y-2 mb-12">
            <h1 className="text-3xl mt-10 md:text-4xl lg:text-5xl font-bold">
              About Us
            </h1>
            <p className="text-gray-400 max-w-[700px] mx-auto">
              Learn more about the team behind our innovative solutions.
            </p>
          </div>
          <div className="grid px-10 pt-10 grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex border-slate-900 gap-6">
              <div className="w-32 md:w-40 lg:w-48 shrink-0">
                <img
                  src={images.photo1}
                  width={192}
                  height={256}
                  alt="John Doe"
                  className="rounded-2xl object-cover"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">John Doe</h3>
                <div className="flex gap-5">
                  <a href="#" className="text-gray-400 hover:text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>
                </div>
                <p className="text-gray-400">
                  John is a seasoned software engineer with a passion for
                  building innovative solutions. He has a wealth of experience
                  in the industry and is always eager to learn and grow.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-32 md:w-40 lg:w-48 shrink-0">
                <img
                  src={images.ganesh}
                  width={192}
                  height={256}
                  alt="Jane Smith"
                  className="rounded-2xl object-cover"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <div className="flex gap-5                                                                                                                                                    ">
                  <a href="#" className="text-gray-400 hover:text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>
                </div>
                <p className="text-gray-400">
                  Jane is a talented designer with a keen eye for detail. She
                  collaborates closely with the engineering team to ensure our
                  products are not only functional but also visually stunning.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 mb-10 px-10 md:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-2xl p-6 space-y-4">
              <h3 className="text-xl font-semibold">Give Us Feedback</h3>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-800 rounded-md px-4 py-3 text-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-800 rounded-md px-4 py-3 text-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
                <textarea
                  placeholder="Enter your message"
                  className="w-full bg-gray-800 rounded-md px-4 py-3 text-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-600 resize-none h-32"
                />
                <button
                  type="submit"
                  className="bg-gray-700 hover:bg-gray-600 text-gray-50 h-auto rounded-md px-4 py-3 w-full"
                >
                  Submit Feedback
                </button>
              </form>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 space-y-4">
              <h3 className="text-xl font-semibold">Get in Touch</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-gray-400"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+1 (123) 456-7890</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-gray-400"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>123 Main St, Anytown USA</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-gray-400"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>info@acme.com</span>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        <FooterComp/>

        </div>
  );
}
