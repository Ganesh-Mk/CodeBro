import React, { useState } from "react";
import "../style/Register.scss";
import { images } from "../assets/images";
import { useNavigate } from "react-router-dom";
import { account, ID } from '../appwrite/appwriteConfig'
import { AppwriteException } from "appwrite";

function RegisterPage() {
  const navigate = useNavigate();

  const googlesignup = async() => {
    const res = await account.createOAuth2Session(
      "google",
      "http://localhost:5173/login",
      "http://localhost:5173/register",
    );
    console.log(res);

  };

  const [userData, setuserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const SubmitHandler = async () => {
    try {
      // Create account
      const response = await account.create(
        ID.unique(),
        userData.email,
        userData.password,
        userData.name
      );
      console.log("Account created successfully:", response);

      // Redirect to login page
      navigate("/login");
      setuserData({
        name: "",
        email: "",
        password: "",
      });
    } catch (err) {
      if (err instanceof AppwriteException) {
        if (err.message.includes("Invalid `email` param")) {
          alert('Invalid Email: ' + err.message);
        } else if (err.message.includes("Invalid `password` param")) {
          alert('Password must be at least 8 characters long');
        } else {
          alert('Server Error, try again')
        }
      }
    }
  };

  return (
    <div className="RegisterContainer">
      <div className="logoContainer">
        <span className="logo">&lt;&nbsp;</span>
        <span className="logo code">Code</span>
        <span className="logo">Bro</span>
        <span className="logo">&nbsp;&frasl;&gt;</span>
      </div>
      <div className="SignUp-Container">
        <div className="SignUpBox">
          <h2>Sign Up</h2>
          <div className="inputs">
            <form action="">
              <input
                type="text"
                placeholder="Enter your name"
                value={userData.name}
                onChange={(e) =>
                  setuserData({ ...userData, name: e.target.value })
                }
                required
              />
              <input
                type="email"
                value={userData.email}
                placeholder="Enter your email"
                onChange={(e) =>
                  setuserData({ ...userData, email: e.target.value })
                }
                required
              />
              <input
                type="password"
                value={userData.password}
                placeholder="Enter new password"
                onChange={(e) =>
                  setuserData({ ...userData, password: e.target.value })
                }
                required
              />
            </form>
          </div>
          <button onClick={SubmitHandler}>Submit</button>
        </div>
      </div>
      <span className="or">or</span>
      <div className="SignUpPart2">
        <button onClick={googlesignup} className="google-signIn">
          Sign up with <img src={images.google} alt="" />
        </button>
      </div>
    </div>
  );
}

export default RegisterPage;
