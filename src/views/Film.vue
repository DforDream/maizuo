<template>
  <div>
    <div class="banner">轮播图</div>
    <film-header></film-header>
    <!-- /film/nowplaying Nowplaying -->
    <!-- /film/comingsoon Comingsoon -->
    <router-view></router-view>
  </div>
</template>

<script>
import filmHeader from './film/FilmHeader'
export default {
  components: {
    filmHeader: filmHeader
  }
}
</script>

<style lang="scss" scoped>
.banner {
  height: 300px;
  background: yellow;
}
</style>
