<template>

    <div class="col-lg-4 col-md-6">
        <div class="service custom-card">
            <div class="icon-box">
                <i :class="['bi', icon]"></i>
            </div>
            <h5>{{ tipo }}</h5>
            <p>{{ descricao }}</p>
            <a href="#" class="btn botao-saiba-mais">Saiba mais</a>
        </div>
    </div>
</template>

<script setup>

    const props = defineProps({
        tipo: {
            type: String,
        },
        descricao: {
            type: String,
        },
        icon: {
            type: String,
        }
    })
</script>

<style scoped>
.botao-saiba-mais {
    background: var(--verde);
    color: white;
}
</style>