import { ActionTree } from 'vuex';
import { getCharacter } from '@/api/rickmorty';
import { State } from './state';

const actions: ActionTree<State, State> = {
  async getCharacters({ commit }, { page = 1 } = {}) {
    const res = await getCharacter({ page });
    commit('getCharactersSuccess', { data: res, page: Number(page) });
  },
};

export default actions;
