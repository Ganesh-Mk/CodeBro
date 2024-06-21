import React, { useState } from "react";
import "../style/Login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CodeBroLogo from "../components/CodeBroLogo";
import { setName, setEmail, setPassword } from "../store/userSlice";
import { Button, Stack } from "@chakra-ui/react";
import { Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {

    setIsLoading(true);
   
      
    
    axios
      .post("http://localhost:3000/login", {
        userEmail,
        userPassword,
      })
      .then((result) => {
        console.log(result);
          // toastShower()
        if (result.data !== false) {
          dispatch(setName(result.data.name));
          dispatch(setEmail(result.data.email));
          dispatch(setPassword(result.data.password));

          localStorage.setItem("name", result.data.name);
          localStorage.setItem("email", userEmail);
          localStorage.setItem("password", userPassword);
          setTimeout(() => { 
            setTimeout(() => {
              setIsLoading(false)
              navigate("/home");
            }, 2500)
            toast.success('Logging In!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Flip,
              });
          }, 2000);
        } else {
          setTimeout(() => {
            toast.error('User Not Found', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Flip,
              });
          setIsLoading(false)

          }, 1500)
        }
      })
      .catch((err) => console.log(err))
      // .finally(() => setIsLoading(false));
  };


  const toastShower = () => {
    toast.success('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 dark:bg-gray-950 px-4 sm:px-6 md:px-8 lg:px-12">
      <ToastContainer />
      <div className="w-full max-w-md border-4 border-white font-bold rounded-md p-6">
        <div className="space-y-1 text-center">
          <h1 className="text-2xl text-white">Login</h1>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-gray-400">
              User Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
              className="w-full rounded-md bg-gray-800 border-gray-700 text-gray-200 placeholder:text-gray-500 px-4 py-3"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-gray-400">
              User Password
            </label>
            <input
              id="password"
              placeholder="Password"
              value={userPassword}
              type="password"
              onChange={(e) => setUserPassword(e.target.value)}
              required
              className="w-full rounded-md bg-gray-800 border-gray-700 text-gray-200 placeholder:text-gray-500 px-4 py-3"
            />
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <Stack direction="row" spacing={4}>
            {isLoading ? (
              <Button isLoading colorScheme="teal" variant="solid">
                Loading
              </Button>
            ) : (
              <button
                onClick={handleSubmit}
                className="w-full rounded-md h-auto bg-gray-900 hover:bg-gray-800 text-white px-4 py-3"
              >
                Login
              </button>
            )}
          </Stack>
        </div>
      </div>
    </div>
  );
}
