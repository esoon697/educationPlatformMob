// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import api from './axios/api'
import fastClick from 'fastclick'
import 'lib-flexible/flexible.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import VueLazyload from 'vue-lazyload'
import VuePreview from 'vue-preview'
import './utils/utils'
import {
  Header,
  Navbar,
  Tabbar,
  TabItem,
  TabContainer,
  TabContainerItem,
  Button, Cell,
  Swipe,
  SwipeItem,
  MessageBox,
  Toast,
  Checklist,
  Radio
} from 'mint-ui'

Vue.component(Header.name, Header)
Vue.component(Navbar.name, Navbar)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(MessageBox.name, MessageBox)
Vue.component(Toast.name, Toast)
Vue.component(Checklist.name, Checklist)
Vue.component(Radio.name, Radio)

Vue.prototype.$MessageBox = MessageBox

Vue.prototype.$Toast = Toast

// 将api挂载到vue的原型上
Vue.prototype.$api = api

// 解决移动端点击事件300ms延迟问题
fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper)
// Vue.component(VueAwesomeSwiper.name, VueAwesomeSwiper)

// 图片预览
Vue.use(VuePreview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: {top: 0, bottom: 0},
  captionEl: false,
  fullscreenEl: false,
  shareEl: false,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false
})

// 图片懒加载
Vue.use(VueLazyload, {
  preLoad: 1,
  error: '../static/imgs/loadFail.jpg',
  loading: '../static/imgs/loading2.gif',
  attempt: 1
})

let targetURL = null
let currentURL = null
if (process.env.NODE_ENV == 'development') {
  // dev开发环境
  targetURL = 'http://10.10.10.213:5000/login'
  currentURL = 'http://nys.yazhuokj.com/home'
  Vue.prototype.targetURL = targetURL
  Vue.prototype.currentURL = currentURL
} else if (process.env.NODE_ENV == 'production') {
  // build生产环境
  targetURL = 'http://portal.yazhuokj.com/login'
  currentURL = 'http://edu.yazhuokj.com/home'
  Vue.prototype.targetURL = targetURL
  Vue.prototype.currentURL = currentURL
}
const orient = 'http://' + window.location.host
Vue.prototype.orient = orient

router.beforeEach((to, from, next) => {
  store.dispatch('CLEANLOADING')
  console.log(to.meta.requiresAuth)
  if (to.meta.requiresAuth) {
    let isLogin = Vue.prototype.storageGet('isLogin')
    console.log('isLogin', isLogin)
    if (isLogin == true) {
      next()
    } else {
      MessageBox.confirm('您还未登录，是否重新登录?').then(() => {
        window.location.href = targetURL + '?orient=' + orient
      }).catch((e) => {
        console.log(e)
      })
      next({path: '/courses'})
    }
  } else {
    next()
  }
})

Vue.config.productionTip = false

const base = 'http://182.148.48.236:54321/source/educationPlatformMob/'
Vue.prototype.base = base

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
