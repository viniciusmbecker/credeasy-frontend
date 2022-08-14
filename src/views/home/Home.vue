<template>

    <Cabecalho/>
    <Inicio/>
    <Sobre/>
    <Credito/>
    <Contato/>
    <Rodape/>
    

</template>  

<script setup>
import Cabecalho from "../../components/Cabecalho.vue";
import Inicio from "../../components/Inicio.vue";
import Sobre from "../../components/Sobre.vue";
import Credito from "../../components/Credito.vue";
import Contato from "../../components/Contato.vue";
import Rodape from "../../components/Rodape.vue";
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel();
      });
</script>

<style>
    @import "../../assets/estilo-home.css";
    @import "../../assets/owl.carousel.min.css";
    @import "../../assets/owl.theme.default.min.css";
</style>