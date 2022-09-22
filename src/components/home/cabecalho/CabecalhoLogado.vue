<template>
        <ul class="navbar-nav ms-auto align-items-lg-center">
            <li class="nav-item d-flex justify-content-center">
                <router-link class="router-link" :to="{ name: 'dashboard'}">
                    <a class="nav-link d-block btn ms-1 mb-2 mb-lg-0 cor-btn-nav px-2">Meu Dashboard</a>
                </router-link>
            </li>
            <li class="nav-item d-flex justify-content-center">
                <router-link class="router-link" :to="{ name: 'home'}">
                    <a class="nav-link d-block btn ms-1 mb-2 mb-lg-0 cor-btn-nav px-2"
                    @click.prevent="fazLogout">Sair</a>
                </router-link>    
            </li>
        </ul>
</template>

<script>
import store from '../../../store';
export default {
    methods: {
        fazLogout () {
            store.commit('DESLOGAR_USUARIO')
            router.push( {name: 'home'})
        }
    }
}
</script>

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