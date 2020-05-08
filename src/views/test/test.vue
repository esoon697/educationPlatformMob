<!-- 手风琴 -->
<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="手风琴"></mt-header>
    <!-- 内容部分 -->
    <div class="content">
      <!-- 手风琴 -->
      <squeeze-box :headerData="headerData"></squeeze-box>
    </div>
  </div>
</template>

<script>
import SqueezeBox from '../../components/squeezeBox/squeezeBox'

export default {
  name: 'AudioBook',
  components: {
    SqueezeBox
  },
  data () {
    return {
      headerData: [{
        name: '导航1',
        list: [{name: '子集', list: [{name: '张三', age: '20'}], showItem: false}, {name: '子集', list: [{name: '张三', age: '20'}], showItem: false}, {name: '子集', list: [{name: '张三', age: '20'}], showItem: false}, {name: '子集', list: [{name: '张三', age: '20'}], showItem: false}, {name: '子集', list: [{name: '张三', age: '20'}], showItem: false}],
        show: false
      }, {
        name: '导航2',
        list: [{name: '子集', list: [{name: '张三', age: '20'}], showItem: false}, {name: '子集', list: [{name: '张三', age: '20'}], showItem: false}, {name: '子集', list: [{name: '张三', age: '20'}], showItem: false}, {name: '子集', list: [{name: '张三', age: '20'}], showItem: false}, {name: '子集', list: [{name: '张三', age: '20'}], showItem: false}],
        show: false
      }, {
        name: '导航3',
        list: [{name: '子集', list: [{name: '张三', age: '20'}], showItem: false}, {name: '子集', list: [{name: '张三', age: '20'}], showItem: false}, {name: '子集', list: [{name: '张三', age: '20'}], showItem: false}, {name: '子集', list: [{name: '张三', age: '20'}], showItem: false}, {name: '子集', list: [{name: '张三', age: '20'}], showItem: false}],
        show: false
      }, {
        name: '导航4',
        list: [{name: '子集', list: [{name: '张三', age: '20'}], showItem: false}, {name: '子集', list: [{name: '张三', age: '20'}], showItem: false}, {name: '子集', list: [{name: '张三', age: '20'}], showItem: false}, {name: '子集', list: [{name: '张三', age: '20'}], showItem: false}, {name: '子集', list: [{name: '张三', age: '20'}], showItem: false}],
        show: false
      }, {
        name: '导航5',
        list: [{name: '子集', list: [{name: '张三', age: '20'}], showItem: false}, {name: '子集', list: [{name: '张三', age: '20'}], showItem: false}, {name: '子集', list: [{name: '张三', age: '20'}], showItem: false}, {name: '子集', list: [{name: '张三', age: '20'}], showItem: false}, {name: '子集', list: [{name: '张三', age: '20'}], showItem: false}],
        show: false
      }]
    }
  }
}
</script>

<style lang="less" scoped>
  .content{
    position: absolute;
    top: 40px;
    left: 0px;
    right: 0px;
    bottom: 53px;
    overflow: scroll;
  }
  /*隐藏 滚动条*/
  ::-webkit-scrollbar{
    display:none;
  }
</style>
