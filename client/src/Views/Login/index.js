import React from 'react'
import { AppBar, Button, Card, Input } from '../../Components'

const Login = () => (
  <section>
    <AppBar title="Chat GQL" />

    <Card width="400px">
      <form>
        <Input type="text" id="username" placeholder="Username" />
        <Input type="password" id="password" placeholder="Password" />
        <Button to="home">Login</Button>
      </form>
    </Card>
  </section>
)

export { Login }