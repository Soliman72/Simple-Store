import { createRouter, createWebHistory } from 'vue-router'
import Products from '@/views/Products.vue'
import AddProduct from '@/views/AddProduct.vue'
import EditProduct from '@/views/EditProduct.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Products',
      component: Products
    },
    {
      path: '/add',
      name: 'AddProduct',
      component: AddProduct
    },
    {
      path: '/edit/:id',
      name: 'EditProduct',
      component: EditProduct
    }
  ]
})

export default router
