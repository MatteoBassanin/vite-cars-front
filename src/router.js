import { createRouter, createWebHistory } from 'vue-router';
import AppShowCar from './pages/AppShowCar.vue';
import AppIndex from './pages/AppIndex.vue';
import AppHome from './pages/AppHome.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/cars',
            name: 'index',
            component: AppIndex
        },
        {
            path: '/cars/:id',
            name: 'show',
            component: AppShowCar
        },
    ]
});
export { router };