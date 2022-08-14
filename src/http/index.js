import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        'Accept': 'application/json',
        'Content': 'application/json'
    }
});

http.interceptors.request.use(function(config) {
    let token = sessionStorage.getItem('API_TOKEN');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  }, function(erro) {
    console.log(`Deu erro ${erro.response}`);
    return Promise.reject(erro);
  });


export default http;