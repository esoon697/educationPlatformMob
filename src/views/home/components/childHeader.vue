<template>
  <div class="childHeader-main">
    <div class="ch-left">{{chTitle}}</div>
    <slot name="rank-select"></slot>
    <div class="ch-right" @click="goAll">
      全部
      <!-- <a href="javascript:;">全部</a> -->
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ['chTitle'],
  data () {
    return {
    }
  },
  created () {},
  mounted () {},
  computed: {},
  methods: {
    goAll () {
      this.$router.push({path: './courses'})
    }
  },
  watch: {}
}
</script>
<style lang="less" scoped>
.childHeader-main{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size:15px;
  font-family:Alibaba PuHuiTi;
  font-weight:400;
  padding: 25px 0;
  .ch-left{
    color:rgba(17,32,45,1)
  }
  .ch-right{
    color: #0089FF;
    &:active{
      opacity: .8;
      color: #666;
    }
  }
}
</style>
