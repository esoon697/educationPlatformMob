import {get, post} from './axios'

const api = {
  // getIndex: data => post('/api/index/index', data) 示例
  // 获取学习中心所有数据
  getEduInfo: data => post('/course/studentCourseInfo/queryCourseEventsOfStudent', data),
  get: data => get('/study/finallydo', data)
}

export default api
