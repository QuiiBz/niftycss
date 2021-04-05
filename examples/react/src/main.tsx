import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import CascadingProvider from '@cascading/react';
import { theme } from './theme';

ReactDOM.render(
    <CascadingProvider theme={theme}>
        <App />
    </CascadingProvider>,
  document.getElementById('root')
)
