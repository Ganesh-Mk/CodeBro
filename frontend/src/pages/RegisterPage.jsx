import React, { useState } from "react";
import "../style/Register.scss";
import { Button, Stack } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setId, setName, setEmail, setPassword } from "../store/userSlice";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { images } from "../javascripts/images";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPasswordRequirements, setShowPasswordRequirements] = useState(false);

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!#%*&])[A-Za-z\d@$!#%*&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = () => {
    if (!userEmail || !userName || userPassword === "") {
      toast.error("Enter all fields", {
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
      toast.error("Password should be at least 8 characters", {
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
        "Enter a strong password, including capital letters, special characters, and numbers",
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
          toast.success("Signing Up!", {
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

  const passwordRequirements = [
    { requirement: "At least 8 characters", test: (pw) => pw.length >= 8 },
    { requirement: "Contains numbers", test: (pw) => /\d/.test(pw) },
    { requirement: "At least one uppercase letter", test: (pw) => /[A-Z]/.test(pw) },
    { requirement: "Contains special characters", test: (pw) => /[@$!#%*&?<>^]/.test(pw) },
  ];
  

  return (
    <div className="container w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="signupBox mx-auto max-w-md space-y-6 w-[410px]">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-muted-foreground">Create your account to get started.</p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-lg space-y-4">
          <div className="space-y-2">
            <label htmlFor="username" className="block text-sm font-medium text-white">
              Username
            </label>
            <input
              id="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              className="p-3 font-bold block w-full rounded-xl h-[40px] border-white shadow-sm sm:text-sm"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              id="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              type="email"
              className="p-3 font-bold block w-full rounded-xl h-[40px] border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              id="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              type="password"
              className="p-3 font-bold block w-full rounded-xl h-[40px] border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              placeholder="Enter your password"
              required
              onFocus={() => setShowPasswordRequirements(true)}
              onBlur={() => setShowPasswordRequirements(false)}
            />
            <div className={`password-r ${showPasswordRequirements ? 'show' : ''}`}>
              <p>Password requirements:</p>
              <ul className="list-disc pl-4">
                {passwordRequirements.map((req, index) => (
                  <li key={index} className={req.test(userPassword) ? "fulfilled" : ""}>
                    {req.requirement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="BtnContainer flex justify-center w-full items-center">
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
        </div>
      </div>
      <ToastContainer transition={Flip} />
    </div>
  );
}
