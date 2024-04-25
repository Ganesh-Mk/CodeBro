import React, { useState } from "react";
import "../style/Login.scss";
import { images } from "../assets/images";
import { account } from "../appwrite/appwriteConfig";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [userData, setuserData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const SubmitHandler = () => {
    console.log(userData);

    const promise = account.createEmailPasswordSession(userData.email, userData.password);

    promise.then(
      function (response) {
        console.log(response);
        navigate('/home')


      },
      function (error) {
        console.log(error); // Failure
      }
    );
  };

  return (
    <div className="LoginContainer">
      <div className="logoContainer">
        <span className="logo">&lt;&nbsp;</span>
        <span className="logo code">Code</span>
        <span className="logo">Bro</span>
        <span className="logo">&nbsp;&frasl;&gt;</span>
      </div>
      <div className="Login-Container">
        <div className="LoginBox">
          <h5>Log in</h5>
          <div className="inputs">
            <form action="">
              <input
                type="email"
                placeholder="Enter your email"
                value={userData.email}
                onChange={(e) =>
                  setuserData({ ...userData, email: e.target.value })
                }
                required
              />
              <input
                type="password"
                placeholder="Enter your password"
                value={userData.password}
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
      <div className="LoginPart2">
        <button className="google-signIn">
          Log in with <img src={images.google} alt="" />
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
