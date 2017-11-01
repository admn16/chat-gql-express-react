import React from 'react'
import styled from 'styled-components'
import { Messages } from './components'

const Container = styled.div`
  height: 100%;
  width: 100%;
`

const ChatBox = () => {
  return (
    <Container>
      <Messages />
      Input
    </Container>
  )
}

export { ChatBox }