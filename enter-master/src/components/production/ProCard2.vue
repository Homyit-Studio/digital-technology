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
        <div class="left_tit" v-html="procardTitle"></div>
        <div class="left_icon_wrap">
          <div
            class="icon_item"
            v-for="(item, index) in procardImgList"
            :key="index"
            ref="iconItem"
            slot="reference"
          >
            <el-tooltip
              class="item"
              effect="dark"
              :content="item.tip"
              placement="top-start"
              :disabled="disableTips"
            >
              <div>
                <i :class="item.src" class="iconfont"></i>
                <span v-html="item.txt"></span>
              </div>
            </el-tooltip>
          </div>
        </div>
        <router-link class="left_btn hidden-xs-only" to="/demo"
          >了解详情</router-link
        >
      </div>
      <div class="content_right">
        <img :src="procardImg" alt="" />
        <router-link class="left_btn hidden-sm-and-up" to="/demo"
          >了解详情</router-link
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
        '云逸选址平台 支持一键入园<br/>实现生物医药产业园区 可查、可看、可比、可询<br/>全球生物医药企业入华选址门户',
      procardImg: require('@/assets/img/market-right-1.png'),
      procardImgList: [
        {
          src: '',
          txt: '<span style="font-weight:bold; color:#000;padding-right:5px;">2000+</span>生物医药产业园区',
        },
        {
          src: '',
          txt: '<span style="font-weight:bold; color:#000;padding-right:5px;">100000+</span>行业资讯',
        },
        {
          src: '',
          txt: '<span style="font-weight:bold; color:#000;padding-right:5px;">1000+</span>政策',
        },
        {
          src: '',
          txt: '<span style="font-weight:bold; color:#000;padding-right:5px;">100+</span>行业学/协会资源',
        },
        {
          src: '',
          txt: '<span style="font-weight:bold; color:#000;padding-right:5px;">4100+</span>投资机构信息',
        },
        {
          src: '',
          txt: '<span style="font-weight:bold;color:#000;padding-right:5px;">6</span>大维度量化',
        },
      ],
      disableTips:true,
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
            '整合生物医药全产业链供给侧资源，为企业提供从研发、临床、生产到上市推广等全生命周期产业发展精准服务，用数字化重构生物医药产业服务运营生态体系'
          this.procardImg = require('../../assets/img/government-right-2.png')
          this.procardImgList = [
            {
              src: 'icon-kehuishouwu-feizhilei',
              txt: '临床资源',
              tip:'300+SMO、全国临床GCP机构PI等相关临床及注册资源'
            },
            {
              src: 'icon-yingxiao',
              txt: '营销资源',
              tip:'百万级的企业画像'
            },
            {
              src: 'icon-leijishufuwux',
              txt: '技术服务',
              tip:'1000+设计、检测、质量服务等'
            },
          ]
          this.$refs.iconItem.map((v) => {
            v.style.width = '30%'
          })
          this.disableTips = false
          break
        case 0:
          this.procardTitle = `云逸选址平台 支持一键入园<br/>实现生物医药产业园区 可查、可看、可比、可询<br/>全球生物医药企业入华选址门户`
          this.procardImg = require('../../assets/img/market-right-1.png')
          this.procardImgList = [
            {
              src: '',
              txt: '<span style="font-weight:bold; color:#000;padding-right:5px;">2000+</span>生物医药产业园区',
            },
            {
              src: '',
              txt: '<span style="font-weight:bold; color:#000;padding-right:5px;">100000+</span>行业资讯',
            },
            {
              src: '',
              txt: '<span style="font-weight:bold; color:#000;padding-right:5px;">1000+</span>政策',
            },
            {
              src: '',
              txt: '<span style="font-weight:bold; color:#000;padding-right:5px;">100+</span>行业学/协会资源',
            },
            {
              src: '',
              txt: '<span style="font-weight:bold; color:#000;padding-right:5px;">4100+</span>投资机构信息',
            },
            {
              src: '',
              txt: '<span style="font-weight:bold;color:#000;padding-right:5px;">6</span>大维度量化',
            },
          ]
          this.disableTips = true
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
      width: 45%;
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
        justify-content: space-around;
        padding-bottom: 30px;
        @media screen and (max-width: 768px) {
          justify-content: space-around;
        }
        .icon_item {
          width: 30%;
          height: 50px;
          display: flex;
          align-items: center;
          background: #FFFFFF;
          box-shadow: 10px 10px 20px rgba($color: #000000, $alpha: 0.1);
          padding: 5px;
          box-sizing: content-box;
          cursor: pointer;
          &:nth-child(n + 4) {
            margin-top: 1rem;
          }
          @media screen and (max-width: 768px) {
            height: 50px;
            justify-content: center;
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