import { GetterTree } from 'vuex';
import { State } from './state';

const getters: GetterTree<State, State> = {
  characterList(state) {
    return state.characters.list.map(id => state.characters.map[id]);
  },
  getCharacterById(state) {
    return (id: number) => state.characters.map[id];
  },
};

export default getters;
