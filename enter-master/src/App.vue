<template>
  <div id="app" ref="app">
    <router-view></router-view>
    <BackTop />
  </div>
</template>

<script>
// import Home from '@/views/Home'
export default {
  name: 'App',
  components: {
    // Home,
  },
  watch: {
    $route() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
  },
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
@import url('./assets/css/icon.css');
</style>
