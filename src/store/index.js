import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/util/http'

Vue.use(Vuex)

export default new Vuex.Store({
  // state 只是存在内存中的 state 配置持久化
  state: {
    cityId: '310100',
    cityName: '上海',
    isTabbarShow: true,
    cinemaList: []
  },
  // 集中式修改状态-监控修改状态
  mutations: {
    changeCityName (state, name) {
      // console.log(111)
      state.cityName = name
    },
    changeCityId (state, cityId) {
      state.cityId = cityId
    },
    hideTabbar (state) {
      state.isTabbarShow = false
    },
    showTabbar (state) {
      state.isTabbarShow = true
    },
    setCinemaList (state, cinemaList) {
      state.cinemaList = cinemaList
    },
    clearCinemaList (state) {
      state.cinemaList = []
    }
  },
  actions: {
    getCinemaList (store, cityId) {
      return http({
        url: `/gateway?cityId=${cityId}&ticketFlag=1&k=8888416`,
        headers: {
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then(res => {
        // console.log(res.data)
        store.commit('setCinemaList', res.data.data.cinemas)
      })
    }
  },
  modules: {
  }
})
