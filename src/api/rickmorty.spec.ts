import axios from 'axios';
import { getEndpoints } from './rickmorty';

jest.mock('axios', () => {
  const mockAxios = jest.fn();
  const mockAxiosFactoryResult = jest.fn(() => Promise.resolve({ data: 'x' }));
  (mockAxios as any).create = jest.fn(() => mockAxiosFactoryResult);
  (mockAxios as any).mockAxiosFactoryResult = mockAxiosFactoryResult;
  return mockAxios;
});

describe('rickmorty', () => {
  describe('getEndpoints()', () => {
    it('should call axios with endpoint', async() => {
      await getEndpoints();
      expect((axios as any).mockAxiosFactoryResult).toHaveBeenCalled();
    });
  });
});
