<template>
  <div>
    <van-index-bar
      :index-list="computedCities"
      @select="handleSelect"
    >
      <div
        v-for="data in cityList"
        :key="data.type"
      >
        <van-index-anchor :index="data.type" />
        <van-cell
          :title="item.name"
          v-for="(item,index) in data.list"
          :key="index"
          @click="handleChangePage(item.name,item.cityId)"
        />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import Vue from 'vue'
import { IndexBar, IndexAnchor, Toast } from 'vant'
import http from '@/util/http'
import { mapMutations } from 'vuex'

Vue.use(IndexBar)
Vue.use(IndexAnchor)
export default {
  data () {
    return {
      cityList: []
    }
  },
  mounted () {
    http({
      url: '/gateway?k=426835',
      headers: {
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
      //   console.log(res.data)
      this.cityList = this.handleCityData(res.data.data.cities)
    })
  },
  methods: {
    ...mapMutations('CityModule', ['changeCityName', 'changeCityId']),
    handleCityData (cities) {
      //   console.log(cities)
      // 输入原始数据，输出 目标数据
      const letterArr = []
      const newCities = []
      for (let code = 65; code < 91; code++) {
        // console.log(String.fromCharCode(code))
        letterArr.push(String.fromCharCode(code))
        // console.log(letterArr)
      }
      // console.log(cities)
      letterArr.forEach((letter) => {
        const list = cities.filter(item => item.pinyin.substring(0, 1).toUpperCase() === letter)
        // console.log(list)
        // this.cityList.push(list)
        if (list.length > 0) {
          newCities.push({
            type: letter,
            list: list
          })
        }
      })
      // console.log(newCities)
      return newCities
    },
    handleSelect (index) {
      // console.log(index)
      Toast(index)
    },
    handleChangePage (name, cityId) {
      // this.$store.commit('changeCityName', name)
      // this.$store.commit('changeCityId', cityId)
      this.changeCityName(name)
      this.changeCityId(cityId)
      this.$router.back()
    }
  },
  computed: {

    computedCities () {
      return this.cityList.map(item => item.type)
    }
  }
}
</script>
