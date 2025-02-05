<template>
  <div class="production_wrap">
    <div class="production_img">
      <div class="img_tit">数字文保引擎</div>
      <div class="img_desc">文物遗址数字化的核心，赋能文化保护、服务历史传承</div>
    </div>


    

     <!-- 子午产品优势 -->
    <div class="func_wrap hidden-xs-only" style="background: #f4f9fc">

      <div class="func_wrap_inner">
        <div class="func_tit"><div class="consult_title_wrap">
      <div class="consult_inner">

        <div class="inner_left">
          <img src="../../assets/img/tupianright.png" alt="" />
        </div>

        <div class="inner_center" style="width: 40%">
          <div class="consult_title">子午产品独特优势</div>
          <div class="consult_desc"></div>
        </div>

        <div class="inner_right">
          <img src="../../assets/img/tupianleft.png" alt="" />
        </div>

      </div>
    </div></div>
      </div>

      <div class="double_card_wrap">
        <el-row class="double_card" type="flex">

          <el-col :span="7" :xs="11" class="double_card_item animate__animated animate__flipInX">
            <div class="double_card_bg">多学科融合的专业团队</div>
            <p>多学科背景团队，6位博士、16位硕士，理论与实践结合，创新解决文物数字化难题，推动技术进步。</p>
          </el-col>

          <el-col :span="7" :xs="11" class="double_card_item animate__animated animate__flipInX">
            <div class="double_card_bg">全流程数字化解决方案</div>
            <p>提供从数据采集、处理到展示的全流程服务，构建数字化平台，支持文物存储、管理及多领域应用。</p>
          </el-col>

           <el-col :span="7" :xs="11" class="double_card_item animate__animated animate__flipInX">
            <div class="double_card_bg">创新技术与文化传承结合</div>
            <p>运用VR等技术，让文物“活起来”，提供沉浸式体验，助力学术研究、公众教育与文化创意产业发展。</p>
          </el-col>

        </el-row>
      </div>
    </div>

     <div class="func_wrap_mobile hidden-sm-and-up">
      <img src="@/assets/img/ys.png" alt="">
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
              3D建模，成果展示
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
 .consult_title_wrap {
    width: 100%;
    margin-top: 50px;
    @media screen and (max-width: 768px) {
      margin-top: 30px;
    }
    .consult_inner {
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
        width: 450px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 50px;
        @media screen and (max-width: 768px) {
          flex: 3;
        }
        .consult_title {
          font-size: 40px;
          font-weight: bold;
          @media screen and (max-width: 768px) {
            font-size: 1rem;
          }
        }
        .consult_desc {
          font-size: 16px;
          color: #787878;
          margin-top: 10px;
          @media screen and (max-width: 768px) {
            margin-top: 10px;
            font-size: 13px;
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
  .consult_card_wrap {
    display: flex;
    justify-content: center;
    margin-top: 50px;
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
            background: url('../../assets/img/bg3.png');
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
      .func_card_mobile {
        width: 100%;
        img {
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
          height: 340px;
          background: #fff;
          padding: 30px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          &:nth-child(1){
            background-image: url('../../assets/img/ys1.png');
            background-position: 90% 10%;
            background-repeat: no-repeat;
            background-size: 20%;
          }
          &:nth-child(2){
            background-image: url('../../assets/img/ys2.png');
            background-position: 90% 10%;
            background-repeat: no-repeat;
            background-size: 20%;
          }
          &:nth-child(3){
            background-image: url('../../assets/img/ys3.png');
            background-position: 90% 10%;
            background-repeat: no-repeat;
            background-size: 20%;
          }
          box-shadow: 10px 10px 20px rgba(0,0,0,.1);
          @media screen and (max-width: 768px) {
            height: 140px;
            &:nth-child(n + 3) {
              margin-top: 20px;
            }
          }
          .double_card_bg {
            font-size: 24px;
            color: #000;
            font-weight: bold;
          }
          p {
            line-height: 40PX;
            font-size: 18px;
            margin-top: 30px;
          }
        }
      }
    }
  }
  .func_wrap_mobile{
    width: 100%;
    img{
      width: 100%;
    }
  }
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
