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

<script src="https://player.polyv.net/script/polyvplayer.min.js"></script>
<script>
export default {
  components: {},
  props: ['url', 'index'],
  data () {
    return {
      isPlay: false,
      n: 0,
      plPlayer: null

    }
  },
  created () {
    this.$nextTick(() => {
      this.init()
    })
  },
  mounted () {
  },
  computed: {},
  methods: {
    init () {
      this.plPlayer = polyvObject('#pl_video_player' + this.index).videoPlayer({
        'width': '100%',
        'height': '339',
        'vid': 'a91fdd8c802e9c9e4051c34a0e02048d_a',
        'forceH5': true,
        // 'playsafe': ''
        // 'ts': this.ts,
        // 'sign': this.sign,
        'df': 3
      })
    }
    // videoPlay () {
    //   let index = this.index
    //   // let player = document.querySelectorAll('.video-player')[index]
    //   let player = document.querySelector('#video' + index)
    //   console.log(player)
    //   if (!player.currentSrc) {
    //     this.$error('暂无资源，敬请期待！')
    //     return
    //   }
    //   if (player.networkState === 3) {
    //     this.$error('暂未找到视频资源')
    //     return
    //   }
    //   if (player.paused) {
    //     // console.log(player.paused)
    //     player.play()
    //     this.isPlay = true
    //   } else {
    //     // console.log(player.paused)
    //     player.pause()
    //     this.isPlay = false
    //   }
    // },
  },
  watch: {}
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
