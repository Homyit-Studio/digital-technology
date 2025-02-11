<template>
  <div class="scroll_wrap_overflow" ref="wrapper">
    <div class="scroll_content" ref="scrollWidth">
      <div class="scroll_wrap">
        <div class="scroll_item" v-for="(item, index) in showImages.slice(0, 5)" :key="index" @click="showModal(item)">
          <div class="scroll_img">
            <img :src="item.src" style="user-select: none;pointer-events: none" alt="" ref="curImg" />
          </div>
          <div class="scroll_txt">{{ item.tit }}</div>
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
          <img :src="selectedContent.src" class="modal-image" />
          <div class="modal-text">{{ selectedContent.txt }}</div>
        </div>
      </div>
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
          src: require('@/assets/Z_img/news/news1.jpg'),
          tit: '2025年1月15日,“天-空-地”联合观测的公路边坡地质灾害智能识别与监测预警关键技术研究项目启动会在昌召开',
          txt: "1月15日，“天-空-地”联合观测的公路边坡地质灾害智能识别与监测预警关键技术研究项目启动会在江西师范大学召开。项目首席科学家、国际欧亚科学院院士林珲教授出席会议并作专题技术指导，江西师范大学、江西省自然资源测绘与监测院等项目承担单位负责人和技术骨干参会。本公司技术骨干承担该课题的智能监测、数字孪生线子课题，在会议现场做相关汇报、并听取了专家建议。本项目是省科技厅批准的江西省2024年度重点研发计划项目，资助经费120万元，分三年实施完成。项目针对多云雨地区公路边坡降雨型滑坡地质灾害智能识别差、风险评估不准确、智能监测手段单一等难题，围绕“降雨型公路边坡滑坡灾害模式识别理论、公路边坡多层级监测数据感知、尺度转换与特征融合”关键科学问题，拟攻克“多云雨公路边坡灾害智能识别、边坡地质灾害风险产品研制、空天地立体监测形变精度提升、重点边坡灾害数字孪生系统构建”等关键技术，探索公路边坡地质灾害识别与监测预警的新途径、新技术、新装备和新产品。"
        },
        {
          src: require('@/assets/Z_img/news/new2.png'),
          tit: '江西子午数智信息技术有限公司近日与联合国教科文组织国际自然与文化遗产空间技术中心（HIST）南昌分中心达成合作意向，双方将共同推进江西省文化遗产的数字化工作。',
          txt: "江西子午数智信息技术有限公司近日与联合国教科文组织国际自然与文化遗产空间技术中心（HIST）南昌分中心达成合作意向，双方将共同推进江西省文化遗产的数字化工作。此次合作旨在利用先进的空间信息技术，对江西省内的自然与文化遗产进行数字化监测、保护和管理，助力文化遗产的可持续发展。HIST南昌分中心成立于2019年3月，依托江西师范大学，致力于在华东地区开展自然与文化遗产的空间技术应用研究。 此次合作将充分发挥双方在技术和资源方面的优势，共同推动江西文化遗产数字化工作的深入开展。"
        },
        {
          src: require('@/assets/Z_img/news/new3.png'),
          tit: '2025年1月10日，江西子午数智信息技术有限公司近日宣布，聘请国际欧亚科学院院士、英国社会科学院院士林珲教授担任公司发展顾问。',
          txt: "2025年1月10日，江西子午数智信息技术有限公司近日宣布，聘请国际欧亚科学院院士、英国社会科学院院士林珲教授担任公司发展顾问。林珲教授现任江西师范大学地理与环境学院院长，是地理信息系统和遥感领域的专家，在多云多雨环境遥感、虚拟地理环境、空间综合人文学与社会科学等研究领域取得了突出成就。林珲教授1980年毕业于武汉测绘科技大学，随后考入中国科学院研究生院，师从陈述彭院士，1983年获理学硕士学位。他于1987年和1992年分别在美国布法罗大学获得文学硕士和哲学博士学位。1993年起，林教授在香港中文大学任教，担任地理与资源管理学系教授和太空与地球信息科学研究所所长。目前，他还担任香港航天科技集团首席科学家、国际华人地理信息科学协会（CPGIS）创会主席等职务。林珲教授的加盟，将为江西子午数智信息技术有限公司在地理信息系统和遥感技术领域的发展提供重要支持，助力公司在相关领域取得更大突破。"
        }
      ],
      scroll: null,
      isModalVisible: false,
      selectedContent: null
    }
  },
  mounted() {
    //创建BScroll对象并设置参数
    this.scroll = new BScroll(this.$refs.wrapper, {
      disableMouse: false, //启用鼠标拖动
      disableTouch: false, //启用手指触摸
      scrollX: true, //X轴滚动启用
      eventPassthrough: 'vertical'
    })
    const scrollXEnd = (this.showImages.length - 2) * this.$refs.curImg[0].width
    this.$refs.scrollWidth.style.width = this.showImages.length * this.$refs.curImg[0].width + 100 + 'px'
    this.scroll.refresh()
    this.scroll.scrollTo(-scrollXEnd, 0, 10000)
    setTimeout(() => {
      this.scroll.scrollTo(0, 0, 10000)
    }, 10000)
  },
  methods: {
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
            width: 180PX;
          }

          img {
            width: 100%;
            height: 250px;
            // width: 100%;
            object-fit: contain;

            @media screen and (max-width: 768px) {
              width: 100%;
            }
          }
        }

        .scroll_txt {
          color: #646464;
          font-size: 16px;
          margin-top: 30px;
          user-select: none;

          @media screen and (max-width: 768px) {
            font-size: 15px;
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