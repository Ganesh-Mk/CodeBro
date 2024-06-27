import React, { useEffect, useState } from "react";
import {
  Accordion,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import LeaderBoardUsers from "../components/LeaderBoardUsers";
import { useSelector, useDispatch } from "react-redux";
import { setLeaderBoardEntries } from "../store/leaderBoardSlice";
import axios from "axios";
import "../style/Leaderboard.css";
import { SearchIcon } from "@chakra-ui/icons";
import { images } from "../javascripts/images";

function LeaderBoardPage() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const leaderBoardEntries = useSelector(
    (state) => state.leaderBoard.leaderBoardEntries
  );
  const [rankMap, setRankMap] = useState({});

  // Map to hold user email to image path mapping
  const imagePathMap = {
    p1: "/src/assets/images/p1.jpg",
    p2: "/src/assets/images/p2.jpg",
    p3: "/src/assets/images/p3.jpg",
    p4: "/src/assets/images/p4.jpg",
    p5: "/src/assets/images/p5.jpg",
    p6: "/src/assets/images/p6.jpg",
    p7: "/src/assets/images/p7.jpg",
    p8: "/src/assets/images/p8.jpg",
    p9: "/src/assets/images/p9.jpg",
  };

  useEffect(() => {
    async function fetchLeaderBoard() {
      await axios
        .get("https://code-bro-tau.vercel.app/leaderBoardprint")
        .then((response) => {
          // Add image paths to the user data
          const updatedEntries = response.data.map((entry) => ({
            ...entry,
            image:
              imagePathMap[entry.image.split("-")[0]] ||
              images.accDefaultLogo.split("-")[0],
          }));

          dispatch(setLeaderBoardEntries(updatedEntries));
        })
        .catch((error) => {
          console.error("Error fetching leaderboard data:", error);
        });
    }
    fetchLeaderBoard();
  }, [dispatch]);

  useEffect(() => {
    const sortedEntries = [...leaderBoardEntries].sort((a, b) => {
      if (b.total !== a.total) return b.total - a.total;
      if (b.hard !== a.hard) return b.hard - a.hard;
      if (b.medium !== a.medium) return b.medium - a.medium;
      return 0;
    });

    const rankMap = {};
    sortedEntries.forEach((entry, i) => {
      rankMap[entry.email] = i + 1;
    });
    setRankMap(rankMap);

    const email = localStorage.getItem("email");
    if (sortedEntries.length > 0) {
      sortedEntries.forEach((entry, i) => {
        if (entry.email === email) {
          localStorage.setItem("rank", i + 1);
        }
      });
    }
  }, [leaderBoardEntries]);

  // Filter and sort the entries based on search term
  const filteredEntries = leaderBoardEntries
    .filter((entry) =>
      entry.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (b.total !== a.total) return b.total - a.total;
      if (b.hard !== a.hard) return b.hard - a.hard;
      if (b.medium !== a.medium) return b.medium - a.medium;
      return 0;
    });

  return (
    <>
      <Navbar />
      <div className="leaderBoardPage" style={{ padding: "0vw 5vw 10vw 5vw" }}>
        <div className="leaderTop">
          <div className="leaderTopLeft">
            <InputGroup width={"25vw"}>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Search by names"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="leaderTopCenter">
            <h3>Leader-Board</h3>
            <p>Highest Problems Solver</p>
          </div>
          <div className="leaderTopRight">
            <h1>
              <span>Your Rank: </span> {localStorage.getItem("rank")}
            </h1>
          </div>
        </div>

        <div className="leaderBottom">
          <div className="leaderHeadingsTags">
            <div className="leaderHeadings">
              <p>Rank</p>
              <p style={{ textAlign: "right", marginLeft: "2vw" }}></p>
              <p style={{ textAlign: "left", marginLeft: "2vw" }}>Name</p>
              <p>Total</p>
              <p className="removeEle easy">Easy</p>
              <p className="removeEle medium">Medium</p>
              <p className="removeEle hard">Hard</p>
              <p>More</p>
            </div>
          </div>
          <div className="leadersBox">
            <Accordion allowToggle>
              {filteredEntries.length === 0 ? (
                <p className="noUser">Be the first one in leaderboard</p>
              ) : (
                filteredEntries.map((user, i) => (
                  <LeaderBoardUsers
                    key={user.email}
                    rank={rankMap[user.email]}
                    userImage={user.image}
                    name={user.name}
                    total={user.total}
                    easy={user.easy}
                    medium={user.medium}
                    hard={user.hard}
                    userInsta={user.insta}
                    userEmail={user.email}
                    userGithub={user.github}
                    userLinkedin={user.linkedin}
                    javascript={user.javascript}
                    python={user.python}
                    java={user.java}
                  />
                ))
              )}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeaderBoardPage;
