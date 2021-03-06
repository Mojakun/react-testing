import React, { useCallback } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import RenderInput from './RenderInput';
import FrameworkList from './FrameworkList';
import UseEffectRender from './UseEffectRender';
import MockServer from './MockServer';

function App() {
  const data = [
    {
      id: 1,
      item: "React"
    },
    {
      id: 2,
      item: "Angular"
    },
    {
      id: 3,
      item: "Vue"
    }
  ]
  const outputConsole = useCallback((e) => {
    console.log(e)
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <RenderInput outputConsole={outputConsole} />
        <FrameworkList frameworks={data} />
        <MockServer />
        <UseEffectRender />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
