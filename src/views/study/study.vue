<template>
    <div class="study-main">
      <!-- <Video/> -->
      <Resourse/>
      <div class="navBar-box">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">目录</mt-tab-item>
          <mt-tab-item id="2">简介</mt-tab-item>
        </mt-navbar>
      </div>
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <!-- <ContentContainner v-for="m in 3" :key="m" :contentTitle="'一年级9月  入学教育'">
            <div slot="content" class="menu-box">
              <ul>
                <li class="menu-item" v-for="n in 6" :key="n" @click="goStudy(m, n)"> 1—9—1 开启新生活—新生入学导航
                  <ul v-if="n==1&&m==1">
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                  </ul>
                </li>
              </ul>
            </div>
          </ContentContainner> -->
          <TreeMenu/>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <ContentContainner :contentTitle="detailsData.openName" v-if="detailsData">
            <div slot="content" class="intro-box">
              <h2>简介</h2>
              <p class="intro-text" v-if="detailsData">{{detailsData.openDescription}}</p>
            </div>
          </ContentContainner>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
</template>

<script>
// import Video from '../../components/video/video'
import Resourse from '../../components/resourse/index'
import ContentContainner from '../../components/contentContainner/contentContainner'
import TreeMenu from '../../components/treeMenu/main'
import { mapState } from 'vuex'
export default {
  components: {Resourse, ContentContainner, TreeMenu},
  props: {},
  data () {
    return {
      contentTitle: '',
      selected: '1',
      courId: null
    }
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      this.init()
    })
  },
  computed: {
    ...mapState(['detailsData', 'courEventId'])
  },
  methods: {
    init () {
      this.$store.state.theModel = null
      this.courId = this.detailsData.courId
      this.getCourseChapter()
    },
    // 获取章节数据
    getCourseChapter () {
      this.$api.getCourseChapter({
        courId: this.courId,
        courEventId: this.courEventId,
        level: '0'
      }).then(res => {
        if (res.code == 200) {
          console.log('resdataaaaa', res.data)
          if (!res.data.chapters.length) {
            this.$Toast('该课程暂无数据')
            return
          }
          this.chapters = res.data.chapters
          this.currentChapterId = res.data.currentChapterId
          this.$store.state.theModel = res.data.chapters
          // this.$store.state.processInfo = res.data.initProcessInfo
          this.$store.state.currentChapterId = res.data.currentChapterId
          this.$store.state.currentProcessId = res.data.currentProcessInfoId
          this.$store.state.courEventId = res.data.courseEventId
          console.log('res.data.initProcessInfo', res.data.initProcessInfo)
          let arr = this.initTreeList()
          // let arr = this.initArr()
          console.log('this.initTreeList()', arr)
          for (let i = 0; i < arr.length; i++) {
            arr = arr[i]
          }
        }
      })
    },
    // 初始化tree
    initTreeList () {
      this.findNode()
      console.log('this.node', this.node)
      let that = this
      // let indexs = []
      function findAllParent (node = that.node, tree = that.chapters, parentNodes = [], index = 0, indexs = []) {
        // console.log('node111', node)
        if (!node || node.parentId === 0 || index === 5) {
          return
        }
        findParent(node, parentNodes, tree, indexs)
        let parntNode = parentNodes[index]
        findAllParent(parntNode, tree, parentNodes, ++index, indexs)
        console.log('parentNodes', parentNodes)
        // return parentNodes
        return indexs
      }
      function findParent (node, parentNodes, tree, indexs) {
        for (let i = 0; i < tree.length; i++) {
          let item = tree[i]
          if (item.menuCode === node.parentId) {
            parentNodes.push(item)
            indexs.push(i)
            return
          }
          if (item.children && item.children.length > 0) {
            findParent(node, parentNodes, item.children, indexs)
          }
        }
      }
      return findAllParent()
    },
    findNode () {
      let that = this
      function findNode (menuCode = that.currentChapterId, node = null, chapters = that.chapters) {
        for (let i = 0; i < chapters.length; i++) {
          let item = chapters[i]
          if (item.menuCode === menuCode) {
            that.node = item
            console.log('nodeeeeeeeeee', that.node)
            return
          }
          if (item.children && item.children.length > 0) {
            findNode(menuCode, node, item.children)
          }
        }
      }
      return findNode()
    },
    initArr () {
      // let arr = this.chapters
      // let node = this.node
      this.findNode()
      console.log('node', this.node)
      let that = this
      function findParent (node = that.node, arr = that.chapters, indexs = []) {
        if (!node || node.parentId === 0) {
          return indexs
        }
        for (let i = 0; i < arr.length; i++) {
          let item = arr[i]
          console.log('item', item)
          if (node.parentId === item.menuCode) {
            console.log('i', i)
            node = item
            indexs.push(i)
            return
          }
          if (item.children && item.children.length > 0) {
            findParent(node, arr, indexs)
          }
        }
      }
      return findParent()
    },
    goStudy (m, n) {
      console.log(m, n)
    }
  },
  watch: {}
}
</script>
<style lang="less">
.navBar-box{
  // width: 50%;
  // margin-bottom: 2px;
  // margin-bottom: 3%;
  .mint-navbar .mint-tab-item{
    display: flex;
    justify-content: center;
  }
  .is-selected{
    border-bottom: none!important;
    .mint-tab-item-label{
      // font-weight:bold!important;
      position: relative;
      &::after{
        content: '';
        display: block;
        width: 80%;
        height: 3px;
        border-radius: 1.5px;
        background-color: #0089FF;
        position: absolute;
        bottom: -85%;
        left: 15%;
        // border-top: 2px solid #0089FF;
      }
    }
  }
  @media screen and (min-width: 1200px){
    width: 40%;
  }
}
.menu-box{
  width: 100%;
  .menu-item{
    width: 100%;
    font-size:13px;
    font-family:Alibaba PuHuiTi;
    font-weight:400;
    color:rgba(122,129,137,1);
    padding: 20px 0;
    border-bottom: 1px solid rgba(227,229,230,1);
    box-sizing: border-box;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    &:active{
      background-color: #eee;
      opacity: .8;
    }
  }
  .isSelect{
    font-size: 14px;
    color:rgba(0,137,255,1);
  }
}
.intro-box{
  h2{
    padding: 4% 0;
    font-size:15px;
    font-family:Alibaba PuHuiTi;
    font-weight:bold;
    color:rgba(18,31,44,1);
  }
  .intro-text{
    font-size:14px;
    font-family:Alibaba PuHuiTi;
    font-weight:400;
    color:rgba(125,132,139,1);
    line-height:22px;
    text-align: justify;
  }
}
</style>
