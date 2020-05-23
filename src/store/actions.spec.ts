import actions from './actions';
import * as rickmorty from '@/api/rickmorty';
import * as jsonbin from '@/api/jsonbin';
jest.mock('@/api/rickmorty');
jest.mock('@/api/jsonbin');

describe('actions', () => {
  describe('getCharacters', () => {
    it('should commit the data from the api', async () => {
      const commit = jest.fn();
      const data = { x: 1 };
      (rickmorty.getCharacter as any).mockImplementation(() => data);
      await (actions as any).getCharacters({ commit });

      expect(rickmorty.getCharacter).toHaveBeenCalled();
      expect(commit).toHaveBeenCalledWith(
        'getCharactersSuccess',
        { data, page: 1 }
      );
    });
    it('should commit pass specified page to API and commit it', async () => {
      const commit = jest.fn();
      const data = { x: 1 };
      (rickmorty.getCharacter as any).mockImplementation(() => data);
      await (actions as any).getCharacters({ commit }, { page: 3 });

      expect(rickmorty.getCharacter).toHaveBeenCalledWith({ page: 3 });
      expect(commit).toHaveBeenCalledWith(
        'getCharactersSuccess',
        { data, page: 3 }
      );
    });
  });

  describe('addNote', () => {
    it('should call createBin from jsonbin with new note', async () => {
      const dispatch = jest.fn();
      (jsonbin.createBin as any).mockImplementation(() => Promise.resolve());
      await (actions as any).addNote({ dispatch }, { characterId: '3', note: 'hello' });

      expect(dispatch).toHaveBeenCalledWith('getNotes');
    });
  });

  describe('getNotes', () => {
    it('should call getNotes from jsonbin and commit the notes', async () => {
      const commit = jest.fn();
      const notes = [
        {
          id: '12345',
          characterId: '4',
          note: 'hello'
        }
      ];
      (jsonbin.getAllNotes as any).mockImplementation(() => Promise.resolve(notes));
      await (actions as any).getNotes({ commit });
      expect(jsonbin.getAllNotes).toHaveBeenCalled();
      expect(commit).toHaveBeenCalledWith(
        'getNotesSuccess',
        { notes }
      );
    });
  });
});
