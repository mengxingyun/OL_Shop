import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/home/Home'); // 主页
const Category = () => import('../views/category/Category'); //分类页面
const Profile = () => import('../views/profile/Profile'); // 个人中心
const Detail = () => import('../views/detail/Detail'); // 详情页面
const ShopCart = () => import('../views/shopcart/ShopCart'); //购物车 

const routes = [
  {
    path: '',
    name: 'DefaultHome',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/shopcart',
    name: 'ShopCart',
    component: ShopCart
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
