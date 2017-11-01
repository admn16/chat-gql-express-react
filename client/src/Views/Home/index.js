import React from 'react'
import styled from 'styled-components'
import { 
  AppBar, 
  Button,
  Card, 
  ChatBox,
  Input, 
  SideBar 
} from '../../Components'

const Container = styled.div`height: 100%;`

const Home = () => (
  <Container>
    <AppBar title="Chat GQL" />    
    <SideBar />

    Home
  </Container>
)

export { Home }