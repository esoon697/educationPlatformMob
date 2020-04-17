<template>
  <div class="content-outer-box">
    <div class="content-box">
      <div class="content-title">{{contentTitle}}</div>
      <div class="content-inner-box">
        <!-- <div class="content-card" v-for="n in 6" :key="n">
          <img class="card-top" :src="base+'card_eg.jpg'" alt="">
          <p class="card-mid">主题班会课（线上课程资源）</p>
          <div class="card-bottom">68学时</div>
        </div> -->
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ['contentTitle'],
  data () {
    return {
    }
  },
  created () {},
  mounted () {},
  computed: {},
  methods: {},
  watch: {}
}
</script>
<style lang="less" scoped>
.content-outer-box{
  padding: 4% 4% 0 4%;
  background-color: #F2F4F5;
  &:last-child{
    padding-bottom: 4%;
  }
  .content-box{
    width: 100%;
    background-color: #fff;
    border-radius: 3%;
    padding: 5%;
    box-sizing: border-box;
    .content-title{
      height: 35px;
      box-sizing: border-box;
      font-size:16px;
      font-family:Alibaba PuHuiTi;
      font-weight:bold;
      color:rgba(18,31,44,1);
      border-bottom: 1px solid rgba(227,229,230,1);
    }
    .content-inner-box{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      // .content-card{
      //   width: 100%;
      //   display: flex;
      //   flex-direction: column;
      //   justify-content: center;
      //   align-items: flex-start;
      //   margin-bottom: 5%;
      //   // &:last-child{
      //   //   margin-bottom: 0;
      //   // }
      //   .card-top{
      //     width: 100%;
      //   }
      //   .card-mid{
      //     font-family:Alibaba PuHuiTi;
      //     font-weight:bold;
      //     color:rgba(18,31,44,1);
      //     font-size:14px;
      //     line-height: 18px;
      //     margin: 5% 0;
      //   }
      //   .card-bottom{
      //     font-family:Alibaba PuHuiTi;
      //     font-weight: 400;
      //     color:rgba(125,132,139,1);
      //     font-size:13px;
      //   }
      // }
    }
  }
}
</style>
