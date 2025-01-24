<template>
  <div class="core_wrap">
    <div class="core_title">核心能力</div>
    <el-row class="core_options" type="flex" justify="space-between">
      <el-col
        class="core_items hidden-xs-only"
        v-for="(item, index) in coresList"
        :key="index"
        :class="item.isActive ? 'is_active' : ''"
        @click.native="changeCurrentIndex(index)"
        >{{ item.tit }}</el-col
      >
      <el-col
        class="core_items2 hidden-sm-and-up"
        v-for="(item, index) in coresList"
        :key="item.tit"
        :class="item.isActive ? 'is_active' : ''"
        @click.native="changeCurrentIndex(index)"
        >{{ item.tit }}</el-col
      >
    </el-row>
    <component :is="currentComponent[currentIndex]"></component>
  </div>
</template>

<script>
import CoreItemOne from './CoreItemOne.vue'
import CoreItemTwo from './CoreItemTwo.vue'
import CoreItemThree from './CoreItemThree.vue'
export default {
  data() {
    return {
      coresList: [
        {
          tit: '核心资源整合能力',
          isActive: true,
        },
        {
          tit: '多产业全球公域数据积累',
          isActive: false,
        },
        {
          tit: '亿级产业动态本体',
          isActive: false,
        },
      ],
      currentIndex: 0,
      currentComponent:[CoreItemOne,CoreItemTwo,CoreItemThree]
    }
  },
  methods: {
    changeCurrentIndex(index) {
      this.currentIndex = index
      this.coresList.map((v, i) => {
        i === index ? (v.isActive = true) : (v.isActive = false)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.core_wrap {
  width: 100%;
  margin-top: 50px;
  text-align: center;
  .core_title {
    color: #203040;
    font-size: 40px;
    font-weight: bold;
    padding: 30px 0;
    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
  .core_options {
    width: 70%;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
      width: 90%;
    }
    .core_items {
      width: 30%;
      height: 70px;
      border: solid 1px #04cac7;
      font-size: 30px;
      line-height: 70px;
      user-select: none;
      cursor: pointer;
      margin-bottom: 40px;
    }
    .core_items2{
      width: 30%;
      height: 100PX;
      display: flex;
      justify-content: center;
      align-items: center;
      border: solid 1px #04cac7;
      padding: 5PX;
      font-size: 0.9rem;
    }
    .is_active {
      color: #fff;
      font-weight: bold;
      background: linear-gradient(134deg, #0649b8 1%, #0a7fd7 41%, #03d2c5 99%);
      box-shadow: 0 0.5rem 1.5rem 0 rgb(0 135 168 / 50%);
    }
  }
}
</style>