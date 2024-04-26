import React from 'react'
import { Link } from 'react-router-dom'
import CodeBroLogo from '../components/CodeBroLogo'
import '../style/CodingPage.scss'
import '../style/CodeBroLogo.scss'
import axios from 'axios'
import Example from '../components/Example'
import { useState } from 'react'
import CodeEditor from '../components/CodeEditor'

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
          <CodeEditor />
        </div>
      </div>
    </div>
  )
}

export default CodingPage
