<template>
    <section class="bg-dark">
            <div class="row g-0">
                <div class="col-lg-7 d-flex align-items-center justify-content-center">
                    <div class="d-none d-lg-block">
                        <router-link :to="{ name: 'home' }">
                           <img src="../../assets/logo_cred.png" class="img-fluid" width="600" alt="" />
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-5 d-flex flex-column align-items-end min-vh-100">
                    <div class="px-lg-5 pt-lg-4 pb-lg-3 p-4 w-100 mb-auto">
                    </div>
                    <div class="px-lg-5 py-lg-4 p-4 w-100 align-self-center">
                        <h1 class="font-weight-bold mb-4">Bem vindo de volta!</h1>
                        
                        <FormularioLogin></FormularioLogin>

                        <!-- <p class="font-weight-bold text-center text-muted">Ou entre com sua conta</p> -->
                        <div class="d-flex justify-content-around mt-5">
                            <a class="btn btn-custom2 flex-grow-1 me-2" href="#" role="button">Esqueci minha senha</a>
                            <router-link class="router-link" :to="{ name: 'cadastro' }">
                                <a class="btn btn-custom2 flex-grow-1 ms-2" href="#" role="button">Ainda não sou cliente</a>
                            </router-link>
                        </div>
                    </div>

                    <div class="text-center px-lg-5 pt-lg-3 pb-lg-4 p-4 w-100 mt-auto">
                        <div class="d-inline-block mb-0">
                            <router-link class="router-link" :to="{ name: 'home'}">
                                <button class="btn btn-custom3">Voltar para a home</button>
                            </router-link>    
                        </div>
                    </div>
                </div>
            </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import FormularioLogin from "../../components/FormularioLogin.vue";
import Mascaras from '../../assets/mascara'

let cpfInput;

onMounted(() => {
    cpfInput = document.querySelector('#floatingInputCPF');
    Mascaras.mascaraCPF(cpfInput);
})

</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap');

    :root {
    --azul: #002244;
    --verde: #69be28;
    --cinza: #a5acaf;
    }

    h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    color: var(--verde);
    }

    .bg-dark {
    background-color: var(--azul) !important;
    }

    .btn-custom2 {
    background: #a5acaf;
    min-height: 3.125rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    color: white;
    border-radius: 4px;
    }

    .btn-custom2:hover {
    color: var(--azul);
    transform: translateY(-2px);
    }

    .btn-custom3 {
    background: #a5acaf;
    min-height: 3.125rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-weight: 700;
    color: white;
    border-radius: 4px;
    }

    .btn-custom3:hover {
    color: var(--azul);
    transform: translateY(-2px);
    }

    .router-link {
        text-decoration: none;
    }

</style>