<template>
  <div class="enter_innovation_wrap">
    <div class="enter_img">
      <div class="img_tit hidden-xs-only">企业创新服务</div>
      <div class="img_desc hidden-xs-only">
        打造生命健康产业新基建，加速园区中小企业高质量发展
      </div>
      <div class="img_tit hidden-sm-and-up">
        打造生命健康产业新基建<br />加速园区中小企业高质量发展
      </div>
    </div>
    <div style="z-index:9;position:relative;display:none;">
      <Affix :offset-top="56">
        <Menu
          mode="horizontal"
          theme="light"
          :active-name="selectName"
          class="enter_menu_wrap"
          @on-select="selectMenuItem"
        >
          <MenuItem name="1" class="enter_menu_item">
            BioMall - 生物医药产业创新服务综合体
          </MenuItem>
          <MenuItem name="2" class="enter_menu_item">
            医疗器械创新示范基地
          </MenuItem>
        </Menu>
      </Affix>
    </div>
    <div class="current_show_menu">
      <div class="enter_title_wrap">
        <div class="enter_inner">
          <div class="inner_left">
            <img src="../../assets/img/tupianright.png" alt="" />
          </div>
          <div class="inner_center" style="width: 60%">
            <div class="enter_title">生物医药产业供应链至关重要</div>
            <div class="enter_desc hidden-xs-only">
              贯穿于生物医药研发、临床试验、商业性生产、上市推广等整个产品生命周期
              用产业新基建数字化杠杆，为园区强链补链是当下的必然路径
            </div>
          </div>
          <div class="inner_right">
            <img src="../../assets/img/tupianleft.png" alt="" />
          </div>
        </div>
      </div>
      <Row
        class-name="enter_card_wrap hidden-xs-only"
        :gutter="20"
        justify="center"
      >
        <Col span="6">
          <Card :bordered="true" class="enter_card_item">
            <p slot="title" class="title">园区政府</p>
            <br />
            <br />
            <br />
            <p>如何提升专业化服务能力， 为园区企业提供供应链更多选择？</p>
            <br />
            <br />
            <br />
          </Card>
        </Col>
        <Col span="6">
          <Card :bordered="true" class="enter_card_item">
            <p slot="title" class="title">专业服务供应商</p>
            <br />
            <br />
            <br />
            <p>如何更加贴近客户， 进一步扩大市场覆盖面？</p>
            <br />
            <br />
            <br />
          </Card>
        </Col>
        <Col span="6">
          <Card :bordered="true" class="enter_card_item">
            <p slot="title" class="title">园区企业</p>
            <br />
            <br />
            <br />
            <p>如何获得更专业的技术服务， 匹配更有价值的服务商？</p>
            <br />
            <br />
            <br />
          </Card>
        </Col>
      </Row>
      <div class="enter_card_wrap_mobile hidden-sm-and-up">
        <img src="@/assets/img/16f7580f76.png" alt="" />
      </div>
      <div class="enter_title_wrap">
        <div class="enter_inner">
          <div class="inner_left">
            <img src="../../assets/img/tupianright.png" alt="" />
          </div>
          <div class="inner_center">
            <div class="enter_title">走进 BioMall</div>
            <div class="enter_desc"></div>
          </div>
          <div class="inner_right">
            <img src="../../assets/img/tupianleft.png" alt="" />
          </div>
        </div>
      </div>
      <div class="mall_wrap">
        <div class="mall_img">
          <img src="@/assets/img/bioBg9526da1.png" alt="" />
        </div>
        <div class="mall_details">
          <p>
            BioMall是坐落园区、辐射区域、加快园区中小企业创新、助力园区专业服务水平的创新基础设施。通过线上、线下结合的方式，汇聚全球优质上游供应链资源，无缝、精准地向下游企业提供从研发到上市各类高质量并且具有成本优势的产品和技术服务。
          </p>
          <div class="mall_btn">
            <el-button class="btn_self" @click="gotoDemo">了解更多</el-button>
          </div>
        </div>
      </div>
      <div class="func_wrap">
        <div class="func_wrap_inner">
          <div class="func_tit">BioMall 功能体系</div>
          <el-row class="func_card hidden-xs-only" type="flex">
            <el-col
              class="card_item"
              v-for="(item, index) in funcCardList"
              :key="index"
              :span="5"
            >
              <div class="item_top" :style="{'background':`url(${item.bg})`}">
                <p>{{ item.tit }}</p>
              </div>
              <div class="item_bottom">
                <p v-for="(item2, index2) in item.desc" :key="index2">
                  {{ '○  ' + item2 }}
                </p>
              </div>
            </el-col>
          </el-row>
          <div class="func_card_mobile hidden-sm-and-up">
            <img src="@/assets/img/3572170410.png" alt="" />
          </div>
          <div class="func_card_mobile hidden-sm-and-up">
            <img src="@/assets/img/3572170410.png" alt="" />
          </div>
          <div class="func_card_mobile hidden-sm-and-up">
            <img src="@/assets/img/3572170410.png" alt="" />
          </div>
        </div>
      </div>
      <div class="func_wrap" style="background: #f4f9fc">
        <div class="func_wrap_inner">
          <div class="func_tit">BioMall 四大核心价值</div>
        </div>
        <div class="double_card_wrap">
          <el-row class="double_card" type="flex">
            <el-col :span="5" :xs="11" class="double_card_item">
              <div class="double_card_bg"></div>
              <p>不仅是线上的数字化基建，更是线上和线下融合的全方位基建</p>
            </el-col>
            <el-col :span="5" :xs="11" class="double_card_item">
              <div class="double_card_bg"></div>
              <p>增强生物医药产业资源配置，使区域生物医药产业加速聚集</p>
            </el-col>
            <el-col :span="5" :xs="11" class="double_card_item">
              <div class="double_card_bg"></div>
              <p>化解我国生物医药发展过程中上游关键设备及材料卡脖子的问题</p>
            </el-col>
            <el-col :span="5" :xs="11" class="double_card_item">
              <div class="double_card_bg"></div>
              <p>不吸收优质供应商入驻，培植上游产业链，增加区域GDP和税收</p>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <CallMe />
    <MobileCallme />
  </div>
</template>

<script>
import CallMe from '@/components/callme/index'
import MobileCallme from '@/components/callme/MobileCallme.vue'
export default {
  data() {
    return {
      selectName: '1',
      funcCardList: [
        {
          tit: '数字化创新服务平台',
          desc: [
            '试剂耗材、仪器设备及专业技术服务供应商信息检索及技术咨询',
            '服务需求线上交易',
            '政企互动',
            'AI/大数据线上精准匹配服务',
          ],
          bg:require('../../assets/img/bg1.png')
        },
        {
          tit: '创新服务综合体',
          desc: [
            '入驻优质供应商，并对其提供产品和技术服务展示区、技术培训区、学术交流区等',
            '专业运营团队对区域企业在研发和生产过程中的需求进行线下对接',
          ],
          bg:require('../../assets/img/bg2.png')
        },
        {
          tit: '仓储转运中心',
          desc: [
            '上游供应商前置仓库',
            '园区企业共享仓库',
          ],
          bg:require('../../assets/img/bg3.png')
        },
        {
          tit: '自贸区清关和仓储中心',
          desc: [
            '北京、上海、广州、成都自贸区提供进口物料和设备仓储及通关服务，服务全国BioMall',
          ],
          bg:require('../../assets/img/bg3.png')
        },
      ],
    }
  },
  methods: {
    selectMenuItem(name) {
      console.log(name)
    },
    gotoDemo(){
      this.$router.push('/demo')
    }
  },
  components: {
    CallMe,
    MobileCallme,
  },
}
</script>

<style lang="scss" scoped>
.enter_innovation_wrap {
  width: 100%;
  .enter_img {
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
  .enter_menu_wrap {
    @media screen and (max-width: 768px) {
      height: 40px;
    }
    .enter_menu_item {
      width: 50%;
      text-align: center;
      font-size: 22px;
      @media screen and (max-width: 768px) {
        font-size: 0.8rem;
        line-height: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
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
  .current_show_menu {
    .enter_card_wrap_mobile{
      width: 100%;
      img{
        width: 100%;
      }
    }
    .enter_card_wrap {
      width: 100%;
      margin-top: 50px;
      .enter_card_item {
        background: #f4f9fc;
        text-align: center;
        p {
          width: 60%;
          text-align: center;
          margin: 0 auto;
          font-size: 16px;
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
      .func_card_mobile{
        width: 100%;
        img{
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
            background-image: url('../../assets/img/bg_1.png');
          }
          &:nth-child(2){
            background-image: url('../../assets/img/bg_2.png');
          }
          &:nth-child(3){
            background-image: url('../../assets/img/bg_3.png');
          }
          &:nth-child(4){
            background-image: url('../../assets/img/bg_4.png');
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
}
</style>