<template>
 <li :style="indent">
   <div class="node-row" @click="toggle" :class="{'active-row':currentChapterId==model.menuCode}">
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
    <ul v-show="open">
      <tree-menu v-for="(item, index) in model.children" :key="index" :model="item" :depth="depth+1"></tree-menu>
    </ul>
   </transition>
 </li>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'treeMenu',
  props: ['model', 'depth'],
  data () {
    return {
      open: false, // 章节阶段是否打开
      chapterId: null
      // isClickId: null
      // isFolder: true
    }
  },
  computed: {
    ...mapState(['currentChapterId', 'activeList']),
    // 是否存在子节点
    isFolder: function () {
      return this.model.children && this.model.children.length
    },
    // 不同递归深度的样式
    indent () {
      return { textIndent: `${this.depth * 20}px` }
    },
    // 章节目录与根节点的字体样式
    fontStyle () {
      return this.isFolder ? 'font1' : 'font2'
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      let isExist = this.activeList.findIndex(e => e.menuCode == this.model.menuCode)
      if (isExist >= 0) {
        this.open = true
      } else {
        this.open = false
      }
    },
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open
      } else {
        this.chapterId = this.model.menuCode
        this.$store.state.currentChapterId = this.chapterId
        // this.getProcessInfo()
        this.goTop()
      }
    },
    // 回到顶部
    goTop () {
      var timer = setInterval(function () {
        let osTop = document.documentElement.scrollTop || document.body.scrollTop
        let ispeed = Math.floor(-osTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
        if (osTop === 0) {
          clearInterval(timer)
        }
      }, 30)
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
}
.font1{
  color:rgba(18,31,44,1);
}
.font2{
  color:rgba(122,129,137,1);
}
.active-row{
  background-color: #0089ff;
  color: #fff;
  .font2{
    color: #fff;
  }
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
