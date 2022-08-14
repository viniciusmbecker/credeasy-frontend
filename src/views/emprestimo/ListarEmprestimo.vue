<template>
    <div class="container">
        <div class="table-responsive mt-5">
			<h2 class="table-title">Empréstimos</h2>
            <table class="table table-striped text-center">
                <thead>
                    <tr>
                        <th>CPF</th>
                        <th>Valor</th>
                        <th>Data Solicitação</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                        <tr v-for="emprestimo of emprestimos">
                            <td>{{ emprestimo.cliente_cpf }}</td>
                            <td>{{ Intl.NumberFormat('pt-br',{style:'currency',currency:'BRL'}).format(emprestimo.valor_emprestimo) }}</td>
                            <td>{{ emprestimo.data_solicitacao }}</td>
                            <td>{{ emprestimo.status_emprestimo }}</td>
                            <td>
                                <router-link :to="{ name: 'detalhar', params: { id: emprestimo.id }}">
                                    <button>Detalhes</button>
                                </router-link>
                            </td>
                        </tr>
                </tbody>
            </table>
        </div>        
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import http from '@/http/index.js';

    const emprestimos = ref([]);

    http.get('api/emprestimos')
        .then(res => {
            emprestimos.value = res.data
        })
        .catch(console.log) 
</script>

<style scoped>
    .table-title {
	background: #69BE28;
	color: #002244;
	padding: 10px 30px;
    text-align: center;
    }
</style>