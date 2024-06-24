import React from "react";
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import { images } from "../javascripts/images";
import { Link } from "react-router-dom";
import "../style/Leaderboard.css";

function LeaderBoardUsers({
  rank = "",
  name = "",
  total = 0,
  easy = 0,
  medium = 0,
  hard = 0,
  userInsta = "fdsdf",
  userEmail = "sdf",
  userGithub = "df",
  userLinkedin = "f",
  javascript = 0,
  python = 0,
  java = 0,
  image = "",
}) {
  return (
    <>
      <AccordionItem>
        <h2>
          <AccordionButton
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="leaderBoardUsers">
              <p>{rank}</p>
              <img
                className="leadersImage"
                src={
                  image
                    ? `http://localhost:3000/${image}`
                    : images.accDefaultLogo
                }
                alt="account default logo"
              />
              <div>
                <p className="leaderName">{name}</p>
                <p className="leaderEmail">{userEmail}</p>
              </div>
              <p>{total}</p>
              <p className="removeEle">{easy}</p>
              <p className="removeEle">{medium}</p>
              <p className="removeEle">{hard}</p>
              <AccordionIcon
                style={{ textAlign: "right", marginLeft: "2vw" }}
              />
            </div>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={3} w="100%">
          <div className="leaderBoardUserDetails">
            <div className="linksContainerMain">
              <h1>Connect with - </h1>
              <div className="linksContainer">
                {userInsta != "" ? (
                  <Link className="links" target="_blank" to={userInsta}>
                    <img src={images.instagram} alt="insta logo" />
                  </Link>
                ) : (
                  ""
                )}
                {userGithub != "" ? (
                  <Link className="links" target="_blank" to={userGithub}>
                    <img src={images.github} alt="Github logo" />
                  </Link>
                ) : (
                  ""
                )}

                {userLinkedin != "" ? (
                  <Link className="links" target="_blank" to={userLinkedin}>
                    <img src={images.linkedin} alt="LinkedIn logo" />
                  </Link>
                ) : (
                  ""
                )}

                {userEmail != "" ? (
                  <Link className="links" target="_blank" to={userEmail}>
                    <img src={images.mail} alt="Mail logo" />
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="langDetailsMain">
              <h1>Solved in - </h1>
              <div className="langDetails">
                <p>
                  Javascript <span style={{ color: "grey" }}>x </span>
                  {javascript}
                </p>
                <p>
                  Python <span style={{ color: "grey" }}>x </span>
                  {python}
                </p>
                <p>
                  java <span style={{ color: "grey" }}>x </span>
                  {java}
                </p>
              </div>
            </div>
          </div>
        </AccordionPanel>
      </AccordionItem>
    </>
  );
}

export default LeaderBoardUsers;
