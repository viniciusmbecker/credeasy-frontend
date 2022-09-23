<template>
    <section class="bg-dark">
            <div class="row g-0">
                <div class="col-lg-6 d-flex align-items-center justify-content-center">
                    <div class="d-none d-lg-block">
                        <router-link :to="{ name: 'home' }">
                           <img src="../../assets/logo_cred.png" class="img-fluid" width="600" alt="" />
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-6 d-flex flex-column align-items-end min-vh-100">
                    <div class="px-lg-5 pt-lg-4 pb-lg-3 p-4 w-100 mb-auto">
                    </div>
                    <div class="px-lg-5 py-lg-4 p-4 w-100 align-self-center">
                        <h1 class="font-weight-bold mb-4">Bem vind@ de volta!</h1>
                        
                        <FormularioLogin></FormularioLogin>

                        <div class="d-flex align-items-center justify-content-center">
                            <p class="d-inline-block mb-0">Não possui uma conta?
                                <router-link class="router-link" :to="{ name: 'cadastro' }">
                                    <a class="text-light font-weight-bold text-decoration-none">Cadastre-se agora mesmo</a>
                                </router-link>
                            </p>
                        </div>
                    </div>

                    <div class="text-center px-lg-5 pt-lg-3 pb-lg-4 p-4 w-100 mt-auto">
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

    h1, p {
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