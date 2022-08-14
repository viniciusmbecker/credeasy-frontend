<template>
    <form @submit.prevent="fazLogin" class="mb-5">
        
        <Inputs id="floatingInputCPF" :minlength="14" :maxlength="14" placeholder="CPF" name="cpf" label="CPF"/>
        <div class="text-white">{{ errors.cpf }}</div>
        <Inputs type="password" id="floatingInputSenha" minlength="6" maxlength="32" placeholder="Senha" name="senha" label="Senha"  />
        <div class="text-white">{{ errors.senha }}</div>
        <button type="submit" class="btn btn-custom w-100">Entrar</button>
    </form>
</template>


<script setup>
    import Inputs from "./shared/Inputs.vue";
    import * as yup from 'yup';
    import { useField, useForm } from 'vee-validate';
    import axios from "axios";
    import router from "../router";
    import store from "../store";

    const schema = yup.object({
        cpf: yup.string().required().min(14),
        senha: yup.string().required().min(6)
    });

    const { useFieldModel, errors, handleSubmit } = useForm({
        validationSchema: schema
    });

    const fazLogin = handleSubmit(credenciais => {
        store.dispatch('fazLogin', credenciais)
        .then(() => {
            router.push({ name: 'home'});
        })
        .catch(erro => console.log(erro)); 
    });
    
    
</script>

<style scoped>
    .btn-custom {
    background: var(--verde);
    text-transform: uppercase;
    font-weight: 700;
    min-height: 3.5rem;
}

.btn-custom:hover {
    color: white;
    transform: translateY(-2px);
}
</style>