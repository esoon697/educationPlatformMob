<template>
  <div class="image-main">
    <img :src="url" alt="">
  </div>
</template>

<script>
export default {
  components: {},
  props: ['url'],
  data () {
    return {
    }
  },
  created () {},
  mounted () {},
  computed: {},
  methods: {},
  watch: {}
}
</script>
<style lang="less" scoped>
.image-main{
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 100%;
  }
}
</style>
