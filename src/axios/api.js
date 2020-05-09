import {get, post} from './axios'

const api = {
  // getIndex: data => post('/api/index/index', data) 示例
  // 获取学习中心所有数据
  getEduInfo: data => post('/course/studentCourseInfo/queryCourseEventsOfStudent', data),
  getCourseDetails: data => get('/course/courseEvent/detail', data),
  // 验证token是否失效
  checkTk: data => get('http://api.yazhuokj.com/common/api/checkJWT', data),
  get: data => get('/study/finallydo', data)
}

export default api
