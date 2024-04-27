import React, { useState } from 'react'
import '../style/ProblemsPage.scss'
import { images } from '../javascripts/images'
import ProblemDisplayContainer from '../components/ProblemDisplayContainer'
import AllquesObject from '../javascripts/data'

function ProblemsPage() {
  const [selectedValue, setselectedValue] = useState('All')
  const [searchTerm, setsearchTerm] = useState('')

  const filterByDifficulty = (difficulty) => {
    let filteredProblems = AllquesObject
    if (difficulty !== 'All') {
      filteredProblems = filteredProblems.filter(
        (problem) =>
          problem.difficulty.toLowerCase() === difficulty.toLowerCase(),
      )
    }
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase()
      filteredProblems = filteredProblems.filter((problem) =>
        problem.heading.toLowerCase().includes(lowerCaseSearchTerm),
      )
    }
    return filteredProblems
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const problemsToShow = filterByDifficulty(selectedValue)

  return (
    <div className="whole-container">
      <div className="heading">
        <p>DSA Problems</p>
      </div>
      <div className="SearchBarPart">
        <div className="dropDownShow">
          <p>Difficulty</p>
          <select
            className="dropdown"
            value={selectedValue}
            onChange={(e) => setselectedValue(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div className="SearchBarShow">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search Problems... "
              value={searchTerm}
              onChange={(e) => setsearchTerm(e.target.value)}
            />
            <button className="submitbutton" type="submit">
              <img src={images.searchicon} alt="" />
            </button>
          </form>
        </div>

        <div className="searchbarpart3">
          <button className="searchbarpart3btn">
            pick random <img src={images.random} alt="" />
          </button>
        </div>
      </div>

      <div className="levels">
        <div className="levelspart1">
          <div className="status">
            <p>Status</p>
          </div>
          <div className="problemname">
            <p>Problem name</p>
          </div>
        </div>

        <div className="levelspart2">
          <div className="difficult">
            <p>Difficult</p>
          </div>
          <div className="attempts">Attemtps</div>
        </div>
      </div>
      <div className="horizontallinediv">
        <div className="horizontalline"></div>
      </div>

      <div className="problemShower">
        {problemsToShow.length > 0 ? (
          problemsToShow.map((problem, index) => (
            <ProblemDisplayContainer problem={problem} key={index} />
          ))
        ) : (
          <h2>No Problems</h2>
        )}
      </div>
    </div>
  )
}

export default ProblemsPage
