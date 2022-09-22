<template>
    <div class="row mt-3">	
		<div class="col-md-12 mt-3">
			<div class="table-wrapper">
				<div class="table-responsive">
					<h2 class="table-title">Empréstimos Recentes <a href="#" class="fs-5 fw-lighter text-light p-2">Ver Todos</a></h2>
					<table class="table table-striped text-center">
						<thead>
							<tr>
								<th>ID</th>
                                <th>Valor</th>
                                <th>Data de solicitação</th>
                                <th>Nº de parcelas pagas /Nº de parcelas</th>
                                <th>Status</th>
                                <th></th>
							</tr>
						</thead>
							
					    <tbody>
                            <tr>
                                <td>1</td>
                                <td>R$ 2.000,00</td>
                                <td>13/06/2022</td>
                                <td>0/6</td> 
                                <td>APROVADO</td>
								<td>
								    <a class="btn btn-primary btn-sm" 
											role="button" 
											href={{}}>
											Detalhes
									</a>
								</td>	 
                            </tr>
						</tbody>
					</table>
				</div>   
			</div>
		</div>
    </div>    
</template>

<script>

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