import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('@/views/Home')
const Production = () => import('@/views/Production')
const ThreeNav = () => import('@/views/ThreeNav')
const FourNav = () => import('@/views/FourNav')
const FiveNav = () => import('@/views/FiveNav')
// const Demo = () => import('@/views/Demo')
const ProductionBrain = () => import('@/components/production/ProductionBrain.vue')
// const YunZhaoShang = () => import('@/components/yun_zhaoshang/index.vue')
// const EnterInnovation = () => import('@/components/enter_innovation/index.vue')
// const Consulting = () => import('@/components/consulting/index.vue')
const ReportList = () => import('@/components/report_list/index.vue')
// const NewsDetails = () => import('@/components/report_list/NewsDetails.vue')
// const NewsDetailsTwo = () => import('@/components/report_list/NewsDetailsTwo.vue')
const Realize = () => import('@/components/realize/index.vue')

const News = () => import('@/components/research/index.vue')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/production',
    component: Production,
    children: [
      {
        path: '1',
        component: ProductionBrain
      },
      // {
      //   path:'2',
      //   component:YunZhaoShang
      // },
      // {
      //   path:'3',
      //   component:EnterInnovation
      // },
      // {
      //   path:'4',
      //   component:Consulting
      // }
    ]
  },
  {
    path: '/news',
    component: ThreeNav,
    children: [
      // {
      //   path:'1',
      //   component:ReportList
      // },
      {
        path: '1',
        component: News
      },
      // {
      //   path:'3',
      //   component:ReportList
      // },
    ]
  },
  {
    path: '/introduction',
    component: FourNav,
    children: [
      // {
      //   path:'1',
      //   component:ReportList
      // },
      {
        path: '1',
        component: ReportList
      },
      // {
      //   path:'3',
      //   component:ReportList
      // },
    ]
  },
  {
    path: '/aboutme',
    component: FiveNav,
    children: [
      // {
      //   path: '1',
      //   component: Realize
      // },
      {
        path: '1',
        component: Realize
      },
      // {
      //   path: '3',
      //   component: Realize
      // },
      // {
      //   path: '4',
      //   component: Realize
      // }
    ]
  },
  // {
  //   path: '/demo',
  //   component: Demo
  // },
  // {
  //   path: '/news_detail/1',
  //   component: NewsDetails
  // },
  // {
  //   path: '/news_detail/2',
  //   component: NewsDetailsTwo
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router