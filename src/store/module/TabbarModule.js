const module = {
  namespaced: true, // 命名空间
  state: {
    isTabbarShow: true
  },
  mutations: {
    hideTabbar (state) {
      state.isTabbarShow = false
    },
    showTabbar (state) {
      state.isTabbarShow = true
    }
  },
  actions: {}
}
export default module
