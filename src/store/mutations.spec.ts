import mutations from './mutations';

describe('mutations', () => {
  describe('getCharactersSuccess', () => {
    it('should set the correct state values', () => {
      const state = {
        characters: {
          info: {},
          list: [],
          map: {},
        },
      };
      const payload = {
        info: { reqDetails: 1 },
        results: [
          {
            id: 1,
            name: 'First',
          },
          {
            id: 2,
            name: 'Second',
          },
        ],
      };
      (mutations as any).getCharactersSuccess(state, payload);

      expect(state.characters.list).toEqual([1, 2]);
      expect(state.characters.map).toEqual({
        1: {
          id: 1,
          name: 'First',
        },
        2: {
          id: 2,
          name: 'Second',
        },
      });
      expect(state.characters.info).toEqual(payload.info);
    });
  });
});
