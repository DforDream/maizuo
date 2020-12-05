<template>
  <div>
      <ul>
          <li v-for="data in datalist" :key="data.filmId" @click="handleClick(data.filmId)">
            <img :src="data.poster" alt="">
              <h3>{{data.name}}</h3>

          </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=319388',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1607073455926793812934657","bc":"110100"}',
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
}
</style>
