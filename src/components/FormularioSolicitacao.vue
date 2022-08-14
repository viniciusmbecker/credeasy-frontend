<template>
    <form class="mt-5" action="#" method="post">
        <Inputs id="floatingInputValorDesejado" placeholder="Valor Desejado" name="valorDesejado" label="Valor Desejado" data-tipo="renda" required/>
        <Inputs id="floatingInputQtdeParcelas" placeholder="Quantidade de parcelas" minlength="1" maxlength="3" name="quantidadeParcelas" label="Quantidade de parcelas" data-tipo="renda" required/>
        
        <button type="submit" class="btn btn-custom w-100 mt-4 mb-2">Submeter</button>
    </form>
</template>

<script setup>
    import Inputs from "./shared/Inputs.vue";
</script>

<style scoped>
    .btn-custom {
    background: var(--verde);
    text-transform: uppercase;
    font-weight: 700;
    min-height: 3.125rem;
    }

    .btn-custom:hover {
    color: white;
    transform: translateY(-2px);
    }
</style>