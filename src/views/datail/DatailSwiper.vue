<template>
    <div class="swiper-container" :class="swiperclass">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper/bundle' // 全部引入
// import Swiper from 'swiper' // 引入swiper.js
import 'swiper/swiper-bundle.min.css' // 引入swiper.css

export default {
  props: {
    perslide: {
      default: 1,
      type: Number
    },
    swiperclass: {
      type: String,
      default: 'swiper-container'
    }
  },
  mounted () {
    // console.log(this.perslide)
    new Swiper('.' + this.swiperclass, {
      slidesPerView: this.perslide,
      spaceBetween: 10,
      freeMode: true
    })
  }
}
</script>

<style lang="scss" scoped>
.swiper-wrapper {
  img {
    width: 100%;
  }
}
</style>
