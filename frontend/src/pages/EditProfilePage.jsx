import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { images } from "../javascripts/images";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../style/EditProfile.scss";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  setName,
  setEmail,
  setPassword,
  setInsta,
  setGithub,
  setLinkedin,
  storeUserImage,
} from "../store/userSlice";

function EditProfilePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userObj = useSelector((state) => state.user);
  const [userName, setUserName] = useState(userObj.name);
  const [userEmail, setUserEmail] = useState(userObj.email);
  const [userPassword, setUserPassword] = useState(userObj.password);
  const [userInsta, setUserInsta] = useState("");
  const [userGithub, setUserGithub] = useState("");
  const [userLinkedin, setUserLinkedin] = useState("");
  const [userImage, setUserImage] = useState(images.accDefaultLogo);

  useEffect(() => {
    setUserName(localStorage.getItem("name"));
    setUserEmail(localStorage.getItem("email"));
    setUserPassword(localStorage.getItem("password"));
    setUserInsta(localStorage.getItem("insta"));
    setUserGithub(localStorage.getItem("github"));
    setUserLinkedin(localStorage.getItem("linkedin"));
    setUserImage(localStorage.getItem("userImage") || images.accDefaultLogo);
  }, []);

  const handleSubmit = () => {
    storeUserImage(userObj.userImage);
    console.log(userImage.split("/").pop().split(".")[0]);

    const userDetails = {
      userEmail,
      userName,
      userPassword,
      userInsta,
      userGithub,
      userLinkedin,
      userImage: userImage.split("/").pop().split(".")[0],
    };

    axios
      .post("http://localhost:3000/updateUserDetails", userDetails)
      .then((result) => {
        const currentName = localStorage.getItem("name");
        const currentEmail = localStorage.getItem("email");
        const currentPassword = localStorage.getItem("password");
        const currentInsta = localStorage.getItem("insta");
        const currentGithub = localStorage.getItem("github");
        const currentLinkedin = localStorage.getItem("linkedin");

        const nameChanged = currentName !== userName;
        const emailChanged = currentEmail !== userEmail;
        const passwordChanged = currentPassword !== userPassword;
        const instaChanged = currentInsta !== userInsta;
        const githubChanged = currentGithub !== userGithub;
        const linkedinChanged = currentLinkedin !== userLinkedin;

        // Update local storage and Redux state
        localStorage.setItem("name", userName);
        localStorage.setItem("email", userEmail);
        localStorage.setItem("password", userPassword);
        localStorage.setItem("insta", userInsta);
        localStorage.setItem("github", userGithub);
        localStorage.setItem("linkedin", userLinkedin);
        localStorage.setItem("userImage", userImage);

        dispatch(setName(userName));
        dispatch(setEmail(userEmail));
        dispatch(setPassword(userPassword));
        dispatch(setInsta(userInsta));
        dispatch(setGithub(userGithub));
        dispatch(setLinkedin(userLinkedin));
        dispatch(storeUserImage(userImage));

        if (
          nameChanged ||
          emailChanged ||
          passwordChanged ||
          instaChanged ||
          githubChanged ||
          linkedinChanged
        ) {
          toast.success("Profile Updated", {
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
        }
        navigate("/account");
      })
      .catch((error) => {
        console.error("Error updating user details:", error);
      });
  };

  const handleReset = () => {
    setUserName(localStorage.getItem("name"));
    setUserEmail(localStorage.getItem("email"));
    setUserPassword(localStorage.getItem("password"));
    setUserInsta(localStorage.getItem("insta"));
    setUserGithub(localStorage.getItem("github"));
    setUserLinkedin(localStorage.getItem("linkedin"));
    setUserImage(localStorage.getItem("userImage") || images.accDefaultLogo);
    toast.success("Reset Successful", {
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
  };

  return (
    <div>
      <Navbar />

      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior={"inside"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Profile Image</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="profileImagesBox">
              {images.profileImages.map((image, index) => (
                <img
                  className="profileImages"
                  key={index}
                  src={image}
                  alt="profile image"
                  onClick={() => {
                    setUserImage(image);
                    onClose();
                  }}
                />
              ))}
            </div>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <div className="editProfile">
        <div className="editHead">
          <h1>Edit Profile</h1>
        </div>
        <div className="editBox">
          <div className="editLeft">
            <img
              style={{ borderRadius: "100vw" }}
              src={userImage}
              alt="account default logo"
            />

            <Button w={"100%"} onClick={onOpen}>
              Choose Image
            </Button>
          </div>
          <div className="editRight">
            <div className="editInputBox">
              <div className="editInput">
                <p>Name</p>
                <Input
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                  placeholder="Enter Your Name"
                ></Input>
              </div>

              <div className="editInput">
                <p>Linkedin</p>
                <Input
                  type="text"
                  onChange={(e) => setUserLinkedin(e.target.value)}
                  value={userLinkedin}
                  placeholder="Paste Your Linkedin Link"
                ></Input>
              </div>

              <div className="editInput">
                <p>Github</p>
                <Input
                  type="text"
                  onChange={(e) => setUserGithub(e.target.value)}
                  value={userGithub}
                  placeholder="Paste Your Github Link"
                ></Input>
              </div>

              <div className="editInput">
                <p>Insta</p>
                <Input
                  type="text"
                  onChange={(e) => setUserInsta(e.target.value)}
                  value={userInsta}
                  placeholder="Paste Your Instagram Link"
                ></Input>
              </div>
            </div>
            <div className="editBtnBox">
              <button className="editBtns" onClick={handleSubmit}>
                Submit
              </button>
              <button className="editBtns" onClick={handleReset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default EditProfilePage;
