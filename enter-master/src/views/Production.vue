<template>
  <div>
    <PCNavbar selectIndex="2" />
    <MobileNavBar :currentActive="1" />
    <router-view></router-view>
  </div>
</template>

<script>
import PCNavbar from '@/components/navbar/index'
import MobileNavBar from '@/components/navbar/MobileNavBar.vue'
export default {
  components: {
    PCNavbar,
    MobileNavBar,
  },
}
</script>

<style></style>