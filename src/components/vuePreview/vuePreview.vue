<template>
  <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
</template>

<script>
export default {
  props: ['url'],
  data () {
    return {
      slide1: [
        {
          src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
          msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
          alt: 'picture1',
          title: 'Image Caption 1',
          w: 1200,
          h: 800
        }
      ]
    }
  },
  methods: {
    handleClose () {
      console.log('close event')
    }
  }
}
</script>
