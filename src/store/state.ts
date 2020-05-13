interface CharactersState {
  info: any;
  map: any;
  list: any[];
}

export interface State {
  characters: CharactersState;
}

const state: State = {
  characters: {
    info: {},
    map: {},
    list: [],
  }
};

export default state;