import Vue from 'vue';
import { MutationTree } from 'vuex';
import { State, CharacterDataModel } from './state';

const mutations: MutationTree<State> = {
  getCharactersSuccess(state, data) {
    const list: number[] = [];
    data.results.forEach((item: CharacterDataModel) => {
      list.push(item.id);
      Vue.set(state.characters.map, item.id, item);
    });
    state.characters.list = list;
    state.characters.info = data.info;
  },
};

export default mutations;
