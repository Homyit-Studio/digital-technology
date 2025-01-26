<template>
  <div class="data_brain_wrap">
    <div class="brain_title">子午数智硬件优势</div>
    <div class="brain_desc">高精度数字化，守护文物未来</div>

    <el-row class="card_wrap" type="flex">
      <el-col
        class="brain_item animate__animated animate__rotateIn"
        :lg="7"
        :sm="11"
        :xs="11"
        v-for="(item, index) in cardList"
        :key="index"
      >
        <div class="item_title">{{ item.title }}</div>
        <div class="item_desc">{{ item.desc }}</div>
        <!-- <div class="item_navigate" @click="handleNavigate">了解详情 >></div> -->
        <div class="item_bg"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardList: [
        {
          title: '机载激光扫描仪',
          desc: '能够高效、准确地获取大范围文物的三维数据，尤其适用于文物顶面数据、复杂地形和大型遗址的扫描，为文物的整体数字化保护提供了有力支持',
        },
        {
          title: '地面站激光扫描仪',
          desc: '适用于近距离、高精度的文物扫描，能够捕捉到文物表面的微小细节，为文物的精细修复和数字化建模提供关键数据',
        },
        {
          title: '手持激光扫描仪',
          desc: '灵活便携，适用于现场快速扫描，尤其适合在文物保护现场进行即时数据采集，为文物的应急保护和数字化记录提供了便捷手段',
        },
        {
          title: '全景相机',
          desc: '能够拍摄全方位、高分辨率的文物照片，为文物的视觉呈现和数字化展示提供了丰富素材',
        },
        {
          title: '专业测绘无人机',
          desc: '结合GPS导航和遥感技术，能够高效完成空中文物测绘任务，为文物的空间布局和地形地貌分析提供了重要依据',
        },
      ],
    }
  },
  // methods:{
  //   handleNavigate(){
  //     this.$router.push('/production/1').catch((v) => {})
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.data_brain_wrap {
  padding: 50px 0;
  background: #e8eef2;
  text-align: center;
  .brain_title {
    color: #203040;
    font-size: 40px;
    font-weight: bold;
    padding: 30px 0;
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
  .brain_desc {
    color: rgba(32, 48, 64, 0.75);
    font-size: 22px;
    letter-spacing: 4px;
    @media screen and (max-width: 768px) {
      font-size: 0.8rem;
      line-height: 40PX;
    }
  }
  .card_wrap {
    width: 70%;
    flex-wrap: wrap;
    margin: 0px auto;
    justify-content: space-around;
    @media screen and (max-width: 768px) {
      width: 95%;
    }
    .brain_item {
      transition: background-color 1s;
      padding: 30px;
      @media screen and (max-width: 768px) {
        font-size: 0.8rem;
        line-height: 40PX;
        border-radius: 10PX;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 20PX;
        &:nth-child(-n+2){
          margin-top: 0;
        }
      }
      background: #fff;
      border-radius: 20px;
      box-shadow: 0 0.5rem 1.5rem 0 rgba(0, 135, 168, 0.15);
      margin-top: 40px;
      position: relative;
      .item_bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          134deg,
          #0649b8 1%,
          #0a7fd7 41%,
          #03d2c5 99%
        );
        opacity: 0;
        transition: all 0.5s;
        border-radius: 20px;
        z-index: 1;
      }
      &:hover .item_bg{
        opacity: 1;
      }
      &:hover .item_title {
        color: #fff;
      }
      &:hover .item_desc {
        color: #fff;
      }
      .item_title {
        transition: all 0.5s;
        font-size: 30px;
        font-weight: bold;
        color: #203040;
        text-align: left;
        padding: 20px 0 40px 0;
        z-index: 2;
        position: inherit;
        @media screen and (max-width: 768px) {
          font-size: 1rem;
          text-align: center;
        }
      }
      .item_desc {
        transition: all 0.5s;
        color: #666;
        text-align: left;
        line-height: 1.5rem;
        z-index: 2;
        position: inherit;
        font-size: 18px;
        min-height: 110px;
        @media screen and (max-width: 768px) {
          min-height: 110PX;
          text-indent: 2em;
          font-size: 12px;
        }
      }
      .item_navigate {
        width: 100PX;
        height: 30PX;
        padding: 0 10px;
        background: #ffa400;
        color: #fff;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        margin-top: 40px;
        cursor: pointer;
        z-index: 2;
        position: inherit;
        @media screen and (max-width: 768px) {
          margin-bottom: 10PX;
          font-size: 14px;
        }
      }
    }
  }
}
</style>