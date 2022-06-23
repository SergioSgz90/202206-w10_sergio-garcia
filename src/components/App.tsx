import { useState } from 'react';
import { useEffect } from 'react';
import { Header } from '../components/Header';
import { Controls } from '../components/Controls';
import { MainList } from './MainList';
import * as api from '../services/http-Characters';
import { iDataCharacters } from '../interfaces/iDataCharacters';
import { FormAddGentleman } from './FormAddGentleman';

function App() {
  const initialState: Array<iDataCharacters> = [];
  const [data, setData] = useState(initialState);

  useEffect(() => {
    api.getAllCharacters().then((charData) => {
      setData(charData)
    });
  }, []);

  const handleAdd = (character: iDataCharacters) => {
    api.addCharacters(character).then((charData) =>
    setData([...data, charData])
    )
  };

  const countGent = () => {
    const selected = data.filter((el) => el.selected === true);
    const counter = selected.length;
    return counter;
  };

  const handleButtonSelect = (char: iDataCharacters ) => {
    api.updateCharacter(char).then((charData) =>
    setData(data.map((item) => ({ ...item, selected: select})))
    )
  };

  const handleDelete = (elementId: number) => {
    api.deleteCharacter(elementId).then((resp )=> {
    if (resp.ok) {
    setData(data.filter((el) => el.id !== elementId && el));
  }
  
})
   
};

  const handleApproveBtn = (elementId: number) => {
    setData(
      data.map((item) =>
        item.id === elementId ? { ...item, selected: !item.selected } : item
      )
    );
  };

  return (
    <div className="container">
      <Header></Header>
      <Controls
        allSelected={data.every((item) => item.selected)}
        handleButtonSelect={handleButtonSelect}
        counter={countGent()}
      ></Controls>
      <MainList
        dataProp={data}
        handleDelete={handleDelete}
        handleApproveBtn={handleApproveBtn}
      ></MainList>
      <FormAddGentleman handleAdd={handleAdd}></FormAddGentleman>
    </div>
  );
}
export default App;
