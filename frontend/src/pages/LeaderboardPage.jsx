import React, { useEffect } from 'react'
import { Accordion } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import LeaderBoardUsers from '../components/LeaderBoardUsers'
import { useSelector, useDispatch } from 'react-redux'
import { setLeaderBoardEntries } from '../store/leaderBoardSlice'
import axios from 'axios'

function LeaderBoardPage() {
  const dispatch = useDispatch()
  const leaderBoardEntries = useSelector(
    (state) => state.leaderBoard.leaderBoardEntries,
  )

  useEffect(() => {
    async function fetchLeaderBoard() {
      await axios
        .get('http://localhost:3000/leaderBoardprint')
        .then((response) => {
          dispatch(setLeaderBoardEntries(response.data))
        })
        .catch((error) => {
          console.error('Error LeaderBoard problem record:', error)
        })
    }
    fetchLeaderBoard()
  }, [])

  const sortedEntries = [...leaderBoardEntries].sort((a, b) => {
    if (b.total !== a.total) {
      return b.total - a.total
    }
    if (b.hard !== a.hard) {
      return b.hard - a.hard
    }
    if (b.medium !== a.medium) {
      return b.medium - a.medium
    }
    return 0
  })

  return (
    <>
      <Navbar />
      <div className="leaderBoardPage" style={{ padding: '0vw 5vw 10vw 5vw' }}>
        <h3
          style={{
            fontSize: '3vw',
            margin: '4vw 0',
            color: 'white',
            textAlign: 'center',
          }}
        >
          Leader board
          <p style={{ fontSize: '1vw', color: 'grey' }}>
            Highest Problems Solved Users
          </p>
        </h3>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '2vw',
          }}
        >
          <div
            style={{
              display: 'grid',
              width: '100%',
              gridTemplateColumns: '5% 7% 40% 10% 10% 10% 10% 10%',
              margin: '0 2vw',
            }}
          >
            <p>Rank</p>
            <p style={{ textAlign: 'right', marginLeft: '2vw' }}></p>
            <p style={{ textAlign: 'left', marginLeft: '2vw' }}>Name</p>
            <p>Total</p>
            <p>Easy</p>
            <p>Medium</p>
            <p>Hard</p>
            <p>More</p>
          </div>
        </div>
        <Accordion allowToggle>
          {sortedEntries.length === 0 ? (
            <p
              style={{
                fontSize: '1.5vw',
                color: 'grey',
                textAlign: 'center',
                marginTop: '10vw',
              }}
            >
              Be the first one in leaderboard
            </p>
          ) : (
            sortedEntries.map((user, i) => (
              <LeaderBoardUsers
                key={i}
                rank={i + 1}
                image={user.image}
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
    </>
  )
}

export default LeaderBoardPage
