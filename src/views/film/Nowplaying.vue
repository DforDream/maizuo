<template>
  <div>
    <!-- <van-pull-refresh v-model="refreshing" @refresh="onRefresh"> -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :immediate-check="false"
    >
      <van-cell
        v-for="data in datalist"
        :key="data.filmId"
        @click="handleClick(data.filmId)"
      >
        <img
          :src="data.poster"
          alt=""
        >
        <h3>{{data.name}}</h3>
        <p>主演：{{data.actors | actorFilter}}</p>
        <p>
          {{data.nation}} | {{data.runtime}}分钟
        </p>
      </van-cell>
    </van-list>
    <!-- </van-pull-refresh> -->
  </div>
</template>

<script>
import http from '@/util/http' // @ 指向src的据对路径
import Vue from 'vue'
import { List, Cell } from 'vant'
Vue.use(List).use(Cell)
Vue.filter('actorFilter', (actors) => {
  // console.log(actors)
  if (actors === undefined) {
    return '暂无主演'
  }
  return actors.map((item) => item.name).join(' ')
})
export default {
  data () {
    return {
      datalist: [],
      loading: false, // 是否正在加载中 防止多次触发
      finished: false,
      current: 1,
      total: 0 // 总数据长度
    }
  },
  mounted () {
    http({
      url: `/gateway?cityId=${this.$store.state.cityId}&pageNum=1&pageSize=10&type=1&k=319388`,
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
      // method: 'get'
    }).then(res => {
      // console.log(res.data.data.films)
      this.datalist = res.data.data.films
      this.total = res.data.data.total
    })
  },
  methods: {
    onLoad () {
      // 详情页面出现滚动条后，再回到首页时会触发滚动事件（滚动条瞬间回到0），而此时的this.datalist.length和this.total都为0，使得判断加载完成，从而不会加载更多的数据，增加判断条件this.datalist.length 为0时不触发滚动事件
      if (this.datalist.length === this.total && this.datalist.length !== 0) {
        this.finished = true
        return
      }
      // console.log('到底了')
      // 1.ajax请求 新页面的数据
      // 2.合并新的数据到老数据
      // 3.this.loading=false
      this.current++
      http({
        url: `/gateway?cityId=${this.$store.state.cityId}&pageNum=${this.current}&pageSize=10&type=1&k=319388`,
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
        // method: 'get'
      }).then(res => {
        // console.log(res.data.data.films)
        this.datalist = [...this.datalist, ...res.data.data.films]
        this.loading = false
      })
    },
    handleClick (id) {
      //   console.log(id)
      //   location.href = '#/center'
      //   1.路径跳转
      //   this.$router.push(`/datail/${id}`) // 编程式导航
      //   2.路由名字
      //   this.$router.push({
      //     name: 'datailId',
      //     params: {
      //       myid: id
      //     }
      //   })
      //   3. query 方式跳转
      this.$router.push(`/datail/?id=${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.van-cell {
  overflow: hidden;
  padding: 10px;
  img {
    float: left;
    width: 100px;
  }
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
