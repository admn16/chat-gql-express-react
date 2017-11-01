import React from 'react'
import styled from 'styled-components'
import { ChatHead } from '../index'

const Aside = styled.aside`
  background: #E1E2E1;
  box-shadow: 0 0 6px 0px #6f6f6f;  
  height: auto;
  min-height: 100%;
  left: 0;
  padding-top: 20px;
  position: absolute;
  top: 50px;
  width: 60px;
  z-index: 1;
`

const SideBar = ({ children }) => {
  const ChatHeads = FakeData.map((item, i) => {
    const name = item.name
    return (
      <ChatHead img={item.img} name={name} key={i} />
    )
  })

  return (
    <article>
      <Aside>
        { ChatHeads }
      </Aside>
      { children }
    </article>
  )
}

const FakeData = [
  { img: 'https://placeimg.com/50/50/people', name: 'Anton Duane Nocum' },
  { img: 'https://placeimg.com/50/50/nature', name: 'Rick Morty' },
  { img: 'https://placeimg.com/50/50/tech', name: 'Rick Morty' },
]

export { SideBar }