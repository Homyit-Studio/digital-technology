<template>
  <div class="realize_wrap">
    <div class="realize_img">
      <div class="img_tit">匠心筑史，科技维新</div>
    </div>
    <!-- <div class="realize_nav_wrap">
      <el-row class="realize_nav" type="flex" justify="center">
        <el-col v-for="(tab, index) in tabList" :key="index" class="realize_item"
          :class="tabSelectIndex === index ? 'active' : ''" :span="2" :xs="6" @click.native="changeTabIndex(index)">
          <div class="nav_top">{{ tab.tit }}{{ index }}</div>
          <div class="nav_bottom" :style="tabSelectIndex === index ? '' : 'background:#fff'"></div>
        </el-col>
      </el-row>
    </div> -->
    <div class="realize_nav_wrap">
      <el-row class="realize_nav" type="flex" justify="center">
        <el-col :key="index" class="realize_item" :class="active" :span="2" :xs="6">
          <div class="nav_top">{{ tabList[0].tit }}</div>
          <div class="nav_bottom"></div>
        </el-col>
      </el-row>
    </div>
    <!-- <div class="show_box_index" v-if="tabSelectIndex === 0">
      <div class="product_shows_wrap">
        <div class="production_title_wrap">
          <div class="production_inner">
            <div class="inner_left">
              <img src="../../assets/img/tupianright.png" alt="" />
            </div>
            <div class="inner_center">
              <div class="production_title">公司介绍</div>
            </div>
            <div class="inner_right">
              <img src="../../assets/img/tupianleft.png" alt="" />
            </div>
          </div>
        </div>
        <div class="table_wrap hidden-xs-only">
          <el-form label-position="left" label-width="70px" class="table_form">
            <el-form-item label="使命：" class="table_form_item">
              匠心筑史，科技维新
            </el-form-item>
            <el-form-item label="愿景：" class="table_form_item">
              我们深信，每一件文物都是历史的见证者，承载着丰富的文化信息和民族记忆。因此，我们致力于运用前沿的三维扫描、建模、修复技术，精准捕捉并复原文物的每一寸细节，让历史的痕迹在数字世界中得以永恒留存。结合VR大空间技术，让文物在虚拟世界中“活起来”。通过构建高精度的数字模型，我们不仅实现了文物的数字化存档，更为学术研究、公众教育及创意产业提供了丰富的资源。
            </el-form-item>
            <el-form-item label="价值观：" class="table_form_item">
              尊重历史，创新未来。
              在这里，每一位成员都是文化的守护者与科技的探索者，我们携手并进，在尊重与创新的双重驱动下，共同书写文物保护与传承的新篇章。
            </el-form-item>
          </el-form>
        </div>
        <div class="table_wrap_mobile hidden-sm-and-up">
          <p>
            为实现文物数字化保护、修复以及活化，我们公司秉承“尊重历史，创新未来”的价值观，以“匠心筑史，科技维新”为核心企业文化。通过构建高精度的数字模型，我们实现了文物的数字化存档，为学术研究、公众教育及创意产业提供了丰富的资源。
          </p>
          <div class="table_form">
            <div class="table_form_item">
              <span>使命:</span>匠心筑史，科技维新
            </div>
            <div class="table_form_item">
              <span>愿景:</span>
              我们深信，每一件文物都是历史的见证者，承载着丰富的文化信息和民族记忆。因此，我们致力于运用前沿的三维扫描、建模、修复技术，精准捕捉并复原文物的每一寸细节，让历史的痕迹在数字世界中得以永恒留存。结合VR大空间技术，让文物在虚拟世界中“活起来”。
            </div>
            <div class="table_form_item">
              <span>价值观:</span>
              在这里，每一位成员都是文化的守护者与科技的探索者，我们携手并进，在尊重与创新的双重驱动下，共同书写文物保护与传承的新篇章。
            </div>
          </div>
        </div>
      </div>
      <div class="production_title_wrap">
        <div class="production_inner">
          <div class="inner_left">
            <img src="../../assets/img/tupianright.png" alt="" />
          </div>
          <div class="inner_center">
            <div class="production_title">我们的优势</div>
          </div>
          <div class="inner_right">
            <img src="../../assets/img/tupianleft.png" alt="" />
          </div>
        </div>
      </div>
      <div class="advantage_out_wrap">
        <el-row class="advantage_wrap">
          <el-col class="advantage_item" v-for="(item, index) in advantageList" :key="index" :span="7" :xs="11">
            <div class="item_top">
              <div class="icon hidden-xs-only"><i :class="item.icon"></i></div>
              <div class="tit">{{ item.title }}</div>
            </div>
            <ul class="item_desc" v-for="(desc, index2) in item.desc" :key="index2">
              <li>{{ desc }}</li>
            </ul>
          </el-col>
        </el-row>
      </div>
      <div class="product_shows_wrap1">
        <div class="production_title_wrap">
          <div class="production_inner">
            <div class="inner_left">
              <img src="../../assets/img/tupianright.png" alt="" />
            </div>
            <div class="inner_center">
              <div class="production_title">我们的合作伙伴</div>
            </div>
            <div class="inner_right">
              <img src="../../assets/img/tupianleft.png" alt="" />
            </div>
          </div>
        </div>
        <div class="card_fan_list">
          <el-row class="card_fan_wrap" type="flex" justify="space-between">
            <el-col class="card_fan_item" :span="11" v-for="(item, index) in cardList" :key="index">
              <div class="card_right">
                <h1>{{ item.companyName }}</h1>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div> -->
    <!-- v-if="tabSelectIndex === 1" -->
    <div class="show_box_index">
      <div class="four_wrap">
        <el-row type="flex" justify="center" class="out_card" :gutter="10">
          <el-col :span="7" v-for="(item, index) in contactMsg" :key="index" class="card_item">
            <el-card :body-style="{ padding: '0px' }" class="card_content">
              <div style="padding: 14px">
                <img :src="item.icon" class="image" />
                <div style="margin-top: 20px; font-size: 1rem; font-weight: bold">
                  {{ item.tit }}
                </div>
                <div class="bottom clearfix">
                  <el-button type="text" class="button">{{
                    item.desc
                  }}</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="real_wrap">
        <ReailzeCard :reailzeList="reailzeList" class="hidden-sm-and-up" />
      </div>
    </div>
    <CallMe />
    <MobileCallme></MobileCallme>
  </div>
</template>

<script>
import http from '@/utils/http.js'
//import PersonCard from './PersonCard.vue'
import CallMe from '@/components/callme/index'
import MobileCallme from '@/components/callme/MobileCallme.vue'
import ReailzeCard from './ReailzeCard.vue'
// import TimeLineYunYi from './TimeLineYunYi.vue'
// import TimeLineMobile from './TimeLineMobile.vue'
export default {
  data() {
    return {
      tabList: [
        // {
        //   tit: '子午数智介绍',
        //   name: '1',
        // },
        {
          tit: '联系我们',
          name: '4',
        },
      ],
      tabSelectIndex: 0,
      advantageList: [
        {
          icon: '',
          title: '团队能力',
          desc: ['高学历人才丰富', '多学科交叉融合', '极具创新精神'],
        },
        {
          icon: '',
          title: '硬件优势',
          desc: [
            '全景相机 | 专业测绘无人机',
            '机载激光扫描仪 | 地面站激光扫描仪 | 手持激光扫描仪'
          ],
        },
        {
          icon: '',
          title: '技术优势',
          desc: [
            '多平台跨模态数据融合技术',
            '基于NeRF和3D GS的三维重建技术',
            '丰富的数字化平台构建技术'
          ],
        },
      ],

      contactMsg: [
        {
          tit: '市场合作',
          desc: 'jxzwshuzi@163.com',
          icon: require('../../assets/img/61.png'),
        },
        {
          tit: '销售咨询',
          desc: '189-7914-1505',
          icon: require('../../assets/img/60.png'),
        },
        {
          tit: '简历投递',
          desc: 'jxzwshuzi@163.com',
          icon: require('../../assets/img/61.png'),
        },
      ],
      cardList: [],
    }
  },
  methods: {
    changeTabIndex(index) {
      this.tabSelectIndex = index
    },
  },
  components: {
    CallMe,
    MobileCallme,
    ReailzeCard,
  },
  created() {
    this.tabSelectIndex = this.$route.path.substr(this.$route.path.length - 1) * 1 - 1
  },
  watch: {
    $route() {
      this.tabSelectIndex =
        this.$route.path.substr(this.$route.path.length - 1) * 1 - 1
    },
  },
  mounted() {
    // 发起请求获取合作伙伴数据
    http.get('/collaboratingcompany/getallcollaboratingcompanies')
      .then(response => {
        if (response.data.code === 201) {
          this.cardList = response.data.data;
        } else {
          console.error('获取数据失败', response.data.desc);
        }
      })
      .catch(error => {
        console.error('请求失败', error);
      });
  }
}
</script>

<style lang="scss" scoped>
.realize_wrap {
  .realize_img {
    width: 100%;
    height: 600px;

    @media screen and (max-width: 768px) {
      height: 50vw;
    }

    background: url('../../assets/Z_img/bg_gugong3.png') 0 0 no-repeat;
    background-size: 100% 90%;
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

  .realize_nav_wrap {
    width: 100%;
    height: 60px;

    @media screen and (max-width: 768px) {
      height: 50px;
    }

    .realize_nav {
      height: 100%;
      display: flex;
      align-items: center;

      .active {
        font-weight: bold;
        color: #000;
      }

      .realize_item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        .nav_top {
          font-size: 18px;
          font-weight: 600;
          color: #000;

          @media screen and (max-width: 768px) {
            font-size: 14px;
          }
        }

        .nav_bottom {
          width: 30%;
          height: 4px;
          margin-top: 10px;
          background: #2091d3;
        }
      }
    }
  }

  // .product_shows_wrap {
  //   width: 100%;
  //   background: url('../../assets/img/introBg.40f79db.png') 0 0 no-repeat;
  //   background-size: cover;
  //   padding: 10px 0 50px 0;
  //   margin-top: -7px;
  //   box-sizing: border-box;
  //   height: 700px;
  //   position: relative;

  //   @media screen and (max-width: 768px) {
  //     background: #f4f9fc;
  //     height: auto;
  //   }

  //   .table_wrap {
  //     position: absolute;
  //     top: 23%;
  //     left: 20%;
  //     width: 500px;

  //     .table_form {
  //       .table_form_item {
  //         font-weight: bold;
  //       }
  //     }
  //   }

  //   .table_wrap_mobile {
  //     padding: 1rem;

  //     p {
  //       font-size: 0.9rem;
  //     }

  //     .table_form {
  //       .table_form_item {
  //         font-weight: bold;
  //         margin-top: 1rem;
  //         font-size: 0.85rem;

  //         span {
  //           color: #000;
  //           font-size: 0.9rem;
  //           padding-right: 30px;
  //         }
  //       }
  //     }
  //   }
  // }

  // .advantage_out_wrap {
  //   width: 100%;
  //   display: flex;
  //   justify-content: center;

  //   .advantage_wrap {
  //     width: 70%;
  //     display: flex;
  //     margin-top: 70px;
  //     justify-content: center;
  //     flex-wrap: wrap;

  //     @media screen and (max-width: 768px) {
  //       width: 100%;
  //     }

  //     .advantage_item {
  //       height: auto;
  //       padding: 30px 20px 60px 20px;
  //       margin-right: 10px;

  //       &:nth-child(4n+1) {
  //         background: url('../../assets/img/newEdition/31.png') 90% 10% no-repeat;
  //         background-size: 20%;
  //       }

  //       &:nth-child(4n+2) {
  //         background: url('../../assets/img/newEdition/32.png') 90% 10% no-repeat;
  //         background-size: 20%;
  //       }


  //       // &:nth-child(3) {
  //       //   background: url('../../assets/img/newEdition/32.png') 90% 10% no-repeat;
  //       //   background-size: 20%;
  //       // }

  //       &:nth-child(4n+3) {
  //         background: url('../../assets/img/newEdition/34.png') 90% 10% no-repeat;
  //         background-size: 20%;
  //       }

  //       &:nth-child(4n) {
  //         background: url('../../assets/img/newEdition/35.png') 90% 10% no-repeat;
  //         background-size: 20%;
  //       }

  //       // &:nth-child(6) {
  //       //   background: url('../../assets/img/newEdition/35.png') 90% 10% no-repeat;
  //       //   background-size: 20%;
  //       // }

  //       margin: 15px;
  //       box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.1);

  //       @media screen and (max-width: 768px) {
  //         margin: 0;
  //         padding: 0 15px;
  //         margin-top: 3px;
  //         height: 140px;
  //         display: flex;
  //         justify-content: center;
  //         flex-direction: column;
  //         height: 200px;
  //       }

  //       .item_top {
  //         display: flex;
  //         align-items: center;

  //         @media screen and (max-width: 768px) {
  //           flex-direction: column;
  //           justify-content: center;
  //           align-items: center;
  //           text-align: center;
  //         }

  //         .icon {
  //           i {
  //             color: #2091d3;
  //             font-size: 26px;
  //             padding-right: 10px;

  //             @media screen and (max-width: 768px) {
  //               font-size: 2rem;
  //               margin-bottom: 10px;
  //             }
  //           }
  //         }

  //         .tit {
  //           width: 100%;
  //           color: #1c1c1c;
  //           font-size: 28px;
  //           font-weight: bold;

  //           @media screen and (max-width: 768px) {
  //             font-size: 1rem;
  //             text-align: left;
  //           }
  //         }
  //       }

  //       .item_desc {
  //         font-size: 20px;
  //         line-height: 20px;
  //         margin: 0;
  //         padding: 0;
  //         margin-top: 20px;
  //         color: #646464;
  //         list-style: none;

  //         li {
  //           line-height: 2rem;

  //           @media screen and (max-width: 768px) {
  //             line-height: 1rem;
  //             font-size: 12px;
  //           }

  //           &:first-child {
  //             margin-top: 30px;
  //           }
  //         }
  //       }
  //     }
  //   }
  // }

  .china_map {
    width: 70%;
    margin: 50px auto;

    img {
      width: 100%;
    }
  }

  .timeline_wrap {
    width: 70%;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
      width: 100%;
    }

    .timeline_card {
      h4 {
        font-size: 24px;

        @media screen and (max-width: 768px) {
          font-size: 18px;
        }
      }

      .timeline_time {
        font-size: 12PX;
      }

      img {
        width: 30%;
        margin-top: 20px;

        @media screen and (max-width: 768px) {
          width: 100%;
        }
      }
    }
  }

  .three_box {
    width: 70%;
    margin: 0 auto;
    height: 200px;
    text-align: center;
    background: url('../../assets/img/ryzz.bc140e4.jpg') 0 0 no-repeat;
    background-size: cover;

    @media screen and (max-width: 768px) {
      width: 100%;
    }

    h1 {
      font-size: 40px;
      line-height: 200px;
      color: #fff;
    }
  }

  .three_box_card {
    width: 70%;
    margin: 30px auto;

    @media screen and (max-width: 768px) {
      width: 100%;
    }

    .out_card {
      flex-wrap: wrap;

      .card_item {
        @media screen and (max-width: 768px) {
          margin-top: 10px;
        }

        &:nth-child(n + 4) {
          margin-top: 10px;
        }

        img {
          padding-top: 30px;
          width: 100%;
        }
      }
    }
  }

  .four_wrap {
    width: 70%;
    margin: 0 auto;
    background: url('../../assets/img/58.e28b1c0.png') 0 0 no-repeat;
    background-size: cover;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 150px;
    }

    .out_card {
      width: 100%;
      flex-wrap: wrap;

      .card_item {
        &:nth-child(n + 4) {
          margin-top: 10px;
        }

        .card_content {
          display: flex;
          flex-direction: column;
          text-align: center;
          width: 100%;

          img {
            padding-top: 30px;
            width: 30%;

            @media screen and (max-width: 768px) {
              width: 50%;
            }
          }

          .bottom {
            .button {
              font-size: 1rem;

              @media screen and (max-width: 768px) {
                font-size: 0.5rem;
              }
            }
          }
        }
      }
    }
  }

  .four_card_spa {
    width: 70%;
    margin: 30px auto;

    .out_card {
      .card_item {
        h1 {
          font-size: 30px;
          margin-top: 10px;
        }

        img {
          margin-top: 30px;
          width: 5%;
        }

        p {
          font-size: 12px;
          margin-top: 10px;
        }

        .card_bg {
          width: 30px;
          height: 5px;
          background: #13519f;
        }
      }
    }
  }

  .product_shows_wrap1 {
    width: 100%;
    background: #f4f9fc;
    background-size: cover;
    padding: 10px 0 100px 0;
    box-sizing: border-box;
    margin-top: 60px;
    margin-bottom: 10px;

    .card_fan_list {
      width: 70%;
      margin: 0 auto;

      @media screen and (max-width: 768px) {
        width: 90%;
      }

      .card_fan_wrap {
        flex-wrap: wrap;
        margin-top: 50px;
      }

      .card_fan_item {
        display: flex;
        align-items: center;
        background: #fff;
        margin-top: 40px;
        padding: 20px;
        box-shadow: 10px 10px 20px rgba($color: #000, $alpha: 0.1);

        @media screen and (max-width: 768px) {
          background: url('../../assets/img/icon2.png') 0 0 no-repeat;
          background-position: 100% 100%;
          background-size: 35%;
          height: 100px;

          &:nth-child(n+3) {
            margin-top: 25px;
          }
        }

        .card_left {
          width: 20%;

          img {
            width: 100%;
          }
        }

        .card_right {
          margin-left: 15px;

          h1 {
            font-size: 25px;

            @media screen and (max-width: 768px) {
              font-size: 14px;
            }
          }

          p {
            font-size: 18px;
            margin-top: 10px;

            @media screen and (max-width: 768px) {
              font-size: 12px;
            }
          }
        }
      }
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
</style>