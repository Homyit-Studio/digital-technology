<template>
  <div class="procard_wrap">
    <div class="procard_btn">
      <div
        class="procard_item"
        v-for="(item, index) in procardList"
        :key="index"
        :class="activeIndex === index ? 'active' : ''"
        @click="changeIndex(index)"
      >
        {{ item.tit }}
      </div>
    </div>
    <div class="procard_content">
      <div class="content_left">
        <div class="left_tit">{{ procardTitle }}</div>
        <div class="left_icon_wrap">
          <div
            class="icon_item"
            v-for="(item, index) in procardImgList"
            :key="index"
            ref="iconItem"
          >
            <i :class="item.src" class="iconfont"></i>
            <span>{{ item.txt }}</span>
          </div>
        </div>
        <router-link class="left_btn hidden-xs-only" to="/demo"
          >立即体验</router-link
        >
      </div>
      <div class="content_right">
        <img :src="procardImg" alt="" />
        <router-link class="left_btn hidden-sm-and-up" to="/demo"
          >立即体验</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      procardTitle:
        '通过大数据与人工智能，实现区域内各个产业要素的数字孪生以及宏观、中观与微观数据贯通，为智能化分析和产业决策提供数字化支撑',
      procardImg: require('@/assets/img/government-right-1.png'),
      procardImgList: [
        {
          src: 'icon-chengshi',
          txt: '一企一档',
        },
        {
          src: 'icon-chengshi1',
          txt: '园区档案',
        },
        {
          src: 'icon-zhengfufeiyinglijigou',
          txt: '机构档案',
        },
        {
          src: 'icon-ren',
          txt: '一人一档',
        },
        {
          src: 'icon-chanpin',
          txt: '产品档案',
        },
        {
          src: 'icon-zhengce',
          txt: '政策档案',
        },
      ],
    }
  },
  props: {
    procardList: {
      type: Array,
      default: [],
    },
  },
  methods: {
    changeIndex(index) {
      this.activeIndex = index
      switch (this.activeIndex) {
        case 1:
          this.procardTitle =
            '通过大数据与人工智能，实现区域内各个产业要素的数字孪生以及宏观、中观与微观数据贯通，为智能化分析和产业决策提供数字化支撑'
          this.procardImg = require('../../assets/img/government-right-2.png')
          this.procardImgList = [
            {
              src: 'icon-kehuishouwu-feizhilei',
              txt: '产业宏观发展评价',
            },
            {
              src: 'icon-houmenjiance',
              txt: '企业产品动向及风险监测',
            },
            {
              src: 'icon-weibiaoti1',
              txt: '产业链风险及机遇识别',
            },
          ]
          this.$refs.iconItem.map(v=>{
            v.style.width='100%'
          })
          break
        case 2:
          this.procardTitle =
            '从宏观、中观、微观三个层面，实现产业链图谱的洞察与监测，为产业管理部门提供产业选择的支撑工具'
          this.procardImg = require('../../assets/img/government-right-3.png')
          this.procardImgList = [
            {
              src: 'icon-ditu',
              txt: '以实际GIS地图为承载',
            },
            {
              src: 'icon-balance-full',
              txt: '评价结果客观、可视化',
            },
          ]
          break
        case 3:
          this.procardTitle =
            '通过对企业和土地的评价，实现地块的产出效率最大化，实现优质企业服务支持、低效企业帮扶。'
          this.procardImg = require('../../assets/img/government-right-4.png')
          this.procardImgList = [
            {
              src: 'icon-icon-test',
              txt: '规划落图',
            },
            {
              src: 'icon-tuceng',
              txt: '资源落图',
            },
            {
              src: 'icon-zhaochengguo',
              txt: '成果落图',
            },
          ]
          this.$refs.iconItem.map(v=>{
            v.style.width='30%'
          })
          break
        case 4:
          this.procardTitle =
            '全方位、多维度、实时动态的产业数据展示和分析，呈现区域规划差异和发展成果，用更快捷的方式建立地区产业品牌形象'
          this.procardImg = require('../../assets/img/government-right-5.png')
          this.procardImgList = [
            {
              src: 'icon-yuan',
              txt: '招商策略研究',
            },
            {
              src: 'icon-yuan',
              txt: '线上招商会',
            },
            {
              src: 'icon-yuan',
              txt: '智能招商定制',
            },
            {
              src: 'icon-yuan',
              txt: '智能招商SaaS系统',
            },
            {
              src: 'icon-yuan',
              txt: '招商品牌会议服务',
            },
            {
              src: 'icon-yuan',
              txt: '委托招商服务',
            },
          ]
          this.$refs.iconItem.map(v=>{
            v.style.width='30%'
          })
          break
        default:
          this.procardTitle =
            '数据智能融入招商业务全流程,为政府和园区提供招商策略研究、大数据招商平台、系统定制,以及招商运营服务和产业品牌活动,为地方产业发展提供一站式精准招商服务'
          this.procardImg = require('../../assets/img/government-right-1.png')
          this.procardImgList = [
            {
              src: 'icon-chengshi',
              txt: '一企一档',
            },
            {
              src: 'icon-chengshi1',
              txt: '园区档案',
            },
            {
              src: 'icon-zhengfufeiyinglijigou',
              txt: '机构档案',
            },
            {
              src: 'icon-ren',
              txt: '一人一档',
            },
            {
              src: 'icon-chanpin',
              txt: '产品档案',
            },
            {
              src: 'icon-zhengce',
              txt: '政策档案',
            },
          ]
          this.$refs.iconItem.map(v=>{
            v.style.width='30%'
          })
          break
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.procard_wrap {
  width: 70%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.02) inset;
  @media screen and (max-width: 768px) {
    width: 95%;
    background: #f7f7f7;
  }
  .procard_btn {
    width: 100%;
    display: flex;
    .procard_item {
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
        font-size: 12px;
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
  .procard_content {
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
        line-height: 1.5rem;
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
          width: 30%;
          height: 50px;
          display: flex;
          align-items: center;
          @media screen and (max-width: 768px) {
            height: 50px;
          }
          i {
            color: #7bbde3;
            font-size: 24px;
            @media screen and (max-width: 768px) {
              font-size: 20px;
            }
          }
          span {
            color: #646464;
            font-size: 16px;
            padding: 0 10px;
            @media screen and (max-width: 768px) {
              font-size: 14px;
            }
          }
        }
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
      }
    }
    .content_right {
      width: 40%;
      @media screen and (max-width: 768px) {
        width: 100%;
        text-align: center;
      }
      text-align: right;
      img {
        margin-top: 30px;
        width: 50%;
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
          width: 90px;
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