import axios from 'axios';

const api = axios.create({ baseURL: 'https://backend-porto-production-a4eb.up.railway.app/api', withCredentials: true });
// const api = axios.create({
//   baseURL: 'http://localhost:8080/api',
//   withCredentials: true,
// });

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401 && !localStorage.getItem('token')) {
      console.log('Token tidak ada atau kadaluarsa');

      return Promise.reject(err);
    }

    if (err.response?.status === 401) {
      console.log('Token mungkin kadaluarsa atau tidak valid');
    }

    return Promise.reject(err); // Teruskan error
  }
);

export default api;
