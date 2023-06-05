import { createRouter, createWebHistory } from 'vue-router';
import AppShowCar from './pages/AppShowCar.vue';
import AppIndex from './pages/AppIndex.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
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