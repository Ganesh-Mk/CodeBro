import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EntrancePage from "./pages/EntrancePage";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ProblemsPage from "./pages/ProblemsPage";
import AccountPage from "./pages/AccountPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CodingPage from "./pages/CodingPage";
import EditProfilePage from "./pages/EditProfilePage";
import LeaderBoardPage from "./pages/LeaderboardPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EntrancePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/problems" element={<ProblemsPage />} />
        <Route path="/leaderboard" element={<LeaderBoardPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/coding" element={<CodingPage />} />
        <Route path="/editprofile" element={<EditProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
