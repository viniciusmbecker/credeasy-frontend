import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home/Home.vue";
import Login from "@/views/login/Login.vue";
import Solicitacao from "@/views/emprestimo/Solicitacao.vue";
import Cadastro from "@/views/cadastro/Cadastro.vue";
import Analise from "@/views/emprestimo/Analise.vue";
import ListarEmprestimo from "@/views/emprestimo/ListarEmprestimo.vue";
import DetalharEmprestimo from "@/views/emprestimo/DetalharEmprestimo.vue";
import DetalhesParcelas from "@/views/emprestimo/DetalhesParcelas.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/solicitacao',
      name: 'solicitacao',
      component: Solicitacao
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: Cadastro
    },
    {
      path: '/analise',
      name: 'analise',
      component: Analise
    },
    {
      path: '/listar',
      name: 'listar',
      component: ListarEmprestimo
    },
    {
      path: '/detalhar/:id',
      name: 'detalhar',
      component: DetalharEmprestimo
    },
    {
      path: '/parcelas/:id',
      name: 'parcelas',
      component: DetalhesParcelas
    }
  ]
});

export default router;
