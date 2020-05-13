import { ActionTree } from 'vuex';
import { getCharacter } from '@/api/rickmorty';
import { State } from './state';

const actions: ActionTree<State, State> = {
  async getCharacters({ commit }) {
    const res = await getCharacter();
    commit('getCharactersSuccess', res);
  },
};

export default actions;
