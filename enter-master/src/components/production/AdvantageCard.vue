<template>
  <el-row class="advantage_wrap">
    <el-col
      class="advantage_item"
      v-for="(item, index) in advantageList"
      :key="index"
      :span="5"
      :xs="11"
    >
      <div class="item_top">
        <div class="icon"><img :src="item.icon" alt=""></div>
        <div class="tit">{{ item.title }}</div>
      </div>
      <ul class="item_desc hidden-xs-only" v-for="(desc, index2) in item.desc" :key="index2">
        <li>{{ desc }}</li>
      </ul>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      advantageList: [
        {
          icon: require('../../assets/img/programme/industryInsight/icon/41.png'),
          title: '产品成熟已经多项目验证',
          desc: [
            '云逸产业大脑已在全国多个城市得到应用，覆盖生物医药等多个高精尖产业',
            '已形成产业地图、产业监测、企业培育、风险监测等多个场景成熟应用',
          ],
        },
        {
          icon: require('../../assets/img/programme/industryInsight/icon/42.png'),
          title: '弹性架构支撑快速构建应用',
          desc: [
            '通过实际项目提炼产业见解、产业图谱和算法模型形成PaaS层',
            '支撑快速构建扩展多产业链应用场景',
          ],
        },
        {
          icon: require('../../assets/img/programme/industryInsight/icon/43.png'),
          title: '指标+模型构建产业洞察力',
          desc: [
            '微观形成数字化企业画像',
            '宏观绘制产业链全景谱图，进行指标评价',
            '构建供应链健康度、企业潜力、风险预测、外迁预警等大数据模型',
          ],
        },
        {
          icon: require('../../assets/img/programme/industryInsight/icon/44.png'),
          title: '建成公域产业数据中心形成丰富的产业链核心场景应用',
          desc: [
            '数据智能支撑产业链图谱绘制和应用场景构建',
            '自主研发超级数据工厂，实现数据采集、加工、融合智能化',
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.advantage_wrap {
  width: 70%;
  display: flex;
  margin-top: 70px;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
  .advantage_item {
    height: auto;
    padding: 30px 20px 80px 20px;
    margin-right: 10px;
    background: url('../../assets/img/422c6817d7.png') 0 0 no-repeat;
    background-size: 100% 100%;
    @media screen and (max-width: 768px) {
      margin: 0;
      padding: 0 15px;
      margin-top: 3px;
      height: 140px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .item_top {
      display: flex;
      align-items: center;
      @media screen and (max-width: 768px) {
        height: 100px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      .icon {
        width: 15%;
        margin-right: 10PX;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 100%;
          @media screen and (max-width: 768px) {
            margin-bottom: 10px;
            margin-left: 6px;
          }
        }
      }
      .tit {
        width: 100%;
        color: #1c1c1c;
        font-size: 22px;
        font-weight: bold;
        @media screen and (max-width: 768px) {
          font-size: 1rem;
        }
      }
    }
    .item_desc {
      font-size: 16px;
      line-height: 20PX;
      margin: 0;
      padding: 0;
      margin-top: 20px;
      padding-left: 34px;
      color: #646464;
      li{
          &:first-child{
            margin-top: 30px;
        }
      }
    }
  }
}
</style>