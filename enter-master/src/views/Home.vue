<template>
  <div>
    <PCNavbar selectIndex="1"/>
    <MobileNavBar :currentActive="0"/>
    <!-- 轮播图 -->
    <CarouselHome />
    <!-- 企业优势 -->
    <TodoShow/>
    <!-- <div class="bottom_circle">
      <h1>产业大脑将会是所有城市园区产业发展的标准配置</h1>
      <div class="circle_img">
        <img src="@/assets/img/lineimg.9cc3174a.png" alt="" class="hidden-xs-only"/> -->
        <!-- 移动端时出现 -->
        <!-- <img src="@/assets/img/lineimg.9cc3174a.png" alt="" class="hidden-sm-and-up"/>
      </div>
    </div> -->
    <!-- 核心能力 -->
    <CoreCompetence/>
    <!-- 合作伙伴 -->
    <CooperationCustomer/>
    <CallMe/>
    <MobileCallme/>
  </div>
</template>

<script>
import PCNavbar from '@/components/navbar/index'
import MobileNavBar from '@/components/navbar/MobileNavBar.vue'
import CarouselHome from '@/components/carousel_home/index'
import TodoShow from '@/components/todo_show/index'
import CoreCompetence from '@/components/core_competence/index'
import CooperationCustomer from '@/components/cooperation_customer/index'
import CallMe from '@/components/callme/index'
import MobileCallme from '@/components/callme/MobileCallme.vue'
export default {
  components: {
    PCNavbar,
    MobileNavBar,
    CarouselHome,
    TodoShow,
    CoreCompetence,
    CooperationCustomer,
    CallMe,
    MobileCallme
  },
}
</script>

<style lang="scss" scoped>
.bottom_circle {
  width: 100%;
  text-align: center;
  padding-top: 100px;
  background-image: url(../assets/img/smalldot.png),url(../assets/img/smalldot1.png);
  background-position: 0 0,110% 150%;
  background-repeat: no-repeat;
  background-size: 400px;
  h1 {
    font-size: 40px;
    padding-bottom: 20px;
    @media screen and (max-width: 768px) {
      font-size: 1.15rem;
      width: 60%;
      margin: 0 auto;
    }
  }
  .circle_img {
    width: 100%;
    img {
      width: 70%;
      @media screen and (max-width: 768px) {
        width: 100%;
        margin: 20PX 0;
      }
    }
  }
}
</style>