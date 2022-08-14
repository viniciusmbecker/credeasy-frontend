<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
            <div class="container">
                    
                <a href="#" class="">
                    <img src="../assets/CredEasy2.png" width="220">
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item text-center">
                            <a href="#home" class="nav-link">Home</a>
                        </li>
                        <li class="nav-item text-center">
                            <a href="#sobre" class="nav-link">Sobre</a>
                        </li>
                        <li class="nav-item text-center">
                            <a href="#credito" class="nav-link">Crédito</a>
                        </li>
                        <li class="nav-item text-center">
                            <a href="#contato" class="nav-link">Contato</a>
                        </li>
                    </ul>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <CabecalhoLogado v-if="usuarioestaLogado"/>
                        <CabecalhoDeslogado v-else/>
                    </div>
                </div>
            </div>
        </nav>    
    </header>
</template>

<script>
import CabecalhoLogado from "./CabecalhoLogado.vue";
import CabecalhoDeslogado from "./CabecalhoDeslogado.vue";

export default {
    components: {
        CabecalhoLogado,
        CabecalhoDeslogado
    },
    computed: {
        usuarioestaLogado () {
            return Boolean(sessionStorage.getItem('API_TOKEN'))
        }
    }
}
</script>

<style scoped>

.navbar .navbar-nav .nav-link {
    color: var(--nav-link);
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
}

.navbar .navbar-nav .nav-link:hover,
.navbar .navbar-nav .nav-link.active {
    color: var(--nav-active-link);
}
</style>