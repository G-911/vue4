import { createRouter, createWebHistory } from 'vue-router'
import ListaDeTareas from '../components/ListaDeTareas.vue'
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
      component: () => import('../components/Contador.vue'),
    },
    {
      path: '/lista-de-tareas',
      name: 'listaDetareas',
      component: ListaDeTareas,
    },
  ],
})

export default router
