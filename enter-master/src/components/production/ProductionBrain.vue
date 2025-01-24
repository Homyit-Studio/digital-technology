<template>
  <div class="production_wrap">
    <div class="production_img">
      <div class="img_tit">产品大脑</div>
      <div class="img_desc">数字经济系统的核心，赋能政府侧、服务市场侧</div>
      <router-link class="img_btn" to="/demo">立即体验</router-link>
    </div>
    <div class="production_title_wrap">
      <div class="production_inner">
        <div class="inner_left">
          <img src="../../assets/img/tupianright.png" alt="" />
        </div>
        <div class="inner_center">
          <div class="production_title">什么是产业大脑</div>
          <div class="production_desc">一脑治产业，两端同赋能</div>
        </div>
        <div class="inner_right">
          <img src="../../assets/img/tupianleft.png" alt="" />
        </div>
      </div>
    </div>
    <div class="production_box">
      <div class="production_item">
        <div class="item_left">
          <img src="../../assets/img/11feef877.png" alt="" />
        </div>
        <div class="item_right">
          <div class="right_tit">政府侧</div>
          <div class="right_desc">
            围绕产业发展全生命周期，基于产业经济发展科学规划，实现产业选择、产业治理、产业服务全流程数字化、智能化、精准化
          </div>
        </div>
      </div>
      <div class="production_item">
        <div class="item_left">
          <img src="../../assets/img/12.74947a2 (1).png" alt="" />
        </div>
        <div class="item_right">
          <div class="right_tit">市场侧</div>
          <div class="right_desc">
            基于数字化实现资源要素和企业服务需求的精准匹配，是激发企业活力、增添企业动力、加速经济高质量发展、实现高效协同的平台
          </div>
        </div>
      </div>
    </div>
    <div class="production_title_wrap">
      <div class="production_inner">
        <div class="inner_left">
          <img src="../../assets/img/tupianright.png" alt="" />
        </div>
        <div class="inner_center" style="width:40%;">
          <div class="production_title">产业大脑核心场景</div>
          <div class="production_desc">
            数智赋能、高效协同，助力实现产业高质量发展
          </div>
        </div>
        <div class="inner_right">
          <img src="../../assets/img/tupianleft.png" alt="" />
        </div>
      </div>
    </div>
    <p>政府侧场景</p>
    <div class="production_core_scene"></div>
    <div class="production_card">
      <ProCard :procardList="procardList" />
    </div>
    <p>市场侧场景</p>
    <div class="production_card">
      <ProCard2 :procardList="procardList2" />
    </div>
    <div class="production_title_wrap">
      <div class="production_inner">
        <div class="inner_left">
          <img src="../../assets/img/tupianright.png" alt="" />
        </div>
        <div class="inner_center" style="width: 40%;">
          <div class="production_title">四大优势，引领数字化改革</div>
        </div>
        <div class="inner_right">
          <img src="../../assets/img/tupianleft.png" alt="" />
        </div>
      </div>
    </div>
    <div class="advantage_out_wrap">
      <AdvantageCard />
    </div>
    <div class="production_title_wrap">
      <div class="production_inner">
        <div class="inner_left">
          <img src="../../assets/img/tupianright.png" alt="" />
        </div>
        <div class="inner_center" style="width: 60%">
          <div class="production_title">
            全面推进产业数字化改革，云逸产业大脑备受青睐
          </div>
        </div>
        <div class="inner_right">
          <img src="../../assets/img/tupianleft.png" alt="" />
        </div>
      </div>
    </div>
    <imageScroll />
    <div class="product_shows_wrap">
      <div class="production_title_wrap">
        <div class="production_inner">
          <div class="inner_left">
            <img src="../../assets/img/tupianright.png" alt="" />
          </div>
          <div class="inner_center">
            <div class="production_title">客户见证</div>
            <div class="production_desc">
              云逸产业大脑引领数据驱动产业发展新未来
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
            v-for="(item, index) in procardList3"
            :key="index"
          >
            <h2 class="hidden-xs-only">{{ item.tit }}</h2>
            <div class="bottom_img">
              <img :src="item.src" alt="" />
              <div class="img_desc">{{ item.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CallMe />
    <MobileCallme />
  </div>
</template>

<script>
import ProCard from './ProCard.vue'
import ProCard2 from './ProCard2.vue'
import AdvantageCard from './AdvantageCard.vue'
import imageScroll from './imageScroll.vue'
import CallMe from '@/components/callme/index'
import MobileCallme from '@/components/callme/MobileCallme.vue'
export default {
  data() {
    return {
      procardList: [
        {
          tit: '产业链数据中心',
        },
        {
          tit: '产业链监测',
        },
        {
          tit: '产业评价',
        },
        {
          tit: '产业地图',
        },
        {
          tit: '智能招商系统及服务',
        },
      ],
      procardList2: [
        {
          tit: '云逸选址',
        },
        {
          tit: '产业链监测',
        },
      ],
      procardList3: [
        {
          tit: '北京高精尖产业监测大数据平台',
          desc: '重点关注5+1+X高精尖产业',
          src: require('@/assets/img/home/61.png'),
        },
        {
          tit: '大兴产业数字化平台',
          desc: '聚焦产业分析监测和企业集聚培育',
          src: require('@/assets/img/62 (1).png'),
        },
        {
          tit: '中发展产业数字化平台',
          desc: '聚焦产业治理和企业服务',
          src: require('@/assets/img/63 (1).png'),
        },
        {
          tit: '安徽省十大特色产业地图',
          desc: '实现特色产业、园区空间和企业投资选址需求的精准匹配',
          src: require('@/assets/img/64 (1).png'),
        },
        {
          tit: '浙江省生物医药产业大脑',
          desc: '为生物医药企业提供全生命周期的精准服务',
          src: require('@/assets/img/66.png'),
        },
        {
          tit: '杭州市产业大脑',
          desc: '打造产业雷达和招商引擎',
          src: require('@/assets/img/65 (1).png'),
        },
      ],
    }
  },
  components: {
    ProCard,
    ProCard2,
    AdvantageCard,
    imageScroll,
    CallMe,
    MobileCallme,
  },
}
</script>

<style lang="scss" scoped>
.production_wrap {
  width: 100%;
  .production_img {
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
      }
    }
    .img_desc {
      font-size: 32px;
      margin-top: 20px;
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
  .production_title_wrap {
    width: 100%;
    margin-top: 50px;
    @media screen and (max-width: 768px) {
      margin-top: 30px;
    }
    .production_inner {
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
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 50px;
        @media screen and (max-width: 768px) {
          flex: 2.2;
        }
        .production_title {
          font-size: 40px;
          font-weight: bold;
          @media screen and (max-width: 768px) {
            font-size: 1rem;
          }
        }
        .production_desc {
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
  .production_box {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 100px;
    @media screen and (max-width: 768px) {
      justify-content: space-around;
      flex-wrap: wrap;
    }
    .production_item {
      width: 30%;
      display: flex;
      margin-left: 80px;
      @media screen and (max-width: 768px) {
        width: 90%;
        margin-left: 0;
        margin-top: 20px;
      }
      .item_left {
        width: 50%;
        padding: 0 30px;
        img {
          width: 100%;
        }
      }
      .item_right {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        @media screen and (max-width: 768px) {
          margin-left: 10px;
        }
        .right_tit {
          font-weight: bold;
          font-size: 26px;
          @media screen and (max-width: 768px) {
            font-size: 1rem;
          }
        }
        .right_desc {
          color: #717171;
          font-size: 16px;
          @media screen and (max-width: 768px) {
            font-size: 0.8rem;
            line-height: 18px;
          }
        }
      }
    }
  }
  p {
    text-align: center;
    color: #3b3b3b;
    font-weight: bold;
    font-size: 20px;
    line-height: 100px;
    @media screen and (max-width: 768px) {
      font-size: 0.9rem;
      padding: 15px 0;
    }
  }
  .production_card {
    display: flex;
    justify-content: center;
  }
  .advantage_out_wrap {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .carousel_pro {
    width: 60%;
    margin: 60px auto;
    .carousel_pro_item {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
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
        }
        .bottom_img_item {
          width: 30%;
          display: flex;
          flex-wrap: wrap;
          margin-top: 20px;
          margin: 20px;
          h2 {
            color: #3b3b3b;
          }
          @media screen and (max-width: 768px) {
            width: 45%;
          }
          .bottom_img {
            width: 100%;
            position: relative;
            img {
              width: 100%;
            }

            .img_desc {
              position: absolute;
              bottom: 20px;
              width: 100%;
              text-align: center;
              color: #fff;
              font-size: 18px;
              @media screen and (max-width: 768px) {
                font-weight: bold;
                bottom: 8px;
                font-size: 13px;
              }
            }
          }
        }
      }
    }
  }
}
</style>