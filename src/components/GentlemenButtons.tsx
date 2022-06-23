import { iDataCharacters } from "../interfaces/iDataCharacters";

export function GentlemenButtons({
  handleDelete,
  handleApproveBtn,
  dataProp,
}: {
  handleDelete: (elementID: number) => void;
  handleApproveBtn: (elementID: number) => void;
  dataProp: iDataCharacters;
}) {
  return (
    <>
      <i className="icon gentleman__icon fas fa-check"
      onClick={() => handleApproveBtn(dataProp.id)}
      ></i>
      <i
        className="icon gentleman__icon gentleman__icon--delete fas fa-times"
        onClick={() => handleDelete(dataProp.id)}
      ></i>
    </>
  );
}
