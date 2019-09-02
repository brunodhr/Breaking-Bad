import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from 'pages/Home'
import Characters from 'pages/Characters'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/characters' component={Characters} />
    </Switch>
  </BrowserRouter>
)
export default Routes
