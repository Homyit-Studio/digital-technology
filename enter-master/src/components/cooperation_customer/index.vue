<template>
  <div>
    <div class="cooperation_wrap">
      <div class="cooperation_tit">合作客户</div>
      <div class="cooperation_desc">持续为用户创造独特价值</div>
      <div class="cooperation_box">
        <div class="cooperation_item">
          <img :src="cooperationImgs[currentPage].src" alt="" />
        </div>
        <div class="change_page">
          <el-pagination
            layout="prev, pager, next"
            :total="20"
            background
            @current-change="pageChange"
          >
          </el-pagination>
        </div>
      </div>
    </div>
    <div class="cooperation_bottom">
      <div class="details_show">
        <div class="show_item">
          <div class="show_top">22个</div>
          <div class="show_bottom">省份</div>
        </div>
        <div class="show_item">
          <div class="show_top">40+</div>
          <div class="show_bottom">城市</div>
        </div>
        <div class="show_item">
          <div class="show_top">150+</div>
          <div class="show_bottom">产业园区</div>
        </div>
        <div class="show_item">
          <div class="show_top">数万家</div>
          <div class="show_bottom">企业</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cooperationImgs: [
        {
          src: require('@/assets/img/company1.45b286f.png'),
        },
        {
          src: require('@/assets/img/company2.png'),
        },
      ],
      currentPage: 0,
    }
  },
  methods: {
    pageChange(page) {
      this.currentPage = page - 1
    },
  },
}
</script>

<style lang="scss" scoped>
.cooperation_wrap {
  width: 100%;
  text-align: center;
  background: url('../../assets/img/bottom_bg.90c1ea1.jpg') 0 0 no-repeat;
  background-size: 100% 100%;
  padding-bottom: 60px;
  .cooperation_tit {
    font-size: 40px;
    font-weight: bold;
    color: #3e3e3e;
    padding-top: 50px;
    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
  .cooperation_desc {
    color: rgba(32, 48, 64, 0.75);
    font-size: 22px;
    margin-top: 30px;
    @media screen and (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
  .cooperation_box {
    width: 70%;
    margin: 0 auto;
    padding-top: 50px;
    position: relative;
    @media screen and (max-width: 768px) {
      width: 90%;
    }
    .cooperation_item {
      img {
        width: 100%;
      }
    }
    .change_page {
      position: absolute;
      bottom: 40px;
      right: 40px;
      @media screen and (max-width: 768px) {
        bottom: 5px;
        right: 5px;
      }
    }
  }
}
.cooperation_bottom {
  width: 100%;
  height: 300px;
  background: url('../../assets/img/bannershow.png') 0 0 no-repeat;
  background-size: contain;
  .details_show {
    width: 70%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px) {
      width: 90%;
    }
    .show_item {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .show_top {
        color: #717171;
        font-size: 50px;
        font-weight: bold;
        @media screen and (max-width: 768px) {
          font-size: 16px;
        }
      }

      .show_bottom {
        color: #717171;
        font-size: 25px;
        margin-top: 10px;
        @media screen and (max-width: 768px) {
          font-size: 14px;
        }
      }
    }
  }
}
</style>