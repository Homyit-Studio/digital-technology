<template>
  <div class="reailze_wrap">
    <div class="reailze_btn">
      <div class="reailze_item" v-for="(item, index) in reailzeList" :key="index"
        :class="activeIndex === index ? 'active' : ''" @click="changeIndex(index)">
        {{ item.tit }}
      </div>
    </div>
    <div class="reailze_content">
      <p>{{ desc }}</p>
      <!-- 电话号码 -->
      <h1>189-7914-1505</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      desc: '地址：江西省南昌市南昌高新技术产业开发区瑶湖西大道888号东方豪庭小区1#0803室',
      reailzeImgList: [
        {
          src: 'el-icon-picture-outline-round',
          txt: '一企一档',
        },
        {
          src: 'el-icon-picture-outline-round',
          txt: '一企一档',
        },
        {
          src: 'el-icon-picture-outline-round',
          txt: '一企一档',
        },
        {
          src: 'el-icon-picture-outline-round',
          txt: '一企一档',
        },
        {
          src: 'el-icon-picture-outline-round',
          txt: '一企一档',
        },
        {
          src: 'el-icon-picture-outline-round',
          txt: '一企一档',
        },
      ],
    }
  },
  props: {
    reailzeList: {
      type: Array,
      // default: [],
    },
  },
  methods: {
    changeIndex(index) {
      this.activeIndex = index
      switch (this.activeIndex) {
        case 0:
          this.desc = '江西省南昌市南昌高新技术产业开发区瑶湖西大道888号东方豪庭小区1#0803室'
          break
        default:
          this.desc = '江西省南昌市南昌高新技术产业开发区瑶湖西大道888号东方豪庭小区1#0803室'
          break
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.reailze_wrap {
  width: 70%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.02) inset;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 30px;
  }

  .reailze_btn {
    width: 100%;
    display: flex;

    .reailze_item {
      flex: 1;
      height: 80px;
      background: #f5f5f5;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      position: relative;
      cursor: pointer;

      @media screen and (max-width: 768px) {
        height: 60px;
        text-align: center;
        font-size: 0.9rem;
      }
    }

    .active {
      color: #fff;
      background: #2091d3;
      font-weight: bold;
      box-shadow: 0 0 1rem rgba($color: #000000, $alpha: .4);

      &::before {
        content: '▲';
        position: absolute;
        color: #2091d3;
        font-size: 40px;
        transform: rotateX(180deg);
        bottom: -27px;

        @media screen and (max-width: 768px) {
          font-size: 30px;
          bottom: -25px;
        }
      }
    }
  }

  .reailze_content {
    width: 100%;
    display: flex;
    padding: 30px;
    justify-content: center;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      padding: 20px;
    }

    p {
      font-size: 0.9rem;
    }

    h1 {
      font-size: 1.1rem;
      margin-top: 1rem;
    }
  }
}
</style>