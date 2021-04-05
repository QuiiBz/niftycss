import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import CascadingProvider from '@cascading/react/src/CascadingContext';
import { theme } from './theme';

ReactDOM.render(
  <React.StrictMode>
      <CascadingProvider theme={theme}>
          <App />
      </CascadingProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
