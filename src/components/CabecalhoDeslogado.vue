<template>
        <ul class="navbar-nav ms-auto align-items-lg-center">
            <li class="nav-item d-flex justify-content-center">
                <router-link class="router-link" to="/login">
                    <a class="nav-link d-block btn ms-1 mb-2 mb-lg-0 cor-btn-nav px-2">Entrar</a>
                </router-link>
            </li>
            <li class="nav-item d-flex justify-content-center">
                <router-link class="router-link" to="/cadastro">    
                    <a class="nav-link d-block btn ms-1 cor-btn-nav px-2">Cadastrar</a>
                </router-link>
            </li>
        </ul>
</template>

<style scoped>
    .cor-btn-nav {
    border: 2px solid var(--verde);
    color: #A5ACAF;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
}

.cor-btn-nav:hover {
    border: 2px solid var(--verde);
    background: var(--verde);
    color: var(--azul);
    font-weight: 700;
}

.router-link {
    text-decoration: none;
}
</style>