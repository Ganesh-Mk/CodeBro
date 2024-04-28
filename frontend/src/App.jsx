import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import Navbar from './components/Navbar'
import EntrancePage from './pages/EntrancePage'
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import ProblemsPage from './pages/ProblemsPage'
import ProgrammingPage from './pages/ProgrammingPage'
import LeaderboardPage from './pages/LeaderboardPage'
import AccountPage from './pages/AccountPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import CodingPage from './pages/CodingPage'
import EditProfilePage from './pages/EditProfilePage'
import ProblemDisplayContainer from './components/ProblemDisplayContainer'

const App = () => {
  return (
    <Router>
      {/* <ShowNavbar /> */}
      <Routes>
        <Route path="/" element={<EntrancePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/problems" element={<ProblemsPage />} />
        <Route path="/programming" element={<ProgrammingPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/coding" element={<CodingPage />} />
        <Route path="/editprofile" element={<EditProfilePage />} />
      </Routes>
    </Router>
  )
}

function ShowNavbar() {
  let location = useLocation()
  let paths = ['/', '/login', '/register', '/coding']
  let isThere = paths.includes(location.pathname)
  if (isThere) return null
  return <Navbar />
}

export default App
