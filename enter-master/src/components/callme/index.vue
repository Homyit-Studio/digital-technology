<template>
  <div class="callme_total_wrap hidden-xs-only">
    <div class="callme_top_wrap">

      <pre> <img src="../../assets/img/Phone.png" alt=""> 189-7914-1505    |   以匠心筑史，以科技维新</pre>
    </div>
    <div class="callme_bottom_wrap">
      <div class="bottom_container">
        <div class="items_wrap">
          <div class="item_tit">产品</div>
          <div class="item_options">
            <span @click="handleToRouter('/production/1')">产品示例</span>
            <!-- <span @click="handleToRouter('/production/2')">云招商</span>
            <span @click="handleToRouter('/production/3')">企业创新服务</span>
            <span @click="handleToRouter('/production/4')">企业咨询</span> -->
          </div>
        </div>
        <div class="items_wrap">
          <div class="item_tit">新闻资讯</div>
          <div class="item_options">
            <span @click="handleToRouter('/threenav')">公司资讯</span>
            <!-- <span @click="handleToRouter('/fournav/2')">精选文章</span>
            <span @click="handleToRouter('/fournav/3')">媒体报道</span> -->
          </div>
        </div>
        <div class="items_wrap">
          <div class="item_tit">发展进程</div>
          <div class="item_options">
            <span @click="handleToRouter('/fournav/1')">公司大事件</span>
            <!-- <span @click="handleToRouter('/fournav/2')">精选文章</span>
            <span @click="handleToRouter('/fournav/3')">媒体报道</span> -->
          </div>
        </div>

        <div class="items_wrap">
          <div class="item_tit">联系我们</div>
          <div class="item_options">
            <el-menu :default-active="activeIndex" class="el_menu_demo" mode="horizontal" background-color="#21282D"
              text-color="#8F9095" active-text-color="#8F9095" @select="handleSelect">
              <el-menu-item index="1" class="el_menu_item">南昌</el-menu-item>
              <!-- <el-menu-item index="2" class="el_menu_item">成都</el-menu-item>
              <el-menu-item index="3" class="el_menu_item">北京</el-menu-item>
              <el-menu-item index="4" class="el_menu_item">重庆</el-menu-item> -->
            </el-menu>
            <div class="massage_show">
              <p>{{ cityInfomation[showCity].phone }}</p>
              <p>{{ cityInfomation[showCity].eamil }}</p>
              <p>{{ cityInfomation[showCity].address }}</p>
            </div>
          </div>
        </div>
        <!-- <div class="items_wrap hidden-md-and-down" style="margin-left: 120px">
          <div class="item_tit">关注我们</div>
          <div class="item_options">
            <img src="@/assets/img/guanzhu.png" alt="" />
            <span style="text-align: center; margin-top: 15px">子午数智</span>
          </div>
        </div>
        <div class="items_wrap hidden-md-and-down">
          <div class="item_tit">关注我们</div>
          <div class="item_options">
            <img src="@/assets/img/guanzhu.png" alt="" />
            <span style="text-align: center; margin-top: 15px">子午数智</span>
          </div>
        </div> -->
      </div>
      <div class="navigate_wrap">
        <span>友情链接:</span>
        <a href="http://www.gov.cn/">中华人民共和国中央人民政府</a>
        <a href="http://www.miit.gov.cn/">中华人民共和国工业和信息化部</a>
        <a href="https://www.fmprc.gov.cn/chn/gxh/tyb/">中华人民共和国外交部</a>
        <a href="http://www.cinn.cn/">中国工业新闻网</a>
        <a href="https://www.chnmuseum.cn/">中国国家博物馆</a>
        <a href="https://www.jxmuseum.cn/">江西省博物馆</a>
        <a href="http://www.chinaeinet.com/">中国工业和信息化</a>
        <a href="http://www.cio360.net/">中国信息主管网</a>
        <a href="http://www.cena.com.cn/">中国电子信息产业</a>
        <a href="http://www.ccidcom.com/">通信产业网</a>
        <a href="http://www.cstc.org.cn/">中国软件评测中心</a>
        <a href="http://www.saism.com.cn/">软件和集成电胳</a>
        <a href="http://www.ccidreport.com/">中市场情报中心</a>
        <p>
          Copyright ©2025 子午数智 . All Rights Reserved .
          <!-- （浙ICP备15031491号-1浙公网安备 33010802005636号） -->
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      cityInfomation: [
        {
          phone: '189-7914-1505',
          eamil: 'jxzwshuzi@163.com',
          address: '江西省南昌市南昌高新技术产业开发区瑶湖西大道888号东方豪庭小区1#楼0803室',
        },
        // {
        //   phone: '028-86713133',
        //   eamil: 'Contact@hsmap.com',
        //   address: '成都市高新区天晖路360号晶科一号1806室',
        // },
        // {
        //   phone: '0571-86885326（转）',
        //   eamil: 'Contact@hsmap.com',
        //   address: '北京市朝阳区安翔北里11号院北京创业大厦B座1005',
        // },
        // {
        //   phone: '15051586330',
        //   eamil: 'Contact@hsmap.com',
        //   address: '重庆市九龙坡区华岩镇华锦路26号',
        // },
      ],
      showCity: 0,
    }
  },
  methods: {
    handleSelect(index) {
      this.showCity = parseInt(index) - 1
    },
    handleToRouter(url) {
      this.$router.replace(url)
    },
  },
}
</script>

<style lang="scss" scoped>
.callme_total_wrap {
  width: 100%;
  margin-top: 80px;

  .callme_top_wrap {
    width: 100%;
    height: 310px;
    background: url('../../assets/img/cydcbg.80d9b0b.jpg') 0 0 no-repeat;
    background-size: 100% 100%;
    font-size: 2vw;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

    img {
      display: inline-block;
      vertical-align: middle;
      width: 10vw;
      border-style: none;
    }

    pre {
      display: inline-block;
      vertical-align: middle;
    }
  }

  .callme_bottom_wrap {
    width: 100%;
    background: #21282d;
    color: #fff;
    padding-top: 70px;

    .bottom_container {
      width: 70%;
      margin: 0 auto;
      display: flex;
      padding-bottom: 60px;
      border-bottom: solid #363636 2px;

      .items_wrap {
        margin-right: 100px;

        .item_tit {
          font-size: 22px;
        }

        .item_options {
          display: flex;
          flex-direction: column;
          width: 120px;

          span {
            color: hsla(0, 0%, 100%, 0.5);
            font-size: 16px;
            margin-top: 35px;
            cursor: pointer;

            &:hover {
              font-weight: bold;
            }
          }

          .el_menu_demo {
            border: none;
            background: none;
            margin-top: 10px;
            width: 300PX;

            .el_menu_item {
              &:hover {
                font-weight: bold;
              }
            }
          }

          .massage_show {
            color: hsla(0, 0%, 100%, 0.5);
            font-size: 15px;
            width: 300PX;
            height: 80px;

            p {
              margin-top: 10px;
            }
          }

          img {
            width: 100%;
            margin-top: 20px;
          }
        }
      }
    }

    .navigate_wrap {
      width: 70%;
      margin: 0 auto;
      margin-top: 40px;
      padding-bottom: 15px;
      // word-break: keep-all;
      // word-wrap: break-word;
      display: flex;
      flex-wrap: wrap;

      a {
        color: hsla(0, 0%, 100%, 0.5);
        font-size: 16px;
        margin-right: 33px;
        text-decoration: none;
      }

      span {
        color: #fff;
        padding-right: 30px;
        font-size: 18px;
        margin-right: 0;
      }

      p {
        font-size: 16px;
        color: #4e5557;
      }
    }
  }
}
</style>