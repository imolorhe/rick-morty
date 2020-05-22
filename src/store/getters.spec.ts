import getters from './getters';

describe('getters', () => {
  const state = {
    characters: {
      list: [1, 2],
      map: {
        1: {
          x: 1,
        },
        2: {
          x: 2,
        },
      },
    },
  };

  describe('characters', () => {
    it('should return list of character data', () => {
      expect((getters as any).characters(state)).toEqual([
        {
          x: 1,
        },
        {
          x: 2,
        },
      ]);
    });
  });

  describe('getCharacterById', () => {
    it('should return character matching specified id', () => {
      expect((getters as any).getCharacterById(state)(2)).toEqual({
        x: 2,
      });
    });
  });
});
