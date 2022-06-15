import React from 'react';
import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Controls } from './components/Controls';
import { MainList } from './components/Main';
import { dataInput } from "./data/DataInput";


function App() {
 const [dataList] = useState(dataInput);



  return (
    <body>
      <div className="container">
        <Header></Header>
        <Controls></Controls>
        <MainList dataProp={dataList}></MainList>
      </div>
    </body>
  );
}

export default App;
