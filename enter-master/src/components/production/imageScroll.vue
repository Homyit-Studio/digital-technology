<template>
  <div class="scroll_wrap_overflow" ref="wrapper">
    <div class="scroll_content" ref="scrollWidth">
      <div class="scroll_wrap">
        <div
          class="scroll_item"
          v-for="(item, index) in showImages"
          :key="index"
        >
          <div class="scroll_img">
            <img :src="item.src" alt="" ref="curImg"/>
          </div>
          <div class="scroll_txt">{{ item.txt }}</div>
        </div>
      </div>
    </div>
    <div class="scroll_bottom_btn" @click="handleToDemo">
      <el-button class="bottom_btn" round
        >预览云逸大脑demo</el-button
      >
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      showImages: [
        {
          src: require('@/assets/img/53.png'),
          txt: '产业大脑赋能经济发展，产业雷达、一键入园双发布，云逸创造助力杭州市数字化改革',
        },
        {
          src: require('@/assets/img/52.png'),
          txt: '云逸创造被《中国新闻》报点赞，基于产业大脑的探索和实践写入两会专刊，为全国各地数字化改革提供借鉴与案例参考',
        },
        {
          src: require('@/assets/img/51.png'),
          txt: '云逸产业大脑从生物医药向人工智能、新材料、新能源汽车等战略性新兴产业延伸，并率先在北京市实现全市部署',
        },
        {
          src: require('@/assets/img/55.png'),
          txt: '杭州日报报道《“数字企业天团”与“数智杭州”建设双向赋能，高新区（滨江）加速产业链治理链“双链”融合》，头版点赞云逸创造！',
        },
      ],
      scroll: null,
    }
  },
  mounted() {
    //创建BScroll对象并设置参数
    this.scroll = new BScroll(this.$refs.wrapper, {
      disableMouse: false, //启用鼠标拖动
      disableTouch: false, //启用手指触摸
      scrollX: true, //X轴滚动启用
      eventPassthrough:'vertical'
    })
    const scrollXEnd = (this.showImages.length - 2) * this.$refs.curImg[0].width
    this.$refs.scrollWidth.style.width = this.showImages.length * this.$refs.curImg[0].width + 100 + 'px'
    this.scroll.refresh()
    this.scroll.scrollTo(-scrollXEnd,0,10000)
    setTimeout(() => {
      this.scroll.scrollTo(0,0,10000)
    },10000)
  },
  methods: {
    handleToDemo() {
      this.$router.push('/demo')
    },
  },
}
</script>

<style lang="scss" scoped>
.scroll_wrap_overflow {
  width: 70%;
  margin: 0 auto;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  .scroll_content {
    .scroll_wrap {
      width: 100%;
      display: flex;
      @media screen and (max-width: 768px) {
        width: 100%;
        display: flex;
      }
      .scroll_item {
        width: 450px;
        margin-top: 30px;
        margin-right: 30px;
        flex-shrink: 0;
        @media screen and (max-width: 768px) {
          width: 180px;
          margin-right: 20px;
        }
        .scroll_img {
          width: 100%;
          @media screen and (max-width: 768px) {
            width: 180PX;
          }
          img {
            width: 100%;
            @media screen and (max-width: 768px) {
              width: 100%;
            }
          }
        }
        .scroll_txt {
          color: #646464;
          font-size: 16px;
          margin-top: 30px;
          @media screen and (max-width: 768px) {
            font-size: 15px;
            width: 180PX;
          }
        }
      }
    }
  }
  .scroll_bottom_btn {
    text-align: center;
    .bottom_btn {
      margin-top: 70px;
      background: orange;
      color: #fff;
      font-size: 13px;
      font-weight: bold;
      @media screen and (max-width: 768px) {
        border-radius: 20px;
        width: 140px;
        height: 40px;
        font-size: 14px;
      }
    }
  }
}
</style>