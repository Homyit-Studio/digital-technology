<template>
  <el-row class="core_one_wrap">
    <el-col class="one_left">
      <div class="left_tit">
        背靠工业和信息化部直属单位--中国电子信息产业发展研究院（CCID），产业资源整合能力强
      </div>
      <ul class="left_desc">
        <li>依托赛迪支撑制造强国和网络强国建设，聚焦两化融合、智能制造、数字经济、军民融合等重点领域，逐步形成了研究咨询、评测认证、科技服务、媒体会展、军工业务、产业金融6大业务布局，累计为20余个国家部委、400余个地方政府、5000余个行业企业提供服务。</li>
      </ul>
      <div class="left_card">
        <div class="card_item" v-for="(item, index) in cardList" :key="index">
          <i :class="item.icon" class="iconfont"></i>
          <span class="item_txt">{{ item.txt }}</span>
        </div>
      </div>
    </el-col>
    <el-col class="one_right">
      <img src="@/assets/img/right1.png" alt="">
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      cardList: [
        {
          icon: 'icon-chanyelian-shengwuyiyao',
          txt: '生物医药',
        },
        {
          icon: 'icon-shengchanzhizao',
          txt: '高端装备制造',
        },
        {
          icon: 'icon-lvye',
          txt: ' 新能源',
        },
        {
          icon: 'icon-zu',
          txt: ' 新材料',
        },
        {
          icon: 'icon-dc-icon-xinxijishu',
          txt: '新一代信息技术',
        },
        {
          icon: 'icon-jienenghuanbao',
          txt: ' 节能环保',
        },
        {
          icon: 'icon-shuzichuangyi',
          txt: '数字创意',
        },
        {
          icon: 'icon-fenzishi',
          txt: '科技服务业务',
        },
        {
          icon: 'icon-xinnengyuan',
          txt: '新能源汽车',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.core_one_wrap {
  display: flex;
  justify-content: center;
  text-align: left;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
  .one_left {
    width: 40%;
    @media screen and (max-width: 768px) {
      width: 90%;
    }
    .left_tit {
      font-size: 23px;
      font-weight: bold;
      color: #3e3e3e;
      @media screen and (max-width: 768px) {
        font-size: 1.2rem;
        margin-top: 20PX;
      }
    }

    .left_desc {
      color: #717171;
      padding: 10px 40px 20px 40px;
      li {
        line-height: 25PX;
      }
      @media screen and (max-width: 768px) {
        font-size: 14px;
      }
    }

    .left_card {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 25px;
      margin-right: 80px;
      @media screen and (max-width: 768px) {
        margin: 0;
      }
      .card_item {
        box-sizing: border-box;
        width: 30%;
        height: 50px;
        background: #fff;
        box-shadow: 0 -0.0625rem 0.4375rem 0 silver,
          0 0 0.75rem 0 rgb(0 0 0 / 10%);
        display: flex;
        align-items: center;
        color: #0991d3;
        padding: 0 20px;
        cursor: pointer;
        @media screen and (max-width: 768px) {
          height: 50PX;
        }
        i{
          font-size: 1.3rem;
        }
        &:nth-child(n + 4) {
          margin-top: 30px;
          @media screen and (max-width: 768px) {
            margin-top: 16PX;
          }
        }
        &:hover .item_txt {
          letter-spacing: 4px;
        }
        .item_txt {
          width: 100%;
          font-weight: bold;
          font-size: 17px;
          margin-left: 10px;
          transition: all 1s;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          @media screen and (max-width: 768px) {
            font-size: 14px;
          }
        }
      }
    }
  }

  .one_right {
    width: 20%;
    height: 100%;
    @media screen and (max-width: 768px) {
      width: 70%;
      margin-top: 20PX;
    }
    img{
      width: 100%;
      margin-top: 40px;
    }
  }
}
</style>