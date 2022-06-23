import {iDataCharacters} from '../interfaces/iDataCharacters';

export const dataInput: Array<iDataCharacters> = [
  {
    name: 'Dwight Schrute',
    status: 'Alive',
    profession: 'Assistant of the RManager',
    twitter: '@schrutefarms',
    picture: 'dwight.jpg',
    alternativeText: 'Dwight is pointing at you',
    id: 4,
    selected: true,
  },
  // {
  //   id: 1,
  //   name: 'Bertin Osborne',
  //   status: 'Alive',
  //   profession: 'Youtuber',
  //   twitter: '@osbourne',
  //   picture: 'bertin.jpg',
  //   alternativeText: 'Osbourne pointing at you',
  //   selected: true,
  // },
  {
    name: 'The Farytale',
    status: 'RIP',
    profession: 'Influencer',
    twitter: 'pending',
    picture: 'fary.jpg',
    alternativeText: 'The Fary pointing at you',
    id: 2,
    selected: false,
  },
  {
    id: 3,
    name: 'Julius Churchs',
    status: 'Alive',
    profession: 'Java developer',
    twitter: '@julius_churchs',
    picture: 'julio.jpg',
    alternativeText: 'Churchs pointing at you',
    selected: true,
  },
];
