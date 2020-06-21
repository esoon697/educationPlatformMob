import axios from 'axios'
// import store from "../store";
// import qs from 'qs'
import router from '../router'
import Vue from 'vue'
import store from '../store'
// import Vuex from 'vuex'
// import { Message } from 'ant-design-vue'
// Vue.use(Message)
// Vue.prototype.$message = Message

let config = {
  timeout: 60 * 1000 // Timeout
  // withCredentials: true, // Check cross-site Access-Control
}

let self = Vue.prototype

if (process.env.NODE_ENV == 'development') {
  // dev开发环境
  config.baseURL = 'api'
  // config.baseURL = 'http://10.10.10.211:7004'
  // config.baseURL = 'http://10.10.10.240:8001'
} else if (process.env.NODE_ENV == 'production') {
  // build生产环境
  // config.baseURL = 'xxx'
  config.baseURL = 'http://10.10.10.240:8001'
}

const _axios = axios.create(config)

// _axios.defaults.headers.post['Content-Type'] = "application/x-www-form-urlencoded"
// _axios.defaults.headers.post['Content-Type'] = "application/json; charset=utf-8"
_axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')

_axios.interceptors.request.use(
  function (config) {
    store.dispatch('SetLoding', true)
    // Do something before request is sent
    if (localStorage.getItem('token')) {
      config.headers.common['Authorization'] = localStorage.getItem('token')
    }
    if (config.method == 'post') {
      // 可做字符串化传参数据
      // config.data = qs.stringify(config.data)
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    store.dispatch('SetLoding', false)
    if (response.status == 200) {
      // 接口状态正常
      return Promise.resolve(response)
    } else if (response.status == 402) {
      self.$Toast({
        message: '登录已过期，请重新登录',
        iconClass: 'iconfont icon-yellow-warning'
      })
      localStorage.removeItem('token')
      router.replace(
        {
          path: '/login',
          query: { redirect: router.currentRoute.fullPath } // 登录成功后跳入浏览的当前页面
        }
      )
    } else {
      // 如果数据请求失败
      // let message = ''
      // let prefix = res.config.method !== 'get' ? '操作失败：' : '请求失败：'
      // switch (response.status) {
      //   case 400: message = prefix + '请求参数缺失'; break
      //   case 401: message = prefix + '认证未通过'; break
      //   case 404: message = prefix + '此数据不存在'; break
      //   case 406: message = prefix + '条件不满足'; break
      //   default: message = prefix + '服务器出错了'; break
      // }
      // let error = new Error(message)
      // 接口状态异常
      self.$Toast({
        message: response.data.message + '接口状态异常',
        iconClass: 'iconfont icon-red-error'
      })
      return Promise.resolve(response)
    }
  },
  function (err) {
    store.dispatch('SetLoding', false)
    self.$Toast({
      message: err,
      iconClass: 'iconfont icon-red-error'
    })
    return Promise.reject(err)
  }
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    _axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    _axios.post(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

export default _axios
