//import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router';

//createApp.use(createRouter);

import Predios from '../components/Predios.vue'
import Apartamentos from '../components/Apartamentos.vue'
import Hello from '../components/HelloWorld.vue'

const routes = [
    {
        path: '/predios',
        name: 'predios',
        component: Predios,
    },
    {
        path: '/apartamentos',
        name: 'apartamentos',
        component: Apartamentos,
    },
    {
        path: '/:pathMatch(.*)*',
        component: Hello,
    },
];

const router = new createRouter({
    history: createWebHistory(),
    routes
});

export default router;