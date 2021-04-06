import React, { useState } from 'react';
import logo from '../logo.svg'
import '../App.css'
import { useNifty } from '@niftycss/react';
import { darkTheme, Theme, whiteTheme } from '../theme';
import useAppStyle from './AppStyle';

function App() {
  const [count, setCount] = useState(0)

  const { app, appLogo, appHeader, appLink } = useAppStyle();
  const { setTheme } = useNifty<Theme>();

  return (
      <div className={app}>
        <header className={appHeader}>
          <img src={logo} className={appLogo} alt="logo" />
          <p>Hello Vite + React!</p>
          <p>
            <button onClick={() => setTheme(theme => theme === whiteTheme ? darkTheme : whiteTheme)}>
              Toggle theme
            </button>
            <button onClick={() => setCount((count) => count + 1)}>
              count is: {count}
            </button>
          </p>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
                className={appLink}
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
                className={appLink}
                href="https://vitejs.dev/guide/features.html"
                target="_blank"
                rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </header>
      </div>
  )
}

export default App
