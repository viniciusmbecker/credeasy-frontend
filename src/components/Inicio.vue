<template>
    <section id="home2"  class="home2-background">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 d-flex">
                        <div class="align-self-center">
                            <h1 class="display-4">Precisando de dinheiro?</h1>
                            <p class="mt-4 mb-4 frase">
                                O seu orçamento está apertado? Nós temos a melhor solução para você.
                            </p>

                            <form class="mt-4 mb-4" action="#">
                                <div class="input-group input-group-lg">
                                    <input type="email" placeholder="Seu email" class="form-control">
                                    <button type="submit" class="btn home-btn">Cadastrar</button>
                                </div>
                            </form>

                            <div class="d-none d-lg-block">
                                <div class="row">
                                <div class="col-md-6 d-flex align-items-center">
                                    <div class="icon-boxes">
                                        <span class="material-icons-sharp" style="font-size: 2rem;">lock</span>
                                    </div>
                                    <p class="text-start m-0 paragrafo"> Aqui a segurança dos seus dados é a nossa prioridade </p>
                                </div>

                                <div class="col-md-6 d-flex align-items-center">
                                    <div class="icon-boxes">
                                        <span class="material-icons-sharp" style="font-size: 2rem;">devices</span>
                                    </div>
                                    <p class="text-start m-0 paragrafo"> Acesse quando quiser, no celular, tablet ou computador </p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 d-none d-md-block">
                        <img class="mw-100" src="../assets/mulher-segurando-moeda.png">
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
</script>

<style scoped>
    .home-btn {
    background: var(--azul);
    color: white;
    padding: 10px 12px;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: var(--border-radius);
    transition: all 0.4s ease;
}

.home-btn:hover {
    background: var(--nav-link);
    color: var(--azul);
    transform: translateY(-3px);
}
</style>