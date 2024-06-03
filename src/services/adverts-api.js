import axios from 'axios';

axios.defaults.baseURL = 'https://6658dbdede346625136ab66b.mockapi.io/api';

export async function fetchAll(page) {
    const { data } = await axios.get(`/adverts?page=${page}&limit=4`);
    return data;
}