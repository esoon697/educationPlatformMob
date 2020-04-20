<template>
  <div id="outer">
    <ul id="imgList">
        <li class="items"><img src="http://182.148.48.236:54321/source/educationPlatformMob/courses-avatar1.jpg" alt=""></li>
        <li class="items"><img src="http://182.148.48.236:54321/source/educationPlatformMob/courses-avatar2.jpg" alt=""></li>
        <li class="items"><img src="http://182.148.48.236:54321/source/educationPlatformMob/courses-avatar3.jpg" alt=""></li>
        <li class="items">
          <slot name="swiper-item"></slot>
        </li>
    </ul>
    <div id="litBtn">
        <a class="active" href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <!-- <a v-for="n in itemCount" :key="n" href="javascript:;"></a> -->
    </div>
    <button class="swiper-btn" id="left">A</button>
    <button class="swiper-btn" id="right">V</button>
  </div>
</template>

<script src="https://cdn.bootcss.com/jquery/3.5.0/jquery.js"></script>
<script>
// var $items = $('.items')
// var $imgList = $('#imgList')
// var $allA = $('#litBtn>a')
// var index = 0
// var moving = false // 通过判断动画的状态，实现防止多次点击重复调用函数的功能，初始状态为false
// var timer
export default {
  components: {},
  props: {},
  data () {
    return {
      itemCount: 0
    }
  },
  created () {
    this.$nextTick(() => {
      this.initSwiper()
    })
  },
  mounted () {
  },
  computed: {
    // itemCount () {
    //   var $items = $('.items')
    //   return $items.length
    // }
  },
  methods: {
    initSwiper () {
      var $items = $('.items')
      var $imgList = $('#imgList')
      var $allA = $('#litBtn>a')
      var index = 0
      var moving = false // 通过判断动画的状态，实现防止多次点击重复调用函数的功能，初始状态为false
      var timer
      this.itemCount = $items.length
      var defineActive = function () {
        $($items[0]).addClass('imgActive')
        $($allA[0]).addClass('active')
      }

      // 清除class中的active
      var clearActive = function () {
        $items.removeClass('imgActive')
        $allA.removeClass('active')
      }

      // 定义向右切换的函数
      var goRight = function () {
        console.log('goRighttttttttttttttttttttttttttttt')
        if (moving) {
          return
        }
        moving = true
        index++
        if (index > $items.length - 1) {
          index = 0
        }
        $($items[index]).addClass('imgActive')
        $items[index].style.left = $('#outer').width() + 'px'
        // move($imgList[0], "left", 10, -$("#outer").width(), function () {
        //     clearActive();
        //     $items.removeAttr("style");
        //     $imgList.removeAttr("style");
        //     $($items[index]).addClass("imgActive");
        //     $($allA[index]).addClass("active");
        //     // autoMove();
        //     moving = false;
        // });
        $imgList.stop().animate({
          left: -$('#outer').width()
        }, 500, function () {
          clearActive()
          $items.removeAttr('style')
          $imgList.removeAttr('style')
          $($items[index]).addClass('imgActive')
          $($allA[index]).addClass('active')
          // autoMove();
          moving = false
        })
      }

      // 定义向左切换的函数
      var goLeft = function () {
        console.log('goLefttttttttttttttttttttttttt')
        if (moving) {
          return
        }
        moving = true
        index--
        if (index < 0) {
          index = $items.length - 1
        }
        $($items[index]).addClass('imgActive')
        $items[index].style.left = -$('#outer').width() + 'px'
        // move($imgList[0], "left", 10, $("#outer").width(), function () {
        //     clearActive();
        //     $items.removeAttr("style");
        //     $imgList.removeAttr("style");
        //     $($items[index]).addClass("imgActive");
        //     $($allA[index]).addClass("active");
        //     // autoMove();
        //     moving = false;
        // });
        $imgList.stop().animate({
          left: $('#outer').width()
        }, 500, function () {
          clearActive()
          $items.removeAttr('style')
          $imgList.removeAttr('style')
          $($items[index]).addClass('imgActive')
          $($allA[index]).addClass('active')
          // autoMove();
          moving = false
        })
      }

      // 定义自动切换函数
      var goRightAuto = goRight
      function autoMove () {
        // clearInterval(timer);
        timer = setInterval(function () {
          // index++;
          // if (index > $items.length - 1) {
          //     index = 0;
          // }
          goRightAuto()
        }, 2000)
      }
      // 初始化默认active
      defineActive()
      // 调用自动切换函数，实现自动轮播功能
      // autoMove()

      // 给向右切换按钮绑定切换函数
      $('#right').click(function () {
        // clearInterval(timer);
        // index++;
        // if (index > $items.length - 1) {
        //     index = 0;
        // }
        goRight()
      })

      // 给向左切换按钮绑定切换函数
      $('#left').click(function () {
        // clearInterval(timer);
        // index--;
        // if (index < 0) {
        //     index = $items.length - 1;
        // }
        goLeft()
      })

      // 轮播按钮绑定切换函数
      $allA.click(function () {
        // clearInterval(timer);
        var current = index
        index = $(this).index()
        console.log('current:' + current, 'index:' + index)
        if (current != index) {
          if (current < index) {
            // 由于进入goright函数后会index++，所以先减1以保持index值不变
            index = index - 1
            goRight()
          } else {
            index = index + 1
            console.log(index)
            goLeft()
          }
          // console.log("current:"+current,"index:"+index);
        }
      })

      // 给容器绑定鼠标移动在元素上是取消自动切换功能的事件
      $('#outer')
        .mouseover(function () {
          // clearInterval(timer);
          goRightAuto = function () {}
        })
        // 重新开启自动轮播
        .mouseleave(function () {
          goRightAuto = goRight
          // autoMove();
        })
    },
    defineActive () {
      $($items[0]).addClass('imgActive')
      $($allA[0]).addClass('active')
    },
    clearActive () {
      $items.removeClass('imgActive')
      $allA.removeClass('active')
    },
    goRight () {
      console.log('goRighttttttttttttttttttttttttttttt')
      if (moving) {
        return
      }
      moving = true
      index++
      if (index > $items.length - 1) {
        index = 0
      }
      $($items[index]).addClass('imgActive')
      $items[index].style.left = $('#outer').width() + 'px'
      // move($imgList[0], "left", 10, -$("#outer").width(), function () {
      //     clearActive();
      //     $items.removeAttr("style");
      //     $imgList.removeAttr("style");
      //     $($items[index]).addClass("imgActive");
      //     $($allA[index]).addClass("active");
      //     // autoMove();
      //     moving = false;
      // });
      $imgList.stop().animate({
        left: -$('#outer').width()
      }, 500, function () {
        clearActive()
        $items.removeAttr('style')
        $imgList.removeAttr('style')
        $($items[index]).addClass('imgActive')
        $($allA[index]).addClass('active')
        // autoMove();
        moving = false
      })
    },
    goLeft () {
      console.log('goLefttttttttttttttttttttttttt')
      if (moving) {
        return
      }
      moving = true
      index--
      if (index < 0) {
        index = $items.length - 1
      }
      $($items[index]).addClass('imgActive')
      $items[index].style.left = -$('#outer').width() + 'px'
      // move($imgList[0], "left", 10, $("#outer").width(), function () {
      //     clearActive();
      //     $items.removeAttr("style");
      //     $imgList.removeAttr("style");
      //     $($items[index]).addClass("imgActive");
      //     $($allA[index]).addClass("active");
      //     // autoMove();
      //     moving = false;
      // });
      $imgList.stop().animate({
        left: $('#outer').width()
      }, 500, function () {
        clearActive()
        $items.removeAttr('style')
        $imgList.removeAttr('style')
        $($items[index]).addClass('imgActive')
        $($allA[index]).addClass('active')
        // autoMove();
        moving = false
      })
    },
    autoMove () {
      // clearInterval(timer);
      var goRightAuto = this.goRight
      timer = setInterval(function () {
        // index++;
        // if (index > $items.length - 1) {
        //     index = 0;
        // }
        goRightAuto()
      }, 2000)
    }
  },
  watch: {}
}
</script>
<style lang="less" scoped>
#outer {
  width: 100%;
  min-height: 100px;
  background-color: #aaa;
  position: relative;
  overflow: hidden;
  #imgList {
    // width: 1200px;
    width: 100%;
    position: absolute;
    left: 0;
    .items {
      width: 100%;
      height: 100%;
      position: absolute;
      opacity: 0;
    }
    .imgActive {
        opacity: 1;
    }
  }
  #litBtn {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 80%);
    display: flex;
    justify-content: center;
    align-content: center;
    a {
      width: 10px;
      height: 10px;
      background-color: white;
      margin: 8px;
      opacity: 0.8;
      &:hover {
          background-color: black;
          opacity: 0.5;
      }
    }
    .active {
        background-color: black;
    }
  }
  .swiper-btn {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    background-color: transparent;
    border: none;
    outline: none;
    opacity: 0.5;
    &:hover {
        background-color: black;
        opacity: 0.2;
    }
    &:active {
        background-color: rgb(50, 50, 50);
        opacity: 0.7;
    }
  }
  #left {
      left: 0;
  }

  #right {
      right: 0;
  }
}
</style>
