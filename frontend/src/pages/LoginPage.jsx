import React, { useState } from "react";
import "../style/Login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CodeBroLogo from "../components/CodeBroLogo";
import { setName, setEmail, setPassword } from "../store/userSlice";
import { Button, Stack } from "@chakra-ui/react";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { backendurl } from "../javascripts/urls";
import { storeUserImage } from "../store/userSlice";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    if (userEmail == "" || userPassword == "") {
      toast.error("Enter all feilds!", {
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
    setIsLoading(true);

    axios
      .post(`${backendurl}/login`, {
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

          let imageId = result.data.image;
          console.log("imageId received: ", imageId);

          let imageURL = `${backendurl}/assets/${imageId}`;

          storeUserImage(imageURL);
          console.log("imageURL: ", imageURL);
          localStorage.setItem("userImage", imageURL);

          setTimeout(() => {
            setTimeout(() => {
              setIsLoading(false);
              navigate("/home");
            }, 2500);
            toast.success("Logging In!", {
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
            toast.error("User Not Found", {
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
            setIsLoading(false);
          }, 1500);
        }
      })
      .catch((err) => console.log(err));
    // .finally(() => setIsLoading(false));
  };

  const toastShower = () => {
    toast.success("🦄 Wow so easy!", {
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
  };

  return (
    <div className="mainContainer">
      <div
        style={{ borderRadius: "3vw" }}
        className="login-container bg-card shadow-lg w-full max-w-md"
      >
        <div className="px-6 py-8 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-muted-foreground">
              Enter your credentials to access your account.
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium">
                Email
              </label>
              <input
                id="username"
                type="text"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Enter your email"
                className="p-3 font-bold block w-full h-[40px] rounded-xl border-neutral-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                placeholder="Enter your password"
                className="p-3 font-bold block w-full h-[40px] rounded-xl border-neutral-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>
          </div>
          <div className="Btn flex justify-center items-center">
            <Stack direction="row" spacing={4}>
              {isLoading ? (
                <Button isLoading colorScheme="teal" variant="solid">
                  Loading
                </Button>
              ) : (
                <Button
                  colorScheme="teal"
                  variant="outline"
                  width={"full"}
                  onClick={handleSubmit}
                  // className="w-full rounded-md h-auto bg-gray-900 hover:bg-gray-800 text-white px-4 py-3"
                >
                  Login
                </Button>
              )}
            </Stack>
          </div>
        </div>
      </div>
      <ToastContainer transition={Flip} />
    </div>
  );
}
