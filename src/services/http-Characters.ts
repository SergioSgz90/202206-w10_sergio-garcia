import { iDataCharacters} from "../interfaces/iDataCharacters.js"

const url = 'http://localhost:3003/characters/';

export function getAllCharacters(): Promise<Array<iDataCharacters>> {
  return fetch(url).then((resp) => resp.json());
}
export function addCharacters(character: iDataCharacters): Promise<iDataCharacters> {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(character),
    headers: { 'Content-Type': 'application/json' },
  }).then((resp) => resp.json());
}
export function updateCharacter(character: iDataCharacters): Promise<iDataCharacters> {
  return fetch(url + character.id, {
    method: 'PATCH',
    body: JSON.stringify(character),
    headers: { 'Content-Type': 'application/json' },
  }).then((resp) => resp.json());
}
export function deleteCharacter(id: iDataCharacters['id']) {
  return fetch(url + id, {
    method: 'DELETE',
  });
}
