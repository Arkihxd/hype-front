//import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router';

//createApp.use(createRouter);

import Predios from '../components/Predios.vue'
import Apartamentos from '../components/Apartamentos.vue'
import ApartamentoCard from '../components/ApartamentoCard.vue'
import PredioCard from '../components/PredioCard.vue'
import Home from '../components/Home.vue'
import NotFound from '../components/NotFound.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
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
        component: NotFound,
    },
    {
        path: '/apartamento/:id',
        component: ApartamentoCard,
    },
    {
        path: '/predio/:id',
        component: PredioCard,
    }
];

const router = new createRouter({
    history: createWebHistory(),
    routes
});

export default router;