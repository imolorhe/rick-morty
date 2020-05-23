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
    notes: [
      {
        id: '2dh29',
        characterId: '1',
        note: 'hello 1'
      },
      {
        id: '23523d3',
        characterId: '2',
        note: 'hello 2',
      },
    ],
  };

  describe('characterList', () => {
    it('should return list of character data', () => {
      expect((getters as any).characterList(state)).toEqual([
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

  describe('getCharacterNotes', () => {
    it('should return notes for a character', () => {
      expect((getters as any).getCharacterNotes(state)(2)).toEqual([
        {
          id: '23523d3',
          characterId: '2',
          note: 'hello 2',
        }
      ]);
    });
  });
});
