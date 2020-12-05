<template>
  <div>
    <tabbar></tabbar>
    <!-- 路由容器 -->
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import tabbar from './components/Tabbar'
// import axios from 'axios'
export default {
  components: {
    tabbar
  },
  mounted () {
    // 1.后端配置好 cors (mei.com)
    // axios.get('http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000008&platform_code=PLATEFORM_H5').then(res => {
    //   console.log(res.data)
    // })
    // 2 maoyan.com 反向代理配置 记得重启服务
    // axios.get('/ajax/movieOnInfoList?token=&optimus_uuid=1CD23B70369C11EB98794DC2673EB3AD3A6F6753656D4B6CB5F6D8C1F1D0F71C&optimus_risk_level=71&optimus_code=10').then(res => {
    //   console.log(res.data)
    // })
    // 3. maizuo.com
    // axios({
    //   url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=319388',
    //   headers: {
    //     'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1607073455926793812934657","bc":"110100"}',
    //     'X-Host': 'mall.film-ticket.film.list'
    //   }
    //   // method: 'get'
    // }).then(res => {
    //   console.log(res.data)
    // })
  }
}
</script>

<style>
li {
  list-style: none;
}
* {
  margin: 0;
  padding: 0;
}
body,
html {
  width: 100%;
}
section {
  margin-bottom: 50px;
}
</style>
