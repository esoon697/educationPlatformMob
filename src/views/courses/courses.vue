<template>
  <div class="courses-main">
    <div class="nav-box">
      <div class="nav-bar">
        <div class="nav-item" v-for="coursesNav in coursesNavs" :key="coursesNav.navId" @click="getActive(coursesNav.navId)">
          <span class="nav-text" :class="isActive==coursesNav.navId?'isActive':''">{{coursesNav.navName}}</span>
          <img :src="isActive==coursesNav.navId?base+'courses_nav_icon_active.png':base+'courses_nav_icon.png'" alt="">
          <!-- 下拉菜单 -->
          <transition name="fade-menu">
            <div class="nav-menu" v-show="isActive==coursesNav.navId" :style="'width:'+navBoxWidth">
              <ul>
                <li v-for="course in coursesNav.courses" :key="course.courseId" :class="isSelect==coursesNav.navId+'-'+course.courseId?'isSelect':''" @click="getSelect(coursesNav.navId, course.courseId)">
                  <p>{{course.courseName}}</p>
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div class="course-content-outer">
        <div class="content-box">
          <div class="content-title">主题班会课（线上课程资源）</div>
          <div class="content-inner-box">
            <div class="content-resources">
              <!-- <div class="video-box" @click.prevent="videoPlay">
                <video id="video" class="video-player" controls loop>
                  <source src="http://182.148.48.236:54321/source/video_audio/first.mp4" type="video/mp4" />
                </video>
                <div class="videoplaybtn" v-show="!isPlay">
                  <img :src="base+'courses_video_play.png'"/>
                </div>
                <div class="play-block"></div>
              </div> -->
              <div class="video-box">
                <div id='previewArea'></div>
              </div>
              <p class="course-title">班主任主题班会课（二年级）</p>
              <div class="course-intro">《中职班主任主题班会课》共计68学时，按照中职学校1-5学期每个月的班主任重点工作进行编排，选择了68个贴合中职学生学习、生活</div>
            </div>
            <div class="resources-load">
              <div class="lit-title">资源下载</div>
              <ul>
                <li class="resource" v-for="n in 3" :key="n">
                  <p class="resource-name">1-10-2 技行天下——自信心重构课前资源.rar</p>
                  <!-- <mt-button type="primary" size="small">下载</mt-button> -->
                  <a class="load-btn" href="javascript:;" @click="downLoad(n)">下载</a>
                </li>
              </ul>
            </div>
            <div class="team-info">
              <div class="lit-title">团队信息</div>
              <ul>
                <li class="member-info" v-for="n in 3" :key="n">
                  <div class="member">
                    <img :src="base+'courses-avatar1.jpg'" alt="">
                    <p class="name">
                      <span>汪永智</span>
                      <span>教授</span>
                    </p>
                  </div>
                  <p class="member-intro">中国职教学会德育工作委员会副主任，中国职教学会班主任与师德建设研究中心主任。</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
    <transition name="fade-bg">
      <div v-show="isActive" class="nav-bg" @click="getActive('')">
      </div>
    </transition>
  </div>
</template>

<script src='//player.polyv.net/script/polyvplayer.min.js'></script>
<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      coursesNavs: [
        {
          navId: 1,
          navName: '班主任',
          courses: [
            {
              courseId: 1,
              courseName: '主题班会课（线上课程资源）'
            },
            {
              courseId: 2,
              courseName: '班会拓展课（线上课程资源）'
            },
            {
              courseId: 3,
              courseName: '班主任实务工具包（辅助资源）'
            },
            {
              courseId: 4,
              courseName: '班主任职业能力构建与提升线下培训'
            },
            {
              courseId: 5,
              courseName: '班主任好管家（软件）'
            },
            {
              courseId: 6,
              courseName: '班主任每周一测（软件）'
            }
          ]
        },
        {
          navId: 2,
          navName: '中职素养',
          courses: [
            {
              courseId: 1,
              courseName: '中职素养（线上课程资源）'
            },
            {
              courseId: 2,
              courseName: '中职素养（线上课程资源）'
            },
          ]
        },
        {
          navId: 3,
          navName: '基础课程',
          courses: [
            {
              courseId: 1,
              courseName: '基础课程（线上课程资源）'
            }
          ]
        },
        {
          navId: 4,
          navName: '专家名师',
          courses: [
            {
              courseId: 1,
              courseName: '专家名师（线上课程资源）'
            },
            {
              courseId: 2,
              courseName: '专家名师（线上课程资源）'
            },
            {
              courseId: 3,
              courseName: '专家名师（线上课程资源）'
            }
          ]
        },
      ],
      isActive: '',
      isSelect: '1-1',
      navBoxWidth: '',
      isPlay: false
    }
  },
  created () {
    this.$nextTick(() => {
      this.init()
    })
  },
  mounted () {
    let navBox = document.querySelector('.nav-box')
    this.navBoxWidth = navBox.clientWidth + 'px'
  },
  computed: {},
  methods: {
    init () {
      this.plPlayer = polyvObject('#previewArea').previewPlayer({
        'width': '100%',
        'height': '338',
        'vid': 'jl91nkk5m5027lc431cln7kc365nn2p37_l'
      })
    },
    getActive (n) {
      console.log(n)
      if (this.isActive === n) {
        this.isActive = ''
      } else {
        this.isActive = n
      }
    },
    getSelect (n, i) {
      console.log(n, i)
      this.isSelect = n + '-' + i
      console.log(this.isSelect)
      // if (this.isSelect === i) {
      //   this.isSelect = ''
      // } else {
      //   this.isSelect = i
      // }
    },
    videoPlay () {
      console.log('paly')
      let player = document.querySelector('#video')
      console.log(player.currentSrc)
      if (!player.currentSrc) {
        this.$error('暂无资源，敬请期待！')
        return
      }
      if (player.networkState === 3) {
        this.$error('暂未找到视频资源')
        return
      }
      if (player.paused) {
        player.play()
        this.isPlay = true
      } else {
        player.pause()
        this.isPlay = false
      }
    },
    downLoad (n) {
      console.log('downLoad', n)
    }
  },
  watch: {}
}
</script>
<style lang="less" scoped>
.courses-main{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F2F4F5;
  .nav-box{
    width: 100%;
    height: 48.5px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    z-index: 1000;
    // padding: 4%;
    .nav-bar{
      position: relative;
      height: 48.5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      .nav-item{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        .nav-menu{
          top: 47.5px;
          left: 0;
          position: absolute;
          background-color: #fff;
          border-top: 1px solid rgba(227,229,230,1);
          // padding: 0 4%;
          box-sizing: border-box;
          ul{
            li{
              height: 44px;
              line-height: 44px;
              font-size:14px;
              font-family:Alibaba PuHuiTi;
              font-weight:400;
              color:rgba(122,129,137,1);
              padding: 0 4%;
              cursor: pointer;
              @media screen and (min-width: 1200px){
                &:hover{
                  background-color: rgba(227,229,230,.6);
                }
              }
              p{
                padding-left: 10px;
                border-bottom: 1px solid rgba(227,229,230,1);
              }
            }
            .isSelect{
              background-color: rgba(227,229,230,1);
            }
          }
        }
        @media screen and (min-width: 1200px){
          &:hover{
            background-color: rgba(227,229,230,.6);
          }
        }
        .nav-text{
          font-size:14px;
          font-family:Alibaba PuHuiTi;
          font-weight:400;
          color:rgba(122,129,137,1);
          margin-right: 7px;
        }
        .isActive{
          font-weight:bold;
          color:rgba(18,31,44,1)
        }
        img{
          width: 10px;
          height: 6px;
        }
      }
    }
  }
  .course-content-outer{
    width: 100%;
    padding: 4%;
    box-sizing: border-box;
      .content-box{
        width: 100%;
        background-color: #fff;
        border-radius: 10px;
        padding: 5%;
        box-sizing: border-box;
        .content-title{
          height: 35px;
          // line-height: 50px;
          box-sizing: border-box;
          font-size:16px;
          font-family:Alibaba PuHuiTi;
          font-weight:bold;
          color:rgba(18,31,44,1);
          border-bottom: 1px solid rgba(227,229,230,1);
        }
        .content-inner-box{
          width: 100%;
          margin-top: 5%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          .content-resources{
            // flex: 1;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            margin-bottom: 3%;
            .video-box{
              width: 100%;
              position: relative;
              .video-player{
                width: 100%;
              }
              .videoplaybtn {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                img{
                  width: 50px;
                }
              }
              .play-block{
                width: 20px;
                height: 20px;
                background: rgba(0, 0, 0, 0);
                position: absolute;
                bottom: 25px;
                left: 5px;
                z-index: 10;
              }
            }
            .course-title{
              font-size:15px;
              font-family:Alibaba PuHuiTi;
              font-weight:bold;
              color:rgba(18,31,44,1);
              line-height: 18px;
              margin: 2% 0;
            }
            .course-intro{
              font-size:14px;
              font-family:Alibaba PuHuiTi;
              font-weight:400;
              color:rgba(125,132,139,1);
              line-height:20px;
              text-align:justify;
            }
          }
          .resources-load, .team-info{
            width: 100%;
            font-family:Alibaba PuHuiTi;
            font-weight:400;
            color:rgba(125,132,139,1);
            .lit-title{
              padding-left: 10px;
              border-left: 3px solid #0089FF;
              font-size:14px;
              line-height: 16px;
              font-weight:bold;
              color:rgba(18,31,44,1);
              margin-bottom: 2%;
            }
          }
          .resources-load{
            margin-bottom: 1%;
            .resource{
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 2%;
              .resource-name{
                width: 80%;
                font-size:13px;
                line-height:15px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              }
              .load-btn{
                background-color: #0089FF;
                font-size: 13px;
                padding: 5px 8px;
                color: #fff;
                border-radius: 5px;
                &:active{
                  background-color: rgba(80, 80, 100, .6);
                }
              }
            }
          }
          .team-info{
            font-size:12px;
            line-height:17px;
            .member-info{
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 2%;
              .member{
                flex: 1;
                margin-right: 20px;
                display: flex;
                img{
                  width: 33px;
                  height: 33px;
                  border-radius: 50%;
                  margin-right: 10px;
                }
                .name{
                  display: flex;
                  flex-direction: column;
                  span{
                    width: 100%;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    font-size:11px;
                    font-weight:400;
                    color:rgba(18,31,44,1);
                  }
                }
              }
              .member-intro{
                flex: 10;
              }
            }
          }
        }
      }
  }
  .nav-bg{
    width: 100%;
    height: 100vh;
    // height: calc(100vh-48.5px);
    position: absolute;
    background:rgba(0,0,0,1);
    opacity:0.5;
    z-index: 999;
  }
  .fade-menu-enter-active{
    transition: all .5s
  }
  .fade-menu-enter{
    transform: translateY(-50%);
    opacity: 0;
  }
  .fade-bg-enter-active{
    transition: all .5s
  }
  .fade-bg-enter{
    // transform: translateY(-100%);
    opacity: 0;
  }
}
</style>
