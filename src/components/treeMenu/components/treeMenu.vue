<template>
 <li :style="indent">
   <div class="node-row" @click="toggle">
    <span :class="[{'active-font': open}, fontStyle]" >
      <!-- <i v-if="isFolder" class="icon" :class="[open ? 'folder-open': 'folder']"></i> -->
      {{ model.menuName }}
    </span>
    <div class="icon-group">
      <i v-if="isFolder" class="iconfont" :class="[open ? 'icon-shang': 'icon-xia']"></i>
      <i v-if="!isFolder" class="file-text"></i>
    </div>
   </div>
   <transition name="fade-menu">
    <ul v-show="open" v-if="isFolder">
      <tree-menu v-for="(item, index) in model.children" :key="index" :model="item" :depth="depth+1"></tree-menu>
    </ul>
   </transition>
 </li>
</template>
<script>
// let nodeRow = document.querySelectorAll('.node-row')
export default {
  name: 'treeMenu',
  props: ['model', 'depth'],
  data () {
    return {
      open: false // 章节阶段是否打开
      // isClickId: null
      // isFolder: true
    }
  },
  computed: {
    // 是否存在子节点
    isFolder: function () {
      return this.model.children && this.model.children.length
    },
    // 不同递归深度的样式
    indent () {
      // return { transform: `translate(${this.depth * 20}px)` }
      // return { marginLeft: `${this.depth * 20}px` }
      return { textIndent: `${this.depth * 20}px` }
    },
    // 章节目录与根节点的字体样式
    fontStyle () {
      return this.isFolder ? 'font1' : 'font2'
    }
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open
      } else {
        this.currentChapterId = this.model.menuCode
        this.$store.state.currentChapterId = this.currentChapterId
        console.log(this.currentChapterId)
        this.getProcessInfo()
      }
    },
    // 获取process数据
    getProcessInfo () {
      this.$api.getProcessInfo({
        chapterId: this.currentChapterId
      }).then(res => {
        if (res.code == 200) {
          console.log(res.data)
          this.$store.state.processInfo = res.data
        }
      })
    }
  }
}
</script>
 <style lang="less">
ul {
 list-style: none;
}
/* i.icon {
 display: inline-block;
 width: 15px;
 height: 15px;
 background-repeat: no-repeat;
 vertical-align: middle;
}
.icon.folder {
 background-image: url(/src/assets/folder.png);
}
.icon.folder-open {
 background-image: url(/src/assets/folder-open.png);
}
.icon.file-text {
 background-image: url(/src/assets/file-text.png);
} */
.tree-menu li {
  line-height: 2;
  font-size:16px;
  font-family:Alibaba PuHuiTi;
}
.node-row{
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover{
    background-color: #F2F4F5;
  }
}
.font1{
  color:rgba(18,31,44,1);
}
.font2{
  color:rgba(122,129,137,1);
}
.active-row{
  background-color: #eee;
}
.active-font{
  color: rgba(0,137,255,1);
}
.fade-menu-enter-active{
  transition: all .7s
}
.fade-menu-enter{
  transform: translateY(-20%);
  // transform: scale(1, 0);
  opacity: 0;
}
</style>
