import { Gentlemen } from './Gentlemen';
import { iDataCharacters } from '../interfaces/iDataCharacters';

export function MainList({
  dataProp,
  handleDelete,
  handleApproveBtn,
}: {
  dataProp: Array<iDataCharacters>;
  handleDelete: (elementID: number) => void;
  handleApproveBtn: (character: iDataCharacters) => void;
}) {
  return (
    <main className="main">
      <ul className="gentlemen">
        {dataProp.map((dataProp) => (
          <li
            className={'gentleman' + (dataProp.selected ? ' selected' : '')}
            key={dataProp.id}
          >
            <Gentlemen
              dataProp={dataProp}
              handleDelete={handleDelete}
              handleApproveBtn={handleApproveBtn}
            ></Gentlemen>{' '}
          </li>
        ))}
      </ul>
    </main>
  );
}
