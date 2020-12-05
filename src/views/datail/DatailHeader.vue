<template>
    <div>
        {{title}}
    </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="scss" scoped>
div {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 30px;
  line-height: 30px;
  background: white;
  text-align: center;
}
</style>
