<template>
  <div class="news_details_wrap">
    <PCNavbar selectIndex="4-2" />
    <MobileNavBar :currentActive="3" />
    <div class="news_content">
      <el-breadcrumb separator-class="el-icon-arrow-right" class="news_bread">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>新闻详情</el-breadcrumb-item>
      </el-breadcrumb>
      <form name="_newscontent_fromname">
        <h1 class="h1tit">
          工业和信息化部副部长辛国斌一行参观调研苏州赛迪公司！
        </h1>
        <h4 class="h4tit">
          来源：苏州赛迪公司&nbsp;&nbsp;作者：&nbsp;&nbsp;投稿时间：2021-07-20
        </h4>
        <div id="vsb_content_1002" class="nr-div-p">
          <div class="v_news_content">
            <img src="../../assets/img/news/11.png" class="img_vsb_content" />
            <p class="vsbcontent_start">
              2021年7月16日上午，在参加首届中国工控大会期间，工业和信息化部副部长辛国斌、信发司副司长王建伟、江苏省工信厅副厅长池宇、苏州市政府副市长沈觅等一行，在中国电子信息产业发展研究院（赛迪研究院）院长张立陪同下，赴苏州赛迪公司参观调研、指导工作。<br />
            </p>
            <img src="../../assets/img/news/12.png" class="img_vsb_content" />
            <p>
              辛副部长一行参观了苏州赛迪公司展厅和中国芯实验室。苏州赛迪公司总经理杜娇向各位领导汇报了公司落地苏州吴中区两年多来所开展的工作，介绍了主要业务领域以及未来工作设想等；重点介绍了“中国芯”实验室载体建设、芯片检测硬件设备配置以及量产级芯片检测业务的开展情况。
            </p>
            <img src="../../assets/img/news/13.png" class="img_vsb_content" />
            <p>
              辛副部长对苏州赛迪公司在短短两年内所做出的工作和成果给予了充分肯定，并对苏州赛迪公司下一步的发展提出殷切期望：
            </p>
            <p>
              一是在考虑公司发展方向上要业务聚焦，规划研究工作除了围绕省、市、区开展外，还要紧密围绕区域一体化开展研究，要稳步前行；
            </p>
            <p>二是要重视人才，加大人才队伍建设，打造高质量的服务团队；</p>
            <p>
              三是要注重建设硬能力，建立严格的第三方检验监测服务标准，做到公平公正，树立权威公信力。
            </p>
            <p>
              陪同辛副部长一行调研的还有赛迪研究院副院长刘文强、苏州市政府副秘书长蒋华、苏州市工信局局长万利以及吴中区委副书记顾晓东等领导。
            </p>
          </div>
        </div>
        <div id="div_vote_id"></div>
        <div class="clear"></div>
        <div class="clear"></div>
        <!-- <h3 style="text-align: center">
          【下一篇】:
          <a href="33332.htm">苏州市副市长沈觅一行调研苏州赛迪公司</a>
        </h3> -->
      </form>
    </div>
  </div>
</template>

<script>
import PCNavbar from '@/components/navbar/index.vue'
import MobileNavBar from '@/components/navbar/MobileNavBar.vue'
import moment from 'moment'
export default {
  created() { },
  data() {
    return {
      moment,
    }
  },
  components: {
    PCNavbar,
    MobileNavBar,
  },
  methods: {},
}
</script>

<style lang="scss">
.news_content {
  width: 50%;
  margin: 0 auto;
  padding-top: 100px;

  @media screen and (max-width:768px) {
    width: 90%;
  }

  .news_bread {
    font-size: 14px;
    margin-bottom: 10px;

    @media screen and (max-width:768px) {
      font-size: 14px;
    }
  }
}

.nr-div-p {
  text-align: left;
  font-size: 16px;
  font-weight: normal;
  line-height: 30px;
  margin: 0 25px;
  margin-top: 15px;
  margin-bottom: 20px;
  text-indent: 2em;
  color: #000;
}

.nr-div-p p {
  text-align: left;
  font-size: 14PX;
  line-height: 30PX;
  font-weight: normal;
  color: #000;

  @media screen and (max-width:768px) {
    line-height: 24px;
    font-size: 14px;
    text-indent: 2em;
    padding: 10px 0;
  }
}

.clear {
  clear: both;
}

.img_vsb_content {
  width: 70%;
}

.h1tit {
  @media screen and (max-width:768px) {
    font-size: 20px;
  }
}

.h4tit {
  @media screen and (max-width:768px) {
    font-size: 14px;
  }
}

.v_news_content {
  text-align: center;

  img {
    @media screen and (max-width:768px) {
      width: 90%;
    }
  }
}
</style>