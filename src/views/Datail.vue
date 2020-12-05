<template>
    <div>
        datail
    </div>
</template>

<script>
export default {
  mounted () {
    // this.$route 当前匹配路由对象信息
    // console.log('获取id', this.$route.params.myid)
    console.log('获取id', this.$route.query.id)
  }
}
</script>
