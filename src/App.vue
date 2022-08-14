<script setup>
  import axios from 'axios';

  axios.interceptors.request.use(function(config) {
    let token = sessionStorage.getItem('API_TOKEN');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  }, function(erro) {
    console.log(`Deu erro ${erro.response}`);
    return Promise.reject(erro);
  });

</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
</style>
