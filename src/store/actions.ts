import { ActionTree } from 'vuex';
import { getCharacter } from '@/api/rickmorty';
import { createBin, getAllNotes } from '@/api/jsonbin';
import { State } from './state';

const actions: ActionTree<State, State> = {
  async getCharacters({ commit }, { page = 1 } = {}) {
    const res = await getCharacter({ page });
    commit('getCharactersSuccess', { data: res, page: Number(page) });
  },
  async addNote({ dispatch }, { note, characterId }) {
    const noteData = {
      characterId,
      note,
      createdAt: Date.now(),
    };
    await createBin(noteData);
    await dispatch('getNotes');
  },
  async getNotes({ commit }) {
    const notes = await getAllNotes();
    commit('getNotesSuccess', { notes });
  },
};

export default actions;
