<template>
  <div v-if="filminfo">
    <datail-header
      v-top
      :title="filminfo.name"
    ></datail-header>
    <div
      :style="{backgroundImage:'url('+ filminfo.poster +')'}"
      style="height:200px;background-position:center;background-size:cover;"
    ></div>
    <h3>{{filminfo.name}}--{{filminfo.filmType.name}}</h3>
    <div>
      {{filminfo.category}}
    </div>
    <div>
      {{filminfo.premiereAt | dataFilter}}上映
    </div>
    <div>
      {{filminfo.nation}}|{{filminfo.runtime}}分钟
    </div>
    <div :class="isShow ? '' : 'synopsis'">
      {{filminfo.synopsis}}
    </div>
    <div style="text-align:center"><i
        class="iconfont"
        :class="isShow ? 'icon-less' : 'icon-moreunfold'"
        @click="isShow = !isShow"
      ></i></div>

    <h3>演职人员</h3>
    <datail-swiper
      :perslide="4"
      swiperclass="swiper-actors"
    >
      <div
        class="swiper-slide"
        v-for="(data,index) in filminfo.actors"
        :key="index"
      >
        <img
          :src="data.avatarAddress"
          alt=""
        >
        <div style="text-align:center;">
          <div>{{data.name}}</div>
          <div>{{data.role}}</div>
        </div>
      </div>
    </datail-swiper>
    <h3>剧照</h3>
    <datail-swiper
      :perslide="2"
      swiperclass="swiper-photos"
    >
      <div
        class="swiper-slide"
        v-for="(data,index) in filminfo.photos"
        :key="index"
      >
        <div
          :style="{backgroundImage:'url('+ data +')'}"
          style="height:100px;background-position:center;background-size:cover;"
          @click="handlePerview(index)"
        ></div>
      </div>
    </datail-swiper>
  </div>
</template>

<script>
import http from '@/util/http'
import Vue from 'vue'
import moment from 'moment'
import datailSwiper from './datail/DatailSwiper'
import datailHeader from './datail/DatailHeader'
import { ImagePreview } from 'vant'
import { mapMutations } from 'vuex'
Vue.filter('dataFilter', (date) => {
  // 日期处理函数 - moment
  return moment(date * 1000).format('YYYY-MM-DD')
})
Vue.directive('top', {
  inserted (el, binding) {
    // console.log(el)
    el.style.display = 'none'
    window.onscroll = () => {
      if ((document.body.scrollTop || document.documentElement.scrollTop) > 50) {
        el.style.display = 'block'
      } else {
        el.style.display = 'none'
      }
    }
  },
  unbind () {
    window.onscroll = null
  }
})
export default {
  data () {
    return {
      filminfo: null,
      isShow: false
    }
  },
  mounted () {
    // 隐藏navbar
    // this.$store.commit('hideTabbar')
    this.hideTabbar()

    // this.$route 当前匹配路由对象信息
    // console.log('获取id', this.$route.params.myid)
    // console.log('获取id', this.$route.query.id)

    // 报错
    // axios.get(' https://m.maizuo.com/gateway?filmId=5252&k=2757268').then(res => {
    //   console.log(res.data)
    // })
    http({
      url: `/gateway?filmId=${this.$route.query.id}&k=2757268`,
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      // console.log(res.data.data.film)
      this.filminfo = res.data.data.film
    })
  },
  beforeDestroy () {
    // this.$store.commit('showTabbar')
    this.showTabbar()
  },
  components: {
    datailSwiper,
    datailHeader
  },
  methods: {
    ...mapMutations('TabbarModule', ['showTabbar', 'hideTabbar']),
    handlePerview (index) {
      ImagePreview({
        images: this.filminfo.photos,
        startPosition: index,
        closeable: true,
        loop: false,
        closeIconPosition: 'top-left'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.synopsis {
  height: 30px;
  overflow: hidden;
}
div {
  margin-bottom: 10px;
}
</style>
