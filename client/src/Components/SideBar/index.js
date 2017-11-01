import React from 'react'
import styled from 'styled-components'
import { ChatHead } from '../index'

const Aside = styled.aside`
  background: #E1E2E1;
  box-shadow: 0 0 6px 0px #6f6f6f;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  padding-top: 20px;
  width: 60px;
  z-index: 1;
`

const Label = styled.label`
  cursor: pointer;
  display: block;
  font-size: 10px;
  padding: 7px 0 5px;  
  text-align: center;
  width: 100%;

  &:hover {
    background: #cccecc;
  }
`

const SideBar = ({ children }) => {
  const ChatHeads = FakeData.map((item, i) => (
    <Label key={i}>
      <ChatHead img={item.img}/>

      {item.name.replace(/[a-z\s]/g, '')}
    </Label>
  ))

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