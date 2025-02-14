<template>
  <div class="production_wrap">
    <div class="production_img">
      <div class="img_tit">数字文保引擎</div>
      <div class="img_desc">数字遗产新质生产力，赋能文物保护，服务历史传承</div>
    </div>

    <!-- 子午产品优势 -->
    <div class="func_wrap">
      <div class="func_wrap_inner">
        <div class="func_tit">
          <div class="consult_title_wrap">
            <div class="consult_inner">

              <div class="inner_left">
                <img src="../../assets/img/tupianright.png" alt="" />
              </div>

              <div class="inner_center" style="width: 80%">
                <div class="consult_title">子午产品独特优势</div>
                <div class="consult_desc"></div>
              </div>

              <div class="inner_right">
                <img src="../../assets/img/tupianleft.png" alt="" />
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="double_card_wrap">
        <el-row class="double_card" type="flex">

          <el-col :span="7" class="double_card_item animate__animated animate__flipInX">
            <div class="double_card_bg">多学科融合的专业团队</div>
            <p>多学科背景团队，6位博士、16位硕士，理论与实践结合，创新解决文物数字化难题，推动技术进步。</p>
          </el-col>

          <el-col :span="7" class="double_card_item animate__animated animate__flipInX">
            <div class="double_card_bg">全流程数字化解决方案</div>
            <p>提供从数据采集、处理到展示的全流程服务，构建数字化平台，支持文物存储、管理及多领域应用。</p>
          </el-col>

          <el-col :span="7" class="double_card_item animate__animated animate__flipInX">
            <div class="double_card_bg">创新技术与文化传承结合</div>
            <p>运用VR等技术，让文物“活起来”，提供沉浸式体验，助力学术研究、公众教育与文化创意产业发展。</p>
          </el-col>

        </el-row>
      </div>
    </div>

    <!-- <div class="func_wrap_mobile hidden-sm-and-up">
      <img src="@/assets/img/ys.png" alt="">
    </div> -->

    <div class="product_shows_wrap">
      <div class="production_title_wrap">
        <div class="production_inner">
          <div class="inner_left">
            <img src="../../assets/img/tupianright.png" alt="" />
          </div>
          <div class="inner_center">
            <div class="production_title">公司成果</div>
            <div class="production_desc">
              3D建模，成果展示
            </div>
          </div>
          <div class="inner_right">
            <img src="../../assets/img/tupianleft.png" alt="" />
          </div>
        </div>
      </div>
      <div class="core_wrap">
        <el-row class="core_options" type="flex" justify="space-between">
          <el-col class="core_items hidden-xs-only" v-for="(item, index) in coresList" :key="index"
            :class="item.isActive ? 'is_active' : ''" @click.native="changeCurrentIndex(index)">{{ item.tit }}</el-col>
          <el-col class="core_items2 hidden-sm-and-up" v-for="(item, index) in coresList" :key="item.tit"
            :class="item.isActive ? 'is_active' : ''" @click.native="changeCurrentIndex(index)">{{ item.tit }}</el-col>
        </el-row>
        <component :is="currentComponent[currentIndex]"></component>
      </div>
    </div>
    <CallMe />
    <MobileCallme />
  </div>
</template>


<script>
import CallMe from '@/components/callme/index'
import MobileCallme from '@/components/callme/MobileCallme.vue'
import CoreItemOne from '@/components/core_competence/CoreItemOne.vue'
import CoreItemTwo from '@/components/core_competence/CoreItemTwo.vue'
import CoreItemThree from '@/components/core_competence/CoreItemThree.vue'
import CoreItemFour from '@/components/core_competence/CoreItemFour.vue'

export default {
  data() {
    return {
      coresList: [
        {
          tit: '文物数字化',
          isActive: true,
        },
        {
          tit: '全景漫游',
          isActive: false,
        },
        {
          tit: '传统村落数字博物馆',
          isActive: false,
        },
        {
          tit: '数字信息平台',
          isActive: false,
        },
      ],
      currentIndex: 0,
      currentComponent: [CoreItemOne, CoreItemTwo, CoreItemThree, CoreItemFour]
    }
  },
  components: {
    CallMe,
    MobileCallme,
  },
  methods: {
    openModal(image) {
      this.currentImage = image;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    changeCurrentIndex(index) {
      this.currentIndex = index
      this.coresList.map((v, i) => {
        i === index ? (v.isActive = true) : (v.isActive = false)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.core_wrap {
  width: 100%;
  margin-top: 50px;
  text-align: center;

  .core_title {
    color: #203040;
    font-size: 40px;
    font-weight: bold;
    padding: 30px 0;

    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  .core_options {
    width: 70%;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
      width: 90%;
    }

    .core_items {
      width: 24%;
      height: 70px;
      border: solid 1px #04cac7;
      font-size: 30px;
      line-height: 70px;
      user-select: none;
      cursor: pointer;
      margin-bottom: 40px;
    }

    .core_items2 {
      width: 22%;
      height: 180px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: solid 1px #04cac7;
      padding: 5PX;
      font-size: 0.7rem;
    }

    .is_active {
      color: #fff;
      font-weight: bold;
      background: linear-gradient(134deg, #0649b8 1%, #0a7fd7 41%, #03d2c5 99%);
      box-shadow: 0 0.5rem 1.5rem 0 rgb(0 135 168 / 50%);
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
  padding-bottom: 100px;
  // background: url('../../assets/img/bg_0.png');
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
    // max-width: 1450px;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
      width: 100%;
    }

    .double_card {
      justify-content: space-between;
      margin-top: 50px;

      @media screen and (max-width: 768px) {
        flex-wrap: wrap;
      }

      .double_card_item {
        height: 340px;
        background: #f4f9fc;
        padding: 30px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;

        &:nth-child(1) {
          background-image: url('../../assets/img/ys1.png');
          background-position: 90% 10%;
          background-repeat: no-repeat;
          background-size: 20%;
        }

        &:nth-child(2) {
          background-image: url('../../assets/img/ys2.png');
          background-position: 90% 10%;
          background-repeat: no-repeat;
          background-size: 20%;
        }

        &:nth-child(3) {
          background-image: url('../../assets/img/ys3.png');
          background-position: 90% 10%;
          background-repeat: no-repeat;
          background-size: 20%;
        }

        box-shadow: 10px 10px 20px rgba(0, 0, 0, .1);



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

        @media screen and (max-width: 768px) {
          height: 100px;
          width: 30%;
          padding: 0px;

          .double_card_bg {
            font-size: 9px;
            color: #000;
            font-weight: bold;
          }

          p {
            line-height: 10PX;
            font-size: 9px;
            // margin-top: 30px;
          }

          // &:nth-child(n + 3) {
          //   margin-top: 20px;
          // }
        }
      }


    }
  }
}

// .func_wrap_mobile {
//   width: 100%;

//   img {
//     width: 100%;
//   }
// }

.production_wrap {
  width: 100%;

  .production_img {
    width: 100%;
    height: 600px;

    @media screen and (max-width: 768px) {
      height: 50vw;
    }

    background: url('../../assets/img/banner22.png') 0 0 no-repeat;
    background-size: cover;
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
  }

  .production_title_wrap {
    width: 100%;
    // margin-top: 50px;
    margin-bottom: 50px;

    @media screen and (max-width: 768px) {
      // margin-top: 30px;
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

  .product_shows_wrap {
    width: 100%;
    background: url('../../assets/img/witness-bgc369221.png') 0 0 no-repeat;
    background-size: cover;
    padding: 10px 0 50px 0;
    // margin-top: 100px;
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
          width: 48%;
          display: flex;
          flex-wrap: wrap;
          margin-top: 20px;
          margin: 10px;

          @media screen and (max-width: 768px) {
            width: 45%;
          }

          .bottom_img {
            width: 100%;
            height: 300px;
            position: relative;
            overflow: hidden;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;

            &:hover {
              transform: scale(1.02);
              box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
            }

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.3s ease;
            }

            .img_desc {
              position: absolute;
              bottom: 0;
              width: 100%;
              text-align: center;
              color: #fff;
              font-size: 18px;
              background: rgba(0, 0, 0, 0.6);
              padding: 10px;
              font-weight: bold;
              transition: transform 0.3s ease;
            }
          }
        }
      }
    }
  }
}
</style>
