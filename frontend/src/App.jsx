import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import EntrancePage from './pages/EntrancePage'
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import ProblemsPage from './pages/ProblemsPage'
import ProgrammingPage from './pages/ProgrammingPage'
import LeaderboardPage from './pages/LeaderboardPage'
import AccountPage from './pages/AccountPage'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<EntrancePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/problems" element={<ProblemsPage />} />
        <Route path="/programming" element={<ProgrammingPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </Router>
  )
}

export default App
