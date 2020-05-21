// 状态对象
export default {
  loading: 0, // 全局loading状态
  formData: [],
  detailsData: {}, // 课程详情数据
  courEventId: null, // 课程id
  currentChapterId: null, // 当前章节id
  currentProcessId: null, // 当前已学习processId
  theModel: null, // 学习章节列表
  processInfo: null, // 章节process数据
  isPreview: false, // 图片预览状态
  previewImgs: null, // 预览图片列表
  taskList: null, // 当前章节互动列表
  activeList: null, // 打开状态的chapters节点
  isShowTabBar: true
}
