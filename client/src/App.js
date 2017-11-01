import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, Login } from './Views'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
)

export default App
