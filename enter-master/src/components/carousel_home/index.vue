<template>
  <div class="carousel_wrap">
    <el-carousel height="37vw" loop arrow="never" class="hidden-xs-only">
      <el-carousel-item v-for="(item, index) in imgList" :key="index">
        <img :src="item.imageUrl" alt="" class="img_item" />
        <div class="tips_font">
          <h1>{{ item.imageWord }}</h1>
        </div>
      </el-carousel-item>
    </el-carousel>
    <!-- 移动端时出现 -->
    <el-carousel height="50vw" loop arrow="never" class="hidden-sm-and-up">
      <el-carousel-item v-for="(item, index) in imgList" :key="index">
        <img :src="item.imageUrl" alt="" class="img_item" />
        <div class="tips_font">
          <h1>{{ item.imageWord }}</h1>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import http from '@/utils/http.js'; 
export default {
  data() {
    return {
      imgList:[]
    }
  },
  mounted() {
    http.get('/image/getallimages')
      .then(response => {
        if (response.data.code === 201) {
          this.imgList = response.data.data;
        } else {
          console.error('获取数据失败', response.data.desc);
        }
      })
      .catch(error => {
        console.error('请求失败', error);
      });
  }
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
    top: 310px;
    left: 300px;
    z-index: 5;
    color: #fff;
    font-size: 30px;
    @media screen and (max-width: 768px) {
      font-size: .8rem;
      top: 90px;
    }
  }
}
</style>