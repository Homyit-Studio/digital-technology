<template>
  <div class="navbar_wrap hidden-xs-only">
    <div class="navbar_container">
      <div class="navbar_left">
        江西子午数智信息科技有限公司
      </div>
      <div class="navbar_right">
        <el-menu :default-active="activeIndex" class="el_menu_demo" mode="horizontal" background-color="rgba(0,0,0,0)"
          :text-color="navBackground" :active-text-color="navBackground" @select="changeCurrentPage">
          <el-menu-item index="1" class="menu_item">首页</el-menu-item>
          <el-menu-item index="2" class="menu_item">产品</el-menu-item>
          <el-menu-item index="3" class="menu_item">新闻资讯</el-menu-item>
          <el-menu-item index="4" class="menu_item">发展历程</el-menu-item>
          <el-menu-item index="5" class="menu_item">联系我们</el-menu-item>
        </el-menu>
        <span class="right_phone">
          <i class="el-icon-phone"></i>
          <span>联系电话待补充1</span>
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
      navBackground: '#fff'
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
      if (document.documentElement.scrollTop > 390) {
        this.navBackground = '#000'
      } else {
        this.navBackground = '#fff'
      }
    }
  },
  methods: {
    changeCurrentPage(index) {
      this.activeIndex = index
      switch (this.activeIndex) {
        case '1':
          this.$router.push('/home').catch(() => { })
          break
        case '2':
          this.$router.push('/production/1').catch(() => { })
          break
        case '3':
          this.$router.push('/threenav').catch(() => { })
          break
        case '4':
          this.$router.push('/fournav/2').catch(() => { })
          break
        case '5':
          this.$router.push('/fivenav/2').catch(() => { })
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
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: saturate(180%) blur(0.5rem);
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

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
      width: 26vw !important;
      font-size: 1.5em;
      letter-spacing: 0.1em;
      font-weight: 700;
      color: #fff;
      // img {
      //   width: 160px;
      //   cursor: pointer;
      // }
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
        color: #fff;
      }
    }
  }
}
</style>