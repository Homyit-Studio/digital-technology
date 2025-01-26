<template>
  <div class="realize_wrap">
    <div class="realize_img">
      <div class="img_tit">匠心筑史，科技维新</div>
    </div>
    <div class="realize_nav_wrap">
      <el-row class="realize_nav" type="flex" justify="center">
        <el-col v-for="(tab, index) in tabList" :key="index" class="realize_item"
          :class="tabSelectIndex === index ? 'active' : ''" :span="2" :xs="6" @click.native="changeTabIndex(index)">
          <div class="nav_top">{{ tab.tit }}</div>
          <div class="nav_bottom" :style="tabSelectIndex === index ? '' : 'background:#fff'"></div>
        </el-col>
      </el-row>
    </div>
    <div class="show_box_index" v-if="tabSelectIndex === 0">
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
      <!-- 合作伙伴 -->
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
              <!-- <div class="card_left hidden-xs-only">
              <img :src="item.img" alt="" />
            </div> -->
              <div class="card_right">
                <h1>{{ item.name }}</h1>
                <!-- <p>{{ item.desc }}</p> -->
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <!-- <PersonCard /> -->
      <!-- <div class="production_title_wrap">
        <div class="production_inner">
          <div class="inner_left">
            <img src="../../assets/img/tupianright.png" alt="" />
          </div>
          <div class="inner_center" style="width: 50%">
            <div class="production_title">合作分布</div>
            <div class="production_desc">
              已实现核心园区70%覆盖和数百万医药企业的精准覆盖
            </div>
          </div>
          <div class="inner_right">
            <img src="../../assets/img/tupianleft.png" alt="" />
          </div>
        </div>
      </div> -->
      <!-- <div class="china_map">
        <img src="../../assets/img/coor1.png" alt="" />
        <img src="../../assets/img/coor2.png" alt="" />
        <img src="../../assets/img/coor3.png" alt="" />
      </div> -->
    </div>
    <!-- <div class="show_box_index" v-if="tabSelectIndex === 1">
      <div class="timeline_wrap">
        <TimeLineYunYi/>
        <TimeLineMobile/>
      </div>
    </div>
    <div class="show_box_index" v-if="tabSelectIndex === 2">
      <div class="three_box">
        <h1 style="font-size:1rem;">商誉资质</h1>
      </div>
      <div class="three_box_card">
        <el-row type="flex" justify="center" class="out_card" :gutter="10">
          <el-col
            :span="7"
            :xs="11"
            v-for="(item, index) in certificateList"
            :key="index"
            class="card_item"
          >
            <el-card :body-style="{ padding: '0px' }">
              <img
                :src="item.img"
                class="image"
              />
              <div style="padding: 14px;min-height:60px;">
                <span style="font-size:0.8rem;">{{item.desc}}</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div> -->
    <div class="show_box_index" v-if="tabSelectIndex === 1">
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
                  <el-button type="text" class="button" style="font-size:0.7rem;">{{
                    item.desc
                  }}</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <!-- <div class="production_title_wrap">
        <div class="production_inner">
          <div class="inner_left">
            <img src="../../assets/img/tupianright.png" alt="" />
          </div>
          <div class="inner_center">
            <div class="production_title">分支机构</div>
          </div>
          <div class="inner_right">
            <img src="../../assets/img/tupianleft.png" alt="" />
          </div>
        </div>
      </div>
      <div class="four_card_spa hidden-xs-only">
        <el-row type="flex" justify="space-between" class="out_card">
          <el-col :span="7" class="card_item">
            <h1>杭州总部</h1>
            <img src="../../assets/img/position.png" alt="" />
            <div class="card_bg"></div>
            <p>浙江省杭州市滨江区阡陌路482号智慧e谷B座7楼</p>
            <h1>000-000-0000</h1>
          </el-col>
          <el-col :span="7" class="card_item">
            <h1>北京子公司</h1>
            <img src="../../assets/img/position.png" alt="" />
            <div class="card_bg"></div>
            <p>北京市朝阳区安翔北里11号院北京创业大厦B座1005</p>
            <h1>000-000-0000</h1>
          </el-col>
          <el-col :span="7" class="card_item">
            <h1>成都子公司</h1>
            <img src="../../assets/img/position.png" alt="" />
            <div class="card_bg"></div>
            <p>成都市高新区天晖路360号晶科1号1806</p>
            <h1>000-000-0000</h1>
          </el-col>
        </el-row>
      </div> -->
      <div class="real_wrap">
        <ReailzeCard :reailzeList="reailzeList" class="hidden-sm-and-up" />
      </div>
    </div>
    <CallMe />
    <MobileCallme></MobileCallme>
  </div>
</template>

<script>
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
        {
          tit: '子午数智介绍',
          name: '1',
        },
        // {
        //   tit: '发展历程',
        //   name: '2',
        // },
        // {
        //   tit: '荣誉资质',
        //   name: '3',
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
        // {
        //   icon: '',
        //   title: '市场优势',
        //   desc: ['自研超级数据工厂', '区块链AI技术在新药研发领域的实践者'],
        // },
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
        // {
        //   icon: '',
        //   title: '行业影响力',
        //   desc: ['技术驱动型队伍', '国务院/国家发改委/国家医保局简报/专报'],
        // },
        // {
        //   icon: '',
        //   title: '政策影响力',
        //   desc: [
        //     '首创生命健康产业大脑',
        //     '用户覆盖中国主要城市/园区承建北京科委高精尖产业大数据平台等项目',
        //   ],
        // },
      ],
      // timelineEvent: [
      //   {
      //     event:
      //       '《中国新闻报》点赞云逸创造产业大脑的数字化实践，并写入两会专刊',
      //     time: '2021/11/24',
      //     img: require('../../assets/img/new7.png'),
      //   },
      //   {
      //     event:
      //       '《中国新闻报》点赞云逸创造产业大脑的数字化实践，并写入两会专刊',
      //     time: '2021/11/24',
      //     img: require('../../assets/img/new7.png'),
      //   },
      //   {
      //     event:
      //       '《中国新闻报》点赞云逸创造产业大脑的数字化实践，并写入两会专刊',
      //     time: '2021/11/24',
      //     img: require('../../assets/img/new7.png'),
      //   },
      //   {
      //     event:
      //       '《中国新闻报》点赞云逸创造产业大脑的数字化实践，并写入两会专刊',
      //     time: '2021/11/24',
      //     img: require('../../assets/img/new7.png'),
      //   },
      //   {
      //     event:
      //       '《中国新闻报》点赞云逸创造产业大脑的数字化实践，并写入两会专刊',
      //     time: '2021/11/24',
      //     img: require('../../assets/img/new7.png'),
      //   },
      //   {
      //     event:
      //       '《中国新闻报》点赞云逸创造产业大脑的数字化实践，并写入两会专刊',
      //     time: '2021/11/24',
      //     img: require('../../assets/img/new7.png'),
      //   },
      //   {
      //     event:
      //       '《中国新闻报》点赞云逸创造产业大脑的数字化实践，并写入两会专刊',
      //     time: '2021/11/24',
      //     img: require('../../assets/img/new7.png'),
      //   },
      //   {
      //     event:
      //       '《中国新闻报》点赞云逸创造产业大脑的数字化实践，并写入两会专刊',
      //     time: '2021/11/24',
      //     img: require('../../assets/img/new7.png'),
      //   },
      // ],
      contactMsg: [
        {
          tit: '市场合作',
          desc: 'jxzwshuzi@163.com',
          icon: require('../../assets/img/61.png'),
        },
        {
          tit: '售前咨询',
          desc: '电话待补充',
          icon: require('../../assets/img/60.png'),
        },
        {
          tit: '售后咨询',
          desc: '邮箱待补充',
          icon: require('../../assets/img/61.png'),
        },
      ],
      // reailzeList: [
      //   {
      //     tit: '杭州总部',
      //   },
      //   {
      //     tit: '北京子公司',
      //   },
      //   {
      //     tit: '成都子公司',
      //   },
      //   {
      //     tit: '重庆子公司',
      //   },
      // ],
      // certificateList: [
      //   {
      //     img: 'https://hs-official-site-prod.oss-cn-hangzhou.aliyuncs.com/client/official/20210629/kWXEiepyNp1624936457266.png',
      //     desc: '荣获“2021年杭州市准独角兽企业”荣誉称号'
      //   },
      //   {
      //     img: 'https://hs-official-site-prod.oss-cn-hangzhou.aliyuncs.com/client/official/20210318/mkGhTrdJTi1616038179236.jpg',
      //     desc: '2020年云逸创造成为华为认证级ISV伙伴'
      //   },
      //   {
      //     img: 'https://hs-official-site-prod.oss-cn-hangzhou.aliyuncs.com/client/official/20210318/SS4ncBsjQs1616038188320.jpg',
      //     desc: '云逸创造董事长金霞入选“2020年度女性创业者TOP10'
      //   },
      //   {
      //     img: 'https://hs-official-site-prod.oss-cn-hangzhou.aliyuncs.com/client/official/20210318/DZPsTTfkJi1616038196212.jpg',
      //     desc: '2020年云逸创造荣获“浙江省高新技术企业”荣誉称号'
      //   },
      //   {
      //     img: 'https://hs-official-site-prod.oss-cn-hangzhou.aliyuncs.com/client/official/20210318/kjfX3JRw641616038294809.jpg',
      //     desc: '荣获“2020中国健康新势力企业”荣誉称号'
      //   },
      //   {
      //     img: 'https://hs-official-site-prod.oss-cn-hangzhou.aliyuncs.com/client/official/20210318/Wr3JPJ5wsG1616038303821.jpg',
      //     desc: '云逸创造董事长金霞入选科技部“2019年创新人才推进计划'
      //   },
      //   {
      //     img: 'http://hs-official-site-test.oss-cn-hangzhou.aliyuncs.com/client/official/20200604/b2TNNdNsCe1591254359959.png',
      //     desc: '荣获“2019年浙江省创新企业百强”称号'
      //   },
      //   {
      //     img: 'http://hs-official-site-test.oss-cn-hangzhou.aliyuncs.com/client/official/20200604/8hXzwptN261591254324083.png',
      //     desc: '2019年获得"中国科技创新领军企业"称号'
      //   },
      //   {
      //     img: 'http://hs-official-site-test.oss-cn-hangzhou.aliyuncs.com/client/official/20200604/DcbXekjH2W1591254266381.png',
      //     desc: '云逸创始人杨红飞荣获"2019年中国B2B领域卓越创业家"荣誉称号'
      //   },
      // ]
      cardList: [
        {
          name: '子午舆图数码科技（江西）有限公司',
          // desc: '北京市十四五生物医药产业战略规划',
          // img: require('../../assets/img/researchInstitute/icon1.png')
        },
        {
          name: '三维数字科技（江西）有限公司',
          // desc: '产业新基建战略白皮书',
          // img: require('../../assets/img/researchInstitute/icon2.png')
        },
        {
          name: '思看科技（杭州）股份有限公司',
          // desc: '中国生物医药产业发展指数CBIB',
          // img: require('../../assets/img/researchInstitute/icon3.png')
        },
        {
          name: '深圳市其域创新科技有限公司',
          // desc: '政策/资本研究数字化工具数鉴.生物医药(2019)',
          // img: require('../../assets/img/researchInstitute/icon4.png')
        },
      ],
    }
  },
  methods: {
    changeTabIndex(index) {
      this.tabSelectIndex = index
    },
  },
  components: {
    //PersonCard,
    CallMe,
    MobileCallme,
    ReailzeCard,
    // TimeLineYunYi,
    // TimeLineMobile
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

    background: url('../../assets/img/zsbg.0b1914f.png') 0 0 no-repeat;
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

  .product_shows_wrap {
    width: 100%;
    background: url('../../assets/img/introBg.40f79db.png') 0 0 no-repeat;
    background-size: cover;
    padding: 10px 0 50px 0;
    margin-top: -7px;
    box-sizing: border-box;
    height: 700px;
    position: relative;

    @media screen and (max-width: 768px) {
      background: #f4f9fc;
      height: auto;
    }

    .table_wrap {
      position: absolute;
      top: 23%;
      left: 20%;
      width: 500px;

      .table_form {
        .table_form_item {
          font-weight: bold;
        }
      }
    }

    .table_wrap_mobile {
      padding: 1rem;

      p {
        font-size: 0.9rem;
      }

      .table_form {
        .table_form_item {
          font-weight: bold;
          margin-top: 1rem;
          font-size: 0.85rem;

          span {
            color: #000;
            font-size: 0.9rem;
            padding-right: 30px;
          }
        }
      }
    }
  }

  .advantage_out_wrap {
    width: 100%;
    display: flex;
    justify-content: center;

    .advantage_wrap {
      width: 70%;
      display: flex;
      margin-top: 70px;
      justify-content: center;
      flex-wrap: wrap;

      @media screen and (max-width: 768px) {
        width: 100%;
      }

      .advantage_item {
        height: auto;
        padding: 30px 20px 60px 20px;
        margin-right: 10px;

        &:nth-child(4n+1) {
          background: url('../../assets/img/newEdition/31.png') 90% 10% no-repeat;
          background-size: 20%;
        }

        &:nth-child(4n+2) {
          background: url('../../assets/img/newEdition/32.png') 90% 10% no-repeat;
          background-size: 20%;
        }


        // &:nth-child(3) {
        //   background: url('../../assets/img/newEdition/32.png') 90% 10% no-repeat;
        //   background-size: 20%;
        // }

        &:nth-child(4n+3) {
          background: url('../../assets/img/newEdition/34.png') 90% 10% no-repeat;
          background-size: 20%;
        }

        &:nth-child(4n) {
          background: url('../../assets/img/newEdition/35.png') 90% 10% no-repeat;
          background-size: 20%;
        }

        // &:nth-child(6) {
        //   background: url('../../assets/img/newEdition/35.png') 90% 10% no-repeat;
        //   background-size: 20%;
        // }

        margin: 15px;
        box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.1);

        @media screen and (max-width: 768px) {
          margin: 0;
          padding: 0 15px;
          margin-top: 3px;
          height: 140px;
          display: flex;
          justify-content: center;
          flex-direction: column;
          height: 200px;
        }

        .item_top {
          display: flex;
          align-items: center;

          @media screen and (max-width: 768px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
          }

          .icon {
            i {
              color: #2091d3;
              font-size: 26px;
              padding-right: 10px;

              @media screen and (max-width: 768px) {
                font-size: 2rem;
                margin-bottom: 10px;
              }
            }
          }

          .tit {
            width: 100%;
            color: #1c1c1c;
            font-size: 28px;
            font-weight: bold;

            @media screen and (max-width: 768px) {
              font-size: 1rem;
              text-align: left;
            }
          }
        }

        .item_desc {
          font-size: 20px;
          line-height: 20px;
          margin: 0;
          padding: 0;
          margin-top: 20px;
          color: #646464;
          list-style: none;

          li {
            line-height: 2rem;

            @media screen and (max-width: 768px) {
              line-height: 1rem;
              font-size: 12px;
            }

            &:first-child {
              margin-top: 30px;
            }
          }
        }
      }
    }
  }

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