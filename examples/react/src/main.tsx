import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { NiftyProvider } from '@niftycss/react';
import { theme } from './theme';

ReactDOM.render(
    <NiftyProvider theme={theme}>
        <App />
    </NiftyProvider>,
  document.getElementById('root')
)
