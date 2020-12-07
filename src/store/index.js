import Vue from 'vue'
import Vuex from 'vuex'
import CityModule from './module/CityModule'
import CinemaModule from './module/CinemaModule'
import TabbarModule from './module/TabbarModule'
import createPersistedstate from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedstate()],
  // state 只是存在内存中的 state 配置持久化
  // 公共状态
  state: {

  },
  // 集中式修改状态-监控修改状态
  mutations: {

  },
  // 异步
  actions: {

  },
  // 各个模块 -模块组装
  modules: {
    CityModule,
    CinemaModule,
    TabbarModule
  }
})
