<template>
    <ul>
        <router-link to="/film/nowplaying" tag="li" active-class="active">正在热映</router-link>
        <router-link to="/film/comingsoon" tag="li" active-class="active">即将上映</router-link>
    </ul>
</template>

<style lang="scss" scoped>
ul {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  li {
    flex: 1;
  }
  .active {
    color: red;
    border-bottom: 3px solid red;
  }
  //   吸顶效果
  position: sticky;
  top: 0px;
  background: white;
  z-index: 999;
}
</style>
