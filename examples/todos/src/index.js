import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'

// 比counter例子，多了react-redux
import { Provider } from 'react-redux'

import App from './components/App'
import reducer from './reducers'

const store = createStore(reducer)

render(
   // store传给Provider
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
