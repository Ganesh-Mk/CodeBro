import React, { useEffect } from 'react'
import { Accordion } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import LeaderBoardUsers from '../components/LeaderBoardUsers'
import { useSelector } from 'react-redux'

function LeaderBoardPage() {
  const leaderBoardEntries = useSelector(
    (state) => state.leaderBoard.leaderBoardEntries,
  )

  useEffect(() => {
    console.log('leaderBoardPage:', leaderBoardEntries)
  }, [leaderBoardEntries])

  const sortedEntries = [...leaderBoardEntries].sort((a, b) => {
    // First compare total
    if (b.total !== a.total) {
      return b.total - a.total
    }
    // If total is the same, compare hards
    if (b.hard !== a.hard) {
      return b.hard - a.hard
    }
    // If hard is the same, compare medium
    if (b.medium !== a.medium) {
      return b.medium - a.medium
    }
    // If all are the same, maintain the original order (earlier entry first)
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
              gridTemplateColumns: '5% 47% 10% 10% 10% 10% 10%',
              margin: '0 2vw',
            }}
          >
            <p>Rank</p>
            <p style={{ textAlign: 'left', marginLeft: '6vw' }}>Name</p>
            <p>Total</p>
            <p>Easy</p>
            <p>Medium</p>
            <p>Hard</p>
            <p>More</p>
          </div>
        </div>
        <Accordion allowToggle>
          {sortedEntries.map((user, i) => (
            <LeaderBoardUsers
              key={i}
              rank={i + 1}
              name={user.name}
              total={user.total}
              easy={user.easy}
              medium={user.medium}
              hard={user.hard}
            />
          ))}
        </Accordion>
      </div>
    </>
  )
}

export default LeaderBoardPage
