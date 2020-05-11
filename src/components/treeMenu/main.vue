<template>
 <div class="tree-menu">
  <ul class="menu-box" v-for="(menuItem, index) in theModel" :key="index">
    <my-tree :model="menuItem" :depth="0"></my-tree>
  </ul>
 </div>
</template>
<script>
import myTree from './components/treeMenu'
var myData = [
  {
    'id': '1',
    'menuName': '基础管理',
    'menuCode': '10',
    'children': [
      {
        'menuName': '用户管理',
        'menuCode': '11'
      },
      {
        'menuName': '角色管理',
        'menuCode': '12',
        'children': [
          {
            'menuName': '管理员',
            'menuCode': '121'
          },
          {
            'menuName': 'CEO',
            'menuCode': '122'
          },
          {
            'menuName': 'CFO',
            'menuCode': '123'
          },
          {
            'menuName': 'COO',
            'menuCode': '124'
          },
          {
            'menuName': '普通人',
            'menuCode': '124'
          }
        ]
      },
      {
        'menuName': '权限管理',
        'menuCode': '13'
      }
    ]
  },
  {
    'id': '2',
    'menuName': '商品管理',
    'menuCode': ''
  },
  {
    'id': '3',
    'menuName': '订单管理',
    'menuCode': '30',
    'children': [
      {
        'menuName': '订单列表',
        'menuCode': '31'
      },
      {
        'menuName': '退货列表',
        'menuCode': '32',
        'children': []
      }
    ]
  },
  {
    'id': '4',
    'menuName': '商家管理',
    'menuCode': '',
    'children': []
  }
]
export default {
  components: {
    myTree
  },
  props: ['courId'],
  data () {
    return {
      theModel: myData
      // courId: null
    }
  },
  created () {
    this.init()
  },
  mounted () {},
  computed: {},
  methods: {
    // 初始化数据
    init () {
      // this.courId = this.$route.query.courId
      console.log('courseidddddddddddd', this.courId)
      this.getCourseChapter()
    },
    // 获取章节数据
    getCourseChapter () {
      this.$api.getCourseChapter({
        courId: this.courId,
        level: 0
      }).then(res => {
        console.log(res)
        if (res.code == 200) {
          console.log(res.data)
        }
      })
    }
  },
  watch: {}
}
</script>

<style lang="less">
  .tree-menu{
    padding: 4%;
    background-color: #F2F4F5;
    box-sizing: border-box;
    .menu-box{
      background-color: #fff;
      border-radius: 5px;
      overflow: hidden;
      margin-bottom: 2px;
      padding: 10px 10px;
      box-sizing: border-box;
    }
  }
</style>
