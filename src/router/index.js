import { createRouter, createWebHistory } from 'vue-router'

import ProductsList from '../pages/ProductsList.vue';
import UserCart from '../pages/UserCart.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', component: ProductsList },
    { path: '/cart', component: UserCart },
  ],
})

export default router
