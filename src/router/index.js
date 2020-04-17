import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home'
import Courses from '@/views/courses/courses'
import Study from '@/views/study/study'

// 解决vue路由跳转相同的地址，即在当前路由下重复当前路由报错
const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/courses',
      name: 'Courses',
      component: Courses
    },
    {
      path: '/study',
      name: 'Study',
      component: Study
    }
  ]
})
