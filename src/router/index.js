import Vue from 'vue'
import Router from 'vue-router'

// 引入container路径
import Home from '../containers/home'
import Find from '../containers/find'
import Message from '../containers/message'
import Buy from '../containers/buy'
import Mine from '../containers/mine'
import Detail from '../containers/detail'

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
      component: Find
    },
    {
      path: '/buy',
      name: 'Buy',
      component: Buy
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
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
    }
    
  ]
})
