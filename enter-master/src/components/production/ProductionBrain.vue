<template>
  <div class="production_wrap">
    <div class="production_img">
      <div class="img_tit">数字文保引擎</div>
      <div class="img_desc">文物遗址数字化的核心，赋能文化保护、服务历史传承</div>
    </div>

    <div class="product_shows_wrap">
      <div class="production_title_wrap">
        <div class="production_inner">
          <div class="inner_left">
            <img src="../../assets/img/tupianright.png" alt="" />
          </div>
          <div class="inner_center">
            <div class="production_title">公司成果</div>
            <div class="production_desc">
              匠心护史，科技焕新
            </div>
          </div>
          <div class="inner_right">
            <img src="../../assets/img/tupianleft.png" alt="" />
          </div>
        </div>
      </div>
      <div class="with_center">
        <div class="bottom_img_wrap">
          <div
            class="bottom_img_item"
            v-for="(item, index) in procardList3"
            :key="index"
            @click="openModal(item.src)"
          >
            <div class="bottom_img">
              <img :src="item.src" alt="" />
              <div class="img_desc">{{ item.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CallMe />
    <MobileCallme />
    
    <!-- Modal for large image -->
    <div v-if="isModalOpen" class="modal" @click.self="closeModal">
      <div class="modal_content">
        <span class="close_btn" @click="closeModal">X</span>
        <img :src="currentImage" alt="Large image" />
      </div>
    </div>
  </div>
</template>


<script>
import CallMe from '@/components/callme/index'
import MobileCallme from '@/components/callme/MobileCallme.vue'

export default {
  data() {
    return {
      procardList3: [
        {
          desc: '大井朱德陈毅同志旧居完整拼接',
          src: require('@/assets/img/work111.png'),
        },
        {
          desc: '大井毛泽东同志旧居完整拼接',
          src: require('@/assets/img/work222.png'),
        },
        {
          desc: '小井-红军医院',
          src: require('@/assets/img/work333.png'),
        },
        {
          desc: '茨坪-湘赣边界特委旧址',
          src: require('@/assets/img/work444.png'),
        },
        {
          desc: '雯峰书院',
          src: require('@/assets/img/work555.png'),
        },
      ],
      isModalOpen: false,
      currentImage: '',
    }
  },
  components: {
    CallMe,
    MobileCallme,
  },
  methods: {
    openModal(image) {
      this.currentImage = image;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.production_wrap {
  width: 100%;
  .production_img {
    width: 100%;
    height: 600px;
    @media screen and (max-width: 768px) {
      height: 50vw;
    }
    background: url('../../assets/img/banner22.png') 0 0 no-repeat;
    background-size: cover;
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
  }

  .production_title_wrap {
width: 100%;
margin-top: 50px;
margin-bottom: 50px;
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
  .product_shows_wrap {
    width: 100%;
    background: url('../../assets/img/witness-bgc369221.png') 0 0 no-repeat;
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
        }

        .bottom_img_item {
          width: 48%; 
          display: flex;
          flex-wrap: wrap;
          margin-top: 20px;
          margin: 10px;
          @media screen and (max-width: 768px) {
            width: 45%; 
          }

          .bottom_img {
            width: 100%;
            height: 300px;
            position: relative;
            overflow: hidden;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;

            &:hover {
              transform: scale(1.02);
              box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
            }

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.3s ease;
            }

            .img_desc {
              position: absolute;
              bottom: 0;
              width: 100%;
              text-align: center;
              color: #fff;
              font-size: 18px;
              background: rgba(0, 0, 0, 0.6);
              padding: 10px;
              font-weight: bold;
              transition: transform 0.3s ease;
            }
          }
        }
      }
    }
  }

  /* Modal styling */
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal_content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    background: #fff;
    padding: 20px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  .close_btn {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 25px;
    cursor: pointer;
  }

  .modal_content img {
    width: 100%;
    height: auto;
  }
}
</style>
