<template>
  <div class="scroll_wrap_overflow" ref="wrapper">
    <div class="scroll_content" ref="scrollWidth">
      <div class="scroll_wrap">
        <div class="scroll_item" v-for="(item, index) in showImages.slice(0, 4)" :key="index" @click="showModal(item)">
          <div class="scroll_img">
            <img :src="item.imageUrl" style="user-select: none;pointer-events: none" alt="" ref="curImg" />
          </div>
          <div class="scroll_txt">{{ item.title }}</div>
        </div>
      </div>
    </div>
    <!-- 弹窗组件 -->
    <div v-if="isModalVisible" class="modal-mask" @click.self="closeModal">
      <div class="modal-container">
        <div class="modal-header">
          <span class="close" @click="closeModal">&times;</span>
        </div>
        <div class="modal-body">
          <img :src="selectedContent.imageUrl" class="modal-image" />
          <div class="modal-text">{{ selectedContent.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import http from '@/utils/http.js'
export default {
  data() {
    return {
      showImages: [],
      scroll: null,
      isModalVisible: false,
      selectedContent: null
    }
  },

  mounted() {
    this.loadNewsData()
    this.scroll = new BScroll(this.$refs.wrapper, {
      disableMouse: false, //启用鼠标拖动
      disableTouch: false, //启用手指触摸
      scrollX: true, //X轴滚动启用
      eventPassthrough: 'vertical'
    })
    const scrollXEnd = (4 - 2) * window.innerWidth / 10
    // console.log(this.showImages.length)
    // console.log(scrollXEnd)
    this.$refs.scrollWidth.style.width = 4 * window.innerWidth + 100 + 'px'
    console.log(this.$refs.scrollWidth.style.width)
    this.scroll.refresh()
    this.scroll.scrollTo(scrollXEnd, 0, 10000)
    setTimeout(() => {
      this.scroll.scrollTo(0, 0, 10000)
    }, 10000)
    //创建BScroll对象并设置参数
  },
  methods: {
    loadNewsData() {
      http.post('/new/getnews', { "type": "公司新闻" })
        .then(response => {
          if (response.data.code === 201) {
            this.showImages = response.data.data
          } else {
            console.error('获取数据失败', response.data.desc);
          }
        })
        .catch(error => {
          console.error('请求失败', error);
        });
    },
    // handleToDemo() {
    //   this.$router.push('/demo')
    // },
    showModal(content) {
      this.selectedContent = content
      this.isModalVisible = true
      // 禁用滚动
      this.scroll.disable()
    },
    closeModal() {
      this.isModalVisible = false
      // 启用滚动
      this.scroll.enable()
    }
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
        cursor: pointer;

        @media screen and (max-width: 768px) {
          width: 180px;
          margin-right: 20px;
        }

        .scroll_img {
          // background-color: rgba(0, 0, 0, 0.1);
          width: 100%;

          @media screen and (max-width: 768px) {
            width: 100%;
          }

          img {
            // width: 100%;
            height: 250px;
            // width: 100%;
            object-fit: contain;

            @media screen and (max-width: 768px) {
              // height: 250px;
              width: 100%;
              height: 150px;
              object-fit: cover;
            }
          }
        }

        .scroll_txt {
          color: #646464;
          font-size: 16px;
          margin-top: 30px;
          user-select: none;

          @media screen and (max-width: 768px) {
            font-size: 12px;
            width: 180PX;
          }
        }
      }
    }
  }

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s ease;
  }

  .modal-container {
    width: 70%;
    max-height: 80vh;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    position: relative;

    @media (max-width: 768px) {
      width: 90%;
    }
  }

  .modal-header {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .close {
    font-size: 28px;
    cursor: pointer;
    color: #666;

    &:hover {
      color: #333;
    }

    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
  }

  .modal-body {
    padding: 20px 0;
    overflow-y: auto;
    max-height: 70vh;
  }

  .modal-image {
    width: 100%;
    height: 300px;
    object-fit: contain;
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 300px;
    }
  }

  .modal-text {
    font-size: 16px;
    line-height: 1.6;
    color: #444;
    white-space: pre-wrap;

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
}
</style>