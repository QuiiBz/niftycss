import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App/App'
import { NiftyProvider } from '@niftycss/react';
import { whiteTheme } from './theme';

ReactDOM.render(
    <NiftyProvider theme={whiteTheme}>
        <App />
    </NiftyProvider>,
  document.getElementById('root')
)
