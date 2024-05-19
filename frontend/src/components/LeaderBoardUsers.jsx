import React from 'react'
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/react'
import { images } from '../javascripts/images'
import { Link } from 'react-router-dom'

function LeaderBoardUsers({
  rank = '',
  name = '',
  total = 0,
  easy = 0,
  medium = 0,
  hard = 0,
  userInsta = 'fdsdf',
  userEmail = 'sdf',
  userGithub = 'df',
  userLinkedin = 'f',
  javascript = 0,
  python = 0,
  java = 0,
  image = '',
}) {
  return (
    <>
      <AccordionItem>
        <h2>
          <AccordionButton
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <div
              style={{
                display: 'grid',
                width: '100%',
                gridTemplateColumns: '5% 7% 40% 10% 10% 10% 10% 10%',
              }}
            >
              <p>{rank}</p>
              <img
                style={{
                  textAlign: 'right',
                  width: '2.7vw',
                  height: '2.7vw',
                  borderRadius: '100vw',
                  marginBottom: '1.2vw',
                  marginLeft: '3.4vw',
                }}
                src={
                  image
                    ? `http://localhost:3000/uploads/${image}`
                    : images.accDefaultLogo
                }
                alt="account default logo"
              />
              <p style={{ textAlign: 'left', marginLeft: '2vw' }}>{name}</p>
              <p>{total}</p>
              <p>{easy}</p>
              <p>{medium}</p>
              <p>{hard}</p>
              <AccordionIcon
                style={{ textAlign: 'right', marginLeft: '2vw' }}
              />
            </div>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={3} w="100%">
          <div
            style={{
              display: 'flex',
              padding: '1vw',
              justifyContent: 'space-between',
              gap: '2vw',
            }}
          >
            <div style={{ display: 'flex', gap: '2vw' }}>
              <h1>Connect with - </h1>
              {userInsta != '' ? (
                <Link className="links" target="_blank" to={userInsta}>
                  <img
                    style={{ width: '3vw' }}
                    src={images.instagram}
                    alt="insta logo"
                  />
                </Link>
              ) : (
                ''
              )}
              {userGithub != '' ? (
                <Link className="links" target="_blank" to={userGithub}>
                  <img
                    style={{ width: '3vw' }}
                    src={images.github}
                    alt="Github logo"
                  />
                </Link>
              ) : (
                ''
              )}

              {userLinkedin != '' ? (
                <Link className="links" target="_blank" to={userLinkedin}>
                  <img
                    style={{ width: '3vw' }}
                    src={images.linkedin}
                    alt="LinkedIn logo"
                  />
                </Link>
              ) : (
                ''
              )}

              {userEmail != '' ? (
                <Link className="links" target="_blank" to={userEmail}>
                  <img
                    style={{ width: '3vw' }}
                    src={images.mail}
                    alt="Mail logo"
                  />
                </Link>
              ) : (
                ''
              )}
            </div>
            <div style={{ display: 'flex', gap: '2vw' }}>
              <h1>Solved in - </h1>
              <p>
                Javascript <span style={{ color: 'grey' }}>x</span>
                {javascript}
              </p>
              <p>
                Python <span style={{ color: 'grey' }}>x</span>
                {python}
              </p>
              <p>
                java <span style={{ color: 'grey' }}>x</span>
                {java}
              </p>
            </div>
          </div>
        </AccordionPanel>
      </AccordionItem>
    </>
  )
}

export default LeaderBoardUsers
