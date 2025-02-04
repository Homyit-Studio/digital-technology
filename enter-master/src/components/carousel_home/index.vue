<template>
  <div class="carousel_wrap">
    <el-carousel height="37vw" loop arrow="never" class="hidden-xs-only">
      <el-carousel-item v-for="(item, index) in imgList" :key="index">
        <img :src="item.src" alt="" class="img_item" />
        <div class="tips_font">
          <h1>{{ item.line1 }}</h1>
          <h1>{{ item.line2 }}</h1>
        </div>
      </el-carousel-item>
    </el-carousel>
    <!-- 移动端时出现 -->
    <el-carousel height="50vw" loop arrow="never" class="hidden-sm-and-up">
      <el-carousel-item v-for="(item, index) in imgList" :key="index">
        <img :src="item.src" alt="" class="img_item" />
        <div class="tips_font">
          <h1>{{ item.line1 }}</h1>
          <h1>{{ item.line2 }}</h1>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        {
          // require 被用来引入本地静态资源
          src: require('@/assets/img/banner1.jpg'),
          line1: '匠心筑史，科技维新',
          line2: '',
        },
        {
          src: require('@/assets/img/banner2.jpg'),
          line1: '科技赋魂，文物新生',
          line2: '',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.carousel_wrap {
  position: relative;
  .el-carousel__item {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .tips_font {
    position: absolute;
    top: 260px;
    left: 300px;
    z-index: 5;
    color: #fff;
    font-size: 25px;
    @media screen and (max-width: 768px) {
      font-size: 0.5rem;
    }
  }
}
</style>