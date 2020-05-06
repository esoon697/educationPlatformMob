<template>
  <div class="user-main">
    <div class="user-title">
      <img class="left" src="" alt="">
      <div class="right">
        <p class="up">四川亚卓教育科技股份有限公司</p>
        <p class="down">中职德育课程</p>
      </div>
    </div>
    <div class="user-banner"></div>
    <div class="btn-group"></div>
    <div class="train-box"></div>
    <div class="course-box"></div>
    <div class="rank-box"></div>
  </div>
</template>

<script>
export default {
  props: [''],
  data () {
    return {

    }
  },

  components: {},

  computed: {},

  created () {},

  mounted () {},

  methods: {},

  watch: {}

}

</script>
<style lang='less' scoped>
.user-main{
  padding: 0 4%;
  .user-title{
    display: flex;
    .left{}
    .right{
      display: flex;
      flex-direction: column;
      .up{
        font-size:36px;
        font-family:Alibaba PuHuiTi;
        font-weight:500;
        color:rgba(25,31,37,1);
      }
      .down{
        font-size:28px;
        font-family:Alibaba PuHuiTi;
        font-weight:400;
        color:rgba(99,114,128,1);
        line-height:26px;
      }
    }
  }
}
</style>
