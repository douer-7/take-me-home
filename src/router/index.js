import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('../views/home/Home')
const Cats = () => import('../views/cats/Cats')
const CatInfo = () => import('../views/cats/CatInfo')

//安装插件
Vue.use(VueRouter)

//创建路由对象
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/cats',
        component: Cats,
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/catInfo/:id',
        component: CatInfo,
        meta: {
            keepAlive: false
        }
    },
]

const router = new VueRouter({
    routes,
    mode: 'history',
    base: '/take-me-home/'
})

//导出
export default router