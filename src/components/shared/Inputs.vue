<template>
    <div class="form-floating mb-2">
        <input class="form-control border-0"
                :type="type"
                :id="id" 
                :minlength="minlength" 
                :maxlength="maxlength" 
                :placeholder="placeholder" 
                :name="name" 
                :data-tipo="dataTipo"
                v-model="modelo" />

        <label class="form-label" :for="id">{{ label }}</label>    
    </div>
</template>

<script setup>
import { useField } from 'vee-validate';
const props = defineProps({
    type: {
        default: 'text',
    },
    id: {
        type: String,
        required: true,
    },
    minlength: {
        type: Number,
    },
    maxlength: {
        type: Number,
    },
    placeholder: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    dataTipo: {
        type: String,
    }
})

const { value:modelo } = useField(props.name);



</script>

<style>
</style>