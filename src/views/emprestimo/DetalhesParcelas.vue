<template>
    <div class="app">
        <Sidebar /> 
        <div class="main">
            <div class="row">
			    <h1 class="mb-2">Dashboard</h1>
		    </div>
            <hr> 
            <div>
                <div class="row">
                    <div class="col- mt-2">
                        <div class="table-responsive">
                            <h2 class="table-title">Detalhamento das Parcelas</h2>
                            <table class="table align-middle table-striped table-hover text-center">
                                <thead>
                                    <tr>
                                        <th>ID parcela</th>
                                        <th>Nº parcela</th>
                                        <th>Valor</th>
                                        <th>Data de vencimento</th>
                                        <th>Multa</th>
                                        <th>Valor Pago</th>
                                        <th>Status</th> 
                                    </tr>
                                </thead>
                        
                                <tbody>
                                    <tr v-for="parcela of parcelas">
                                        <td>{{ parcela.id }}</td>
                                        <td>{{ parcela.numero_parcela}}</td>
                                        <td>R$ {{ parcela.valor_parcela }}</td>
                                        <td>{{ parcela.data_vencimento }}</td>
                                        <td>{{ '' }}</td>
                                        <td>{{ '' }}</td> 
                                        <td>{{ parcela.status}}</td>
                                    </tr> 
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>            
</template>

<script setup> 
    import Sidebar from '../../components/sidebar/Sidebar.vue';
    import { ref } from 'vue';
    import http from '@/http/index.js';
    import { useRoute } from 'vue-router';

    const parcelas = ref([]);
    const emprestimoId = useRoute().params.id

    http.get('api/parcelas/' + emprestimoId)
        .then(res => {
            parcelas.value = res.data
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