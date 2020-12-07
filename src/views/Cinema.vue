<template>
  <div>
    <van-nav-bar
      title="影院"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #left>
        {{$store.state.cityName}}
        <van-icon
          name="arrow-down"
          size="12"
        />
      </template>
      <template #right>
        <van-icon
          name="search"
          size="24"
          color="black"
        />
      </template>
    </van-nav-bar>
    <div class="cinema">
      <van-list>
        <van-cell
          v-for="data in $store.state.cinemaList"
          :key="data.cinemaId"
        >
          <div>{{data.name}}</div>
          <div class="address">{{data.address}}</div>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import Vue from 'vue'
import { NavBar, Icon, Cell, List } from 'vant'
Vue.use(NavBar).use(Icon).use(List).use(Cell)
export default {
  mounted () {
    if (this.$store.state.cinemaList.length === 0) {
      // vuex 异步流程
      this.$store.dispatch('getCinemaList', this.$store.state.cityId).then(res => {
        // 状态立即更改 ，但是dom异步渲染
        this.$nextTick(() => {
          new BetterScroll('.cinema', {
            scrollbar: {
              fade: true
            }
          })
        })
      })
    } else { // 读取vuex里的缓存
      // console.log('缓存')
      this.$nextTick(() => {
        new BetterScroll('.cinema', {
          scrollbar: {
            fade: true
          }
        })
      })
    }
  },
  methods: {
    onClickLeft () {
      // 清空cinemaList
      this.$store.commit('clearCinemaList')
      this.$router.push('/city')
    },
    onClickRight () {
      this.$router.push('/cinema/search')
    }
  }
}
</script>

<style lang="scss" scoped>
li {
  padding: 5px;
  .address {
    font-size: 12px;
    color: gray;
  }
}
.cinema {
  height: calc(100vh - 96px);
  overflow: hidden;
  position: relative; // 修正滚动条的位置
}
</style>
