import { createRouter, createWebHistory, useRouter } from 'vue-router';
import store from '../store';
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
const OrderNoPay = () => import('../views/profile/Child/OrderNoPay'); //获取未支付订单
const OrderhasPay = () => import('../views/profile/Child/OrderhasPay'); //获取已支付订单
const OrderEnd = () => import('../views/profile/Child/OrderEnd');//已经取消和已经结束的订单
const Search = () => import('../views/search/Search');
const OnlinePlay = () => import('../views/onlineplay/OnlinePlay'); //直播

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
    path: '/search',
    name: 'Search',
    component: Search
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
        path: 'address',
        name: 'Address',
        component: Address
      },
      {
        path: 'order',
        name: 'Order',
        component: Order
      },
      {
        path: 'addrdetail',
        name: 'AddrDetail',
        component: EditAddress
      },
      {
        path: 'ordernopay',
        name: 'OrderNoPay',
        component: OrderNoPay
      },
      {
        path: 'orderhaspay',
        name: 'OrderHasPay',
        component: OrderhasPay
      },
      {
        path: 'orderend',
        name: 'OrderEnd',
        component: OrderEnd
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
  },
  {
    path: '/onlineplay',
    name: 'OnlinePlay',
    component: OnlinePlay
  },
  {
    path: '/goto',
    name: 'goto'
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
