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
