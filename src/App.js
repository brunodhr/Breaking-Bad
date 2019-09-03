import React from 'react'
import GlobalStyle from 'styles'
import { Provider } from 'react-redux'
import store from 'store'
import Routes from './routes'

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Routes />
  </Provider>
)

export default App
