import React from 'react'
import { render } from 'react-dom'

// Importing the top-level component
import App from './components/App'

// Importing the styles
import './styles.less'

// 👉 STEP 1 - Import React Router's Router
import { BrowserRouter } from 'react-router-dom'

render(
  // Wrap the <App /> in a provider
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.querySelector('#root')
)
