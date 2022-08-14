import axios from 'axios';
import store from '../store';

const http = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        'Accept': 'application/json',
        'Content': 'application/json'
    }
});

http.interceptors.request.use(function(config) {
    let token = store.state.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  }, function(erro) {
    console.log(`Deu erro ${erro.response}`);
    return Promise.reject(erro);
  });


export default http;