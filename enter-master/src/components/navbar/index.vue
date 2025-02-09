<template>
  <div class="navbar_wrap hidden-xs-only" :style="{ backgroundColor: navBackground }">
    <div class="navbar_container">
      <div class="navbar_left">
        <!-- 江西子午数智信息科技有限公司 -->
        <img src="@/assets/img/home/JXZWSZ_logo_icon.png" alt="子午数智..." />
        <img src="@/assets/img/home/JXZWSZ_logo_name.png" alt="子午数智..." />
      </div>
      <div class="navbar_right">
        <el-menu :default-active="activeIndex" class="el_menu_demo" mode="horizontal" :text-color="navTextColor"
          :active-text-color="navTextColor" :style="{ color: navTextColor, backgroundColor: 'rgba(255, 255, 255, 0)' }"
          @select="changeCurrentPage">
          <el-menu-item index="1" class="menu_item">首页</el-menu-item>
          <el-menu-item index="4" class="menu_item">公司概况</el-menu-item>
          <el-menu-item index="2" class="menu_item">案例展示</el-menu-item>
          <el-menu-item index="3" class="menu_item">新闻资讯</el-menu-item>
          <el-menu-item index="5" class="menu_item">联系我们</el-menu-item>
        </el-menu>
        <span class="right_phone" :style="{ color: navTextColor }">
          <i class="el-icon-phone"></i>
          <span> 189-7914-1505 </span>
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
      navBackground: 'rgba(255, 255, 255, 0.6)', // 修改初始背景颜色为rgba格式
      navTextColor: '#000000' // 初始字体颜色为白色
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
      const scrollTop = document.documentElement.scrollTop
      if (scrollTop > 390) {
        // 计算透明度，最大透明度为0.5
        // const opacity = Math.min(1, 1 - scrollTop / 1000)
        this.navBackground = `rgba(255, 255, 255,1)`
        this.navTextColor = '#000000'
      } else {
        // const opacity = Math.min(1, 1 - scrollTop / 500)
        this.navBackground = `rgba(255, 255, 255, 0.5)`
        this.navTextColor = '#000000'
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
  }

  .navbar_left {
    display: flex;
    align-items: center;
    height: 100%;
    font-weight: 700;
    color: #000;

    img {
      width: 200px;
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
      font-size: 16px;
      font-weight: 500;

      &:hover {
        font-size: 16px;
        font-weight: 700;
        background: transparent !important;
      }
    }

    .right_phone {
      font-weight: 600;

      &:hover {
        color: #ccc;
      }

      transition: all 0.5s;
      display: flex;
      align-items: center;

      i {
        font-size: 24px;
      }

      span {
        margin-left: 0.5rem;
      }

      margin-left: 2.5rem;
      color: #000;
    }
  }
}
</style>