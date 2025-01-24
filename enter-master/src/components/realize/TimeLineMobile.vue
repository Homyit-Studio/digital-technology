<template>
  <div class="timeline_wrap hidden-sm-and-up">
    <div class="timeline_aside">
      <div class="title">2021年</div>
    </div>
    <el-container class="timeline_container">
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
        <div class="timeline_aside">
          <div class="title">2020年</div>
        </div>
        <div class="main_item" v-for="(item,index) in timelineList2" :key="index+10">
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
          createTime:'2021-06-29'
        },
        {
          img:'https://www.hsmap.com/static/img/new6.png',
          title:'健康中国人”系列圆桌论坛（云逸专场）被推送至人民网首页全国两会专区',
          createTime:'2021-03-01'
        },
        {
          img:'https://www.hsmap.com/static/img/new5.png',
          title:'与丹纳赫中国生命科学、高瓴资本联合举办第一届中国生物产业园区合作发展高峰论坛',
          createTime:'2021-02-01'
        },
        {
          img:'https://www.hsmap.com/static/img/new4.png',
          title:'携手重庆市、重庆九龙坡区共建重庆市生物医药产业赋能中心和中国生物医药产业互联网中心',
          createTime:'2021-01-01'
        },
      ],
      timelineList2:[
        {
          img:'https://www.hsmap.com/static/img/new3.png',
          title:'《中国新闻报》点赞云逸创造产业大脑的数字化实践，并写入两会专刊',
          createTime:'2021-03-01'
        },
        {
          img:'https://www.hsmap.com/static/img/new2.png',
          title:'《中国新闻报》点赞云逸创造产业大脑的数字化实践，并写入两会专刊',
          createTime:'2021-03-01'
        },
        {
          img:'https://www.hsmap.com/static/img/new1.png',
          title:'《中国新闻报》点赞云逸创造产业大脑的数字化实践，并写入两会专刊',
          createTime:'2021-03-01'
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
  .timeline_aside {
    .title {
      margin: 12PX;
      font-size: 2rem;
      background: linear-gradient(134deg,#0f439a,#03d2c5);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: bold;
    }
  }
  .timeline_container {
    width: 100%;
    .timeline_main {
      width: 100%;
      padding: 0 20PX;
      .main_item {
        display: flex;
        &:nth-child(n+2){
          margin-top: 1rem;
        }
        .main_left {
          font-size: 1rem;
          font-weight: bold;
          width: 80PX;
        }
        .main_right {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          p{
            font-size: 16PX;
          }
          img{
            width: 100%;
            object-fit: cover;
            margin-top: 10PX;
          }
        }
      }
    }
  }
}
</style>