import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Catalogy from '../views/Catalog.vue'
import Company from '../views/Company.vue'
import Projects from '../views/Projects.vue'
import Partners from '../views/Partners.vue'
import Contacts from '../views/Contacts.vue'
import CatalogId from '../views/CatalogId.vue'
import Service from '../views/Service.vue'
const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/catalogy',
        name: 'catalogy',
        component: Catalogy,
    },
    {
        path: '/catalogy/:id',
        name: 'catalogId',
        component: CatalogId
    },
    {
        path: '/company',
        name: 'Company',
        component: Company
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    },
    {
        path: '/partners',
        name: 'Partners',
        component: Partners
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: Contacts
    },
    {
        path: '/service',
        name: 'Service',
        component: Service
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router