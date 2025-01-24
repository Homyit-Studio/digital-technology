<template>
  <div class="timeline_wrap hidden-xs-only">
    <el-container class="timeline_container">
      <el-aside width="30%" class="timeline_aside">
        <div class="title">2021年</div>
        <div class="title">2020年</div>
      </el-aside>
      <el-main class="timeline_main" ref="lalala">
        <div class="main_item" v-for="(item,index) in timelineList" :key="index">
          <div class="main_left">{{moment(item.createTime).format('MM')}}月</div>
          <div class="main_right">
            <p>
              {{item.title}}
            </p>
            <img :src="item.img" alt="" />
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      timelineList: [
        {
          img:'https://www.hsmap.com/static/img/new7.png',
          title:'《中国新闻报》点赞云逸创造产业大脑的数字化实践，并写入两会专刊',
          createTime:'2021-3-1'
        },
        {
          img:'https://www.hsmap.com/static/img/new6.png',
          title:'健康中国人”系列圆桌论坛（云逸专场）被推送至人民网首页全国两会专区',
          createTime:'2021-3-1'
        },
        {
          img:'https://www.hsmap.com/static/img/new5.png',
          title:'与丹纳赫中国生命科学、高瓴资本联合举办第一届中国生物产业园区合作发展高峰论坛',
          createTime:'2021-2-1'
        },
        {
          img:'https://www.hsmap.com/static/img/new4.png',
          title:'携手重庆市、重庆九龙坡区共建重庆市生物医药产业赋能中心和中国生物医药产业互联网中心',
          createTime:'2021-1-1'
        },
        {
          img:'https://www.hsmap.com/static/img/new3.png',
          title:'《中国新闻报》点赞云逸创造产业大脑的数字化实践，并写入两会专刊',
          createTime:'2021-3-1'
        },
        {
          img:'https://www.hsmap.com/static/img/new2.png',
          title:'《中国新闻报》点赞云逸创造产业大脑的数字化实践，并写入两会专刊',
          createTime:'2021-3-1'
        },
        {
          img:'https://www.hsmap.com/static/img/new1.png',
          title:'《中国新闻报》点赞云逸创造产业大脑的数字化实践，并写入两会专刊',
          createTime:'2021-3-1'
        },
      ],
      moment,
      imgHeight:0
    }
  },
  mounted() {
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
.timeline_wrap {
  width: 100%;
  margin: 0 auto;
  padding-top: 1rem;
  .timeline_container {
    width: 100%;
    .timeline_aside {
      .title {
        border-top: solid 4px #2091d3;
        font-size: 2rem;
        color: #0f439a;
        &:nth-child(1){
          height: 1000PX;
        }
      }
    }
    .timeline_main {
      width: 100%;
      .main_item {
        display: flex;
        height: 280PX;
        overflow: hidden;
        &:nth-child(n+2){
          margin-top: 50PX;
        }
        .main_left {
          font-size: 0.9rem;
          font-weight: bold;
          margin: 0 20PX;
        }
        .main_right {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          p{
            font-size: 14PX;
          }
          img{
            width: 70%;
            margin-top: 20PX;
            object-fit: cover;
          }
        }
      }
    }
  }
}
</style>