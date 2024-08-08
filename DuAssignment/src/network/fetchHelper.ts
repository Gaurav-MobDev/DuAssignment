import {BASE_URL} from '../utils';
import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmI1MGM3OWEyYWEzYTgwY2Q4OTM2NWRiM2JhODUxNSIsIm5iZiI6MTcyMjkzMzIxOS44Nzc2NjEsInN1YiI6IjY2YjFkZTMyYzJkOGUwZWRhYTk5YTg0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vb9ed_m6NkvkzCmZte1aTkTMQZRytPfr6Nj4nt68r-0';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

export const fetchMoviesAPI = async (url: string, headers?: any) => {
  try {
    const response = await axiosInstance.get(url, {
      headers,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
