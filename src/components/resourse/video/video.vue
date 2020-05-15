<template>
  <!-- <div class="video-box" @click.prevent="videoPlay">
    <video :id="'video'+index" class="video-player" controls loop>
      <source :src="url" type="video/mp4" />
    </video>
    <div class="videoplaybtn" v-show="!isPlay">
      <img :src="base+'courses_video_play.png'"/>
    </div>
    <div class="play-block"></div>
  </div> -->
  <div class="video-box">
    <div :id="'pl_video_player'+index"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {},
  props: ['url', 'index', 'videoId'],
  data () {
    return {
      isPlay: false,
      n: 0,
      vid: this.url,
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
      // this.init()
      this.initPlayer()
      this.destroyPlayer()
    })
  },
  computed: {
    ...mapState(['currentProcessId'])
  },
  methods: {
    initPlayer () {
      if (!this.vid) {
        return
      }
      this.$api.getvideoToken({
        vid: this.vid
      }).then(res => {
        if (res.code == 200) {
          console.log(res.data)
          this.ts = res.data.ts
          this.sign = res.data.sign
          this.playsafe = res.data.token
          this.plPlayer = polyvObject('#pl_video_player' + this.index).videoPlayer({
            'width': '100%',
            'height': '240',
            'vid': this.vid,
            'forceH5': true,
            'playsafe': this.playsafe,
            'ts': this.ts,
            'sign': this.sign,
            'df': 3
          })
        }
      })
    },
    // 销毁非当前轮播视频
    destroyPlayer () {
      console.log('video currentProcessId', this.currentProcessId)
      if (this.videoId !== this.currentProcessId) {
        if (this.plPlayer) {
          this.plPlayer.HTML5.pause()
        }
      }
    }
  },
  watch: {
    currentProcessId () {
      this.destroyPlayer()
    }
  }
}
</script>
<style lang="less" scoped>
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
</style>
