<template>
  <div>
    <PCNavbar selectIndex="5"/>
    <MobileNavBar :currentActive="4" />
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

<style>
.el-timeline-item__timestamp{
  font-size: 0.9rem !important;
  padding: 1rem 0;
}
</style>