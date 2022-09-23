<template>
        <div class="row gy-4 d-flex justify-content-around bg-light mt-4 mb-4">
			<!-------------- INÍCIO PRIMEIRO CARD ---------------->
				<div class="col-lg-4 col-md-6">
					<router-link class="router-link" :to="{ name: 'listar'}">
						<div class="d-flex align-items-center dashboard-card">
							<div class="icon-box">
								<span class="material-icons-sharp">bar_chart</span>
							</div>
							<h4>Meus empréstimos</h4>
						</div>
					</router-link>
				</div>	
			<!-------------- FINAL PRIMEIRO CARD ---------------->
        
            <!-------------- INÍCIO SEGUNDO CARD ---------------->
				<div class="col-lg-4 col-md-6">
					<router-link class="router-link" :to="{}">
						<div class="d-flex align-items-center dashboard-card">
							<div class="icon-box">
								<span class="material-icons-sharp">payments</span>
							</div>
							<h4>Pagar parcelas</h4>
						</div>
					</router-link>
				</div>		
			<!-------------- FINAL SEGUNDO CARD ---------------->

            <!-------------- INÍCIO TERCEIRO CARD ---------------->
				<div class="col-lg-4 col-md-6">
					<router-link class="router-link" :to="{ name: 'solicitacao'}">
						<div class="d-flex align-items-center dashboard-card">
							<div class="icon-box">
								<span class="material-icons-sharp">currency_exchange</span>
							</div>
							<h4>Novo empréstimo</h4>
						</div>
					</router-link>
				</div>		
			<!-------------- FINAL TERCEIRO CARD ---------------->
        </div>        
</template>

<script>

</script>

<style scoped>
.dashboard-card {
    transition: all 0.4s ease;
    background-color: white;
    border-radius: var(--border-radius);

}

.dashboard-card:hover {
	box-shadow: var(--shadow);
    transform: translateY(-5px);
}

.icon-box {
    width: 80px;
    height: 80px;
    background-color: var(--azul);
    color: white;
    border-radius: var(--border-radius);
    font-size: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
}

.router-link {
        text-decoration: none;
    }

</style>
