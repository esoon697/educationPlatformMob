import {get, post} from './axios'

const api = {
  // getIndex: data => post('/api/index/index', data) 示例
  // 获取学习中心所有数据
  getEduInfo: data => post('/course/studentCourseInfo/queryCourseEventsOfStudent', data),
  // 获取课程详情
  getCourseDetails: data => get('/course/courseEvent/detail', data),
  // 获取课程章节
  getCourseChapter: data => post('/course/courseChapter/listForStudy', data),
  // 获取课程process
  getProcessInfo: data => post('/course/processInfo/list', data),
  // 记录课程process
  setStudyProcessLog: data => post('/course/studyProcessLog/add', data),
  // 下一章数据
  getNextChapter: data => get('/course/courseChapter/getNextChapterId', data),
  // 提交试题数据
  activeSubmit: data => post('/course/activeSubmit/add', data),
  // 验证token是否失效
  checkTk: data => get('http://api.yazhuokj.com/common/api/checkJWT', data),
  // 保利威视频权限验证
  getvideoToken: data => get('/upload/getvideo/token', data),
  get: data => get('/study/finallydo', data)
}

export default api
