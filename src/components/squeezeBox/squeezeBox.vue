<!-- 手风琴(三级折叠列表) 组件 -->
<template>
  <div class="header">
    <ul>
      <!-- 循环数据在点击调用changeli方法时将当前索引和本条数据传进去,并使用当前数据show的bool值添加或移除样式 -->
      <li v-for="(item,index) in headerData" :key="index" :class="[{active:item.show}]" @click.stop="changeli(index,item)">
        <!-- 在这里打印出boll值方便查看 -->
        <span class="level1">
          {{item.name}}{{item.show}}
        </span>
        <!-- 判断当前这条数据的bool值如果是true就打开二级菜单,如果是false就关闭二级菜单 -->
        <transition name="fade-menu">
          <ul v-show="item.show">
            <!-- 循环二级菜单数据并使用.stop阻止冒泡 -->
            <li v-for="(a,index) in item.list" :key="index" :class="[{activeItem:a.showItem}]" @click.stop="changeItem(index,a,item.list)">
              <span class="level2">
                {{a.name+index}}
              </span>
              <!-- 循环三级菜单数据并使用.stop阻止冒泡 -->
              <transition name="fade-menu">
                <ul v-show="a.showItem">
                  <li v-for="(b,index) in a.list" :key="index" v-on:click.stop="doThisItem(index)">{{b.name+index}}</li>
                </ul>
              </transition>
            </li>
          </ul>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      //
    }
  },
  props: {
    headerData: {
      type: Array,
      required: true
    }
  },
  methods: {
    changeli (ind, item) {
      // 先循环数据中的show将其全部置为false,此时模板里的v-if判断生效关闭全部二级菜单,并移除样式
      this.headerData.forEach(i => {
        // 判断如果数据中的headerData[i]的show属性不等于当前数据的show属性那么headerData[i]等于false
        if (i.show !== this.headerData[ind].show) {
          i.show = false
        };
      })
      // 取反(true或false)
      item.show = !item.show
      console.log(item.name)
    },
    changeItem (ind, item, arr) {
      // 先循环数据中的show将其全部置为false,此时模板里的v-if判断生效关闭全部二级菜单,并移除样式
      arr.forEach(i => {
        // 判断如果数据中的headerData[i]的show属性不等于当前数据的show属性那么headerData[i]等于false
        if (i.showItem !== arr[ind].showItem) {
          i.showItem = false
        };
      })
      // 取反(true或false)
      item.showItem = !item.showItem
      console.log(item.name)
    },
    doThisItem (index) {
      alert(index)
    }
  }
}
</script>
<style lang="less" scoped>
  .header {
    padding: 4% 4% 0 4%;
    width: 100%;
    background-color: #F2F4F5;
    font-family:Alibaba PuHuiTi;
    color: rgba(18,31,44,1);
    box-sizing: border-box;
    >ul {
      width: 100%;
      // background-color: #F2F4F5;
      border-radius: 4%;
      >li {
        width: 100%;
        cursor: pointer;
        line-height: 60px;
        border-radius: 3%;
        font-size:16px;
        font-family:Alibaba PuHuiTi;
        font-weight:500;
        background-color: #fff;
        color:rgba(18,31,44,1);
        margin-bottom: 1px;
        padding: 0 10px;
        border-bottom: 1px solid #F2F4F5;
        box-sizing: border-box;
        &:hover {
          background-color: #aaa;
        }
        >ul {
          width: 100%;
          background-color: #fff;
          text-indent: 20px;
          li{
            border-radius: 3%;
            font-size:14px;
            font-weight:400;
            color:#7A8189;
            &:hover{
              background: #c31111;
            }
            ul{
              background-color: #F2F4F5;
              li{
                text-indent: 40px;
              }
            }
          }
        }
      }
      .active {
        // background-color: #F2F4F5;
        .level1{
          color: rgba(0,137,255,1);
          display: block;
          height: 100%;
          width: 100%;
          border-bottom: 1px solid #F2F4F5;
          // border-bottom: 1px solid rgba(0,137,255,1);
        }
        ul{
          li{
            // background-color: #F2F4F5;
          }
        }
        .activeItem{
          .level2{
            color: rgba(0,137,255,1);
          }
          ul{
            // background-color: #F2F4F5;
            li{
              // text-indent: 40px;
            }
          }
        }
      }
    }
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
