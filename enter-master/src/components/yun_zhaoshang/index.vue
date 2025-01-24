<template>
  <div class="sky_wrap">
    <div class="sky_img">
      <div class="img_tit hidden-xs-only">
        云招商，生物医药细分领域企业选址专家
      </div>
      <div class="img_desc hidden-xs-only">
        基于企业大数据、招商预测模型和细分领域投资选址逻辑<br />助力政府园区从传统招商向智能数字化招商转型
      </div>
      <div class="img_tit hidden-sm-and-up">
        云招商<br />生物医药细分领域企业选址专家
      </div>
      <div class="img_btn" @click="handleToDemo">立即体验</div>
    </div>

    <div class="two_level">
      <div class="two_level_wrap">
        <div class="two_left">
          <div class="tit">2020，政府和园区招商面临新挑战！</div>
          <div class="left_list" v-for="item in twoLevelArr" :key="item.id">
            <div class="list_item">
              <span>{{ item.id }}</span
              >{{ item.txt }}
            </div>
          </div>
        </div>
        <div class="two_right">
          <img src="@/assets/img/0146137d.png" alt="" />
        </div>
      </div>
    </div>

    <div class="sky_title_wrap">
      <div class="sky_inner">
        <div class="inner_left">
          <img src="../../assets/img/tupianright.png" alt="" />
        </div>
        <div class="inner_center">
          <div class="sky_title">云招商</div>
          <div class="sky_desc">
            创新和优化招商引资方式，线上招商一站式解决方案
          </div>
        </div>
        <div class="inner_right">
          <img src="../../assets/img/tupianleft.png" alt="" />
        </div>
      </div>
    </div>

    <div class="sky_card">
      <SkyCard :skyList="skyList" />
    </div>

    <div class="three_level">
      <div class="three_content">
        <p>45+生物医药细分领域的招商预测模型</p>
        <p>快速形成专属于您园区的精准画像</p>
        <p>输出动态更新的目标客户名单</p>
        <el-button plain round class="three_btn" @click="handleToDemo">申请免费体验</el-button>
      </div>
    </div>

    <div class="sky_title_wrap">
      <div class="sky_inner">
        <div class="inner_left">
          <img src="../../assets/img/tupianright.png" alt="" />
        </div>
        <div class="inner_center">
          <div class="sky_title">药选址</div>
          <div class="sky_desc">
            有效触达超过2万家优质生物医药企业,为园区提供精准线索，提升园区品牌宣传
          </div>
        </div>
        <div class="inner_right">
          <img src="../../assets/img/tupianleft.png" alt="" />
        </div>
      </div>
    </div>

    <div class="four_level">
      <div class="four_img hidden-xs-only">
        <img src="@/assets/logo.jpg" alt="" />
      </div>
      <div class="four_right">
        <div class="four_tit">药选址平台</div>
        <div class="four_zhengfangxing">
          <img src="@/assets/img/zhengfangxing.png" alt="" />
        </div>
        <div class="four_desc">
          提供精准、真实、有效的企业选址线索和项目信息，实现需求方和资源方的高效匹配。完善园区多维度信息，搭建在线数字化营销平台。线上对接意向企业。
        </div>
        <el-button class="four_btn" @click="handleToDemo">进入药选址</el-button>
      </div>
    </div>

    <div class="four_level_mobile hidden-sm-and-up">
      <img src="../../assets/img/12d29ab7b6.png" alt="" />
      <el-button class="four_mobile_btn">申请免费体验</el-button>
    </div>

    <div class="sky_shows_wrap">
      <div class="sky_title_wrap">
        <div class="sky_inner">
          <div class="inner_left">
            <img src="../../assets/img/tupianright.png" alt="" />
          </div>
          <div class="inner_center">
            <div class="sky_title">客户见证</div>
            <div class="sky_desc">150+政府和生物医药园区见证云逸品质服务</div>
          </div>
          <div class="inner_right">
            <img src="../../assets/img/tupianleft.png" alt="" />
          </div>
        </div>
      </div>
      <div class="sky_shows_imgs">
        <img
          src="../../assets/img/witness47b5311.png"
          alt=""
          class="hidden-xs-only"
        />
        <img src="../../assets/img/shutu.png" alt="" class="hidden-sm-and-up" />
      </div>
    </div>

    <CallMe />
    <MobileCallme />
  </div>
</template>

<script>
import SkyCard from './SkyCard.vue'
import CallMe from '@/components/callme/index'
import MobileCallme from '@/components/callme/MobileCallme.vue'
export default {
  data() {
    return {
      twoLevelArr: [
        {
          id: '01',
          txt: '疫情时期，如何推动招商工作快速复工复产？',
        },
        {
          id: '02',
          txt: '产业新基建浪潮下，如何加速产业发展，提升专业服务能力?',
        },
        {
          id: '03',
          txt: '如何实现园区价值与优势的有效推介，扩大园区品牌影响？',
        },
        {
          id: '04',
          txt: '如何洞察外部环境与行业趋势，提升专业性，促成谈判落地?',
        },
      ],
      skyList: [
        {
          tit: '线上招商会',
        },
        {
          tit: '智能招商SAAS服务',
        },
        {
          tit: '数字孪生园区',
        },
      ],
    }
  },
  methods:{
    handleToDemo(){
      this.$router.push('/demo')
    }
  },
  components: {
    SkyCard,
    CallMe,
    MobileCallme,
  },
}
</script>

<style lang="scss" scoped>
.sky_wrap {
  .sky_img {
    width: 100%;
    height: 600px;
    @media screen and (max-width: 768px) {
      height: 50vw;
    }
    background: url('../../assets/img/banner22.png') 0 0 no-repeat;
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
  .two_level {
    width: 100%;
    background: #f4f9fc;
    padding: 50px 0;
    padding-top: 100px;
    .two_level_wrap {
      width: 70%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 90%;
      }
      .two_left {
        flex: 1;
        display: flex;
        flex-direction: column;
        .tit {
          color: #2091d3;
          font-size: 30px;
          font-weight: bold;
          @media screen and (max-width: 768px) {
            font-size: 1.2rem;
          }
        }
        .left_list {
          margin-top: 30px;
          &:nth-child(2) {
            margin-top: 50px;
          }
          .list_item {
            color: #666;
            width: 100%;
            height: 70px;
            display: flex;
            align-items: center;
            background: url('../../assets/img/bg123.png') -20px 0 no-repeat;
            background-size: 100% 100%;
            font-size: 18px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            @media screen and (max-width: 768px) {
              font-size: 0.8rem;
              height: 70px;
              white-space: pre-wrap;
              padding: 0 10px;
            }
            span {
              color: #2091d3;
              font-size: 24px;
              padding: 0 10px;
              @media screen and (max-width: 768px) {
                font-size: 1.2rem;
              }
            }
          }
        }
      }
      .two_right {
        flex: 1;
        margin-left: 60px;
        display: flex;
        align-items: center;
        img {
          width: 90%;
        }
      }
    }
  }
  .sky_title_wrap {
    width: 100%;
    margin-top: 50px;
    @media screen and (max-width: 768px) {
      margin-top: 30px;
    }
    .sky_inner {
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
          flex: 2.2;
        }
        .sky_title {
          font-size: 40px;
          font-weight: bold;
          @media screen and (max-width: 768px) {
            font-size: 1rem;
          }
        }
        .sky_desc {
          font-size: 16px;
          color: #787878;
          margin-top: 10px;
          @media screen and (max-width: 768px) {
            margin-top: 10px;
            font-size: 14px;
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
  .sky_card {
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
  .three_level {
    width: 100%;
    height: 540px;
    background: url('../../assets/img/solition_level.83f545d.jpg') 0 0 no-repeat;
    background-size: cover;
    position: relative;
    .three_content {
      position: absolute;
      left: 10%;
      top: 50%;
      transform: translateY(-50%);
      color: #fff;
      p {
        font-size: 20px;
        font-weight: bold;
        @media screen and (max-width: 768px) {
          font-size: 14px;
        }
      }
      .three_btn {
        background: transparent;
        color: #fff;
        &:hover {
          color: #2091d3;
        }
      }
    }
  }
  .four_level {
    width: 70%;
    margin: 50px auto;
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
      width: 90%;
      padding: 30px 0 50px 0 ;
    }
    .four_img {
      width: 60%;
      img {
        width: 80%;
      }
    }
    .four_right {
      width: 40%;
      height: 400px;
      padding: 80px 30px;
      margin-left: -10px;
      background: #f4f9fc;
      @media screen and (max-width: 768px) {
        width: 100%;
        background: #fff;
      }
      .four_tit {
        font-size: 20px;
        font-weight: bold;
        @media screen and (max-width: 768px) {
          font-size: 1.4rem;
        }
      }
      .four_zhengfangxing {
        width: 10%;
        padding: 10px 0;
        img {
          width: 100%;
        }
      }
      .four_desc {
        color: #5b6e74;
        font-size: 15px;
        margin-top: 20px;
        line-height: 22PX;
        @media screen and (max-width: 768px) {
          font-size: 0.8rem;
        }
      }
      .four_btn {
        background: #feb65c;
        color: #fff;
        border-radius: 20px;
        margin-top: 50px;
        @media screen and (max-width: 768px) {
          width: 90px;
          height: 35px;
          border-radius: 20px;
          margin-top: 20px;
          font-size: 14px;
        }
      }
    }
  }
  .four_level_mobile{
    width: 100%;
    position: relative;
    @media screen and (max-width: 768px) {
      margin-top: 100px;
    }
    .four_mobile_btn{
      border-radius: 20PX;
      width: 120PX;
      height: 40PX;
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translateX(-50%);
      color: #fff;
      background:transparent;
      @media screen and (max-width: 768px) {
        font-size: 14px;
      }
    }
    img{
      width: 100%;
    }
  }
  .sky_shows_wrap {
    width: 100%;
    background: url('../../assets/img/witness-bgc369221.png') 0 0 no-repeat;
    background-size: cover;
    padding: 10px 0 50px 0;
    margin-top: 100px;
    box-sizing: border-box;
    .sky_shows_imgs{
      display: flex;
      justify-content: center;
      margin-top: 50px;
      img{
        @media screen and (max-width: 768px) {
          width: 90%;
          margin: 10px;
        }
      }
    }
  }
}
</style>