<template>
  <div class="production_wrap">
    <div class="with_center">
      <div class="bottom_img_wrap">
        <!-- Check if procardList3 has elements -->
        <div v-if="procardList3.length === 0" class="no_data_message">
          <p class="message_text">敬请期待, 数据即将上线......</p>
          <p class="more_info">
            更多官方信息，请咨询 
            <a href="https://www.dmctv.cn/" target="_blank" class="museum_link">
              中国传统村落数字博物馆
            </a>
          </p>
        </div>

        <div
          class="bottom_img_item"
          v-for="(item, index) in procardList3"
          :key="index"
          @click="openModal(item.imageUrl)"
        >
          <div class="bottom_img">
            <img :src="item.imageUrl" alt="" />
            <div class="img_desc">{{ item.caseIntroduction }}</div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isModalOpen" class="modal" @click.self="closeModal">
      <div class="modal_content">
        <span class="close_btn" @click="closeModal">X</span>
        <img :src="currentImage" alt="Large image" />
      </div>
    </div>
  </div>
</template>

<script>
import http from '@/utils/http.js'

export default {
  data() {
    return {
      procardList3: [],
      isModalOpen: false,
      currentImage: '',
    }
  },
  methods: {
    openModal(image) {
      this.currentImage = image;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  },
  mounted() {
    http.get('/case/getallcases')
      .then(response => {
        if (response.data.code === 201) {
          this.procardList3 = response.data.data.filter(item => item.type === '传统数字村落博物馆').reverse();
          // console.log(this.procardList3)
        } else {
          console.error('获取数据失败', response.data.desc);
        }
      })
      .catch(error => {
        console.error('请求失败', error);
      });
  }
}
</script>

<style lang="scss" scoped>
.production_wrap {
  padding: 20px;
}

.with_center {
  display: flex;
  justify-content: center;
}

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
      width: 80%;
    }

    .bottom_img {
      width: 100%;
      height: 350px;
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

  /* Message styling */
  .no_data_message {
    text-align: center;
    font-size: 35px; /* Increase font size */
    color: #333;
    padding: 30px; /* Increase padding for better spacing */
    // background: #f2f2f2; /* Lighter background */
    border-radius: 8px;
    width: 100%;
    margin-top: 30px;
    font-weight: bold;
    // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add some shadow for depth */
  }

  .message_text {
    margin-bottom: 10px;
  }

  .more_info {
    font-size: 18px;
    color: #666;
  }

  .museum_link {
    color: #007bff; /* Blue link color */
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
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
  animation: fadeIn 0.3s ease;

  .modal_content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    animation: slideIn 0.3s ease;

    .close_btn {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 25px;
      cursor: pointer;
      color: #333;
      transition: color 0.3s ease;

      &:hover {
        color: #000;
      }
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 5px;
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
}
</style>
