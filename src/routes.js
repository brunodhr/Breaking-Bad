import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Profile from 'pages/Profile'
import Characters from 'pages/Characters'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Characters} />
      <Route path='/character/:id' component={Profile} />
      <Route path='/characters' component={Characters} />
    </Switch>
  </BrowserRouter>
)
export default Routes
