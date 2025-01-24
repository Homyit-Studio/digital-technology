<template>
  <div class="data_brain_wrap">
    <div class="brain_title">云逸产业大脑</div>
    <div class="brain_desc">数智赋能、高效协同，助力实现产业高质量发展</div>

    <el-row class="card_wrap" type="flex">
      <el-col
        class="brain_item"
        :lg="7"
        :sm="11"
        :xs="11"
        v-for="(item, index) in cardList"
        :key="index"
      >
        <div class="item_title">{{ item.title }}</div>
        <div class="item_desc">{{ item.desc }}</div>
        <div class="item_navigate" @click="handleNavigate">了解详情 >></div>
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
          title: '产业链数据中心',
          desc: '通过大数据与人工智能，实现区域内各个产业要素的数字孪生，数据贯通，为智能化分析和产业决策提供数字化支撑量发展',
        },
        {
          title: '产业链监测',
          desc: '从宏观、中观、微观三个层面，实现产业链图谱的洞察与监测，为产业管理部门提供产业选择的支撑工具。',
        },
        {
          title: '产业评价',
          desc: '通过对企业和土地的评价，实现地块的产出效率最大化，实现优质企业服务支持、低效企业帮扶。',
        },
        {
          title: '产业地图',
          desc: '全方位、多维度、实时动态的产业数据展示和分析。呈现区域规划差异和发展成果，快速建立地区产业品牌形象',
        },
        {
          title: '智能招商云平台',
          desc: '数据智能融入招商全流程，为政府和园区提供招商策略研究、大数据招商平台、招商云服务和产业品牌活动等一站式精准招商服务',
        },
        {
          title: '企业服务',
          desc: '面向企业需求建设运营产业互联网，实现产业资源、创新要素和企业服务需求的精准匹配，提高企业创新发展能效',
        },
      ],
    }
  },
  methods:{
    handleNavigate(){
      this.$router.push('/production/1').catch((v) => {})
    }
  }
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