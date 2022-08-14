<template>
    <form @submit.prevent="fazCadastro" class="row gx-3">

        <div class="col-md-12 mb-3">
            <Inputs id="floatingInputName" placeholder="Nome Completo" name="nome" label="Nome Completo" minlength="2" maxlength="255" required/>
            <div class="text-danger">{{ errors.nome }}</div>
        </div>

        <div class="col-md-6 mb-3">
            <Inputs id="floatingInputCPF" placeholder="CPF" name="cpf" label="CPF" minlength="14" maxlength="14" mask="000.000.000-00" required/>
            <div class="text-danger">{{ errors.cpf }}</div>
        </div>

        <div class="col-md-6 mb-3">
            <Inputs id="floatingInputPhone" placeholder="Telefone Celular" name="fone" label="Telefone Celular" minlength="14" maxlength="14" mask="(00)00000-0000" required/>
            <div class="text-danger">{{ errors.fone }}</div>
        </div>

        <div class="col-12 mb-3">
            <Inputs id="floatingInputAddress" placeholder="Endereço" name="endereco" label="Endereço" required/>
            <div class="text-danger">{{ errors.endereco }}</div>
        </div>

        <div class="col-md-7 mb-3">
            <Inputs id="floatingInputOccupation" placeholder="Profissão" name="profissao" label="Profissão" required/>
            <div class="text-danger">{{ errors.profissao }}</div>
        </div>

        <div class="col-md-5 mb-3">
            <Inputs id="floatingInputIncome" placeholder="Renda" name="renda" label="Renda" data-tipo="renda" required/>
            <div class="text-danger">{{ errors.renda }}</div>
        </div>

        <div class="col-md-7 mb-3">
            <Inputs type="email" id="floatingInputEmail" placeholder="Email" name="email" label="Email" required/>
            <div class="text-danger">{{ errors.email }}</div>
        </div>

        <div class="col-md-5 mb-3">
            <Inputs type="password" id="floatingInputPassword" placeholder="Senha" name="senha" label="Senha" minlength="6" maxlength="32" required/>
            <div class="text-danger">{{ errors.senha }}</div>
        </div>

        <div class="col-12">
            <button type="submit" class="btn btn-custom w-100">Cadastrar</button>
        </div>
    </form>
</template>

<script setup>
    import Inputs from "./shared/Inputs.vue";
    import * as yup from 'yup';
    import { useField, useForm } from 'vee-validate';
    import axios from "axios";

    const schema = yup.object({
        nome: yup.string().required(),
        cpf: yup.string().required().min(14),
        fone: yup.string().required().min(14),
        endereco: yup.string().required(), 
        profissao: yup.string().required(),
        renda: yup.string().required(),
        email: yup.string().required(),
        senha: yup.string().required().min(6)
    });

    const { useFieldModel, errors, handleSubmit } = useForm({
        validationSchema: schema
    });


    const fazCadastro = handleSubmit(valores => {
        console.log('submeteu', valores);
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