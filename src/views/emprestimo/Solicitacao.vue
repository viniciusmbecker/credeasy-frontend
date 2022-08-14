<template>
    <section>
        <div class="container d-flex flex-column align-items-center justify-content-center min-vh-100">
            <div class="row">
                <div class="col-12 d-flex align-items-center justify-content-center">
                    <img src="../../assets/CredEasy2.png" class="img-fluid py-5" alt="">
                </div>
            </div>
            <div class="row mt-4">    
                <div class="col-12 d-flex flex-column align-items-center">
                    <div class="justify-content-center align-self-center">
                        <h1 class="font-weight-bold text-center">Solicite um novo empréstimo</h1>   
                        <FormularioSolicitacao />
                    </div>
                </div>
            </div>
        </div>
    </section>
    
</template>

<script setup>
    import { onMounted } from "vue";
    import FormularioSolicitacao from "../../components/FormularioSolicitacao.vue";
    import SimpleMaskMoney from 'simple-mask-money/lib/simple-mask-money';

    let valorInput ;

    onMounted(() => {
        valorInput = document.querySelector('#floatingInputValorDesejado');

        SimpleMaskMoney.setMask(valorInput, {
            allowNegative: false,
            negativeSignAfter: false,
            prefix: 'R$ ',
            fixed: true,
            fractionDigits: 2,
            decimalSeparator: ',',
            thousandsSeparator: '.',
            cursor: 'end'
        });

    })
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Domine:wght@600;700;800&display=swap');

    :root {
    --verde: #69BE28;
    --azul: #002244;
    }

    section {
    font-family: "poppins", sans-serif;
    line-height: 1.7;
    background: var(--azul);    
    }

    h1, h2, h3, h4, h5, h6 {
    font-family: "Domine", sans-serif;
    font-weight: 700;
    color: var(--verde);
    }
</style>