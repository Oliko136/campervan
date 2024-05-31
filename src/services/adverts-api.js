import axios from 'axios';

axios.defaults.baseURL = 'https://6658dbdede346625136ab66b.mockapi.io/api';

export async function fetchAll() {
    const { data } = await axios.get('/adverts');
    return data;
}