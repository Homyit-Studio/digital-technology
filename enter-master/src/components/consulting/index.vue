<template>
  <div class="consult_wrap">
    <div class="consult_img">
      <div class="img_tit">产业咨询服务</div>
      <div class="img_desc">
        为生物医药产业发展提供一站式战略咨询服务
      </div>
    </div>
    <div class="consult_title_wrap">
      <div class="consult_inner">
        <div class="inner_left">
          <img src="../../assets/img/tupianright.png" alt="" />
        </div>
        <div class="inner_center" style="width: 40%">
          <div class="consult_title">云逸产业咨询服务介绍</div>
          <div class="consult_desc">
            提供产业研究，规划，评估，监测等战略咨询服务
          </div>
        </div>
        <div class="inner_right">
          <img src="../../assets/img/tupianleft.png" alt="" />
        </div>
      </div>
    </div>
    <div class="consult_card_wrap">
      <ConsultCard :consultList="consultList" />
    </div>
    <div class="consult_title_wrap">
      <div class="consult_inner">
        <div class="inner_left">
          <img src="../../assets/img/tupianright.png" alt="" />
        </div>
        <div class="inner_center" style="width: 40%">
          <div class="consult_title">云逸产业咨询服务独特优势</div>
          <div class="consult_desc"></div>
        </div>
        <div class="inner_right">
          <img src="../../assets/img/tupianleft.png" alt="" />
        </div>
      </div>
    </div>
    <div class="func_wrap hidden-xs-only" style="background: #f4f9fc">
      <div class="func_wrap_inner">
        <div class="func_tit">BioMall 四大核心价值</div>
      </div>
      <div class="double_card_wrap">
        <el-row class="double_card" type="flex">
          <el-col :span="7" :xs="11" class="double_card_item">
            <div class="double_card_bg">数据驱动</div>
            <p>基于产业链，创新链，空间链，政府链的数据优势，提供专业化地区生物医药产业数据评价服务。</p>
          </el-col>
          <el-col :span="7" :xs="11" class="double_card_item">
            <div class="double_card_bg">一体化解决方案</div>
            <p>形成“产业研究+规划蓝图+资源集成+平台落地”的理论指导，提供“顶天立地”独特的区域生物医药产业研究解决方案。</p>
          </el-col>
          <el-col :span="7" :xs="11" class="double_card_item">
            <div class="double_card_bg">专业服务团队</div>
            <p>聚焦国内规模最大的生物医药产业研究专业团队。 核心骨干人员均拥有多年生物医药行业研究和咨询规划工作经验</p>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="func_wrap_mobile hidden-sm-and-up">
      <img src="@/assets/img/ys.png" alt="">
    </div>
    <div class="appointment_wrap">
      <div class="appointment_txt">
        <h1>预约我们的产业专家<br>了解更多有关云逸产业咨询服务详细信息</h1>
        <p>拨打我们的咨询热线 000-000-0000</p>
      </div>
    </div>
    <div class="product_shows_wrap">
      <div class="consult_title_wrap">
        <div class="consult_inner">
          <div class="inner_left">
            <img src="../../assets/img/tupianright.png" alt="" />
          </div>
          <div class="inner_center">
            <div class="consult_title">客户见证</div>
            <div class="consult_desc">
              全国各地150+政府与产业园合作成功案例
            </div>
          </div>
          <div class="inner_right">
            <img src="../../assets/img/tupianleft.png" alt="" />
          </div>
        </div>
      </div>
      <div class="with_center">
        <div class="bottom_img_wrap">
          <div
            class="bottom_img_item"
            v-for="(item, index) in procardList"
            :key="index"
          >
            <div class="bottom_img">
              <img :src="item.src" alt="" />
              <div class="img_desc">{{ item.tit }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CallMe/>

    <BoottomTab/>
  </div>
</template>

<script>
import ConsultCard from './ConsultCard.vue'
import CallMe from '@/components/callme/index'
import BoottomTab from './BoottomTab.vue'
export default {
  data() {
    return {
      consultList: [
        {
          tit: '产业研究',
        },
        {
          tit: '产业规划',
        },
        {
          tit: '项目评估',
        },
        {
          tit: '产业监测',
        },
        {
          tit: '专题研究',
        },
      ],
      procardList: [
        {
          tit: '上海市生物医药产业地图',
          desc: '重点关注5+1+X高精尖产业',
          src: require('@/assets/img/a.png'),
        },
        {
          tit: '上海市生物医药创新服务平台',
          desc: '重点关注5+1+X高精尖产业',
          src: require('@/assets/img/b.png'),
        },
        {
          tit: '广州市生物医药产业地图',
          desc: '重点关注5+1+X高精尖产业',
          src: require('@/assets/img/c.png'),
        },
        {
          tit: '中关村发展集团（规划+数字化中台）',
          desc: '重点关注5+1+X高精尖产业',
          src: require('@/assets/img/d.png'),
        },
        {
          tit: '中关村生命科学园智慧园区',
          desc: '重点关注5+1+X高精尖产业',
          src: require('@/assets/img/e.png'),
        },
        {
          tit: '华夏幸福数据中台',
          desc: '重点关注5+1+X高精尖产业',
          src: require('@/assets/img/f.png'),
        },
      ],
    }
  },
  components: {
    ConsultCard,CallMe,BoottomTab
  },
}
</script>

<style lang="scss" scoped>
.consult_wrap {
  .consult_img {
    width: 100%;
    height: 600px;
    @media screen and (max-width: 768px) {
      height: 50vw;
    }
    background: url('../../assets/img/header.png') 0 0 no-repeat;
    background-size: 100% 100%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    .img_tit {
      font-size: 60px;
      font-weight: bold;
      @media screen and (max-width: 768px) {
        font-size: 1.2rem;
        text-align: center;
      }
    }
    .img_desc {
      font-size: 32px;
      margin-top: 20px;
      text-align: center;
      @media screen and (max-width: 768px) {
        font-size: 0.85rem;
      }
    }
    .img_btn {
      width: 180px;
      height: 50px;
      border: solid 1px rgb(255, 166, 0);
      background: rgba(25, 166, 0, 0.1);
      color: orange;
      position: absolute;
      bottom: 15%;
      border-radius: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.5s;
      &:hover {
        color: #fff;
        background: orange;
      }
      @media screen and (max-width: 768px) {
        width: 80px;
        height: 30px;
        font-size: 14px;
      }
    }
  }
  .consult_title_wrap {
    width: 100%;
    margin-top: 50px;
    @media screen and (max-width: 768px) {
      margin-top: 30px;
    }
    .consult_inner {
      display: flex;
      justify-content: center;
      .inner_left {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        @media screen and (max-width: 768px) {
          flex: 1;
        }
        img {
          width: 30%;
        }
      }
      .inner_center {
        width: 450px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 50px;
        @media screen and (max-width: 768px) {
          flex: 3;
        }
        .consult_title {
          font-size: 40px;
          font-weight: bold;
          @media screen and (max-width: 768px) {
            font-size: 1rem;
          }
        }
        .consult_desc {
          font-size: 16px;
          color: #787878;
          margin-top: 10px;
          @media screen and (max-width: 768px) {
            margin-top: 10px;
            font-size: 13px;
          }
        }
      }
      .inner_right {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        @media screen and (max-width: 768px) {
          flex: 1;
        }
        img {
          width: 30%;
        }
      }
    }
  }
  .consult_card_wrap {
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
  .func_wrap {
    width: 100%;
    padding: 50px;
    background: url('../../assets/img/bg_0.png');
    background-size: 100% 100%;
    .func_wrap_inner {
      width: 70%;
      margin: 0 auto;
      @media screen and (max-width: 768px) {
        width: 90%;
      }
      .func_tit {
        font-size: 34px;
        font-weight: bold;
        text-align: center;
        @media screen and (max-width: 768px) {
          font-size: 1rem;
        }
      }
      .func_card {
        justify-content: space-between;
        margin-top: 40px;
        .card_item {
          background: #fff;
          box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
          .item_top {
            width: 100%;
            height: 150px;
            font-size: 24px;
            font-weight: bold;
            color: #fff;
            background: url('../../assets/img/bg3.png');
            background-size: 100% 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .item_bottom {
            padding: 15px;
            p {
              font-size: 16px;
              margin-top: 20px;
            }
          }
        }
      }
      .func_card_mobile {
        width: 100%;
        img {
          width: 100%;
          margin-top: 40px;
        }
      }
    }
    .double_card_wrap {
      width: 70%;
      margin: 0 auto;
      @media screen and (max-width: 768px) {
        width: 90%;
      }
      .double_card {
        justify-content: space-between;
        margin-top: 50px;
        @media screen and (max-width: 768px) {
          flex-wrap: wrap;
        }
        .double_card_item {
          height: 340px;
          background: #fff;
          padding: 30px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          &:nth-child(1){
            background-image: url('../../assets/img/ys1.png');
            background-position: 90% 10%;
            background-repeat: no-repeat;
            background-size: 20%;
          }
          &:nth-child(2){
            background-image: url('../../assets/img/ys2.png');
            background-position: 90% 10%;
            background-repeat: no-repeat;
            background-size: 20%;
          }
          &:nth-child(3){
            background-image: url('../../assets/img/ys3.png');
            background-position: 90% 10%;
            background-repeat: no-repeat;
            background-size: 20%;
          }
          box-shadow: 10px 10px 20px rgba(0,0,0,.1);
          @media screen and (max-width: 768px) {
            height: 140px;
            &:nth-child(n + 3) {
              margin-top: 20px;
            }
          }
          .double_card_bg {
            font-size: 24px;
            color: #000;
            font-weight: bold;
          }
          p {
            line-height: 40PX;
            font-size: 18px;
            margin-top: 30px;
          }
        }
      }
    }
  }
  .func_wrap_mobile{
    width: 100%;
    img{
      width: 100%;
    }
  }
  .appointment_wrap{
    width: 100%;
    height: 350px;
    background: url('../../assets/img/bgcenter.c1d3caa.jpg') 0 0 no-repeat;
    background-size: 100% 100%;
    @media screen and (max-width: 768px) {
      margin-top: 30px;
      height: 130px;
    }
    .appointment_txt{
      width: 70%;
      height: 100%;
      color: #fff;
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin: 0 auto;
      h1{
        font-size: 26px;
        @media screen and (max-width: 768px) {
          font-size: 0.9rem;
          font-weight: normal;
        }
      }
      p{
        font-size: 20px;
        margin-top: 20px;
        @media screen and (max-width: 768px) {
          font-size: 0.75rem;
        }
      }
    }
  }
  .product_shows_wrap {
    width: 100%;
    background: url('../../assets/img/witness-bgc369221.png') 0 0 no-repeat;
    background-size: cover;
    padding: 10px 0 50px 0;
    margin-top: 100px;
    box-sizing: border-box;
    .with_center {
      display: flex;
      justify-content: center;
      .bottom_img_wrap {
        width: 80%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        @media screen and (max-width: 768px) {
          width: 100%;
          margin-top: 20px;
        }
        .bottom_img_item {
          width: 30%;
          display: flex;
          flex-wrap: wrap;
          margin-top: 20px;
          margin: 20px;
          @media screen and (max-width: 768px) {
            width: 45%;
          }
          .bottom_img {
            width: 100%;
            position: relative;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }

            .img_desc {
              position: absolute;
              bottom: 50%;
              transform: translateY(50%);
              width: 100%;
              text-align: center;
              color: #fff;
              font-size: 20px;
              font-weight: bold;
              @media screen and (max-width:768px){
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
}
</style>