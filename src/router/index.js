import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home/Home.vue";
import Login from "@/views/login/Login.vue";
import Solicitacao from "@/views/emprestimo/Solicitacao.vue";
import Cadastro from "@/views/cadastro/Cadastro.vue";
import Analise from "@/views/emprestimo/Analise.vue";
import ListarEmprestimo from "@/views/emprestimo/ListarEmprestimo.vue";
import DetalharEmprestimo from "@/views/emprestimo/DetalharEmprestimo.vue";
import DetalhesParcelas from "@/views/emprestimo/DetalhesParcelas.vue";
import Dashboard from "@/views/cliente/Dashboard.vue";
import Profile from "@/views/cliente/Profile.vue";
import Settings from "@/views/cliente/Settings.vue";
import Messages from "@/views/cliente/Messages.vue";
import DashboardGestor from "@/views/gestor/DashboardGestor.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: Cadastro
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/dashboard-gestor',
      name: 'dashboard-gestor',
      component: DashboardGestor
    },
    {
      path: '/solicitacao',
      name: 'solicitacao',
      component: Solicitacao
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
    },
    {
      path: '/meu-perfil',
      name: 'meu-perfil',
      component: Profile
    },
    {
      path: '/mensagens',
      name: 'mensagens',
      component: Messages
    },
    {
      path: '/configuracoes',
      name: 'configuracoes',
      component: Settings
    }
  ]
});

export default router;
