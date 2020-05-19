<template>
  <div class="task-main">
    <mt-radio
      v-if="taskType === 0"
      :title="taskTitle"
      v-model="radioVal"
      @change="check1"
      :options="taskContents">
    </mt-radio>
    <mt-checklist
      v-else
      :title="taskTitle"
      v-model="checkVal"
      @change="check2"
      :options="taskContents">
    </mt-checklist>
  </div>
</template>

<script>
</script>
<script>
import { mapState } from 'vuex'
export default {
  components: {},
  props: ['taskType', 'index', 'taskContents', 'taskTitle'],
  data () {
    return {
      radioVal: '',
      checkVal: []
    }
  },
  created () {},
  mounted () {},
  computed: {
    ...mapState(['formData', 'taskList'])
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
      this.$store.state.formData = this.formData
      // this.storageSet('formData', this.formData)
      this.isComplete()
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
      // this.storageSet('formData', this.formData)
      this.$store.state.formData = this.formData
      this.isComplete()
    },
    isComplete () {
     this.$store.state.taskList.forEach(e => {
        if (e.activeIndex == this.index) {
          if (this.radioVal || this.checkVal.length) {
            e.isComplete = true
          } else {
            e.isComplete = false
          }
        }
      })
      console.log(this.$store.state.taskList)
    }
  },
  watch: {
    //  radioVal () {},
    //  checkVal () {}
  }
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
