<template>
 <div class="tree-menu">
  <ul class="menu-box" v-for="(menuItem, index) in theModel" :key="index">
    <my-tree :model="menuItem" :depth="0"></my-tree>
  </ul>
 </div>
</template>
<script>
import myTree from './components/treeMenu'
import { mapState } from 'vuex'
// let node = null
// let endNode = null
// console.log('endNode', endNode)
export default {
  components: {
    myTree
  },
  // props: ['courId'],
  data () {
    return {
      // theModel: myData,
      courId: null
    }
  },
  created () {
  },
  mounted () {
    // this.$nextTick(() => {
    //   setTimeout(() => {
    //     this.init()
    //   }, 1000)
    // })
    // this.init()
  },
  computed: {
    ...mapState(['theModel'])
  },
  methods: {
    // 初始化数据
    // 获取章节数据
    // getCourseChapter () {
    //   this.$api.getCourseChapter({
    //     courId: this.courId,
    //     courEventId: this.courEventId,
    //     level: '0'
    //   }).then(res => {
    //     console.log(res)
    //     if (res.code == 200) {
    //       console.log('resdataaaaa', res.data)
    //       this.theModel = res.data.chapters
    //       this.$store.state.theModel = this.theModel
    //     }
    //   })
    // }
    // init () {
    //   if (!node) {
    //     node = document.querySelector('.active-row')
    //   }
    //   let parentNode = node.parentNode
    //   if (parentNode.nodeName == 'UL' && parentNode.style.display == 'none') {
    //     parentNode.style.display = 'block'
    //     // parentNode.style.background = '#a11'
    //   }
    //   // console.log(endNode)
    //   endNode = document.querySelector('.menu-box')
    //   if (parentNode.nodeName == 'UL' && parentNode.className == endNode.className) {
    //     return false
    //   } else {
    //     node = parentNode
    //     this.init()
    //   }
    // }
  },
  watch: {
    // theModel () {
    //   this.init()
    // }
  }
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
