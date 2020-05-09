<template>
  <div class="task-main">
    <mt-radio
      v-if="taskType === 0"
      title="单选框列表大飒少aaaaaaaaaaaaaaaaaaaaaaaaaa时诵诗书"
      v-model="radioVal"
      @change="check1"
      :options="['选项qqqqqqr1', '选项r2', '选项r3']">
    </mt-radio>
    <mt-checklist
      v-else
      title="复选框列表"
      v-model="checkVal"
      @change="check2"
      :options="['选项A', '选项B', '选项C']">
    </mt-checklist>
  </div>
</template>

<script>
</script>
<script>
import { mapState } from 'vuex'
export default {
  components: {},
  props: ['taskType', 'index'],
  data () {
    return {
      radioVal: '',
      checkVal: []
      // formData: []
    }
  },
  created () {},
  mounted () {},
  computed: {
    ...mapState(['formData'])
  },
  methods: {
    init () {
      // let formData = this.storageGet('formData')
    },
    check1 () {
      let radioObj = {
        id: this.index,
        radioVal: this.radioVal
      }
      let existIndex = this.formData.findIndex(e => e.id === this.index)
      console.log('index', this.index)
      console.log('existIndex', existIndex)
      console.log('formData', this.formData)
      if (existIndex >= 0) {
        this.formData.splice(existIndex, 1, radioObj)
      } else {
        this.formData.push(radioObj)
      }
      console.log(this.formData)
      this.storageSet('formData', this.formData)
    },
    check2 () {
      console.log('formData1', this.formData)
      let checkObj = {
        id: this.index,
        checkVal: this.checkVal
      }
      console.log('formData2', this.formData)
      let existIndex = this.formData.findIndex(e => e.id === this.index)
      console.log('index', this.index)
      console.log('existIndex', existIndex)
      console.log('formData3', this.formData)
      if (existIndex >= 0) {
        this.formData.splice(existIndex, 1, checkObj)
      } else {
        this.formData.push(checkObj)
      }
      this.storageSet('formData', this.formData)
    }
  },
  watch: {}
}
</script>
<style lang="less">
.task-main{
  width: 100%;
  height: 99%;
  overflow: hidden;
  // padding-bottom: 5%;
  .mint-radiolist, .mint-checklist{
    width: 100%;
    height: 100%;
    background-color: #0089FF;
    text-align:center;
    .mint-radiolist-title, .mint-checklist-title{
      margin: 0;
      padding: 10px 15px;
      text-align:left;
      display:inline-block;
      word-break: break-all;
      font-size:16px;
      line-height: 1.5;
      font-family:Alibaba PuHuiTi;
      font-weight:bold;
      color:rgba(255,255,255,1);
    }
  }
  .mint-cell-wrapper{
    background-image: none;
    text-align:left;
  }
  .mint-cell{
    margin: 0 0 -2px -1px;
    padding-bottom: 2px;
  }
}
</style>
