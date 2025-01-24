<template>
  <div class="consult_wrap">
    <div class="consult_btn">
      <div
        class="consult_item"
        v-for="(item, index) in consultList"
        :key="index"
        :class="activeIndex === index ? 'active' : ''"
        @click="changeIndex(index)"
      >
        {{ item.tit }}
      </div>
    </div>
    <div class="consult_content">
      <div class="content_right">
        <img :src="consultImg" alt="" />
        <div class="left_btn hidden-sm-and-up" @click="gotoDemo">获取产品演示</div>
      </div>
      <div class="content_left">
        <div class="left_tit">{{ consultTitle }}</div>
        <div class="left_icon_wrap">
          <div
            class="icon_item"
            v-for="(item, index) in consultImgList"
            :key="index"
            ref="iconItem"
          >
            <i :class="item.src" class="iconfont"></i>
            <span>{{ item.txt }}</span>
          </div>
        </div>
        <div class="left_btn hidden-xs-only" @click="gotoDemo">获取产品演示</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      consultTitle:
        '基于CBIB对标分析，用数据解读区域产业发展的优劣势，量化发展差距，全面、清晰、客观展示区域产业发展情况。',
      consultImgList: [
        {
          src: 'icon-lingxing',
          txt: '中国生物医药产业蓝皮书',
        },
        {
          src: 'icon-lingxing',
          txt: '广州开发区蓝皮书',
        },
        {
          src: 'icon-lingxing',
          txt: '坪山生物产业基地蓝皮书',
        },
        {
          src: 'icon-lingxing',
          txt: '日照经开区蓝皮书等',
        },
      ],
      consultImg:require('../../assets/img/book.png')
    }
  },
  props: {
    consultList: {
      type: Array,
      default: [],
    },
  },
  methods: {
    changeIndex(index) {
      this.activeIndex = index
      switch (this.activeIndex) {
        case 1:
          this.consultTitle =
            '以数据驱动产业定位，明确发展目标，发展路径，集成专业化服务平台，形成从顶层设计--企业落地--服务运营的整体解决方案'
          this.consultImgList = [
            {
              src: 'icon-lingxing',
              txt: '重庆两江新区水土园区生物医药产业发展规划',
            },
            {
              src: 'icon-lingxing',
              txt: '杭州医药港产业发展规划',
            },
            {
              src: 'icon-lingxing',
              txt: '杭州高新区产业发展规划',
            },
            {
              src: 'icon-lingxing',
              txt: '中关村生命园昌黎科创基地产业规划',
            },
          ]
          this.consultImg = require('../../assets/img/gh.png')
          break
        case 2:
          this.consultTitle =
            '以宏观经济评估，技术趋势评估结合园区生态环境建设评价、园区发展阶段评价的模型评估，为企业和品种招商落地'
          this.consultImgList = [
            {
              src: 'icon-lingxing',
              txt: '杭州高新区企业招商评估',
            },
            {
              src: 'icon-lingxing',
              txt: '药明生物品种招商评估等',
            },
          ]
          this.consultImg = require('../../assets/img/pg.png')
          break
        case 3:
          this.consultTitle =
            '通过产业动态数据监测，形成区域经济主体、创新成果、政策变化等内容简报。帮助园区跟踪地域及产业发展，形成地区产业发展决策内参'
          this.consultImgList = [
            {
              src: 'icon-lingxing',
              txt: '国家发展改革委简报',
            },
            {
              src: 'icon-lingxing',
              txt: '北京生物中心政策简报',
            },
            {
              src: 'icon-lingxing',
              txt: '西安高新区简报等',
            },
          ]
          this.consultImg = require('../../assets/img/jd.png')
          break
        case 4:
          this.consultTitle =
            '从产业链、创新链、空间链、资金链等多个维度，剖析细分领域国内外产业现状及态势；通过与先进区域对标分析，明确区域细分领域优势与短板，提出发展策略与建议'
          this.consultImgList = [
            {
              src: 'icon-lingxing',
              txt: '国家发改委政策影响评价',
            },
            {
              src: 'icon-lingxing',
              txt: '北京生物中心专题政策分析',
            },
            {
              src: 'icon-lingxing',
              txt: '苏州工业园多领域专题研究',
            },
            {
              src: 'icon-lingxing',
              txt: '广州市仿制药政策研究',
            },
          ]
          this.consultImg = require('../../assets/img/zt.png')
          break
        default:
          this.consultTitle =
            '基于CBIB对标分析，用数据解读区域产业发展的优劣势，量化发展差距，全面、清晰、客观展示区域产业发展情况。'
          this.consultImgList = [
            {
              src: 'icon-lingxing',
              txt: '中国生物医药产业蓝皮书',
            },
            {
              src: 'icon-lingxing',
              txt: '广州开发区蓝皮书',
            },
            {
              src: 'icon-lingxing',
              txt: '坪山生物产业基地蓝皮书',
            },
            {
              src: 'icon-lingxing',
              txt: '日照经开区蓝皮书等',
            },
          ]
          this.consultImg = require('../../assets/img/book.png')
          break
      }
    },
    gotoDemo(){
      this.$router.push('/demo')
    }
  },
}
</script>

<style lang="scss" scoped>
.consult_wrap {
  width: 70%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.02) inset;
  @media screen and (max-width: 768px) {
    width: 95%;
    background: #f7f7f7;
  }
  .consult_btn {
    width: 100%;
    display: flex;
    .consult_item {
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
        font-size: 14px;
      }
    }
    .active {
      color: #fff;
      background: #2091d3;
      font-weight: bold;
      &::before {
        content: '▲';
        position: absolute;
        color: #2091d3;
        font-size: 40px;
        transform: rotateX(180deg);
        bottom: -27px;
      }
    }
  }
  .consult_content {
    width: 100%;
    display: flex;
    padding: 30px;
    justify-content: center;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    .content_left {
      width: 40%;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
      .left_tit {
        color: #2d3937;
        font-size: 17px;
        min-height: 90px;
        line-height: 20PX;
        @media screen and (max-width: 768px) {
          font-size: 0.9rem;
          padding: 10px 20px;
          color: #646464;
        }
      }
      .left_icon_wrap {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 30px;
        @media screen and (max-width: 768px) {
          justify-content: center;
        }
        .icon_item {
          width: 45%;
          height: 50px;
          &:nth-child(n+3){
            margin-top: 10px;
          }
          @media screen and (max-width: 768px) {
            height: 50px;
          }
          i {
            color: #FDBA5D;
            font-size: 16PX;
            padding-right: 10px;
          }
          span {
            color: #646464;
            font-size: 14PX;
          }
        }
      }
      .left_btn {
        width: 150PX;
        height: 40PX;
        background: orange;
        border-radius: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        color: #fff;
      }
    }
    .content_right {
      width: 40%;
      margin-right: 100px;
      @media screen and (max-width: 768px) {
        width: 100%;
        text-align: center;
      }
      text-align: right;
      img {
        margin-top: 30px;
        width: 80%;
      }
      .left_btn {
        width: 180px;
        height: 50px;
        background: orange;
        border-radius: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        color: #fff;
        @media screen and (max-width: 768px) {
          width: 120px;
          height: 35px;
          font-size: 14px;
          border-radius: 20px;
          margin: 20px auto;
        }
      }
    }
  }
}
</style>