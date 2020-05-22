export interface CharacterDataModel {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: { name: string; url: string };
  name: string;
  origin: { name: string; url: string };
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface InfoDataModel {
  count: number;
  next: string | null;
  prev: string | null;
  pages: number;
}

interface CharactersState {
  info: InfoDataModel;
  map: Record<string, CharacterDataModel>;
  list: number[];
}

export interface State {
  characters: CharactersState;
}

const state: State = {
  characters: {
    info: {
      count: 0,
      pages: 0,
      prev: null,
      next: null,
    },
    map: {},
    list: [],
  },
};

export default state;
