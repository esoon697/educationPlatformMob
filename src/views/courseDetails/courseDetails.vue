<template>
  <div class="courses-main">
    <div class="nav-box">
      <div class="nav-bar">
        <div class="nav-item" v-for="(coursesNav, navId) in coursesNavs" :key="navId" @click="getActive(navId+1)">
          <span class="nav-text" :class="isActive==navId+1?'isActive':''">{{coursesNav.courseTypeName}}</span>
          <img :src="isActive==navId+1?base+'courses_nav_icon_active.png':base+'courses_nav_icon.png'" alt="">
          <!-- 下拉菜单 -->
          <transition name="fade-menu">
            <div class="nav-menu" v-show="isActive==navId+1" :style="'width:'+navBoxWidth">
              <ul>
                <li v-for="course in coursesNav.courseEventList" :key="course.courEventId" :class="isSelect==navId+1+'-'+course.courEventId?'isSelect':''" @click="getSelect(navId+1, course.courEventId)">
                  <p>{{course.openName}}</p>
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div class="course-content-outer">
        <div class="content-box">
          <div class="content-title">{{detailsData.courTypeName}}</div>
          <div class="content-inner-box">
            <div class="content-resources">
              <!-- <div class="preview-box" @click.prevent="videoPlay">
                <video id="video" class="video-player" controls loop>
                  <source src="http://182.148.48.236:54321/source/video_audio/first.mp4" type="video/mp4" />
                </video>
                <div class="videoplaybtn" v-show="!isPlay">
                  <img :src="base+'courses_video_play.png'"/>
                </div>
                <div class="play-block"></div>
              </div> -->
              <div v-if="detailsData.demonstrationUri" class="preview-box">
                <div v-if="detailsData.demonstrationUri.type==1" class="img-box">
                  <img v-lazy="detailsData.demonstrationUri.uri" alt="" lazy="loading">
                </div>
                <div v-if="detailsData.demonstrationUri.type==2" class="video-box">
                  <div id='previewArea'></div>
                  <div v-if="!plPlayer" class="resourse-bg">加载中</div>
                </div>
              </div>
              <div v-else class="resourse-bg">加载中</div>
              <div class="go-study">
                <a class="study-btn" href="javascript:;" @click="goStudy">开始学习</a>
              </div>
              <p class="course-title">{{detailsData.openName}}</p>
              <div class="course-intro">{{detailsData.openDescription}}</div>
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
                    <img v-lazy="base+'courses-avatar1.jpg'" alt="" lazy="loading">
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

<script>
// let targetURL = null
// if (process.env.NODE_ENV == 'development') {
//   // dev开发环境
//   targetURL = 'http://10.10.10.213:5000/login'
// } else if (process.env.NODE_ENV == 'production') {
//   // build生产环境
//   targetURL = 'http://portal.yazhuokj.com/login'
// }
export default {
  components: {},
  props: {},
  data () {
    return {
      coursesNavs: [],
      isActive: '',
      isSelect: null,
      navBoxWidth: '',
      isPlay: false,
      currentCourId: null,
      detailsData: {},
      vid: null,
      ts: null,
      sign: null,
      playsafe: null,
      plPlayer: null
    }
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      this.init()
    })
    let navBox = document.querySelector('.nav-box')
    this.navBoxWidth = navBox.clientWidth + 'px'
  },
  computed: {},
  methods: {
    init () {
      this.currentCourId = this.$route.query.id
      this.$store.state.courEventId = this.currentCourId
      this.coursesNavs = this.$store.state.coursesList
      this.isSelect = '1-' + this.currentCourId
      this.getDetailsData()
    },
    initPlayer () {
      this.$api.getvideoToken({
        vid: this.vid
      }).then(res => {
        if (res.code == 200) {
          console.log(res.data)
          this.ts = res.data.ts
          this.sign = res.data.sign
          this.playsafe = res.data.token
          this.plPlayer = polyvObject('#previewArea').videoPlayer({
            'width': '100%',
            'height': '260',
            'forceH5': true,
            'vid': this.vid,
            'ts': this.ts,
            'sign': this.sign,
            'playsafe': this.playsafe,
            'df': 3
          })
        }
      })
    },
    getDetailsData () {
      this.$api.getCourseDetails({
        id: this.currentCourId
      }).then(res => {
        if (res.code == 200) {
          this.detailsData = res.data
          this.courId = res.data.courId
          this.$store.state.detailsData = res.data
          this.vid = res.data.demonstrationUri.uri
          if (this.plPlayer) {
            this.removePlayer()
          }
          this.initPlayer()
          // this.initPlayer()
        }
      })
    },
    removePlayer () {
      this.plPlayer.destroy()
    },
    goStudy () {
      this.checkToken()
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
      this.currentCourId = i
      this.getDetailsData()
    },
    // 验证token是否失效
    checkToken () {
      // token验证接口
      let token = localStorage.getItem('token')
      console.log('token', token)
      if (this.isblank(token)) {
        this.$MessageBox.confirm('您还未登录，是否重新登录?').then(() => {
          window.location.href = this.targetURL + '?orient=' + this.orient
        }).catch(() => {
          this.$Toast({
            message: '操作成功',
            duration: 3000
          })
        })
      } else {
        this.$api.checkTk({
          jwt: token
        }).then(res => {
          if (res.code == 200 && res.data == 0) {
            this.$router.push({path: '/study'})
          } else {
            this.$MessageBox.confirm('登录已失效，是否重新登录?').then(() => {
              window.location.href = this.targetURL + '?orient=' + this.orient
            }).catch(() => {
              this.$Toast({
                message: '已取消',
                duration: 3000
              })
            })
          }
        })
      }
    },
    // videoPlay () {
    //   console.log('paly')
    //   let player = document.querySelector('#video')
    //   console.log(player.currentSrc)
    //   if (!player.currentSrc) {
    //     this.$error('暂无资源，敬请期待！')
    //     return
    //   }
    //   if (player.networkState === 3) {
    //     this.$error('暂未找到视频资源')
    //     return
    //   }
    //   if (player.paused) {
    //     player.play()
    //     this.isPlay = true
    //   } else {
    //     player.pause()
    //     this.isPlay = false
    //   }
    // },
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
            margin-bottom: 6%;
            .preview-box{
              width: 100%;
              position: relative;
              .video-box{
                width: 100%;
                height: 260px;
                background-color: #000;
              }
            }
            .img-box{
              width: 100%;
              height: 260px;
              display: flex;
              justify-content: center;
              align-items: center;
              img{
                max-width: 100%;
                max-height: 260px;
              }
            }
            .go-study{
              display: flex;
              justify-content: center;
              width: 100%;
              padding: 10px 0;
              .study-btn{
                width:90px;
                height:30px;
                text-align: center;
                line-height: 30px;
                font-size:14px;
                font-family:Alibaba PuHuiTi;
                font-weight:bold;
                color:rgba(255,255,255,1);
                background-color: #0089FF;
                border-radius:14px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                cursor: pointer;
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
              margin-bottom: 3%;
            }
          }
          .resources-load{
            margin-bottom: 1%;
            .resource{
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 5%;
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
              margin-bottom: 5%;
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
  .resourse-bg{
  width: 100%;
  height: 260px;
  background-color: #000;
  color: white;
  line-height: 260px;
  text-align: center;
  font-size:18px;
  font-family:Alibaba PuHuiTi;
  font-weight:bold;
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
  img[lazy=loading] {
    width: 30px;
    height: 30px;
  }
}
</style>
