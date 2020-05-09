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
          <ContentContainner :contentTitle="'班主任主题班会课（二年级） '">
            <div slot="content" class="intro-box">
              <h2>简介</h2>
              <p class="intro-text">《中职班主任主题班会课》共计68学时，按照中职学校1-5学期每个月的班主任重点工作进行编排，选择了68个贴合中职学生学习、生活、心理需求的典型主题，通过生动的微课、丰富的教师资源包，让每一节主题班会课都精彩纷呈。 课程参考全国班主任基本功大赛的评分标准，课程结构遵循“情景导入→认知→情感认同→运用→课后拓展”的设计思路进行编写，所有素材都来源于一线的中职学校，班主任在实际运用的时候可以根据自己的需求，结合不同的学情、专业，进行调整、编辑，更加接地气，具有实效性。以时间为顺序编排的主题班会课资源，不仅能为班主任提供了很好的带班指导和建议，同时也帮助学校在创新德育工作和班主任队管理方面提供了参考和抓手。</p>
            </div>
          </ContentContainner>
        </mt-tab-container-item>
      </mt-tab-container>
      <!-- <MyVuePreview/> -->
    </div>
</template>

<script>
// import Video from '../../components/video/video'
import Resourse from '../../components/resourse/index'
import MyVuePreview from '../../components/myVuePreview/myVuePreview'
import ContentContainner from '../../components/contentContainner/contentContainner'
import TreeMenu from '../../components/treeMenu/main'
export default {
  components: {Resourse, ContentContainner, MyVuePreview, TreeMenu},
  props: {},
  data () {
    return {
      contentTitle: '',
      selected: '1'
    }
  },
  created () {},
  mounted () {},
  computed: {},
  methods: {
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
