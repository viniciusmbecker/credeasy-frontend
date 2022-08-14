<template>
    <section>
        <div class="container mt-3">
            <div class="row">
                <div class="col- mt-5">
                    <div class="table-responsive">
                        <h2 class="table-title">Detalhamento das Parcelas</h2>
                        <table class="table table-striped table-hover text-center text-white">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nº da parcela</th>
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
    </section>  
</template>

<script setup>  
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

<style>
</style>