import { createRouter, createWebHistory } from 'vue-router'
import ListaDeTareas from '../modules/listaDeTareas/components/ListaDeTareas.vue'
import RegistrarView from '../modules/registro/views/RegistrarView.vue'
import CalcularView from '@/modules/calcular/views/CalcularView.vue'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/contador',
      name: 'contador',
      component: () => import('../modules/contador/components/Contador.vue'),
    },
    {
      path: '/lista-de-tareas',
      name: 'listaDetareas',
      component: ListaDeTareas,
    },
    {
      path: '/registrar',
      name: 'registrar',
      component: RegistrarView,
    },
    {
      path: '/calcular',
      name: 'calcular',
      component: CalcularView,
    },
  ],
})

export default router
