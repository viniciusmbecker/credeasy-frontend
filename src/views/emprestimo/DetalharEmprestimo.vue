<template>
    <div class="container mt-3">
        <div class="table-responsive">
            <h2 class="table-title">Detalhamento do Empréstimo</h2>
            <table class="table align-middle table-striped table-hover text-center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Valor</th>
                        <th>Taxa de Juros</th>
                        <th>Valor final</th>
                        <th>Nº de parcelas pagas / Nº de parcelas</th>
                        <th>Status</th>
                        <th>Data de solicitação</th>
                        <th>Data de quitação</th>
                    </tr>
                </thead>
                        
                <tbody>
                    <tr v-if="emprestimo">
                        <td>{{ emprestimo.id }}</td>
                        <td>{{ Intl.NumberFormat('pt-br',{style:'currency',currency:'BRL'}).format(emprestimo.valor_emprestimo) }}</td>
                        <td>{{ emprestimo.taxa_juros }}</td>
                        <td>{{  }}</td>
                        <td>{{ emprestimo.parcelas_pagas }}/{{ emprestimo.qtd_parcelas }}</td>
                        <td>{{ emprestimo.status_emprestimo }}</td> 
                        <td>{{ emprestimo.data_solicitacao }}</td>
                        <td>{{  }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div> 
        
        <section>
            <div class="container mt-2 mb-2 d-md-flex justify-content-md-end">
                <router-link :to="{ name: 'parcelas' }">
                    <button class="btn btn-primary">Consultar Parcelas</button>
                </router-link>    
            </div>    
        </section>
</template>

<script setup>
    import { ref } from 'vue';
    import http from '@/http/index.js';
import { useRoute } from 'vue-router';

    const emprestimo = ref([]);
    const emprestimoId = useRoute().params.id

    http.get('api/emprestimo/detalhes/' + emprestimoId)
        .then(res => {
            emprestimo.value = res.data
        })
</script>

<style scoped>
    .table-title {
	background: #69BE28;
	color: #002244;
	padding: 10px 30px;
    text-align: center;
    }
</style>