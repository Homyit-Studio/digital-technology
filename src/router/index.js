import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    meta: { requiresAuth: true },
    redirect: '/home/banner',
    children: [
      // 首页轮播图
      {
        path: '/home/banner',
        name: 'Banner',
        component: () => import('@/views/home/BannerManage.vue')
      },
      // 首页合作伙伴
      {
        path: '/home/partner',
        name: 'Partner',
        component: () => import('@/views/home/PartnerCompanys.vue')
      },
      // 文物数字化
      {
        path: '/cases/digital',
        name: 'Digital',
        component: () => import('@/views/cases/DigitalHeritage.vue')
      },
      // 全景漫游
      {
        path: '/cases/panorama',
        name: 'Panorama',
        component: () => import('@/views/cases/PanoramaTour.vue')
      },
      // 公司资讯
      {
        path: '/news/company',
        name: 'Company',
        component: () => import('@/views/news/CompanyNews.vue')
      },
      // 行业资讯
      {
        path: '/news/industry',
        name: 'Industry',
        component: () => import('@/views/news/IndustryNews.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫
router.beforeEach((to) => {
  const authStore = useAuthStore()
  if (!authStore.token && to.meta.requiresAuth && to.path !== '/login') return '/login'
})

export default router