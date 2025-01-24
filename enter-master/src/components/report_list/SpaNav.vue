<template>
  <div class="navbar_wrap hidden-xs-only">
    <div class="navbar_container">
      <div class="navbar_left">
        <img src="@/assets/img/home/logo_color.svg" alt="云逸创造..." />
      </div>
      <div class="navbar_right">
        <el-menu
          :default-active="activeIndex"
          class="el_menu_demo"
          mode="horizontal"
          background-color="#fff"
          text-color="#333"
          active-text-color="#000"
          @select="changeCurrentPage"
        >
          <el-menu-item index="1" class="menu_item">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">产品</template>
            <el-menu-item index="2-1" class="menu_item">产业大脑</el-menu-item>
            <el-menu-item index="2-2" class="menu_item">云招商</el-menu-item>
            <el-menu-item index="2-3" class="menu_item"
              >企业创新服务</el-menu-item
            >
            <el-menu-item index="2-4" class="menu_item">产业咨询</el-menu-item>
          </el-submenu>
          <el-menu-item index="3" class="menu_item">云逸研究院</el-menu-item>
          <el-submenu index="4" class="menu_item">
            <template slot="title">内容中心</template>
            <el-menu-item index="4-1" class="menu_item">行业报告</el-menu-item>
            <el-menu-item index="4-2" class="menu_item">精选文章</el-menu-item>
            <el-menu-item index="4-3" class="menu_item">媒体报道</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">了解云逸</template>
            <el-menu-item index="5-1" class="menu_item">云逸介绍</el-menu-item>
            <!-- <el-menu-item index="5-2" class="menu_item">发展历程</el-menu-item> -->
            <!-- <el-menu-item index="5-3" class="menu_item">荣誉资质</el-menu-item> -->
            <el-menu-item index="5-4" class="menu_item">联系云逸</el-menu-item>
          </el-submenu>
          <el-menu-item index="6" class="menu_item"
            ><a href="/demo">立即体验</a></el-menu-item
          >
        </el-menu>
        <!-- <a href="#">立即体验</a> -->
        <span class="right_phone">
          <i class="el-icon-phone"></i>
          <span> 000-000-0000 </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      navBackground:'#fff'
    }
  },
  props: {
    selectIndex: {
      type: String,
      default: '0',
    },
  },
  mounted() {
    this.activeIndex = this.selectIndex
    window.onscroll = () => {
      if(document.documentElement.scrollTop > 390){
        this.navBackground = '#000'
      }else{
        this.navBackground = '#fff'
      }
    }
  },
  methods: {
    changeCurrentPage(index) {
      this.activeIndex = index
      switch (this.activeIndex) {
        case '1':
          this.$router.push('/home').catch((v) => {})
          break
        case '2-1':
          this.$router.push('/production/1').catch((v) => {})
          break
        case '2-2':
          this.$router.push('/production/2').catch((v) => {})
          break
        case '2-3':
          this.$router.push('/production/3').catch((v) => {})
          break
        case '2-4':
          this.$router.push('/production/4').catch((v) => {})
          break
        case '3':
          this.$router.push('/threenav').catch((v) => {})
          break
        case '4-1':
          this.$router.push('/fournav/1').catch((v) => {})
          break
        case '4-2':
          this.$router.push('/fournav/2').catch((v) => {})
          break
        case '4-3':
          this.$router.push('/fournav/3').catch((v) => {})
          break
        case '5-1':
          this.$router.push('/fivenav/1').catch((v) => {})
          break
        case '5-2':
          this.$router.push('/fivenav/2').catch((v) => {})
          break
        case '5-3':
          this.$router.push('/fivenav/3').catch((v) => {})
          break
        case '5-4':
          this.$router.push('/fivenav/2').catch((v) => {})
          break
        default:
          break
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar_wrap {
  width: 100%;
  height: 70px;
  background: #fff;
  backdrop-filter: saturate(180%) blur(0.5rem);
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 5px 30px rgba($color: #000000, $alpha: .05);
  .navbar_container {
    width: 70%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .navbar_left {
      display: flex;
      align-items: center;
      height: 100%;
      img {
        width: 160px;
        cursor: pointer;
      }
    }
    .navbar_right {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-size: 20px;
      a {
        text-decoration: none;
        color: #0038a4;
        display: inline-block;
        width: 100px;
        background: #ffa400;
        line-height: 27px;
        text-align: center;
        border-radius: 20px;
        padding: 5px;
      }
      .el_menu_demo {
        border: none;
      }
      .menu_item {
        &:hover {
          font-weight: 600;
          background: transparent !important;
        }
      }
      .right_phone {
        &:hover {
          color: #ccc;
        }
        transition: all 0.5s;
        display: flex;
        align-items: center;
        i {
          font-size: 20px;
        }
        span {
          margin-left: 0.5rem;
        }
        margin-left: 2.5rem;
        color: #000;
      }
    }
  }
}
</style>