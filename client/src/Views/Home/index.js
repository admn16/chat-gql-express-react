import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { 
  AppBar, 
  ChatBox,
  SideBar 
} from '../../Components'

const Container = styled.div`height: 100%;`

const Section = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`

const Home = () => (
  <Container>
    <AppBar title="Chat GQL" />    
    <Section>
      <SideBar/>

      <Switch>
        <Route path="/home/:chatid" component={ChatBox} />
      </Switch>
    </Section>
  </Container>
)

export { Home }