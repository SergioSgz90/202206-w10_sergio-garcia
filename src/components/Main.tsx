import "../components/Main.css"
import { Gentlemen } from "../components/Gentlemen";
import { iDataCharacters } from "../interfaces/iDataCharacters";


export function MainList({dataProp}:{dataProp: Array<iDataCharacters>} ) {
  return (
    <main className="main">
      <ul className="gentlemen">
       {dataProp.map((dataProp) => <Gentlemen 
       dataProp={dataProp}></Gentlemen> 
       )}
      </ul>
    </main>
  );
}
