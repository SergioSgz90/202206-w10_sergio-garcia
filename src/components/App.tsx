import { useState } from "react";
import { useEffect } from "react";
import { Header } from "../components/Header";
import { Controls } from "../components/Controls";
import { MainList } from "./MainList";
import * as api from "../services/http-Characters";
import {iDataCharacters } from "../interfaces/iDataCharacters";
import { FormAddGentleman } from "./FormAddGentleman";

function App() {
  const initialState: Array<iDataCharacters> = [];
  const [data, setData] = useState(initialState);

  useEffect(() => {
    api.getAllCharacters().then((charData) => {
      setData(charData);
    });
  }, []);

  const handleAdd = (character: iDataCharacters) => {
    api
      .addCharacters(character)
      .then((charData) => setData([...data, charData]));
  };

  const countGent = () => {
    const selected = data.filter((el) => el.selected === true);
    const counter = selected.length;
    return counter;
  };

  const handleButtonSelect = (select: boolean): void => {
    setData(data.map((item) => ({ ...item, selected: select })));
  };

  const handleDelete = (elementId: number) => {
    api.deleteCharacter(elementId).then((resp) => {
      if (resp.ok) {
        setData(data.filter((el) => el.id !== elementId && el));
      }
    });
  };

  // const handleApproveBtn = ( elementID:number) => {
  // This logic works:
  // setData(
  //    data.map((item) =>
  //    item.id === elementID ? { ...item, selected: !item.selected } : item
  //  )
  // );
  //------------------
  // };

  //Trying to pass iDataCharacters instead of ID:
  const handleApproveBtn = (character: iDataCharacters) => {
    character.selected = !character.selected;

    api
      .updateCharacter(character)
      .then((resp) =>
        setData(data.map((item) => (item.id === character.id ? resp : item)))
      );
  };

  return (
    <div className="container">
      <Header></Header>
      <FormAddGentleman handleAdd={handleAdd}></FormAddGentleman>
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
    </div>
  );
}
export default App;
