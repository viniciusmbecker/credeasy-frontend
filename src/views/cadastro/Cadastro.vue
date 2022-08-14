<template>
    <section class="bg-dark">
        <div class="row g-0">
            <div class="col-lg-5 d-flex align-items-center justify-content-center">
                <div class="d-none d-lg-block">
                    <router-link :to="{ name: 'home' }">
                        <img src="../../assets/logo_cred.png" class="img-fluid" width="600" alt="">
                    </router-link>
                </div>
            </div>

            <div class="col-lg-7 d-flex flex-column align-items-end min-vh-100">
                <div class="px-lg-5 pt-lg-4 pb-lg-3 p-4 w-100 mb-auto">
                </div>
                <div class="px-lg-5 py-lg-4 p-4 w-100 align-self-center">
                    <h1 class="font-weight-bold mb-4 text-center">É muito bom ter você aqui!</h1>
                    <FormularioCadastro />

                </div>
                <div class="text-center px-lg-5 pt-lg-3 pb-lg-4 p-4 w-100 mt-auto">
                    <!-- <p class="d-inline-block mb-0">Ainda não possui uma conta?</p>
                <a href="#" class="text-light font-weight-bold text-decoration-none">Crie uma agora</a> -->
                </div>
            </div>
        </div>
    </section>



</template>

<script setup>
import { onMounted } from "vue";
import FormularioCadastro from "../../components/FormularioCadastro.vue";
import Mascaras from '../../assets/mascara';
import SimpleMaskMoney from 'simple-mask-money/lib/simple-mask-money';

let cpfInput;
let telefoneInput;
let rendaInput;

onMounted(() => {
    cpfInput = document.querySelector('#floatingInputCPF');
    Mascaras.mascaraCPF(cpfInput);
    telefoneInput = document.querySelector('#floatingInputPhone');
    Mascaras.mascaraTelefone(telefoneInput);

    rendaInput = document.querySelector('#floatingInputIncome');

    rendaInput.addEventListener('focus', () => {
        SimpleMaskMoney.setMask(rendaInput, {
            allowNegative: false,
            negativeSignAfter: false,
            prefix: 'R$ ',
            fixed: true,
            fractionDigits: 2,
            decimalSeparator: ',',
            thousandsSeparator: '.',
            cursor: 'end'
        });
    });

});




</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap');

:root {
    --azul: #002244;
    --verde: #69be28;
}

.bg-dark {
    background-color: var(--azul) !important;
}

h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    color: var(--verde);
}
</style>