import React from 'react'
import { Link } from 'react-router-dom'
import CodeBroLogo from '../components/CodeBroLogo'
import '../style/CodingPage.scss'
import '../style/CodeBroLogo.scss'
import axios from 'axios'
import Example from '../components/Example'
import { useState } from 'react'

function CodingPage() {
  const [code, setCode] = useState('')
  const [output, setOutput] = useState('')
  const [input, setInput] = useState('')
  const [selectedValue, setSelectedValue] = useState('java')

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/submit-code', {
        code,
      })

      console.log('Response from backend:', response.data)
      setOutput(response.data.output)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="codingPageBox">
      <div className="header">
        <Link to="/home" className="homeBtn">
          <CodeBroLogo />
        </Link>

        <div className="runContainer">
          <p>Run</p>
          <p onClick={handleSubmit}>Submit</p>{' '}
        </div>
        <div className="rightBox">
          <select
            className="dropdown"
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
          >
            <option value="java">Java</option>
            <option value="python">Python</option>
            <option value="c">C</option>
            <option value="javascript">JavaScript</option>
          </select>
          <p>Timer: 0:00</p>
          <p className="reload">Reload</p>
        </div>
      </div>
      <div className="container">
        <div className="left">
          <div className="leftHeader">
            <p>Description</p>
            <p>Solved</p>
          </div>
          <div className="scroller">
            <p className="que">1. Two Sum</p>
            <div className="desc">
              Given an array of integers nums and an integer target, return
              indices of the two numbers such that they add up to target. <br />
              <br />
              You may assume that each input would have exactly one solution,
              and you may not use the same element twice. <br />
              <br /> You can return the answer in any order. <br />
            </div>
            <Example
              number="1"
              input="nums = [2,7,11,15], target = 9"
              output="[0,1]"
              explanation="Because nums[0] + nums[1] == 9, we return [0, 1]."
            />
            <Example
              number="2"
              input="nums = [3,2,4], target = 6"
              output="[1,2]"
            />
            <Example
              number="3"
              input="nums = [3,3], target = 6"
              output="[0,1]"
            />
            <div className="constraints">
              <h2>Constraints</h2>
              <li>
                2 ≤ nums.length ≤ 10<sup>4</sup>
              </li>
              <li>
                -10<sup>9</sup> ≤ nums[i] ≤ 10<sup>9</sup>
              </li>
              <li>
                -10<sup>9</sup> ≤ target ≤ 10<sup>9</sup>
              </li>
              <li>Only one valid answer exists.</li>
            </div>
          </div>
        </div>
        <div className="right">
          <div>
            <textarea
              className="codeArea"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              rows="25"
              placeholder="Enter your code here"
            ></textarea>
          </div>
          <div className="testCaseBox">
            <textarea
              className="inputArea"
              value={input}
              placeholder="Input"
              onChange={(e) => setInput(e.target.value)}
              cols="30"
              rows="10"
            ></textarea>
            <textarea
              className="outputArea"
              value={output}
              placeholder="Output"
              onChange={(e) => setOutput(e.target.value)}
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodingPage
