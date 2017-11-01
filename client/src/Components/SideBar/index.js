import React from 'react'
import styled from 'styled-components'
import { ChatHead } from '../index'

const Aside = styled.aside`
  background: #E1E2E1;
  box-shadow: 0 0 6px 0px #6f6f6f;
  float: left;
  height: 100%;
  left: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  padding-top: 20px;
  position: relative;
  width: 60px;
  z-index: 1;
`

const SideBar = ({ children }) => {
  const ChatHeads = FakeData.map((item, i) => {
    return (
      <ChatHead
        img={item.img} 
        name={item.name} 
        key={i} />
    )
  })

  return (
    <Aside>
      { ChatHeads }
    </Aside>
  )
}

const FakeData = [
  { img: 'https://placeimg.com/50/50/people', name: 'Anton Duane Nocum' },
  { img: 'https://placeimg.com/50/50/nature', name: 'Rick Morty' },
  { img: 'https://placeimg.com/50/50/tech', name: 'Brad Madefaka Sample' },
]

export { SideBar }