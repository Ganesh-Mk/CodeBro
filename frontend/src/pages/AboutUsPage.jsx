// Ensure you have installed Next.js and Tailwind CSS in your project.

import React, { useState } from "react";
import FooterComp from "../components/FooterComp.jsx";
import { images } from "../javascripts/images";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import '../style/AboutUs.scss'
import Navbar from "../components/Navbar.jsx";

export default function AboutUsPage() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/userMessages", {
        name,
        email,
        message,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Navbar/>
      <div className="container overflow-y-scroll w-full h-screen bg-[#4b3f3f]">
      <div className="text-center w-full space-y-2">
        <h1 className="text-3xl mt-[2vw] md:text-4xl lg:text-5xl font-bold text-[#ffffff]">
          About Us
        </h1>
        <p className="text-[#e2e2e2] max-w-[700px] mx-auto">
          Know more about the team who had developed this.
        </p>
      </div>
      <div className="grid px-10 pt-10 grid-cols-1 md:grid-cols-2 gap-8">
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          border="1px solid transparent" // This removes the outline
          boxShadow="none" // This removes any box shadow
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={images.photo1}
            alt="Caffe Latte"
          />

          <Stack>
            <div className="divforb">
            <CardBody className="cardbody">
              <h4 className="text-[30px]">Tej MH</h4>
              <p>Worked on Frontend and Authentication</p>
              <div className="flex gap-5 mt-2">
                
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

              <Text py="2" mt={3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, omnis minima. Nihil id quia officia ab aliquam et, enim placeat sequi, doloribus quaerat asperiores quae facere molestiae. Aut, corporis iusto!
              </Text>
            </CardBody>
            </div>
          </Stack>
          
        </Card>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          border="1px solid transparent" // This removes the outline
          boxShadow="none"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={images.ganesh}
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <h4 className="text-[30px]">Ganesh MK</h4>
              <p>Worked on Frontend and Authentication</p>
              <div className="flex gap-5 mt-2                                                                                                                                                    ">
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

              <Text py="2" mt={3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, omnis minima. Nihil id quia officia ab aliquam et, enim placeat sequi, doloribus quaerat asperiores quae facere molestiae. Aut, corporis iusto!
              </Text>
            </CardBody>
          </Stack>
        </Card>

      </div>
      <div className="mt-12 mb-10 px-10 md:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-900 rounded-2xl p-6 space-y-4">
          <h3 className="text-xl font-semibold">Give Us Feedback</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="w-full bg-gray-800 rounded-md px-4 py-3 text-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="w-full bg-gray-800 rounded-md px-4 py-3 text-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <textarea
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
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
          <h3 className="text-[40px] font-semibold">Get in Touch</h3>
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
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
              <span className="text-[15px]">
                +91 8431599187 / +91 9380795986
              </span>
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
              <span className="text-[15px]">Gokak, KA</span>
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
              <span className="text-[15px]">
                tejhagargi9@gmail.com / ganeshmk247@gmail.com
              </span>
            </div>
            <p className="text-[18px] pt-5">
              If you have any queries and found any bugs in this website please
              share with us via email or sms, we are always gald to hear you out
              and don't forget to give us feedback. <br /> <br /> Thank you for
              visiting our website
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>
      <FooterComp />
    </div>
    </div>
  );
}
