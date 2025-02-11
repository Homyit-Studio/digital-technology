<template>
  <div class="research_wrap">
    <el-carousel height="37vw" loop arrow="never" class="hidden-xs-only" indicator-position="none">
      <el-carousel-item v-for="(item, index) in imgList" :key="index">
        <img :src="item.src" alt="" class="img_item" />
        <div class="tips_font">
          <h1>{{ item.line1 }}</h1>
          <!-- <h3>{{ item.line2 }}</h3> -->
        </div>
      </el-carousel-item>
    </el-carousel>

    <div class="production_img hidden-sm-and-up">
      <div class="img_tit">新闻资讯</div>
      <!-- <div class="img_desc">关注数字化产业发展，助力现代化进程</div> -->
    </div>

    <div class="research_card hidden-xs-only">
      <div class="research-left">
        <div class="research-left-title">准确及时，简洁高效</div>
        <div class="research-left-desc">
          充分了解行业发展趋势，为数字化经济赋能
        </div>
        <!-- <div class="research-left-instrc">子午新闻</div> -->
        <ul>
          <li class="research-left-detail">
            <span> 迅速传递最新的信息，确保第一时间获取到全球或本地的时事动态。
              确保信息的时效性，使我们始终站在信息的前沿。</span>

          </li>
          <li class="research-left-detail">
            <span>确保新闻来源的可靠性和准确性。
              采用严格的新闻采编和审核流程，维护新闻的真实性和客观性。</span>

          </li>
          <li class="research-left-detail">
            <span> 提供涵盖本公司相关和行业相关的最新动态。</span>

          </li>
        </ul>
      </div>
      <div class="research_card_right">
        <!-- <img src="@/assets/img/build.543dd76.png" alt="" /> -->
      </div>
    </div>

    <div class="research_card_mobile hidden-sm-and-up">
      <h1>简洁高效，准确及时</h1>
      <p>
        充分了解行业发展趋势，为数字化经济赋能
      </p>
      <!-- <h2>子午新闻</h2> -->
      <p>
        迅速传递最新的信息，确保第一时间获取到全球或本地的时事动态。
        确保信息的时效性，使我们始终站在信息的前沿。确保新闻来源的可靠性和准确性。
        采用严格的新闻采编和审核流程，维护新闻的真实性和客观性。 提供涵盖本公司相关和行业相关的最新动态。
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
            <div class="research_desc">点击了解更多</div>
          </div>
          <div class="inner_right">
            <img src="../../assets/img/tupianleft.png" alt="" />
          </div>
        </div>
      </div>
      <imageScroll />
    </div>


    <div class="support_wrap">
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
            《“十四五”文物保护和科技创新规划》部署十项重点任务。
            一是强化文物资源管理和文物安全工作，建设国家文物资源大数据库，健全文物安全长效机制；
            二是全面加强文物科技创新，构建产学研用深度融合的文物科技创新体系；
            三是提升考古工作能力和科技考古水平，建设中国特色、中国风格、中国气派的考古学；
            四是强化文物古迹保护，坚持系统整体保护；五是加强革命文物保护管理运用，充分发挥革命文物重要作用；
            六是激发博物馆创新活力，提升博物馆发展质量；七是优化社会文物管理服务，完善流失文物追索返还制度；
            八是大力推进让文物活起来，推动文物保护利用工作全面融入经济社会发展；九是加强文物国际交流合作，向全世界讲好中国故事，促进中外文明交流互鉴；
            十是壮大文物人才队伍，综合施策推动构建与文物资源规模、文物保护利用任务相匹配的学科结构、管理机构和专业队伍。
          </p>
        </div>
        <div class="develop_right">
          <a class="tips hidden-xs-only" href="https://www.gov.cn/zhengce/content/2021-11/08/content_5649764.htm"
            target="_blank"><img src="@/assets/Z_img/zhengce.png" alt="" />原文件查看入口>></a>
        </div>
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
      <div class="book_list_scroll" ref="listScroll" @wheel.prevent>
        <el-row class="card_list">
          <el-col class="card_item" v-for="(item, index) in industryNews.slice(0, 10)" :key="index">
            <div class="big_box" @click="handleNewsDetails(item.url)">
              <div class="item_left">
                <img :src="item.src" alt="" />
              </div>
              <div class="item_right">
                <h1>{{ item.tit }}</h1>
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
    <MobileCallme />
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
import MouseWheel from '@better-scroll/mouse-wheel'
BScroll.use(Pullup)
BScroll.use(MouseWheel)

import CallMe from '@/components/callme/index'
import MobileCallme from '@/components/callme/MobileCallme.vue'
import imageScroll from './imageScroll.vue'

export default {
  data() {
    return {
      imgList: [
        {
          src: require('@/assets/Z_img/bg_Old.png'),
          line1: '新闻资讯'
        },
      ],
      activeIndex: 0,
      industryNews: [
        {
          src: require('@/assets/Z_img/news_about/2024-12-13_3.jpg'),
          tit: '新时代革命文物安全防范建设对策探析——以安源路矿工人补习夜校旧址为例',
          url: "http://www.zhongguowenwubao.com/portal/DigitPager/paperDetail/publishdate/2024-12-13/paperId/21170/id/106776"
        },
        {
          src: require('@/assets/Z_img/news_about/2024-12-13_6.jpg'),
          tit: '科技助力展陈 "马王堆"汉代文化焕新生 湖南博物院"生命艺术——马王堆汉代文化沉浸式数字大展"的策展实践',
          url: "http://www.zhongguowenwubao.com/portal/DigitPager/paperDetail/publishdate/2024-12-13/paperId/21173/id/106781"
        },
        {
          src: require('@/assets/Z_img/news_about/2024-12-03_7.jpg'),
          tit: '辉煌文脉 亘古巨制 中华优秀传统文化典籍展',
          url: "http://www.zhongguowenwubao.com/DigitPager/paper/id/21150/publishdate/2024-12-03"
        },
        {
          src: require('@/assets/Z_img/news_about/2024-11-29_3.jpg'),
          tit: '推进革命文物保护利用 激活江西人文经济新引擎',
          url: "http://www.zhongguowenwubao.com/portal/DigitPager/paperDetail/publishdate/2024-11-29/paperId/21138/id/106652"
        },
        {
          src: require('@/assets/Z_img/news_about/2024-11-22_3.jpg'),
          tit: '从“三个先行”看新修订的文物保护法践',
          url: "http://www.zhongguowenwubao.com/portal/DigitPager/paperDetail/publishdate/2024-11-22/paperId/21123/id/106592"
        },
        {
          src: require('@/assets/Z_img/news_about/2024-11-19_3.jpg'),
          tit: '接续奋斗十余载 多方协作谱新篇——写在新修订的《中华人民共和国文物保护法》通过之际',
          url: "http://www.zhongguowenwubao.com/portal/DigitPager/paperDetail/publishdate/2024-11-19/paperId/21115/id/106563"
        },
        {
          src: require('@/assets/Z_img/news_about/2024-11-15_3.jpg'),
          tit: '锻造新时代文物保护的法治利器——评文物保护法第七次修改',
          url: "http://www.zhongguowenwubao.com/portal/DigitPager/paperDetail/publishdate/2024-11-15/paperId/21108/id/106536"
        },
        {
          src: require('@/assets/Z_img/news_about/2024-11-10_3.jpg'),
          tit: '中华人民共和国文物保护法',
          url: "http://www.zhongguowenwubao.com/portal/DigitPager/paperDetail/publishdate/2024-11-10/paperId/21100/id/106505"
        },
        {
          src: require('@/assets/Z_img/news_about/2024-11-1.jpg'),
          tit: '2024年文化遗产保护传承数字化大会暨中国文物学会信息化专业委员会2024年度学术活动在南京举行',
          url: "http://www.cchicc.org.cn/art/2024/11/1/art_397_37066.html"
        },
        {
          src: require('@/assets/Z_img/news_about/2024-8-25.jpg'),
          tit: '稳步推进文物数字化 激发文博教育新路径——中国文物信息咨询中心参展第十届中国博物馆及相关产品与技术博览会',
          url: "http://www.cchicc.org.cn/art/2024/8/25/art_397_37045.html"
        }
      ],
      scroll: null,
      scroll2: null,
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
      snap: {
        loop: false,
        threshold: 0.3, // 滚动到下一个卡片的阈值
        // stepX: this.$refs.cardItem.clientWidth, // 每个卡片的宽度
      },
      mouseWheel: {
        speed: 20,
        invert: false,
        easeTime: 300,
      },
      click: true, // 确保点击事件可以触发
      disableMouse: false, // 确保鼠标事件可以触发
      disableTouch: false, // 确保触摸事件可以触发
    })
  },
  methods: {
    handleNewsDetails(url) {
      window.open(url)
    },
    changeOptionIndex(index) {
      this.optionActive = index
      if (index === 1) {
        this.$nextTick(() => {
          this.scroll.refresh()
          this.scroll2.refresh()
        })
      }
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
    MobileCallme,
    // BoottomTab,
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
      // height: 400px;
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
            cursor: pointer;

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

    .research_title_wrap {

      width: 100%;

      @media screen and (max-width: 768px) {
        margin-top: 30px;
      }

      .research_inner {
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

          .research_title {
            font-size: 40px;
            font-weight: bold;


            @media screen and (max-width: 768px) {
              font-size: 1rem;
            }
          }

          .research_desc {
            font-size: 16px;
            color: #787878;
            margin-top: 10px;

            @media screen and (max-width: 768px) {
              margin-top: 10px;
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
  }


  .production_img {
    width: 100%;
    height: 600px;

    @media screen and (max-width: 768px) {
      height: 50vw;
    }

    background: url('../../assets/Z_img/bg_Old.png') 0 0 no-repeat;
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

    // .img_desc {
    //   font-size: 32px;
    //   margin-top: 20px;

    //   @media screen and (max-width: 768px) {
    //     font-size: 0.85rem;
    //   }
    // }

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
    border-radius: 20%;
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
        font-weight: bold;
        line-height: 2rem;
        font-size: 19px;
      }

      // .research-left-instrc {
      //   color: #000;
      //   font-weight: bold;
      //   font-size: 24px;
      //   margin-top: 20px;
      // }

      ul {
        .research-left-detail {
          font-size: 18px;
          margin-top: 12px;

          span {
            font-weight: bold;
            color: #5b6e74;
          }
        }
      }
    }

    .research_card_right {
      margin-left: 50px;

      img {
        height: 300px;
      }
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

  .support_wrap {
    padding: 20px 0px 40px 0px;
    margin-bottom: 50px;
    background-color: #f4f9fc;

    @media screen and (max-width: 768px) {
      background-color: #fff;
    }

    .research_title_wrap {

      width: 100%;

      @media screen and (max-width: 768px) {
        margin-top: 30px;
      }

      .research_inner {
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

          .research_title {
            font-size: 40px;
            font-weight: bold;


            @media screen and (max-width: 768px) {
              font-size: 1rem;
            }
          }

          .research_desc {
            font-size: 16px;
            color: #787878;
            margin-top: 10px;

            @media screen and (max-width: 768px) {
              margin-top: 10px;
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

    .develop_wrap {
      width: 70%;
      margin: 0 auto;
      // margin-bottom: 100px;
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