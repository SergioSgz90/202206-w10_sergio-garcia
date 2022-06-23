import { useState } from 'react';
import { SyntheticEvent } from 'react';
import { iDataCharacters } from '../interfaces/iDataCharacters';

export function FormAddGentleman({
  handleAdd,
}: {
  handleAdd(char: iDataCharacters): void;
}) {
  const initialState: Partial<iDataCharacters> = {
    name: '',
    status: '',
    profession: '',
    twitter: '',
    picture: '',
    alternativeText: '',
  };

  const [formState, setFormState] = useState(initialState);

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    handleAdd({
      name: formState.name as string,
      status: formState.status as string,
      profession: formState.profession as string,
      twitter: formState.twitter as string,
      picture: formState.picture as string,
      alternativeText: formState.alternativeText as string,
      selected: false
    });
  };

  const handleChange = (ev: SyntheticEvent) => {
    const element = ev.target as HTMLFormElement;
    setFormState({ ...formState, [element.name]: element.value });
  };

  return (
    <>
      <h3 className='info controls'>Add a gentleman:</h3>
      <form onSubmit={handleSubmit} className="form">
        <input
          className="gentleman new"
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={formState.name}
        />
        <input
          className="gentleman new"
          type="text"
          name="profession"
          placeholder="Profession"
          onChange={handleChange}
          value={formState.profession}
        />
        <input
          className="gentleman new"
          type="text"
          name="status"
          placeholder="Status"
          onChange={handleChange}
          value={formState.status}
        />
        <input
          className="gentleman new"
          type="text"
          name="twitter"
          placeholder="Twitter"
          onChange={handleChange}
          value={formState.twitter}
        />
        <input
          className="gentleman new"
          type="text"
          name="picture"
          placeholder="Picture"
          onChange={handleChange}
          value={formState.picture}
        />
        <input
          className="gentleman new"
          type="text"
          name="alternativeText"
          placeholder="Alt Text"
          onChange={handleChange}
          value={formState.alternativeText}
        />
        <button className="gentleman new" type="submit">
          Add Gentleman
        </button>
      </form>
    </>
  );
}
