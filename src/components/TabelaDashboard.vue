<template>
    <div class="row mt-3">	
		<div class="col-md-12 mt-3">
			<div class="table-wrapper">
				<div class="table-responsive">
					<h2 class="table-title">Empréstimos Recentes
                        <router-link class="fs-5 fw-lighter text-light p-2" :to="{ name: 'listar'}">Ver Todos</router-link>
                    </h2>
					<table class="table table-striped text-center">
						<thead>
							<tr>
								<th>ID</th>
                                <th>Valor</th>
                                <th>Data de solicitação</th>
                                <th>Status</th>
                                <th></th>
							</tr>
						</thead>
							
					    <tbody>
                            <tr v-for="emprestimo of emprestimos">
                            <td>{{ emprestimo.id }}</td>
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
.table-wrapper {
    background-color: #fff;
    /* padding: 20px 25px; */
    margin:6px 0px 40px 0px;
    width: 100%;
    overflow: auto;
    border-radius: 3px;
    box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
}
	   
.table-title {
	background: var(--verde);
	color: #fff;
	position: sticky;
	top: 0;
	width: 100%;
	left: 0;
	padding: 10px 30px;
}
	   
.table-title h2 {
	margin:5px 0  0;
	font-size:17px;
}
</style>