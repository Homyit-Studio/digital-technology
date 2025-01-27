<template>
  <div class="research_wrap">
    <el-carousel height="37vw" loop arrow="never" class="hidden-xs-only" indicator-position="none">
      <el-carousel-item v-for="(item, index) in imgList" :key="index">
        <img :src="item.src" alt="" class="img_item" />
        <div class="tips_font">
          <h1>{{ item.line1 }}</h1>
          <h3>{{ item.line2 }}</h3>
        </div>
      </el-carousel-item>
    </el-carousel>

    <div class="production_img hidden-sm-and-up">
      <div class="img_tit">新闻资讯</div>
      <div class="img_desc">关注数字化产业发展，助力现代化进程</div>
    </div>

    <div class="research_card hidden-xs-only">
      <div class="research-left">
        <div class="research-left-title">简洁高效，准确及时</div>
        <div class="research-left-desc">
          充分了解行业发展趋势，为数字化经济赋能
        </div>
        <div class="research-left-instrc">核心能力</div>
        <ul>
          <li class="research-left-detail">
            <span>指标数字化评价能力：</span>
            以指数评价为核心，改变唯GDP论的经济指标评价模式，将多源数据置于一个统一的定量分析环境中，从创新、要素、经济、政策等多维角度，形成对产业发展的综合评价体系。
          </li>
          <li class="research-left-detail">
            <span>图谱数字化构架能力：</span>
            将产业链图谱研究架构与知识库动态本体相结合，形成精准度高、动态可延展的智能化产业图谱体系，支撑产业管理从中观经济运行到微观产业节点。
          </li>
          <li class="research-left-detail">
            <span>产业链数字化研究能力：</span>
            凝聚产业数据体系和产品体系的系统能力，基于产业指标评价体系和产业链图谱架构的研究，支撑区域产业链布局、动态监测、风险评估的“产业大脑”建设。
          </li>
        </ul>
      </div>
      <div class="research_card_right">
        <img src="@/assets/img/build.543dd76.png" alt="" />
      </div>
    </div>

    <div class="research_card_mobile hidden-sm-and-up">
      <h1>简洁高效，准确及时</h1>
      <p>
        充分了解行业发展趋势，为数字化经济赋能
      </p>
      <h2>核心能力</h2>
      <p>
        以指数评价为核心，改变唯GDP论的经济指标评价模式，将多源数据置于一个统一的定量分析环境中，从创新、要素、经济、政策等多维角度，形成对产业发展的综合评价体系。
        将产业链图谱研究架构与知识库动态本体相结合，形成精准度高、动态可延展的智能化产业图谱体系，支撑产业管理从中观经济运行到微观产业节点。
        凝聚产业数据体系和产品体系的系统能力，基于产业指标评价体系和产业链图谱架构的研究，支撑区域产业链布局、动态监测、风险评估的“产业大脑”建设。
      </p>
      <img src="@/assets/img/build.543dd76.png" alt="" />
    </div>

    <!-- 公司资讯轮播图组件 -->
    <div class="book_list">
      <div class="research_title_wrap">
        <div class="research_inner">
          <div class="inner_left">
            <img src="../../assets/img/tupianright.png" alt="" />
          </div>
          <div class="inner_center">
            <div class="research_title">公司资讯</div>
            <div class="research_desc"></div>
          </div>
          <div class="inner_right">
            <img src="../../assets/img/tupianleft.png" alt="" />
          </div>
        </div>
      </div>
      <imageScroll />
    </div>


    <!--     
    <div class="research_title_wrap">
      <div class="research_inner">
        <div class="inner_left">
          <img src="../../assets/img/tupianright.png" alt="" />
        </div>
        <div class="inner_center">
          <div class="research_title">三大特色</div>
          <div class="research_desc"></div>
        </div>
        <div class="inner_right">
          <img src="../../assets/img/tupianleft.png" alt="" />
        </div>
      </div>
    </div>

    <div class="research_sp_wrap hidden-xs-only">
      <el-row type="flex" justify="space-between" class="research_sp_row" :gutter="10">
        <el-col :span="7" class="research_sp_col">
          <div class="tit">面向政府</div>
          <div class="desc">
            面向政府的重大战略研究，支撑服务于国家发展改革委、科技部等的决策研究
          </div>
        </el-col>
        <el-col :span="7" class="research_sp_col">
          <div class="tit">面向数字经济</div>
          <div class="desc">
            面向数字经济时代的产业新基建研究，探索构建以“产业大脑”为核心的产业数字化管理新模式
          </div>
        </el-col>
        <el-col :span="7" class="research_sp_col">
          <div class="tit">面向行业</div>
          <div class="desc">
            面向行业的指数研究产品，着力构建新时代产业研究与评价的新标杆，为政府战略决策与产业研究提供工具和产品
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="research_sp_wrap_mobile hidden-sm-and-up">
      <img src="@/assets/img/content1.png" alt="">
    </div>

    <div class="product_shows_wrap">
      <div class="production_title_wrap">
        <div class="production_inner">
          <div class="inner_left">
            <img src="../../assets/img/tupianright.png" alt="" />
          </div>
          <div class="inner_center" style="width: 40%">
            <div class="production_title">研究院研究方向与成果</div>
          </div>
          <div class="inner_right">
            <img src="../../assets/img/tupianleft.png" alt="" />
          </div>
        </div>
      </div>
      <div class="card_fan_list">
        <el-row class="card_fan_wrap" type="flex" justify="space-between">
          <el-col class="card_fan_item" :span="11" v-for="(item, index) in cardList" :key="index">
            <div class="card_left hidden-xs-only">
              <img :src="item.img" alt="" />
            </div>
            <div class="card_right">
              <h1>{{ item.tit }}</h1>
              <p>{{ item.desc }}</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>  -->


    <div class="research_title_wrap">
      <div class="research_inner">
        <div class="inner_left">
          <img src="../../assets/img/tupianright.png" alt="" />
        </div>
        <div class="inner_center">
          <div class="research_title">政策支持</div>
          <div class="research_desc"></div>
        </div>
        <div class="inner_right">
          <img src="../../assets/img/tupianleft.png" alt="" />
        </div>
      </div>
    </div>

    <div class="develop_wrap">
      <div class="develop_left">
        <h1>文物数字化保护，是信息化时代的“趋势线”</h1>
        <p>
          加强文物数字化保护，以世界文化遗产、全国重点文物保护单位、馆藏一级文物等为重点，推进相关文物信息高清数据采集和展示利用。
          完善全国考古发掘信息管理系统。
          建立文物数字化标准规范体系，健全数据管理和开放共享机制，加大文物数据保护力度。
          支持国家和省级文物数据中心、重点文博单位信息基础设施建设，加强文物领域新型基础设施建设。
          中国国家博物馆率先开发“国家博物馆VR”平台，实现“VR+数字”的融合。
        </p>
      </div>
      <div class="develop_right">
        <img src="@/assets/img/GuojiaBWG.png" alt="" />
        <a class="tips hidden-xs-only" href="https://m.chnmuseum.cn/portals/0/web/vr/" target="_blank">官网入口>></a>
      </div>
    </div>
    <div class="book_list">
      <div class="research_title_wrap">
        <div class="research_inner">
          <div class="inner_left">
            <img src="../../assets/img/tupianright.png" alt="" />
          </div>
          <div class="inner_center">
            <div class="research_title">行业资讯</div>
            <div class="research_desc"></div>
          </div>
          <div class="inner_right">
            <img src="../../assets/img/tupianleft.png" alt="" />
          </div>
        </div>
      </div>
      <div class="book_list_scroll" ref="listScroll2" @wheel.prevent>
        <el-row class="card_list">
          <el-col class="card_item" v-for="(item, index) in cardListObj.report_group_list[activeIndex2]" :key="index">
            <div class="big_box" @click="reportNavigate(item.report_id)">
              <div class="item_left">
                <img :src="'http://www.mtx.cn' + item.front_path" alt="" />
              </div>
              <div class="item_right">
                <h1>{{ item.report_name }}</h1>
              </div>
            </div>
          </el-col>
        </el-row>
        <div class="list_scroll_btn">
          <div class="scroll_btn">左右滑动了解更多</div>
        </div>
      </div>
    </div>

    <CallMe />
    <BoottomTab />
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
import MouseWheel from '@better-scroll/mouse-wheel'
BScroll.use(Pullup)
BScroll.use(MouseWheel)

import CallMe from '@/components/callme/index'
// import MobileCallme from '@/components/callme/MobileCallme.vue'
import imageScroll from './imageScroll.vue'
import BoottomTab from '@/components/consulting/BoottomTab.vue'
export default {
  data() {
    return {
      imgList: [
        {
          src: require('@/assets/img/yjbg1.550eeb6.png'),
          line1: '新闻资讯',
          line2: '关注数字化产业发展，助力现代化进程',
        },
      ],
      activeIndex: 0,
      cardListObj: {
        industry_list: [],
        report_group_list: [],
      },

      mediaList: [],
      scroll: null,
      scroll2: null,
      // scroll3: null,
      // scroll4: null,
      // timer: null,
      // pageNo: 1,
      // pageNoMedia: 1,
      // total1: 0,
      // total2: 0,
      activeIndex2: 0,
      activeIndex3: 0,
      activeIndex4: 0,
      activeIndex5: 0,
      columnList: [],
      videoList: [],
    }
  },
  created() {
    this.optionActive =
      this.$route.path.substr(this.$route.path.length - 1) * 1 - 1
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.listScroll, {
      scrollX: true, // X轴滚动启用
      eventPassthrough: 'vertical',
      mouseWheel: {
        speed: 20,
        invert: false,
        easeTime: 300,
      },
      click: true, // 确保点击事件可以触发
      disableMouse: false, // 确保鼠标事件可以触发
      disableTouch: false, // 确保触摸事件可以触发
    })
    this.scroll2 = new BScroll(this.$refs.listScroll2, {
      scrollX: true, // X轴滚动启用
      eventPassthrough: 'vertical',
      mouseWheel: {
        speed: 20,
        invert: false,
        easeTime: 300,
      },
      click: true, // 确保点击事件可以触发
      disableMouse: false, // 确保鼠标事件可以触发
      disableTouch: false, // 确保触摸事件可以触发
    })
    this.getBookList()
    this.getCardListData()
    this.axios
      .get('http://glowworm.club:9093/mediaList.json')
      .then((res) => {
        this.mediaList = res.data.mediaList
      })
      .catch((err) => {
        console.log(err.message)
      })
  },
  methods: {
    changeOptionIndex(index) {
      this.optionActive = index
      if (index === 1) {
        this.$nextTick(() => {
          this.scroll.refresh()
          this.scroll2.refresh()
          this.scroll3.refresh()
          this.scroll4.refresh()
        })
      }
    },
    handleNewsDetails(url) {
      // this.$router.push(`/news_detail/${id}`)
      window.open(url)
    },
    async getCardListData() {
      const res = await this.axios.get(
        'https://api.mtx.cn/report?command=front_yj'
      )
      this.cardListObj = res.data.data
    },
    async getBookList() {
      const res = await this.axios.get(
        'https://api.mtx.cn/report?command=front_nb'
      )
      this.bookList = res.data.data.report_group_list
    },

    reportNavigate(id) {
      window.open(`http://www.mtx.cn/#/report?id=${id}`)
    },

  },
  watch: {
    $route() {
      this.optionActive =
        this.$route.path.substr(this.$route.path.length - 1) * 1 - 1
    },
  },
  components: {
    CallMe,
    // MobileCallme,
    BoottomTab,
    imageScroll
  },
}
</script>

<style lang="scss" scoped>
.research_wrap {
  position: relative;
  width: 100%;

  .book_list {
    margin-bottom: 100px;

    @media screen and (max-width:768px) {
      height: 400px;
    }



    @media screen and (max-width: 768px) {
      width: 100%;
      padding: 0 20px;
      background: #f4f9fc;
    }

    .book_list_scroll {
      width: 1500px;
      margin: 0 auto;
      overflow: hidden;


      @media screen and (max-width:768px) {
        width: 100%;
      }

      .card_list {
        width: 3000px;

        @media screen and (max-width:768px) {
          width: 2000px;
          margin-top: 30px;
        }

        .card_item {
          @media screen and (max-width:768px) {
            width: 200px;
            height: 230px;
          }

          float: left;
          width: 300px;
          text-align: center;

          &:hover {
            transform: scale(1);
            box-shadow: none;
          }

          .big_box {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            @media screen and (max-width:768px) {
              height: 100%;
            }

            .item_left {
              width: 300px;
              text-align: center;
              // user-select: none;

              @media screen and (max-width:768px) {
                width: 100%;
                height: 100%;
              }

              img {
                transition: all .6s;
                width: 80%;
                min-height: 300px;
                margin-left: 20px;
                border: solid 1px rgb(235, 235, 235);


                &:hover {
                  box-shadow: 0 0 20px rgba($color: #000000, $alpha: .1);
                }

                @media screen and (max-width:768px) {
                  margin-bottom: 60px;
                  max-height: 300px;
                }
              }
            }

            .item_right {
              padding: 10px 20px !important;
              user-select: none;

              h1 {
                font-size: 1rem !important;
                font-weight: 400;
                text-align: center;
                white-space: normal;

                @media screen and (max-width:768px) {
                  font-size: 14px !important;
                }
              }
            }
          }
        }
      }

      .list_scroll_btn {
        text-align: center;

        .scroll_btn {
          background: rgba(0, 0, 0, 0);
          color: rgba(0, 0, 0, 0.5);
          font-size: 14PX;
          margin-bottom: 30px;
          // border-radius: 15PX;

          @media screen and (max-width:768px) {
            width: 120px;
            height: 40px;
            margin: 0 auto;
            margin-top: 40px;
          }
        }
      }
    }

    .book_content {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      @media screen and (max-width: 768px) {
        width: 100%;
      }

      .book_item {
        width: 45%;
        display: flex;

        @media screen and (max-width: 768px) {
          width: 100%;
          background: #fff;
          margin-top: 20px;
          margin: 10px auto;
          padding: 10px;
        }

        &:nth-child(n + 3) {
          margin-top: 20px;
        }

        .book_left {
          width: 50%;
          margin-right: 40px;

          @media screen and (max-width: 768px) {
            width: 40%;
          }

          img {
            width: 100%;
          }
        }

        .book_right {
          font-weight: bold;
          font-size: 20px;

          span {
            cursor: pointer;
          }

          @media screen and (max-width: 768px) {
            font-size: 16px;
            color: #000;
          }
        }
      }
    }

    .tabs_wrap {
      width: 60%;

      @media screen and (max-width:768px) {
        width: 100%;
      }

      padding-top: 1rem;
    }
  }


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

  .el-carousel__item {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .tips_font {
    position: absolute;
    top: 260px;
    left: 300px;
    z-index: 5;
    color: #2d3937;
    font-size: 25px;

    @media screen and (max-width: 768px) {
      font-size: 0.5rem;
    }
  }

  .research_card {
    width: 72%;
    margin: 0 auto;
    position: relative;
    z-index: 5;
    margin-top: -200px;
    background: #ffffff;
    padding: 40px;
    display: flex;
    background: url('../../assets/img/bg.722080d.png');
    background-size: 100% 100%;

    .research-left {
      .research-left-title {
        font-size: 34px;
        font-weight: bold;
        color: #000;
      }

      .research-left-desc {
        color: #5b6e74;
        line-height: 2rem;
        font-size: 19px;
      }

      .research-left-instrc {
        font-size: 24px;
        margin-top: 20px;
      }

      ul {
        .research-left-detail {
          font-size: 18px;
          margin-top: 12px;

          span {
            font-weight: bold;
            color: #000;
          }
        }
      }
    }

    .research_card_right {
      margin-left: 50px;
      // img {
      // }
    }
  }

  .research_card_mobile {
    width: 100%;
    padding: 1rem;
    background: url('../../assets/img/bg.722080d.png') 0 0 no-repeat;
    background-size: cover;
    position: relative;

    h1 {
      font-size: 1.3rem;
    }

    p {
      margin-top: 1rem;
      font-size: 0.9rem;
      color: #5b6e74;
      line-height: 1.5rem;
    }

    h2 {
      margin-top: 1rem;
      font-weight: normal;
      font-size: 1rem;
      color: #000;
    }

    img {
      position: absolute;
      right: 1rem;
      width: 30%;
      bottom: -4rem;
      opacity: 0.6;
    }
  }

  // .research_title_wrap {
  //   width: 100%;

  //   @media screen and (max-width: 768px) {
  //     margin-top: 30px;
  //   }

  //   .research_inner {
  //     display: flex;
  //     justify-content: center;

  //     .inner_left {
  //       display: flex;
  //       justify-content: flex-end;
  //       align-items: center;

  //       @media screen and (max-width: 768px) {
  //         flex: 1;
  //       }

  //       img {
  //         width: 30%;
  //       }
  //     }

  //     .inner_center {
  //       width: 400px;
  //       display: flex;
  //       flex-direction: column;
  //       justify-content: center;
  //       align-items: center;
  //       padding: 0 50px;

  //       @media screen and (max-width: 768px) {
  //         flex: 2.2;
  //       }

  //       .research_title {
  //         font-size: 40px;
  //         font-weight: bold;


  //         @media screen and (max-width: 768px) {
  //           font-size: 1rem;
  //         }
  //       }

  //       .research_desc {
  //         font-size: 16px;
  //         color: #787878;
  //         margin-top: 10px;

  //         @media screen and (max-width: 768px) {
  //           margin-top: 10px;
  //         }
  //       }
  //     }

  //     .inner_right {
  //       display: flex;
  //       justify-content: flex-start;
  //       align-items: center;

  //       @media screen and (max-width: 768px) {
  //         flex: 1;
  //       }

  //       img {
  //         width: 30%;
  //       }
  //     }
  //   }
  // }

  // .research_sp_wrap {
  //   width: 70%;
  //   margin: 0 auto;
  //   height: 300px;

  //   .research_sp_row {
  //     width: 100%;

  //     .research_sp_col {
  //       background-size: 100% 100%;
  //       height: 420px;
  //       padding: 200px;

  //       &:nth-child(1) {
  //         background: url('../../assets/img/researchInstitute/1.png');
  //       }

  //       &:nth-child(2) {
  //         background: url('../../assets/img/researchInstitute/2.png');
  //       }

  //       &:nth-child(3) {
  //         background: url('../../assets/img/researchInstitute/3.png');
  //       }

  //       .tit {
  //         font-size: 32px;
  //         color: #000;
  //         margin: 0 30px;
  //       }

  //       .desc {
  //         font-size: 19px;
  //         margin: 10px 30px;
  //       }
  //     }
  //   }
  // }

  // .research_sp_wrap_mobile {
  //   width: 90%;
  //   margin: 0 auto;

  //   img {
  //     width: 100%;
  //   }
  // }

  // .product_shows_wrap {
  //   width: 100%;
  //   background: #f4f9fc;
  //   background-size: cover;
  //   padding: 10px 0 50px 0;
  //   box-sizing: border-box;
  //   margin-top: 250px;
  //   margin-bottom: 50px;

  //   @media screen and (max-width: 768px) {
  //     margin-top: 30px;
  //   }

  //   .production_title_wrap {
  //     width: 100%;
  //     margin-top: 50px;

  //     @media screen and (max-width: 768px) {
  //       margin-top: 30px;
  //     }

  //     .production_inner {
  //       display: flex;
  //       justify-content: center;

  //       .inner_left {
  //         display: flex;
  //         justify-content: flex-end;
  //         align-items: center;

  //         @media screen and (max-width: 768px) {
  //           flex: 1;
  //         }

  //         img {
  //           width: 30%;
  //         }
  //       }

  //       .inner_center {
  //         width: 400px;
  //         display: flex;
  //         flex-direction: column;
  //         justify-content: center;
  //         align-items: center;
  //         padding: 0 50px;

  //         @media screen and (max-width: 768px) {
  //           flex: 2.2;
  //         }

  //         .production_title {
  //           font-size: 40px;
  //           font-weight: bold;

  //           @media screen and (max-width: 768px) {
  //             font-size: 1rem;
  //           }
  //         }

  //         .production_desc {
  //           font-size: 16px;
  //           color: #787878;
  //           margin-top: 10px;

  //           @media screen and (max-width: 768px) {
  //             margin-top: 10px;
  //           }
  //         }
  //       }

  //       .inner_right {
  //         display: flex;
  //         justify-content: flex-start;
  //         align-items: center;

  //         @media screen and (max-width: 768px) {
  //           flex: 1;
  //         }

  //         img {
  //           width: 30%;
  //         }
  //       }
  //     }
  //   }

  //   .card_fan_list {
  //     width: 70%;
  //     margin: 0 auto;

  //     @media screen and (max-width: 768px) {
  //       width: 90%;
  //     }

  //     .card_fan_wrap {
  //       flex-wrap: wrap;
  //       margin-top: 50px;
  //     }

  //     .card_fan_item {
  //       display: flex;
  //       align-items: center;
  //       background: #fff;
  //       margin-top: 50px;
  //       padding: 30px;
  //       box-shadow: 10px 10px 20px rgba($color: #000, $alpha: 0.1);

  //       @media screen and (max-width: 768px) {
  //         background: url('../../assets/img/icon2.png') 0 0 no-repeat;
  //         background-position: 100% 100%;
  //         background-size: 35%;
  //         height: 100px;

  //         &:nth-child(n+3) {
  //           margin-top: 25px;
  //         }
  //       }

  //       .card_left {
  //         width: 20%;

  //         img {
  //           width: 100%;
  //         }
  //       }

  //       .card_right {
  //         margin-left: 15px;

  //         h1 {
  //           font-size: 25px;

  //           @media screen and (max-width: 768px) {
  //             font-size: 14px;
  //           }
  //         }

  //         p {
  //           font-size: 18px;
  //           margin-top: 10px;

  //           @media screen and (max-width: 768px) {
  //             font-size: 12px;
  //           }
  //         }
  //       }
  //     }
  //   }
  // }

  .develop_wrap {
    width: 70%;
    margin: 0 auto;
    margin-bottom: 100px;
    display: flex;

    @media screen and (max-width: 768px) {
      width: 90%;
      flex-direction: column;
      margin-bottom: 30px;
    }

    .develop_left {
      margin-right: 100px;

      h1 {
        font-size: 26px;

        @media screen and (max-width: 768px) {
          font-size: 0.95rem;
        }
      }

      p {
        margin-top: 30px;
        font-size: 20px;
        color: #5b6e74;

        @media screen and (max-width: 768px) {
          font-size: 13px;
        }
      }
    }

    .develop_right {
      width: 100%;

      @media screen and (max-width: 768px) {
        width: 40%;
        margin: 0 auto;
      }

      img {
        width: 100%;
      }

      .tips {
        text-align: center;
        color: #2091d3;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
}

.report-carousel {
  .el-carousel__item {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .report-tips {
    position: absolute;
    top: 260px;
    left: 300px;
    z-index: 5;
    color: #2d3937;
    font-size: 25px;

    @media screen and (max-width: 768px) {
      font-size: 0.5rem;
    }
  }
}
</style>