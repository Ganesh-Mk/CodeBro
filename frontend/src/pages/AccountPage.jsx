import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import "../style/Account.scss";
import { images } from "../javascripts/images";
import {
  Button,
  CircularProgress,
  CircularProgressLabel,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AllquesObject } from "../javascripts/data";
import { useSelector, useDispatch } from "react-redux";
import DisplayProblemContainer from "../components/DisplayProblemContainer";
import { setLeaderBoardEntries } from "../store/leaderBoardSlice";
import { addTestCaseResults } from "../store/problemObjSlice";
import { setStoreAttempts } from "../store/attemptsSlice";
import { useNavigate } from "react-router-dom";
import { backendurl } from "../javascripts/urls";

function AccountPage() {
  const navigate = useNavigate();
  const size = useBreakpointValue({ base: "45vw", md: "12vw" });
  const userObj = useSelector((state) => state.user);
  const [userName, setUserName] = useState(userObj.name);
  const [userEmail, setUserEmail] = useState(userObj.email);
  const [userRank, setUserRank] = useState("Unranked");
  const [userImage, setUserImage] = useState(null);
  const [userPassword, setUserPassword] = useState(userObj.password);
  const [userInsta, setUserInsta] = useState(userObj.insta);
  const [userGithub, setUserGithub] = useState(userObj.github);
  const [userLinkedin, setUserLinkedin] = useState(userObj.linkedin);
  // const [userImage, setUserImage] = useState(images.accDefaultLogo)
  const [easyWidth, setEasyWidth] = useState(0);
  const [mediumWidth, setMediumWidth] = useState(0);
  const [hardWidth, setHardWidth] = useState(0);
  const [circleValue, setCircleValue] = useState(0);
  const [jsSolved, setJsSolved] = useState(0);
  const [pythonSolved, setPythonSolved] = useState(0);
  const [javaSolved, setJavaSolved] = useState(0);
  const [allProblems, setAllProblems] = useState([]);
  const [totalEasy, setTotalEasy] = useState(0);
  const [totalMedium, setTotalMedium] = useState(0);
  const [totalHard, setTotalHard] = useState(0);
  const [totalProblems, setTotalProblems] = useState(0);
  const [loader, setLoader] = useState(false);
  // const backend_url = import.meta.env.REACT_APP_BACKEND_URL;

  const dispatch = useDispatch();
  const leaderBoardEntries = useSelector(
    (state) => state.leaderBoard.leaderBoardEntries
  );

  useEffect(() => {
    async function fetchLeaderBoard() {
      setLoader(true);
      await axios
        .get(`${backendurl}/leaderBoardprint`)
        .then((response) => {
          dispatch(setLeaderBoardEntries(response.data));
          setLoader(false);
        })
        .catch((error) => {
          console.error("Error LeaderBoard problem record:", error);
        });
    }
    fetchLeaderBoard();
  }, []);

  let sortedEntries = [...leaderBoardEntries].sort((a, b) => {
    if (b.total !== a.total) {
      return b.total - a.total;
    }
    if (b.hard !== a.hard) {
      return b.hard - a.hard;
    }
    if (b.medium !== a.medium) {
      return b.medium - a.medium;
    }
    return 0;
  });

  useEffect(() => {
    let email = localStorage.getItem("email");
    if (sortedEntries.length > 0) {
      sortedEntries.forEach((entry, i) => {
        if (entry.email === email) {
          localStorage.setItem("rank", i + 1);
        }
      });
    }
    setUserRank(localStorage.getItem("rank"));
  }, [sortedEntries]);

  useEffect(() => {
    setUserName(localStorage.getItem("name"));
    setUserEmail(localStorage.getItem("email"));
    setUserPassword(localStorage.getItem("password"));
    setUserRank(localStorage.getItem("rank"));
  }, []);

  useEffect(() => {
    setLoader(true);

    axios
      .get(`${backendurl}/problemRecord`, {
        params: { userEmail: localStorage.getItem("email") },
      })
      .then((response) => {
        console.log("Res: ", response.data);
        localStorage.setItem("insta", response.data.insta);
        localStorage.setItem("github", response.data.github);
        localStorage.setItem("linkedin", response.data.linkedin);

        setUserInsta(response.data.insta);
        setUserGithub(response.data.github);
        setUserLinkedin(response.data.linkedin);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [addTestCaseResults]);

  useEffect(() => {
    setTotalEasy(0);
    setTotalMedium(0);
    setTotalHard(0);
    setTotalProblems(0);

    setTotalProblems(AllquesObject.length);
    AllquesObject.map((problem) => {
      if (problem.difficulty === "Easy") {
        setTotalEasy((prev) => prev + 1);
      }
      if (problem.difficulty === "Medium") {
        setTotalMedium((prev) => prev + 1);
      }
      if (problem.difficulty === "Hard") {
        setTotalHard((prev) => prev + 1);
      }
    });
  }, []);

  useEffect(() => {
    setUserImage(localStorage.getItem("userImage") || images.accDefaultLogo);
  }, []);

  useEffect(() => {
    axios
      .get(`${backendurl}/problemRecord`, {
        params: { userEmail: localStorage.getItem("email") },
      })
      .then((response) => {
        setJsSolved(response.data.jsSolved || 0);
        setPythonSolved(response.data.pythonSolved || 0);
        setJavaSolved(response.data.javaSolved || 0);
        setEasyWidth(response.data.easySolved || 0);
        setMediumWidth(response.data.mediumSolved || 0);
        setHardWidth(response.data.hardSolved || 0);
        setCircleValue(response.data.totalSolved || 0);
        setAllProblems(response.data.allProblems);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [addTestCaseResults]);

  useEffect(() => {
    const savedAttempts = JSON.parse(localStorage.getItem("userAttempts"));

    if (savedAttempts && savedAttempts.length === AllquesObject.length) {
      dispatch(setStoreAttempts(savedAttempts));
    } else {
      axios
        .get(`${backendurl}/getUserAttempts`, {
          params: { userEmail: localStorage.getItem("email") },
        })
        .then((response) => {
          const attemptsData = response.data;
          const initializedAttempts = Array.from(
            { length: AllquesObject.length },
            (_, i) => attemptsData[i] || 0
          );
          dispatch(setStoreAttempts(initializedAttempts));
        })
        .catch((error) => {
          console.error("Error fetching user attempts:", error);
        });
    }
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="accountPage">
        <div className="accLeft">
          <div className="accLeftTop">
            <img
              style={{ borderRadius: "100vw" }}
              src={userImage}
              alt="account default logo"
            />
            <div className="accLeftTopText">
              <div>
                <p>{userName}</p>
                <p id="accEmail">{userEmail}</p>
              </div>

              <Link to={`/leaderboard`} id="accRank">
                <span>Rank:</span> {userRank}
              </Link>
            </div>
          </div>
          <div className="accBtnBox">
            <Link to="/editprofile">
              <Button id="accLeftBtn">Edit profile</Button>
            </Link>
          </div>

          <div className="socialBox">
            <div>
              {userInsta != "" ? (
                <Link className="links insta" target="_blank" to={userInsta}>
                  <img src={images.instagram} alt="insta logo" />
                  <p>Insta</p>
                </Link>
              ) : (
                ""
              )}
              {userGithub != "" ? (
                <Link className="links" target="_blank" to={userGithub}>
                  <img
                    src={images.github}
                    style={{ borderRadius: "100vw" }}
                    alt="Github logo"
                  />
                  <p>Github</p>
                </Link>
              ) : (
                ""
              )}

              {userLinkedin != "" ? (
                <Link className="links" target="_blank" to={userLinkedin}>
                  <img src={images.linkedin} alt="LinkedIn logo" />
                  <p>LinkedIn</p>
                </Link>
              ) : (
                ""
              )}

              {userEmail != "" ? (
                <Link
                  className="links"
                  target="_blank"
                  to={`mailto:${userEmail}`}
                >
                  <img src={images.mail} alt="Mail logo" />
                  <p>Email</p>
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
          <hr />
          <div className="langBox">
            <p>Languages used to solve problems</p>
            <div className="langSubBox">
              <div className="langLeft">
                <p>JavaScript</p>
                <p>Python</p>
                <p>Java</p>
              </div>
              <div className="langRight">
                <p>
                  <span>{jsSolved}</span> problems solved
                </p>
                <p>
                  <span>{pythonSolved}</span> problems solved
                </p>
                <p>
                  <span>{javaSolved}</span> problems solved
                </p>
              </div>
            </div>
          </div>
          <div className="accLogoutBox">
            <Link
              to={"/"}
              onClick={() => {
                localStorage.setItem("name", "");
              }}
            >
              <Button id="accLeftBtn">Log out</Button>
            </Link>
          </div>
        </div>
        <div className="accRight">
          <div className="accTop">
            <div className="accRightTopContentBox">
              <div style={{ display: "grid", placeItems: "center" }}>
                <CircularProgress
                  thickness=".5vw"
                  size={110}
                  value={
                    ((easyWidth + mediumWidth + hardWidth) / totalProblems) *
                    100
                  }
                  color="green.400"
                >
                  <CircularProgressLabel className="circleText">
                    {loader ? (
                      <CircularProgress
                        isIndeterminate
                        trackColor="transparent"
                        color="orange.400"
                      />
                    ) : (
                      <>
                        <p>
                          <span className="circleTextSpan">
                            {easyWidth + mediumWidth + hardWidth}
                          </span>
                          <span className="circleTextSpan2">
                            / {totalProblems}
                          </span>
                        </p>
                        <p className="circleTextP">Solved</p>
                      </>
                    )}
                  </CircularProgressLabel>
                </CircularProgress>
              </div>

              <div className="rangeStatContainer">
                <div className="accRightTopHeadingBox">
                  <p className="accRightTopHeading">Solved Problems Stats</p>
                </div>
                <div className="rangeContainer">
                  <div className="diffTextBox">
                    <p className="easy">Easy</p>
                    <p className="medium">Medium</p>
                    <p className="hard">Hard</p>
                  </div>
                  <div className="rangeBox">
                    <div className="range">
                      <div
                        className="easyRange"
                        style={{
                          width: `${(easyWidth / totalEasy) * 100}%`,
                          transition: "1s ease-in-out",
                        }}
                      ></div>
                    </div>
                    <div className="range">
                      <div
                        className="mediumRange"
                        style={{
                          width: `${(mediumWidth / totalMedium) * 100}%`,
                          transition: "1s ease-in-out",
                        }}
                      ></div>
                    </div>
                    <div className="range">
                      <div
                        className="hardRange"
                        style={{
                          width: `${(hardWidth / totalHard) * 100}%`,
                          transition: "1s ease-in-out",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="numberBox">
                    <p className="nums">
                      {easyWidth} <span>/ {totalEasy}</span>
                    </p>
                    <p className="nums">
                      {mediumWidth} <span>/ {totalMedium}</span>
                    </p>
                    <p className="nums">
                      {hardWidth} <span>/ {totalHard}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accBottom">
            <p>Submission List</p>
            <hr />
            <div style={{ height: "100%" }}>
              <div className="headings">
                <p>Problem Name</p>
                <div>
                  <p>Difficulty</p>
                  <p>Attempts</p>
                </div>
              </div>
              <div className="subListBox">
                {loader ? (
                  <div className="subListLoader">
                    <CircularProgress
                      isIndeterminate
                      trackColor="transparent"
                      color="orange.400"
                    />
                  </div>
                ) : (
                  <>
                    {allProblems.length !== 0 ? (
                      allProblems
                        .slice()
                        .reverse()
                        .map((obj, i) => (
                          <DisplayProblemContainer
                            key={i}
                            num={obj.number}
                            problem={obj.heading}
                            diff={obj.difficulty}
                            attempts={obj.attempts}
                          />
                        ))
                    ) : (
                      <h3 style={{ textAlign: "center", color: "white" }}>
                        No problems solved yet
                      </h3>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
