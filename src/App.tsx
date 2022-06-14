import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Controls } from './components/Controls';
import { Main } from './components/Main';

function App() {
  return (
    <body>
      <div className="container">
        <Header></Header>
        <Controls></Controls>
        <Main></Main>
      </div>
    </body>
  );
}

export default App;
