import React, { useState } from "react";
import "../style/Register.scss";
import { Button, Stack } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setId, setName, setEmail, setPassword } from "../store/userSlice";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!#%*&])[A-Za-z\d@$!#%*&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = () => {
    if (!userEmail || !userName || userPassword == "") {
      toast.error("Enter the all Feilds", {
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
      return;
    }
    if (userPassword.length < 8) {
      toast.error("Password should be atleast 8 Characters", {
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
      return;
    }
    if (!validatePassword(userPassword)) {
      toast.error(
        "Enter a strong password, Including Capital letter, special characters, and numbers",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Flip,
        }
      );
      return;
    }

    setIsLoading(true);

    localStorage.setItem("name", userName);
    localStorage.setItem("email", userEmail);
    localStorage.setItem("password", userPassword);
    localStorage.setItem("insta", "");
    localStorage.setItem("github", "");
    localStorage.setItem("linkedin", "");
    localStorage.setItem("userImage", "");
    localStorage.setItem("rank", "Unranked");

    axios
      .post("http://localhost:3000/createUser", {
        userName,
        userEmail,
        userPassword,
      })
      .then((result) => {
        if (result.data !== false) {
          dispatch(setId(result.data._id));
          dispatch(setName(userName));
          dispatch(setEmail(userEmail));
          dispatch(setPassword(userPassword));
          setTimeout(() => {
            setIsLoading(false);

            navigate("/home");
          }, 2000);
          toast.success("Signning Up!", {
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
          return;
        } else {
          setIsLoading(false);
          navigate("/register");
          toast.error("Email already taken", {
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
          return;
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 dark:bg-gray-950 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="w-full max-w-md border-4 border-white font-bold rounded-md p-6">
        <div className="space-y-1 text-center">
          <h1 className="text-2xl text-white">Sign Up</h1>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="username" className="text-gray-400">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              className="w-full rounded-md bg-gray-800 border-gray-700 text-gray-200 placeholder:text-gray-500 px-4 py-3"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-gray-400">
              User Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
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
              type="password"
              placeholder="Enter your password"
              value={userPassword}
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
                className="w-full h-auto rounded-md bg-gray-900 hover:bg-gray-800 text-white px-4 py-3"
              >
                Sign Up
              </button>
            )}
          </Stack>
        </div>
        <ToastContainer transition={Flip} />
      </div>
    </div>
  );
}
