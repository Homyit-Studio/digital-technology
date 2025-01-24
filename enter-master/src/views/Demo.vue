<template>
  <div>
    <PCNavbar selectIndex="5"/>
    <MobileNavBar/>
    <DemoForm/>
    <CallMe/>
  </div>
</template>

<script>
import PCNavbar from '@/components/navbar/index'
import MobileNavBar from '@/components/navbar/MobileNavBar.vue'
import DemoForm from '@/components/demo'
import CallMe from '@/components/callme/index'
export default {
  components: {
    PCNavbar,
    MobileNavBar,
    DemoForm,
    CallMe,
  },
}
</script>

<style>
</style>