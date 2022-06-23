import { GentlemanData } from './GentlemanData';
import { GentlemenButtons } from './GentlemenButtons';
import { iDataCharacters } from '../interfaces/iDataCharacters';

export function Gentlemen({
  dataProp,
  handleDelete,
  handleApproveBtn,

}: {
  dataProp: iDataCharacters;
  handleDelete: (elementID: number) => void;
  handleApproveBtn: (elementID: number) => void;

}) {

  

        return (
          <>
            <div className="gentleman__avatar-container">
              <img
                className="gentleman__avatar"
                src={ (dataProp.id === 1)? "img/" + dataProp.picture : dataProp.picture}
                alt={dataProp.alternativeText}
              />
              <span className="gentleman__initial">{dataProp.name[0]}</span>
            </div>
            <GentlemanData dataProp={dataProp}></GentlemanData>
            <GentlemenButtons
              dataProp={dataProp}
              handleDelete={handleDelete}
              handleApproveBtn={handleApproveBtn}
            ></GentlemenButtons>
          </>
        );
      }
