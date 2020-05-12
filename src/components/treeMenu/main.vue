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
    //   this.init()
    // })
  },
  computed: {
    ...mapState(['theModel', 'currentChapterId'])
  },
  methods: {
    // 初始化数据
    // 获取章节数据
    // getCourseChapter () {
    //   // console.log('this.$store.state.detailsData.courIdddddddddddddd', this.$store.state.detailsData.courId)
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
