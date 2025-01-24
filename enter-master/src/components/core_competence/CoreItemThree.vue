<template>
  <el-row class="core_three_wrap">
    <el-col class="three_left">
      <div class="left_tit">
        Keystone产业动态本体知识库，支撑产业数智升级
      </div>
      <div class="left_desc">
        <div class="desc_item">
          <div class="item_left">
            <img src="@/assets/xiazai.png" alt="">
          </div>
          <div class="item_right">
            <p>产业动态本体</p>
            <p>以亿级企业法人本体为核心，4.5亿+产业本体构建的自学习的产业动态本体知识库</p>
          </div>
        </div>
        <div class="desc_item">
          <div class="item_left">
            <img src="@/assets/img/xiazai2.png" alt="">
          </div>
          <div class="item_right">
            <p>产业数据处理中心</p>
            <p>工程规则化引擎、机器学习算法，实现数据信息化</p>
          </div>
        </div>
        <div class="desc_item">
          <div class="item_left">
            <img src="@/assets/img/xiazai3.png" alt="">
          </div>
          <div class="item_right">
            <p>产业信息分析中心</p>
            <p>协同产业专家、结合算法模型，形成信息智能化分析</p>
          </div>
        </div>
        <div class="desc_item">
          <div class="item_left">
            <img src="@/assets/img/xiazai4.png" alt="">
          </div>
          <div class="item_right">
            <p>创新产业场景应用</p>
            <p>探索基于产业发展规律的场景应用，实现产业智慧化</p>
          </div>
        </div>
      </div>
    </el-col>
    <el-col class="three_right">
      <img src="@/assets/img/right3 (1).png" alt="" />
    </el-col>
  </el-row>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.core_three_wrap {
  display: flex;
  justify-content: center;
  text-align: left;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
  .three_left {
    width: 40%;
    @media screen and (max-width: 768px) {
      width: 90%;
    }
    .left_tit{
      color: #3e3e3e;
      font-size: 20px;
      font-weight: bold;
      @media screen and (max-width: 768px) {
        font-size: 1.2rem;
        margin-top: 20PX;
      }
    }
    .left_desc{
      .desc_item{
        margin-top: 40px;
        display: flex;
        align-items: center;
        padding-left: 50px;
        .item_left{
          img{
            width: 50px;
            height: 50px;
          }
        }
        .item_right{
          margin-left: 20px;
          p{
            margin: 0;
            &:nth-child(1){
              color: #717171;
              font-size: 16px;
              font-weight: bold;
              @media screen and (max-width: 768px) {
                font-size: 1rem;
                margin-top: 20PX;
              }
            }
            &:nth-child(2){
              color: #717171;
              font-size: 14px;
              padding: 6px 0;
              @media screen and (max-width: 768px) {
                font-size: 0.8rem;
              }
            }
          }
        }
      }
    }
  }
  .three_right {
    width: 20%;
    height: 100%;
    margin-left: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px) {
      width: 100%;
      margin-top: 20PX;
    }
    img {
      width: 80%;
      margin-top: 40px;
    }
  }
}
</style>