<template>
  <div class="person_card_center">
    <el-row class="person_card_wrap" type="flex" justify="space-between">
      <el-col class="card_item" :span="11" :xs="24">
        <h2>刘 权</h2>
        <p>云逸创造合伙人、董事长</p>
        <div class="card_bg"></div>
        <div class="card_desc">
          云逸创造创始人，担任公司董事长和法定代表人
          浙江健康产业大数据技术联盟理事长 浙江省大健康产业联合会副理事长
          杭州市“5050计划”认定海外高层次人才
          携团队获评2018年唯一的“杭州市领军型青年创业团队”
          中国科技部城市竞争力研究院首届专家
        </div>
      </el-col>
      <el-col class="card_item" :span="11" :xs="24">
        <h2>安 晖</h2>
        <p>云逸创造合伙人、CEO</p>
        <div class="card_bg"></div>
        <div class="card_desc">
          连续创业者，天使投资人 HSMAP全球医健创业地图的设计者
          通过基于全球的医健数据自动化采集、机器学习 场景化模型构建和智能分析
          将医疗大健康的数据产品化、服务化 并应用到医疗大健康创新创业的各个领域
          作为项目负责人承担过多个863计划 科技部、发改委产业专项
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.person_card_center {
  width: 70%;
  margin: 50px auto;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  .person_card_wrap {
    @media screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: space-between;
    }
    .card_item {
      background: url('https://www.ccidgroup.com/__local/6/58/BB/752EFB22454DB90D62C72AD0AA6_CEE9634D_1425.jpg') 50% 50% no-repeat;
      background-size: cover;
      color: #fff;
      height: 400px;
      padding: 30px;
      &:nth-child(2){
        background: url('https://www.ccidgroup.com/__local/2/85/C0/F2B0AC1BB187C32373B8423ADD8_F99940B3_A65F.jpg?e=.jpg') 50% 50% no-repeat;
        background-size: cover;
        @media screen and (max-width: 768px) {
          margin-top: 1rem;
        }
      }
      h2 {
        font-size: 30px;
        @media screen and (max-width: 768px) {
          font-size: 24px;
        }
      }
      p {
        font-size: 18px;
        @media screen and (max-width: 768px) {
          font-size: 13px;
          padding: 10px 0;
        }
      }
      @media screen and (max-width: 768px) {
        height: auto;
        padding: 20px;
        background-size: cover;
        color: #fff;
      }
      .card_bg {
        width: 35px;
        height: 5px;
        margin-top: 10px;
        background: #fff;
        @media screen and (max-width: 768px) {
          width: 20px;
          height: 3px;
        }
      }
      .card_desc {
        color: silver;
        width: 60%;
        margin-top: 30px;
        line-height: 1.5rem;
        font-size: 16px;
        @media screen and (max-width: 768px) {
          color: #fff;
          font-size: 12px;
        }
      }
    }
  }
}
</style>