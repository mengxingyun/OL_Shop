import { createRouter, createWebHistory, useRouter } from 'vue-router';
import store from '../store';
import { defineComponent } from 'vue'
import { ElMessage } from 'element-plus'

const Home = () => import('../views/home/Home'); // 主页
const Category = () => import('../views/category/Category'); //分类页面
const Profile = () => import('../views/profile/Profile'); // 个人中心
const Detail = () => import('../views/detail/Detail'); // 详情页面
const ShopCart = () => import('../views/shopcart/ShopCart'); //购物车 
const Register = () => import('../views/profile/Register'); //注册页面
const Login = () => import('../views/profile/Login');
const Address = () => import('../views/profile/Child/Address'); //地址列表
const Order = () => import('../views/profile/Child/Order'); //订单
const EditAddress = () => import('../views/profile/Child/editAddr');//编辑地址
const CreateOrder = () => import('../views/order/CreateOrder'); //创建订单

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
    component: Category,
    meta: {
      keepAlive: true,
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    meta: {
      keepAlive: true,
    }
  },
  {
    path: '/shopcart',
    name: 'ShopCart',
    component: ShopCart,
    meta: {
      isNeedLogin: true
    }
    
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      isNeedLogin: true
    },
    children: [
      {
        path: '/address',
        name: 'Address',
        component: Address
      },
      {
        path: '/order',
        name: 'Order',
        component: Order
      },
      {
        path: '/addrdetail',
        name: 'AddrDetail',
        component: EditAddress
      }
    ]
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/createorder',
    name: 'CreateOrder',
    component: CreateOrder
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.isNeedLogin && store.state.user.isLogin == false){
    ElMessage.warning({
      message: '请先登录哦',
      type: 'warning',
      offset: 300
    });
    return next('/login');
  }
  else{
    next();
  }
  
})

export default router
