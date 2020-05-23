import actions from './actions';
import * as rickmorty from '@/api/rickmorty';
jest.mock('@/api/rickmorty');

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
});
