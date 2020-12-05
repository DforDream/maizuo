<template>
  <div>
    <film-swiper>
      <div class="swiper-slide" v-for="(data,index) in imgList" :key="index">
        <div :style="{backgroundImage:'url('+ data +')'}" style="height:200px;background-size:cover;"></div>
      </div>
    </film-swiper>
    <film-header></film-header>
    <!-- /film/nowplaying Nowplaying -->
    <!-- /film/comingsoon Comingsoon -->
    <router-view></router-view>
  </div>
</template>

<script>
import filmHeader from './film/FilmHeader'
import filmSwiper from './film/FilmSwiper'
export default {
  data () {
    return {
      imgList: ['https://pic.maizuo.com/usr/movie/2021c926443afc4ab94193976b96c031.jpg?x-oss-process=image/quality,Q_70', 'https://pic.maizuo.com/usr/movie/ca43152be926c3e1a9d02d0b998f3a89.jpg?x-oss-process=image/quality,Q_70', 'https://pic.maizuo.com/usr/movie/367d957ce9b2fa06b9e9dd5e73c08db3.jpg?x-oss-process=image/quality,Q_70']
    }
  },
  components: {
    filmHeader: filmHeader,
    filmSwiper
  }
}
</script>

<style lang="scss" scoped>
.banner {
  height: 300px;
  background: yellow;
}
</style>
