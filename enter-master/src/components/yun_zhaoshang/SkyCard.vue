<template>
  <div class="sky_wrap">
    <div class="sky_btn">
      <div
        class="sky_item"
        v-for="(item, index) in skyList"
        :key="index"
        :class="activeIndex === index ? 'active' : ''"
        @click="changeIndex(index)"
      >
        {{ item.tit }}
      </div>
    </div>
    <div class="sky_content">
      <div class="content_left">
        <div class="left_tit">{{ skyTitle }}</div>
        <div class="left_icon_wrap">
          <div
            class="icon_item"
            v-for="(item, index) in skyImgList"
            :key="index"
            ref="iconItem"
          >
            <i :class="item.src"></i>
            <span v-html="item.txt"></span>
          </div>
        </div>
        <div class="left_btn hidden-xs-only" @click="handleToDeomo">获取产品演示</div>
      </div>
      <div class="content_right">
        <img :src="skycurrentImg" alt="" />
        <div class="left_btn hidden-sm-and-up" @click="handleToDeomo">获取产品演示</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      skyTitle:
        '为园区组织策划线上招商推介会、线上洽谈会等直播宣传推介活动，提供会前策划推广、目标企业定向邀请、会后持续宣传等全流程服务。',
      skyImgList: [
        {
          src: '',
          txt: '<span style="font-weight:bold;padding-right:10px;">一键发起</span>快速举办在线招商',
        },
        {
          src: '',
          txt: '<span style="font-weight:bold;padding-right:10px;">专属二维码</span>每个参会者都是VIP体验',
        },
        {
          src: '',
          txt: '<span style="font-weight:bold;padding-right:10px;">稳定流畅</span>会议成果报告秒生成',
        },
      ],
      skycurrentImg:require('../../assets/img/33342e3d61.png')
    }
  },
  props: {
    skyList: {
      type: Array,
      default: [],
    },
  },
  methods: {
    changeIndex(index) {
      this.activeIndex = index
      switch (this.activeIndex) {
        case 1:
          this.skyTitle =
            '基于企业大数据，整合招商线索，精准匹配区域招商策略和全国范围标的企业，为政府/园区精准对接有投资选址意向的企业线索。'
          this.skyImgList = [
            {
              src: '',
              txt: '<span style="font-weight:bold;padding-right:10px;">定制化推荐模型</span>基于地域和领域招商逻辑构建45个预测模型，随需调用',
            },
            {
              src: '',
              txt: '<span style="font-weight:bold;padding-right:10px;">持续的数据获取</span>200万+医健企业、25万+产品库、70万+临床数据......',
            },
            {
              src: '',
              txt: '<span style="font-weight:bold;padding-right:10px;">强大的情报挖掘</span>从海量数据中挖掘招商情报信息，实时输出招商线索',
            },
            {
              src: '',
              txt: '<span style="font-weight:bold;padding-right:10px;">有效的线索对接</span>线上线下结合，对接关键决策人，促进项目落地',
            },
          ]
          this.skycurrentImg = require('../../assets/img/222.a7a2174.png')
          break
        case 2:
          this.skyTitle =
            '开通园区营商环境数字化功能，园区VR实景，公共服务、技术、平台的数字化，在线还原园区真实的营商环境，让企业足不出户实现园区考察过程。'
          this.skyImgList = [
            {
              src: '',
              txt: '<span style="font-weight:bold;padding-right:10px;">VR全景</span>全面展现园区实景',
            },
            {
              src: '',
              txt: '<span style="font-weight:bold;padding-right:10px;">3D建模</span>直观呈现未来规划',
            },
            {
              src: '',
              txt: '<span style="font-weight:bold;padding-right:10px;">微园区</span>详细介绍园区配套',
            },
          ]
          this.skycurrentImg = require('../../assets/img/111.855fbdc (1).png')
          break
        default:
          this.skyTitle =
            '为园区组织策划线上招商推介会、线上洽谈会等直播宣传推介活动，提供会前策划推广、目标企业定向邀请、会后持续宣传等全流程服务。'
          this.$refs.iconItem.map(v=>{
            v.style.width = '90%'
          })
          this.skyImgList = [
            {
              src: '',
              txt: '<span style="font-weight:bold;padding-right:10px;">一键发起</span>快速举办在线招商',
            },
            {
              src: '',
              txt: '<span style="font-weight:bold;padding-right:10px;">专属二维码</span>每个参会者都是VIP体验',
            },
            {
              src: '',
              txt: '<span style="font-weight:bold;padding-right:10px;">稳定流畅</span>会议成果报告秒生成',
            },
          ]
          this.skycurrentImg = require('../../assets/img/33342e3d61.png')
          break
      }
    },
    handleToDeomo(){
      this.$router.push('/demo')
    }
  },
}
</script>

<style lang="scss" scoped>
.sky_wrap {
  width: 70%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.02) inset;
  @media screen and (max-width: 768px) {
    width: 95%;
    background: #f7f7f7;
  }
  .sky_btn {
    width: 100%;
    display: flex;
    .sky_item {
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
        font-size: 13px;
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
  .sky_content {
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
          width: 90%;
          height: 50px;
          @media screen and (max-width: 768px) {
            height: 50px;
          }
          i {
            color: #7bbde3;
            @media screen and (max-width: 768px) {
              font-size: 20px;
            } 
          }
          span {
            color: #646464;
             @media screen and (max-width: 768px) {
              font-size: 14px;
            }
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
        cursor: pointer;
        @media screen and (max-width: 768px) {
          width: 120px;
          height: 35px;
          font-size: 14px;
          border-radius: 20px;
          margin: 20px auto;
          cursor: pointer;
        }
      }
    }
  }
}
</style>