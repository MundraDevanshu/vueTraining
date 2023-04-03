import { createRouter, createWebHashHistory } from 'vue-router'

import Main from '../pages/Main.vue'
import Admin from '../pages/admin/Admin.vue'

import ProductEdit from '../pages/admin/ProductEdit.vue'


const routes = [
  {
    path: '/main',
    name: 'Main',
    component: Main
  },
  {
    path: '/',
    name: 'Admin',
    component: Admin,
    children :[
      {
        path:'/products',
        name: 'Products',
        component: () => import('@/pages/admin/Products.vue')
        
        
      },
      {
        path:'/products/create',
        name: 'ProductCreate',
        component: () => import('@/pages/admin/ProductCreate.vue')
        
      },
      {
        path:'/products/:id/edit',
        name: 'ProductEdit',
        component: () => import('@/pages/admin/ProductEdit.vue'),
        props: true
      },
      
    ]
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
