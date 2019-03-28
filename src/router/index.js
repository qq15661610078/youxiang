import Vue from 'vue'
import Router from 'vue-router'

// 引入container路径
import Home from '../containers/home'
import Find from '../containers/find'
import Message from '../containers/message'
import Buy from '../containers/buy'
import Mine from '../containers/mine'
import Detail from '../containers/detail'
import Login from '../containers/login'
import Buyxq1 from "../containers/buyxq1"
import Buyxq2 from "../containers/buyxq2"
import Hotxq1 from "../containers/hotxq1"
import Hotxq2 from "../containers/hotxq2"
import Hotxq3 from "../containers/hotxq3"
import Searchdetail from '../containers/searchdetail'
import Hudong from "../components/massagePage/dialogue/Details"
import Xiangshui from '../components/xiangshui'

Vue.use(Router)

// 使用路由
export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/find',
      name: 'Find',
      component: Find,
    },
    {
      path: '/buy',
      name: 'Buy',
      component: Buy
    },
    {
      path: '/message',
      name: 'Message',
      component: Message,
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/hudong',
      name: 'Hudong',
      component: Hudong
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path:"/buyxq1",
      name:"Buyxq1",
      component: Buyxq1
    },
    {
      path:"/buyxq2",
      name: "Buyxq2",
      component: Buyxq2
    },
    {
      path:"/hotxq1",
      name: "Hotxq1",
      component: Hotxq1
    },
    {
      path:"/hotxq2",
      name: "Hotxq2",
      component: Hotxq2
    },
    {
      path:"/hotxq3",
      name: "Hotxq3",
      component: Hotxq3
    },
    {
      path:'/search',
      name:'Searchdetail',
      component: Searchdetail
    },
    {
      path:'/xiangshui',
      name:'Xiangshui',
      component:Xiangshui
    }

    
  ]
})
