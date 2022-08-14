<template>
    <section id="contato" class="border-top">
            <div class="container">
                <div class="row">
                    <div class="col-12 section-intro">
                        <h2>Entre em contato conosco</h2>
                        <p>Preencha o formulário abaixo ou encontre a nossa agência mais próxima.</p>
                    </div>
                </div>
                <div class="row bg-light">
                    <div class="col-lg-7">
                        <form action="" class="row gy-3 gx-3 p-4 plg-5">
                            <div class="form-group col-lg-6 custom-form">
                                <input type="text" class="form-control form-control-custom" placeholder="Digite seu nome">
                            </div>
                            <div class="form-group col-lg-6">
                                <input type="text" class="form-control form-control-custom" placeholder="Digite seu sobrenome">
                            </div>
                            <div class="form-group col-lg-12">
                                <input type="email" class="form-control form-control-custom" placeholder="Insira seu email">
                            </div>
                            <div class="form-group col-lg-12">
                                <input type="text" class="form-control form-control-custom" placeholder="Descreva o assunto">
                            </div>
                            <div class="form-group col-lg-12">
                                <textarea class="form-control form-control-custom" rows="4" placeholder="Escreva sua mensagem"></textarea>
                            </div>
                            <div class="form-group col-lg-12">
                                <a href="#" class="btn btn-form">Enviar Mensagem</a>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-5">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13906.491048060738!2d-51.106292599999996!3d-29.381332899999997
                        !2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1651514379931!5m2!1spt-BR!2sbr" class="mapa" style="border:0;" 
                        allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>    
            </div>
        </section>
</template>

<script>
</script>

<style scoped>
    .btn-form {
    background-color: var(--verde);
    color: white;
    padding: 10px 12px;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
    outline: 3px solid var(--verde) !important;
    border-radius: var(--border-radius);
    transition: all 0.4s ease;
}

.btn-form:hover {
    color: var(--azul);
    transform: translateY(-2px);
}
</style>