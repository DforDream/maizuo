<template>
  <div>
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @cancel="handleCnacel"
    />
    <van-list>
      <van-cell
        v-for="data in computedCinemaList"
        :key="data.cinemaId"
      >
        <div>{{data.name}}</div>
        <div class="address">{{data.address}}</div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import Vue from 'vue'
import { Search, List, Cell } from 'vant'

Vue.use(Search).use(List).use(Cell)
export default {
  data () {
    return {
      value: ''
    }
  },
  computed: {
    computedCinemaList () {
      if (this.value === '') {
        return []
      }
      return this.$store.state.cinemaList.filter(item => item.name.toUpperCase().includes(this.value.toUpperCase()) || item.address.toUpperCase().includes(this.value.toUpperCase()))
    }
  },
  mounted () {
    // console.log(this.$store.state.cinemaList)
    if (this.$store.state.cinemaList.length === 0) {
      // vuex 异步流程
      this.$store.dispatch('getCinemaList', this.$store.state.cityId)
    } else {
      console.log('缓存')
    }
  },
  methods: {
    handleCnacel () {
      // push back replace
      this.$router.replace('/cinema')
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
</style>
