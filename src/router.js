import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/View/Home.vue')
    },
    {
        path: '/hotel/:id',
        name: 'HotelDetalle',
        component: () => import('@/View/HotelDetail.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
export default router
