import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.jsonbin.io/',
  headers: {
    'secret-key': process.env.VUE_APP_JSONBIN_IO_SECRET_KEY,
  },
});

export function createBin(data: any) {
  return api.post('/b', data, {
    headers: {
      'collection-id': process.env.VUE_APP_JSONBIN_IO_COLLECTION_ID,
    },
  });
}

export function updateBin(id: string, data: any) {
  return api.put(`/b/${id}`, data);
}

export function getNoteById(id: string) {
  return api.get(`/b/${id}`);
}

export function getAllNotes() {
  return api.get(
    `/e/collection/${process.env.VUE_APP_JSONBIN_IO_COLLECTION_ID}/all-bins`
  ).then(({ data }) => {
    const ids = data.records.map((_: any) => _.id);

    return axios.all(
      ids.map((id: any) => getNoteById(id))
    ).then(list => list.map((_: any, i) => ({ ..._.data, id: ids[i] })));
  })
}
