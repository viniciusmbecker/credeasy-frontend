<template>
    <section id="credito" class="border-top">
            <div class="container">
                <div class="row">
                    <div class="col-12 section-intro">
                        <h1>Nossas linhas de crédito</h1>
                        <p>Soluções inteligentes em crédito, pensadas diretamente para você. 
                        </p>
                    </div>
                </div>
            
                <div class="row gy-4 bg-light mt-4">
                    <CardsComponents :tipo="'Crédito Pessoal'" 
                                     :descricao="'Com esta modalidade de crédito você pode pagar suas contas, antecipar planos e realizar seus sonhos.'" 
                                     :icon="'bi-clipboard-data'"
                    />

                    <CardsComponents :tipo="'Crédito Imobiliário'" 
                                     :descricao="'Com esta modalidade de crédito, você consegue adquirir o seu tão sonhado imóvel residencial próprio.'" 
                                     :icon="'bi-house-fill'"
                    />

                    <div class="col-lg-4 col-md-6">
                        <div class="service custom-card">
                            <div class="icon-box">
                                <span class="material-icons-sharp">directions_car</span>
                            </div>
                            <h5>Crédito para Automóveis</h5>
                            <p>A partir desta linha de crédito, você poderá realizar a aquisição de veículos automotores novos e usados, nacionais
                                 ou importados.</p>
                            <a href="#" class="btn botao-saiba-mais">Saiba mais</a>
                        </div>
                    </div>

                    <CardsComponents :tipo="'Crédito Educação'" 
                                     :descricao="'A partir desta modalidade de crédito, você consegue investir nos seus estudos, seja na graduação ou na pós-graduação.'" 
                                     :icon="'bi-mortarboard-fill'"
                    />

                    <CardsComponents :tipo="'Crédito Turismo'" 
                                     :descricao="'Com esta linha de crédito, você pode realizar aquela sua tão sonhada viagem, seja ela nacional ou internacional.'" 
                                     :icon="'bi-signpost-2-fill'"
                    />

                    <div class="col-lg-4 col-md-6">
                        <div class="service custom-card">
                            <div class="icon-box">
                                <span class="material-icons-sharp">agriculture</span>
                            </div>
                            <h5>Crédito Agro</h5>
                            <p>Com esta modalidade de crédito, você consegue adquirir seus implementos agrícolas, bem como 
                                financiar sua lavoura.</p>
                            <a href="#" class="btn botao-saiba-mais">Saiba mais</a>
                        </div>
                    </div>

                    <CardsComponents :tipo="'Crédito Consignado'" 
                                     :descricao="'Com esta modalidade de crédito, as parcelas são deduzidas diretamente da folha de pagamento ou benefício da pessoa física.'" 
                                     :icon="'bi-briefcase-fill'"
                    />

                    <CardsComponents :tipo="'Crédito Energia Solar'" 
                                     :descricao="'Com esta linha de crédito, você consegue adquirir a tecnologia para utilização de uma fonte de energia renovável em sua residência.'" 
                                     :icon="'bi-sun-fill'"
                    />

                    <CardsComponents :tipo="'Construção e Reforma'" 
                                     :descricao="'Linha de crédito destinada a aquisição de materiais de construção e pagamento de mão-de-obra para construir ou reformar seu imóvel.'" 
                                     :icon="'bi-bricks'"
                    />

                </div>
            </div>    
        </section>
</template>

<script setup>
    import CardsComponents from "../shared/CardsComponents.vue";
</script>

<style scoped>
    .botao-saiba-mais {
    background: var(--verde);
    color: white;
}
</style>