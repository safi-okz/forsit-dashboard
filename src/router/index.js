import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      name: 'DashboardView',
      component: DashboardView,
      children: [
          {
            path: '/dashboard',
            name: 'RevenueAnaylsisMain',
            component: () => import('../components/revenueAnalysis/RevenueAnalysisMain.vue')
          },
          {
            path: 'add-product',
            name: "ProductFrom",
            component: () => import('../components/product/ProductForm.vue')
          },
          {
            path: 'view-product',
            name: 'InventoryMain',
            component: () => import('../components/inventory/InventoryMain.vue')
          }
      ]
    }
  ]
})

export default router
