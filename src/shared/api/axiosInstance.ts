import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://6970835478fec16a63fdf1e2.mockapi.io/:endpoint', // заменишь на свой mockapi.io
});
