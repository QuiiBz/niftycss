import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useCascade, style } from '@cascading/react/src/hooks';
import { Theme } from './theme';

function App() {
  const [count, setCount] = useState(0)

  const { setTheme } = useCascade();

  const p = style<Theme>(t => ({
    color: t.fg,
  }));

  const btn = style<Theme>(t => ({
    border: 'none',
    background: t.bg,
  }));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className={p}>Hello Vite + React!</p>
        <p>
          <button className={btn} onClick={() => setTheme<Theme>({
            bg: `#${Math.floor(Math.random()*16777215).toString(16)}`,
            fg:`#${Math.floor(Math.random()*16777215).toString(16)}`,
          })}>
            change theme
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
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
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
