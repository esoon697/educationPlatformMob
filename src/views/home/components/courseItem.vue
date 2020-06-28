<template>
  <div class="courseItem-main" @click="goCoursesDetails(initCourse.courEventId)">
    <div class="course-left">
      <img v-lazy="initCourse.coverUri" alt="" lazy="loading">
      <!-- <div class="course-count" v-if="courseCount">{{initCourse}}节课</div> -->
      <!-- <div class="course-play">
        <img :src="base+'home_play_icon.png'" alt="">
      </div> -->
    </div>
    <div class="course-right">
      <p class="course-title">{{initCourse.openName}}</p>
      <div class="course-content">
        <span>{{initCourse.openDescription}}</span>
      </div>
      <div class="course-time" v-if="initCourse.courHour">
        <span>{{initCourse.courHour}}学时</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ['initCourse'],
  data () {
    return {
    }
  },
  created () {},
  mounted () {},
  computed: {},
  methods: {
    goCoursesDetails (id) {
      console.log(id)
      this.$router.push({path: './courseDetails', query: {id: id}})
    }
  },
  watch: {}
}
</script>
<style lang="less" scoped>
.courseItem-main{
  display: flex;
  justify-content: flex-start;
  margin-bottom: 60px;
  .course-left{
    width: 40%;
    margin-right: 10px;
    position: relative;
    img{
      width: 100%;
    }
    .course-count{
      width: 50px;
      height: 18px;
      background:rgba(0,137,255,1);
      border-radius:5px 0px 5px 0px;
      font-size:11px;
      font-family:Alibaba PuHuiTi;
      font-weight:400;
      color:rgba(255,255,255,1);
      line-height: 18px;
      text-align: center;
      position: absolute;
      top: 0;
    }
    .course-play{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      img{
        width: 24px;
      }
    }
  }
  .course-right{
    width: 60%;
    font-family:Alibaba PuHuiTi;
    font-weight:400;
    .course-title{
      font-size:15px;
      color:rgba(17,32,45,1);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .course-content{
      font-size:13px;
      line-height: 1.8;
      color:rgba(126,129,133,1);
      margin: 10px 0;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .course-time{
      font-size:11px/1;
      color:rgba(0,137,255,1);
    }
  }
  img[lazy=loading] {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
  }
}
</style>
