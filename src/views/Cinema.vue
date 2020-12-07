<template>
  <div class="cinema">
    <ul>
      <li v-for="data in cinemaList" :key="data.cinemaId">
       <div>{{data.name}}</div>
       <div class="address">{{data.address}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import http from '@/util/http'
import BetterScroll from 'better-scroll'
export default {
  data () {
    return {
      cinemaList: []
    }
  },
  mounted () {
    http({
      url: '/gateway?cityId=310100&ticketFlag=1&k=8888416',
      headers: {
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      // console.log(res.data)
      this.cinemaList = res.data.data.cinemas
      // 状态立即更改 ，但是dom异步渲染
      this.$nextTick(() => {
        new BetterScroll('.cinema', {
          scrollbar: {
            fade: true
          }
        })
      })
    })
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
  height: calc(100vh - 50px);
  overflow: hidden;
  position: relative; // 修正滚动条的位置
}
</style>
