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
import "../style/AboutUs.scss";
import Navbar from "../components/Navbar.jsx";
import { Link } from "react-router-dom";

export default function AboutUsPage() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  // const backend_url = import.meta.env.REACT_APP_BACKEND_URL;

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:ganeshmk247@gmail.com?subject=Feedback from ${name}&body=${message}`;
    window.location.href = mailtoLink;

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
      <Navbar />
      <div className="container overflow-y-scroll w-full h-screen ">
        <div className="text-center w-full space-y-2">
          <h1 className="text-3xl mt-[2vw] md:text-4xl lg:text-5xl font-bold text-[#ffffff]">
            About Us
          </h1>
          <p className="text-[#e2e2e2] max-w-[700px] mx-auto">
            Meet the Minds Behind the Magic
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
                  <h4 className="text-[30px]">Tej</h4>
                  <div className="flex gap-5 mt-2">
                    <a
                      href="https://www.instagram.com/tej.hagargi/"
                      target="_blank"
                      className="text-gray-400 hover:text-gray-50"
                    >
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
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tej-hagargi-/"
                      target="_blank"
                      className="text-gray-400 hover:text-gray-50"
                    >
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
                    <a
                      href="https://github.com/tejhagargi9"
                      target="_blank"
                      className="text-gray-400 hover:text-gray-50"
                    >
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
                    I contributed to this project with a focus on frontend
                    development, project planning in excalidraw, user
                    authentication, quality assurance testing, and data
                    integration.
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
                <h4 className="text-[30px]">Ganesh</h4>
                <div className="flex gap-5 mt-2                                                                                                                                                    ">
                  <a
                    href="https://www.instagram.com/ganesh_mk_247/"
                    target="_blank"
                    className="text-gray-400 hover:text-gray-50"
                  >
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
                  <a
                    href="https://www.linkedin.com/in/ganesh-koparde/"
                    target="_blank"
                    className="text-gray-400 hover:text-gray-50"
                  >
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
                  <a
                    href="https://github.com/Ganesh-Mk/"
                    target="_blank"
                    className="text-gray-400 hover:text-gray-50"
                  >
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
                  I contributed to this project with a focus on full stack
                  development, which included project planning, designing,
                  making it responsive, frontend, backend, and database.
                </Text>
              </CardBody>
            </Stack>
          </Card>
        </div>
        <div className="mt-12 mb-10 px-10 md:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 rounded-2xl p-6 space-y-4">
            <h3 className="text-[40px] font-semibold">Get in Touch</h3>
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <div className="aboutUsMailBox">
                  <div>
                    <Link to="mailto:tejhagargi9@gmail.com">
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
                      <p>Tej</p>
                    </Link>
                  </div>

                  <div>
                    <Link to="mailto:ganeshmk247@gmail.com">
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
                      <p>Ganesh</p>
                    </Link>
                  </div>
                </div>
              </div>
              <p className="text-[18px] pt-5">
                If you have any queries and found any bugs in this website
                please share with us via email, we are always glad to hear you
                out and don't forget to give us feedback. <br /> <br /> Thank
                you for visiting our website
              </p>
            </div>
          </div>
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

          {/* </div> */}
        </div>
        <FooterComp />
      </div>
    </div>
  );
}
