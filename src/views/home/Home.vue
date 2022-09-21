<template>

    <Cabecalho/>
    <Inicio/>
    <Sobre/>
    <Credito/>
    <Contato/>
    <Rodape/>
    

</template>  

<script setup>
import Cabecalho from "../../components/home/cabecalho/Cabecalho.vue";
import Inicio from "../../components/home/Inicio.vue";
import Sobre from "../../components/home/Sobre.vue";
import Credito from "../../components/home/Credito.vue";
import Contato from "../../components/home/Contato.vue";
import Rodape from "../../components/home/Rodape.vue";
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel();
      });
</script>

<style>
    @import "../../assets/estilo-home.css";
    @import "../../assets/owl.carousel.min.css";
    @import "../../assets/owl.theme.default.min.css";
</style>