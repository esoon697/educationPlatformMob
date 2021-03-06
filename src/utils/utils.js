// const STORAGE_KEY = 'userinfo'
import Vue from 'vue'

// 判断数据是否为空
Vue.prototype.isblank = function (chr) {
  if (chr === null || chr === '' || chr === undefined || chr === 'undefined' || chr === 'null' || chr.length === 0) {
    return true
  };
  chr = chr.toString()
  chr = chr.replace(/(^\s*)|\s*$/g, '')
  if (chr === null || chr === '' || chr === undefined || chr === 'undefined' || chr === 'null' || chr.length === 0) {
    return true
  };
  return false
}
Vue.prototype.storageGet = function (key, type = 'localStorage') {
  if (type == 'localStorage') {
    return JSON.parse(window.localStorage.getItem(key) || '[]')
  } else if (type == 'sessionStorage') {
    return JSON.parse(window.sessionStorage.getItem(key) || '[]')
  } else {
    alert('type error')
  }
}
Vue.prototype.storageSet = function (key, value, type = 'localStorage') {
  if (type == 'localStorage') {
    window.localStorage.setItem(key, JSON.stringify(value))
  } else if (type == 'sessionStorage') {
    window.sessionStorage.setItem(key, JSON.stringify(value))
  }
}
// 回到顶部
Vue.prototype.goTop = function () {
  var timer = setInterval(function () {
    let osTop = document.documentElement.scrollTop || document.body.scrollTop
    let ispeed = Math.floor(-osTop / 5)
    document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
    if (osTop === 0) {
      clearInterval(timer)
    }
  }, 30)
}
// 判断用户是PC端还是移动端
Vue.prototype.judgeUserType = function () {
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    // 移动端
    this.userAgent = 'app'
  } else {
    // pc端
    this.userAgent = 'pc'
  }
}
