<template>
  <el-row class="core_two_wrap">
    <el-col class="two_left">
      <div class="left_tit">
        已完成覆盖9大战新产业、70+细分领域的全球公域数据中心建设
      </div>
      <div class="left_desc">
        全球<span>10000+</span>官方数据源<span>10万+</span>数据采集点
      </div>
      <el-row class="icon_wrap">
        <el-col class="icon_item">
          <div class="icon_title">9大</div>
          <div class="icon_desc">工商企业</div>
        </el-col>
        <el-col class="icon_item">
          <div class="icon_title">4000万+</div>
          <div class="icon_desc">专业数据</div>
        </el-col>
        <el-col class="icon_item">
          <div class="icon_title">4万+</div>
          <div class="icon_desc">研究机构</div>
        </el-col>
        <el-col class="icon_item">
          <div class="icon_title">800万+</div>
          <div class="icon_desc">产品数据</div>
        </el-col>
      </el-row>
      <el-row class="icon_wrap">
        <el-col class="icon_item">
          <div class="icon_title">100万+</div>
          <div class="icon_desc">文献数据</div>
        </el-col>
        <el-col class="icon_item">
          <div class="icon_title">6200万+</div>
          <div class="icon_desc">专利数据</div>
        </el-col>
        <el-col class="icon_item">
          <div class="icon_title">500万+</div>
          <div class="icon_desc">统计指标</div>
        </el-col>
      </el-row>
      <el-row class="icon_wrap">
        <el-col class="icon_item">
          <div class="icon_title">5万+</div>
          <div class="icon_desc">投资机构</div>
        </el-col>
        <el-col class="icon_item">
          <div class="icon_title">6000+</div>
          <div class="icon_desc">产业园区</div>
        </el-col>
        <el-col class="icon_item">
          <div class="icon_title">100万+</div>
          <div class="icon_desc">产业政策</div>
        </el-col>
        <el-col class="icon_item">
          <div class="icon_title">1000万+</div>
          <div class="icon_desc">产业新闻</div>
        </el-col>
      </el-row>
    </el-col>
    <el-col class="two_right">
      <img src="@/assets/img/right2.png" alt="" />
    </el-col>
  </el-row>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.core_two_wrap {
  display: flex;
  justify-content: center;
  text-align: left;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
  .two_left {
    width: 40%;
    padding: 20px 50px 20px 50px;
    @media screen and (max-width: 768px) {
      width: 95%;
    }
    .left_tit {
      font-size: 23px;
      font-weight: bold;
      color: #3e3e3e;
      @media screen and (max-width: 768px) {
        font-size: 1.2rem;
        margin-top: 20PX;
      }
    }
    .left_desc {
      color: #717171;
      padding: 30px 40px 20px 40px;
      line-height: 25px;
      font-size: 18px;
      margin-bottom: 20px;
      @media screen and (max-width: 768px) {
        padding: 30PX 0;
        font-size: 1rem;
        line-height: 1.2rem;
      }
      span {
        color: #ffa400;
        font-size: 24px;
        padding: 0 10px;
        @media screen and (max-width: 768px) {
          font-size: 1.2rem;
        }
      }
    }
    .icon_wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      &:nth-child(n+2){
        margin-top: -20px;
      }
      .icon_item {
        background: url('../../assets/img/types.png') 0 0 no-repeat;
        background-size: 100% 100%;
        width: 120px;
        height: 135px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-right: 10px;
        @media screen and (max-width: 768px) {
          width: 20%;
          height: 73PX;
          margin-right: 10PX;
        }
        .icon_title {
          color: #717171;
          font-size: 22px;
          font-weight: bold;
          @media screen and (max-width: 768px) {
            font-size: 0.9rem;
            white-space: nowrap;
          }
        }
        .icon_desc {
          color: #717171;
          font-size: 14px;
          margin-top: 12px;
          @media screen and (max-width: 768px) {
            font-size: 0.7rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
  .two_right {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px) {
      width: 100%;
      margin-top: 20PX;
    }
    img {
      width: 65%;
      margin-top: 70px;
    }
  }
}
</style>