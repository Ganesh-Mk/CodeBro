import React, { useState } from 'react'
import '../style/ProblemsPage.scss'
import { images } from '../javascripts/images'
import ProblemDisplayContainer from '../components/ProblemDisplayContainer'
import AllquesObject from '../javascripts/data.js'

function ProblemsPage() {
  const [selectedValue, setselectedValue] = useState('Hard')
  const [searchTerm, setsearchTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const no = 0

  return (
    <div className="whole-container">
      <div className="heading">DSA Problems</div>
      <div className="SearchBarPart">
        <div className="dropDownShow">
          <p>Difficulty</p>
          <select
            className="dropdown"
            value={selectedValue}
            onChange={(e) => setselectedValue(e.target.value)}
          >
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
      <div className="horizontalline"></div>

      <div className="problemShower">
        {AllquesObject.map((problem, index) => (
          <ProblemDisplayContainer key={index} problem={problem} />
        ))}
      </div>
    </div>
  )
}

export default ProblemsPage
