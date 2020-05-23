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
      (mutations as any).getCharactersSuccess(state, { data: payload, page: 1 });

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

  describe('getNotesSuccess', () => {
    it('should save notes to state', () => {
      const state = {
        notes: []
      };
      const notes = [
        {
          id: '13f23g4',
          characterId: '2',
          note: 'hello',
        }
      ];
      (mutations as any).getNotesSuccess(state, { notes });

      expect(state.notes).toEqual(notes);
    });
  });
});
