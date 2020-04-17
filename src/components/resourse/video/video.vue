<template>
  <div class="video-box" @click.prevent="videoPlay">
    <video id="video" class="video-player" controls loop>
      <source src="http://182.148.48.236:54321/source/video_audio/first.mp4" type="video/mp4" />
    </video>
    <div class="videoplaybtn" v-show="!isPlay">
      <img :src="base+'courses_video_play.png'"/>
    </div>
    <div class="play-block"></div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      isPlay: false
    }
  },
  created () {},
  mounted () {},
  computed: {},
  methods: {
    videoPlay () {
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
    }
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
