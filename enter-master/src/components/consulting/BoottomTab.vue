<template>
  <div class="bottom_tab hidden-sm-and-up">
    <img src="../../assets/img/home/logo.svg" alt="" style="width:40%;"/>
    <img src="../../assets/img/qr-hscz.922c1e6.png" alt="" />
    <p>长按识别二维码，关注云逸公众号</p>
    <div class="phone">
      <span>联系电话：000-000-0000</span>
    </div>
    <div class="banquan">Copyright©云逸创造 . 浙ICP备15031491号</div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.bottom_tab {
    width: 100%;
    height: 390PX;
    display: flex;
    flex-direction: column;
    background: #112F50;
    justify-content: center;
    align-items: center;
    padding-bottom: 20PX;
    box-sizing: content-box;
    img {
      width: 30%;
      &:first-child{
        margin-bottom: 20PX;
      }
    }
    p {
      color: #fff;
      padding: 10PX 0;
      font-size: 13PX;
      margin-top: 10PX;
    }
    .phone {
      width: 70%;
      height: 40PX;
      background: #F69E33;
      text-align: center;
      line-height: 40PX;
      margin: 20PX 0;
      span {
        color: #fff;
        font-size: 14PX;
      }
    }
    .banquan {
      margin-top: 10PX;
      @media screen and (max-width: 768px) {
        font-size: 14px;
      }
    }
  }
</style>