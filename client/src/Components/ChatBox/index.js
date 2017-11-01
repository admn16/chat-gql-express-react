import React from 'react'
import styled from 'styled-components'
import { Messages, TextBox } from './components'

const Container = styled.div`
  height: 100%;
  width: 100%;
`

const ChatBox = () => {
  return (
    <Container>
      <Messages />
      <TextBox />
    </Container>
  )
}

export { ChatBox }