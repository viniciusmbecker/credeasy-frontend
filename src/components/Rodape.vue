<template>
    <footer class="mt-5 py-4 footer">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-3 d-flex justify-content-center">
                    <img src="../assets/CredEasy2.png" width="230">
                </div>
                <div class="col-lg-6 align-self-center">
                    <div class="row text-center d-flex align-items-center justify-content-around">
                            
                            <div class="col-md-3">
                                <a class="nav-link links-nav-footer" href="#home">Home</a>
                            </div>
                            
                            <div class="col-md-3">
                                <a class="nav-link links-nav-footer" href="#sobre">Sobre</a>
                            </div>
                            
                            <div class="col-md-3">
                                <a class="nav-link links-nav-footer" href="#credito">Crédito</a>
                            </div>
                            
                            <div class="col-md-3">
                                <a class="nav-link links-nav-footer" href="#contato">Contato</a>
                            </div>
                            
                    </div>
                </div>
          
                <div class="col-lg-3 mx-auto">
                    <div class="row">
                            <form>
                                <div class="d-lg-none d-block border-top mt-2 mb-2">
                                </div>
                                <p class="m-0 newsletter text-center">Fique por dentro das novidades</p>
                                <div class="input-group d-flex justify-content-end w-150 gap-1">
                                    <input type="text" class="form-control" placeholder="Email" aria-label="Email"
                                    aria-describedby="button-addon2">
                                    <button class="btn botao-newsletter" type="button" id="button-addon2">Enviar</button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="container">
                    <div class="row text-center d-flex align-items-center justify-content-between pt-4 my-4 border-top">
                        <div class="col-lg-5">
                           <p class="my-md-4">&copy;CredEasy - 2022. Todos os direitos reservados</p>
                        </div>
                        <div class="col-lg-2 d-flex align-items-center justify-content-around">
                            <ul class="list-unstyled d-flex align-items-center justify-content-center m-0">
                                <li class="ms-3"><a class="link-light btn btn-outline-light btn-custom" href="https://www.twitter.com"><i class="bi bi-twitter"></i></a></li>
                                <li class="ms-3"><a class="link-light btn btn-outline-light btn-custom" href="https://www.instagram.com"><i class="bi bi-instagram"></i></a></li>  
                                <li class="ms-3"><a class="link-light btn btn-outline-light btn-custom" href="https://www.facebook.com"><i class="bi bi-facebook"></i></a></li>
                                
                            </ul>
                        </div>
                        <div class="col-lg-2 my-4">
                            <p class="mb-0"><a href="#" class="links-footer">Termos de Uso</a></p>
                        </div>
                        <div class="col-lg-3">
                            <p class="mb-0"><a href="#" class="links-footer">Políticas de Privacidade</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
</script>

<style scoped>
    .botao-newsletter {
    background: var(--verde);
    color: white;
    padding: 5px 6px;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: var(--border-radius);
    transition: all 0.4s ease;
}

.botao-newsletter:hover {
    color: var(--azul);
    transform: translateY(-2px);
}

.btn-custom:hover {
    color: var(--azul);
    font-size: 1.2rem;
}

.links-nav-footer{
    color: var(--nav-link);
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
}

.links-nav-footer:hover{
    color: var(--nav-active-link);
}
</style>