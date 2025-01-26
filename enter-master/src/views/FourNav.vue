<template>
  <div>
    <SpaNav selectIndex="4" />
    <MobileNavBar :currentActive="3" />
    <router-view></router-view>
  </div>
</template>

<script>
// import PCNavbar from '@/components/navbar/index'
import MobileNavBar from '@/components/navbar/MobileNavBar.vue'
import SpaNav from '@/components/report_list/SpaNav.vue'
export default {
  components: {
    // PCNavbar,
    MobileNavBar,
    SpaNav
  },
}
</script>

<style></style>