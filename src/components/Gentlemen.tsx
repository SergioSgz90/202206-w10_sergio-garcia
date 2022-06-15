import '../components/Gentlemen.css';
import { GentlemanData } from './GentlemanData';
import { iDataCharacters } from '../interfaces/iDataCharacters';


export function Gentlemen({ dataProp }: { dataProp: iDataCharacters }) {
  return (
    <li className="gentleman">
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={ "img/"+ dataProp.picture}
          alt={dataProp.alternativeText}
        />
        <span className="gentleman__initial">{dataProp.name[0]}</span>
      </div>
      <GentlemanData dataProp={dataProp}></GentlemanData>
    </li>
  );
}
