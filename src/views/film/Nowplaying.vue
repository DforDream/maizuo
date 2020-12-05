<template>
  <div>
      <ul>
          <li v-for="data in datalist" :key="data.filmId" @click="handleClick(data.filmId)">
            <img :src="data.poster" alt="">
            <h3>{{data.name}}</h3>
            <p>主演：{{data.actors | actorFilter}}</p>
            <p>
              {{data.nation}} | {{data.runtime}}分钟
            </p>
          </li>
      </ul>
  </div>
</template>

<script>
import http from '@/util/http' // @ 指向src的据对路径
import Vue from 'vue'
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
      datalist: []
    }
  },
  mounted () {
    http({
      url: '/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=319388',
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
      // method: 'get'
    }).then(res => {
      // console.log(res.data.data.films)
      this.datalist = res.data.data.films
    })
  },
  methods: {
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
li {
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
