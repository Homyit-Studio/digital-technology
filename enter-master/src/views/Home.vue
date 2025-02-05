<template>
  <div>
    <PCNavbar selectIndex="1"/>
    <MobileNavBar :currentActive="0"/>
    <!-- 轮播图 -->
    <CarouselHome />
    <!-- 企业硬件优势 -->
    <TodoShow/>
    <!-- 企业软件优势 -->
    <div class="func_wrap">
        <div class="func_wrap_inner">
          <div class="func_tit">软件优势</div>
          <el-row class="func_card hidden-xs-only" type="flex">
            <el-col
              class="card_item animate__animated animate__flipInX"
              v-for="(item, index) in funcCardList"
              :key="index"
              :span="5"
            >
              <div class="item_top" :style="{'background':`url(${item.bg})`}">
                <p>{{ item.tit }}</p>
              </div>
              <div class="item_bottom">
                <p v-for="(item2, index2) in item.desc" :key="index2">
                  {{ item2 }}
                </p>
              </div>
            </el-col>
          </el-row>
          <div class="func_card_mobile hidden-sm-and-up">
            <img src="@/assets/img/pic111.png" alt="" />
          </div>
          <div class="func_card_mobile hidden-sm-and-up">
            <img src="@/assets/img/pic222.png" alt="" />
          </div>
          <div class="func_card_mobile hidden-sm-and-up">
            <img src="@/assets/img/pic333.png" alt="" />
          </div>
        </div>
      </div>
    <!-- <div class="bottom_circle">
      <h1>产业大脑将会是所有城市园区产业发展的标准配置</h1>
      <div class="circle_img">
        <img src="@/assets/img/lineimg.9cc3174a.png" alt="" class="hidden-xs-only"/> -->
        <!-- 移动端时出现 -->
        <!-- <img src="@/assets/img/lineimg.9cc3174a.png" alt="" class="hidden-sm-and-up"/>
      </div>
    </div> -->

    <!-- 子午数智人才优势 -->
     <div class="current_show_menu">
    <div class="enter_title_wrap">
        <div class="enter_inner">

          <div class="inner_left">
            <img src="../assets/img/tupianright.png" alt="" />
          </div>
          <div class="inner_center" style="width: 60%">
            <div class="enter_title">人才优势</div>
            <div class="enter_desc hidden-xs-only">
              公司拥有一支具备交叉学科背景的专业团队，涵盖了建筑、测绘、GIS、遥感、计算机等多个领域
            </div>
          </div>
          <div class="inner_right">
            <img src="../assets/img/tupianleft.png" alt="" />
          </div>

        </div>
      </div>
      
       <Row
        class-name="enter_card_wrap hidden-xs-only"
        :gutter="20"
        justify="center"
      >
        <Col span="6">
          <Card :bordered="true" class="enter_card_item animate__animated animate__swing">
            <p slot="title" class="title">高学历人才</p>
            <br />
            <br />
            <br />
            <p>团队拥有6位博士和16位硕士，具备深厚的专业知识和丰富的实践经验，为文物数字化保护和活化提供智力支持</p>
            <br />
            <br />
            <br />
          </Card>
        </Col>
        <Col span="6">
          <Card :bordered="true" class="enter_card_item animate__animated animate__swing">
            <p slot="title" class="title">多学科融合</p>
            <br />
            <br />
            <br />
            
            <p>团队成员来自不同学科背景，能够形成优势互补，共同解决文物数字化保护和活化过程中的技术难题</p>
            <br />
            <br />
            <br />
          </Card>
        </Col>
        <Col span="6">
          <Card :bordered="true" class="enter_card_item animate__animated animate__swing">
            <p slot="title" class="title">创新精神</p>
            <br />
            <br />
            <br />
            <p>团队成员具备创新意识和实践能力，不断探索新技术和方法，推动文物数字化保护和活化的应用发展</p>
            <br />
            <br />
            <br />
          </Card>
        </Col>
      </Row>

      <div class="enter_card_wrap_mobile hidden-sm-and-up">
        <img src="@/assets/img/bbb111.png" alt="" />
      </div>
    </div>
    <!-- 核心能力 -->
    <!-- <CoreCompetence/> -->
    <!-- 合作伙伴 -->
    <!-- <CooperationCustomer/> -->
     <!-- 客户见证部分 -->
    <div class="product_shows_wrap">
      <div class="consult_title_wrap">
        <div class="consult_inner">

          <div class="inner_left">
            <img src="../assets/img/tupianright.png" alt="" />
          </div>

          <div class="inner_center">
            <div class="consult_title">合作伙伴</div>
            <div class="consult_desc">
              <!-- 全国各地150+政府与产业园合作成功案例 -->
            </div>
          </div>

          <div class="inner_right">
            <img src="../assets/img/tupianleft.png" alt="" />
          </div>

        </div>
      </div>

      <div class="with_center">
        <div class="bottom_img_wrap">
          <div
            class="bottom_img_item animate__animated animate__slideInUp"
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
    <MobileCallme/>
  </div>
</template>

<script>
import PCNavbar from '@/components/navbar/index'
import MobileNavBar from '@/components/navbar/MobileNavBar.vue'
import CarouselHome from '@/components/carousel_home/index'
import TodoShow from '@/components/todo_show/index'
// import CoreCompetence from '@/components/core_competence/index'
// import CooperationCustomer from '@/components/cooperation_customer/index'
import CallMe from '@/components/callme/index'
import MobileCallme from '@/components/callme/MobileCallme.vue'
export default {
  components: {
    PCNavbar,
    MobileNavBar,
    CarouselHome,
    TodoShow,
    // CoreCompetence,
    // CooperationCustomer,
    CallMe,
    MobileCallme
  },
   data() {
  return {
    funcCardList: [
      {
        tit: '多平台跨模态数据融合技术',
        desc: [
          '能够高效整合来自不同硬件设备的数据，实现数据的无缝对接和精确融合，为文物的数字化重建提供了坚实基础'
        ],
        bg: require('../assets/img/bg1.png')
      },
      {
        tit: '基于NeRF和3D GS的三维重建技术',
        desc: [
          '能够生成高度逼真的文物三维模型，不仅保留了文物的几何形态，还还原了其表面材质和光照效果，为文物的数字化展示和虚拟体验提供了可能'
        ],
        bg: require('../assets/img/bg2.png')
      },
      {
        tit: '丰富的数字化平台构建技术',
        desc: [
          '能够构建功能完善的数字化平台，支持文物的数字化存储、管理和展示，为文物的长期保护和活化利用提供了有力保障'
        ],
        bg: require('../assets/img/bg3.png')
      }
    ],
      procardList: [
        {
          tit: '子午舆图数码科技（江西）有限公司',
          src: require('@/assets/img/a.png'),
        },
        {
          tit: '三维数字科技（江西）有限公司',
          src: require('@/assets/img/d.png'),
        },
        {
          tit: '思看科技（杭州）股份有限公司',
          src: require('@/assets/img/e.png'),
        },
        {
          tit: '深圳市其域创新科技有限公司',
          src: require('@/assets/img/f.png'),
        },
      ]
  }
}
}
</script>

<style lang="scss" scoped>
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
 .product_shows_wrap {
    width: 100%;
    background: url('../assets/img/witness-bgc369221.png') 0 0 no-repeat;
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
          width: 40%;
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
.enter_title_wrap {
    width: 100%;
    margin-top: 50px;
    @media screen and (max-width: 768px) {
      margin-top: 30px;
    }
    .enter_inner {
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
        .enter_title {
          font-size: 40px;
          font-weight: bold;
          @media screen and (max-width: 768px) {
            font-size: 1rem;
          }
        }
        .enter_desc {
          font-size: 20px;
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
  .current_show_menu {
    max-width: 100%;
    margin-bottom: 50px;
    .enter_card_wrap_mobile{
      width: 100%;
      img{
        width: 100%;
      }
    }
    .enter_card_wrap {
      max-width: 100%;
      width: 100%;
      margin-top: 50px;
      .enter_card_item {
        background: #f4f9fc;
        text-align: center;
        p {
          width: 60%;
          text-align: center;
          margin: 0 auto;
          font-size: 18px;
        }
        .title {
          font-size: 20px;
          font-weight: bold;
        }
      }
    }
    .mall_wrap {
      width: 70%;
      display: flex;
      justify-content: center;
      margin: 34px auto;
      @media screen and (max-width: 768px) {
        width: 90%;
      }
      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
      .mall_img {
        width: 50%;
        margin-right: 30px;
        padding: 0 30px;
        @media screen and (max-width: 768px) {
          width: 100%;
        }
        img {
          width: 100%;
        }
      }
    }
    .mall_details {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      @media screen and (max-width: 768px) {
        width: 90%;
        text-align: center;
      }
      p {
        font-size: 20px;
        @media screen and (max-width: 768px) {
          font-size: 14px;
        }
      }
      .mall_btn {
        margin-top: 40px;
        @media screen and (max-width: 768px) {
          padding: 20px 0;
        }
        .btn_self {
          background: orange;
          color: #fff;
          border-radius: 20px;
          border: none;
          @media screen and (max-width: 768px) {
            width: 80px;
            height: 35px;
            border-radius: 20px;
            font-size: 14px;
          }
        }
      }
    }
  }

.func_wrap {
    width: 100%;
    padding: 50px;
    background: url('../assets/img/witness-bgc369221.png');
    background-size: 100% 100%;
    .func_wrap_inner {
      width: 70%;
      margin: 0 auto;
      @media screen and (max-width: 768px) {
        width: 90%;
      }
      .func_tit {
  font-size: 36px; /* 调大标题字体大小 */
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px; /* 增加标题和盒子之间的空间 */
  @media screen and (max-width: 768px) {
    font-size: 1.2rem; /* 适配小屏幕 */
  }
}

      .func_card {
  justify-content: space-around; /* 改为 space-around，保证左右间距均匀 */
  margin-top: 40px;
  .card_item {
    background: #fff;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
    width: 30%; /* 调整为固定宽度，避免占用过多空间 */
    margin: 0 15px; /* 给每个盒子之间加一些间距 */
    .item_top {
      width: 100%;
      height: 150px;
      font-size: 20px;
      font-weight: bold;
      color: #fff;
      background-size: 100% 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .item_bottom {
      padding: 35px;
      p {
        line-height: 2;
        font-size: 18px;
        margin-top: 20px;
      }
    }
  }
}
    .func_card_mobile{
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
          height: 250px;
          background: rgba($color: #fff, $alpha: 1);
          padding: 30px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          &:nth-child(1){
            background-image: url('../assets/img/pic111.png');
          }
          &:nth-child(2){
            background-image: url('../assets/img/pic222.png');
          }
          &:nth-child(3){
            background-image: url('../assets/img/pic333.png');
          }
          background-position: 100% 100%;
          background-repeat: no-repeat;
          background-size: 30%;
          @media screen and (max-width: 768px) {
            height: 140px;
            &:nth-child(n+3){
              margin-top: 20px;
            }
          }
          .double_card_bg {
            width: 30px;
            height: 15px;
            background: linear-gradient(90deg, rgba(252, 197, 96, 0), #feb15a);
            @media screen and (max-width: 768px) {
              width: 20px;
              height: 8px;
            }
          }
          p {
            line-height: 20PX;
            font-size: 15px;
            margin-top: 30px;
            @media screen and (max-width: 768px) {
              font-size: 13px;
            }
          }
        }
      }
    }
  }
.bottom_circle {
  width: 100%;
  text-align: center;
  padding-top: 100px;
  background-image: url(../assets/img/smalldot.png),url(../assets/img/smalldot1.png);
  background-position: 0 0,110% 150%;
  background-repeat: no-repeat;
  background-size: 400px;
  h1 {
    font-size: 40px;
    padding-bottom: 20px;
    @media screen and (max-width: 768px) {
      font-size: 1.15rem;
      width: 60%;
      margin: 0 auto;
    }
  }
  .circle_img {
    width: 100%;
    img {
      width: 70%;
      @media screen and (max-width: 768px) {
        width: 100%;
        margin: 20PX 0;
      }
    }
  }
}
</style>