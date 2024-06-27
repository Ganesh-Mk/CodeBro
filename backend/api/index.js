const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

require("dotenv").config();
const UserModel = require("../models/userModel");
const LeaderBoard = require("../models/leaderBoardModel");
const UserMessageModel = require("../models/userMessageModel");

const app = express();
app.use(express.json());
app.use(bodyParser.json());

const corsOptions = {
  origin: "https://codebrowebsite.vercel.app/", // Your frontend URL
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/deleteAllProblem", (req, res) => {
  UserModel.find({ email: "me@" })
    .then((userModel) => {
      userModel.allProblems = [];
      res.send(userModel);
    })
    .catch((err) => res.send(err));
});

app.get("/allUserDetails", (req, res) => {
  UserModel.find()
    .then((userModel) => res.send(userModel))
    .catch((err) => res.send(err));
});

app.get("/problemRecord", (req, res) => {
  UserModel.findOne({ email: req.query.userEmail })
    .then((userModel) => {
      userModel.save();
      res.send(userModel);
    })
    .catch((err) => res.send(err));
});
app.get("/leaderBoardprint", async (req, res) => {
  try {
    const leaderboard = await LeaderBoard.find();
    return res.send(leaderboard);
  } catch (err) {
    console.error("Error fetching leaderboard entries:", err);
    return res.status(500).send(err.message);
  }
});

app.post("/updateUserDetails", async (req, res) => {
  const {
    userEmail,
    userName,
    userPassword,
    userInsta,
    userGithub,
    userLinkedin,
    userImage,
  } = req.body;

  const updateData = {
    name: userName,
    email: userEmail,
    password: userPassword,
    insta: userInsta,
    github: userGithub,
    linkedin: userLinkedin,
    image: userImage,
  };

  try {
    const updatedUser = await UserModel.findOneAndUpdate(
      { email: userEmail },
      updateData,
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(updatedUser);

    await LeaderBoard.findOneAndUpdate(
      { email: userEmail },
      {
        name: userName,
        image: userImage,
        email: userEmail,
        insta: userInsta,
        github: userGithub,
        linkedin: userLinkedin,
      },
      { new: true }
    );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/addProblemRecord", async (req, res) => {
  try {
    const {
      problemObj,
      userEmail,
      userInsta,
      userGithub,
      userLinkedin,
      userImage,
    } = req.body;

    if (!problemObj || !userEmail) {
      return res
        .status(400)
        .send("Missing problemObj or userEmail in request body");
    }

    const userModel = await UserModel.findOne({ email: userEmail });

    if (userModel) {
      let problemUpdated = false;

      for (let i = 0; i < userModel.allProblems.length; i++) {
        if (userModel.allProblems[i].number === problemObj.number) {
          userModel.allProblems[i].attempts += 1;
          problemUpdated = true;
          break;
        }
      }

      if (problemObj.language === "javascript") userModel.jsSolved++;
      else if (problemObj.language === "python") userModel.pythonSolved++;
      else if (problemObj.language === "java") userModel.javaSolved++;

      if (!problemUpdated) {
        userModel.totalSolved++;
        if (problemObj.difficulty === "Easy") userModel.easySolved++;
        else if (problemObj.difficulty === "Medium") userModel.mediumSolved++;
        else if (problemObj.difficulty === "Hard") userModel.hardSolved++;

        userModel.allProblems.push({
          number: problemObj.number,
          heading: problemObj.heading,
          difficulty: problemObj.difficulty,
          attempts: 1,
        });
      }

      await userModel.save();

      const existingEntry = await LeaderBoard.findOne({ email: userEmail });

      if (existingEntry) {
        existingEntry.total = userModel.totalSolved;
        existingEntry.easy = userModel.easySolved;
        existingEntry.medium = userModel.mediumSolved;
        existingEntry.hard = userModel.hardSolved;
        existingEntry.insta = userInsta;
        existingEntry.github = userGithub;
        existingEntry.linkedin = userLinkedin;
        existingEntry.javascript = userModel.jsSolved;
        existingEntry.python = userModel.pythonSolved;
        existingEntry.java = userModel.javaSolved;
        existingEntry.image = userModel.image;

        await existingEntry.save();
      } else {
        const newEntry = new LeaderBoard({
          name: userModel.name,
          email: userModel.email,
          total: userModel.totalSolved,
          easy: userModel.easySolved,
          medium: userModel.mediumSolved,
          hard: userModel.hardSolved,
          insta: userInsta,
          github: userGithub,
          linkedin: userLinkedin,
          javascript: userModel.jsSolved,
          python: userModel.pythonSolved,
          java: userModel.javaSolved,
          image: userImage,
        });
        await newEntry.save();
      }
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error("Error in updating problem record:", err);
    res.status(500).send(err.message);
  }
});

app.post("/userAttempts", (req, res) => {
  UserModel.findOne({ email: req.body.userEmail })
    .then((userModel) => {
      if (userModel) {
        userModel.allAttempts = req.body.attempts;
        userModel.save();
      } else {
        res.status(404).send(false);
      }
    })
    .catch((err) => res.status(500).send(err));
});
app.get("/getUserAttempts", (req, res) => {
  UserModel.findOne({ email: req.query.userEmail })
    .then((userModel) => {
      if (userModel) {
        res.send(userModel.allAttempts || []);
      } else {
        res.status(404).send([]);
      }
    })
    .catch((err) => res.status(500).send(err));
});

app.post("/login", (req, res) => {
  UserModel.findOne({
    email: req.body.userEmail,
    password: req.body.userPassword,
  })
    .then((userModel) => {
      if (userModel) {
        if (
          userModel.email === req.body.userEmail &&
          userModel.password === req.body.userPassword
        ) {
          res.send(userModel);
        } else {
          res.send(false);
        }
      } else {
        res.send(false);
      }
    })
    .catch((err) => res.send(err));
});

app.post("/createUser", (req, res) => {
  UserModel.findOne({ email: req.body.userEmail })
    .then((existingUser) => {
      if (existingUser) {
        res.send(false);
      } else {
        UserModel.create({
          name: req.body.userName,
          email: req.body.userEmail,
          password: req.body.userPassword,
        })
          .then((userModel) => res.send(userModel))
          .catch((err) => res.send(err));
      }
    })
    .catch((err) => res.send(err));
});

app.post("/userMessages", (req, res) => {
  UserMessageModel.create(req.body)
    .then((createdMessage) =>
      res.json({ message: "Message received", name: createdMessage.name })
    )
    .catch((err) => res.status(500).json({ error: err.message }));
});

PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("listening on port: " + PORT);
});
