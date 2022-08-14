<template>
    <section>
        <div class="container mt-3">
            <h1 class="text-center">Análise de Empréstimos</h1>
            <div class="row">
                <div class="col- mt-5">
                    <div class="table-responsive">
                        <h2 class="table-title">Informações do Cliente</h2>
                        <table class="table table-striped table-hover text-center">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>CPF</th>
                                    <th>Profissão</th>
                                    <th>Renda</th>
                                </tr>
                            </thead>
                        
                            <tbody>
                                    <tr v-for="cliente of clientes">
                                        <td>{{ cliente.nome }}</td>
                                        <td>{{ cliente.cpf }}</td>
                                        <td>{{ cliente.profissao }}</td>
                                        <td>{{ cliente.renda }}</td>
                                    </tr>  
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="row">
                    <div class="col- mt-5">
                        <div class="table-responsive">
                            <h2 class="table-title">Detalhamento do Empréstimo Solicitado</h2>
                            <table class="table table-striped table-hover text-center">
                                <thead>
                                    <tr>
                                        <th>Valor</th>
                                        <th>Nº de parcelas</th>
                                        <th>Data de solicitação</th>
                                    </tr>
                                </thead>
                        
                                <tbody>
                                        <tr v-for="emprestimo of emprestimos">
                                            <td>{{ emprestimo.valor_emprestimo}}</td>
                                            <td>{{ emprestimo.parcelas}}</td>
                                            <td>{{ emprestimo.data_solicitacao}}</td>
                                        </tr>
                                </tbody>
                            </table>
        
                        </div>
                    </div>
                </div>
        </div>    
    </section>
    <section class="mb-5">
            <div class="container">
                <form action="#" class="row g-3 d-flex" method="post">
                    <!-- <div class="col-4 form-floating mb-4">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Taxa de Juros" required>
                        <select class="form-select">
                            <option value="">20</option>
                            <option value="">15</option>
                            <option value="">10</option>
                        </select>    
                        <label for="floatingInput">Taxa de Juros</label>
                    </div>   
                    
                    <div class="col-4 form-floating mb-4">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Taxa de Juros" data-tipo="renda" value="R$ {{number_format($valorParcela, 2, ',', '.')}}" required>
                        <label for="floatingInput">Valor da Prestação</label>
                    </div> 

                    <div class="col-4">
                        <button type="submit" class="btn btn-primary w-100">Atualizar</button>
                    </div>  -->

                    <div class="d-grid gap-3 d-md-flex justify-content-md-end">
                        <button type="submit" class="btn btn-danger btn-lg" value="0" name="btn" >Recusar Empréstimo</button>
                        <button type="submit" class="btn btn-success btn-lg" value="1" name="btn" >Aprovar Empréstimo</button>
                    </div>
                </form>
            </div>
        </section>
</template>

<script setup>
    import { ref } from 'vue';
    import axios from 'axios';

    const clientes = ref([]);

    axios.get('http://localhost:8000/api/clientes/lista')
        .then(res => {
            clientes.value = res.data
        });

    const emprestimos = ref([]);

    axios.get('http://localhost:8000/api/gestor/emprestimos')
        .then(res => {
            emprestimos.value = res.data
        });    
</script>

<style>
</style>