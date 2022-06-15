import { iDataCharacters } from '../interfaces/iDataCharacters';

export function GentlemanData({ dataProp }: { dataProp: iDataCharacters }) {
  return (
    <div className="gentleman__data-container">
      <h2 className="gentleman__name">{dataProp.name}</h2>
      <ul className="gentleman__data-list">
        <li className="gentleman__data">
          <span className="gentleman__data-label">Profession:</span>
          {dataProp.profession}
        </li>
        <li className="gentleman__data">
          <span className="gentleman__data-label">Status:</span> {dataProp.status}
        </li>
        <li className="gentleman__data">
          <span className="gentleman__data-label">Twitter:</span> {dataProp.twitter}
        </li>
      </ul>
    </div>
  );
}
