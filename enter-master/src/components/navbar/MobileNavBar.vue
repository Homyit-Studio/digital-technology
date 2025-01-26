<template>
  <div style="margin-bottom:56px;" class="hidden-sm-and-up">
    <div class="mobile_nav_wrap hidden-sm-and-up">
      <div class="navbar_left" @click="gobackHome">
        子午数智
        <!-- <img src="@/assets/img/home/logo_color.svg" alt="云逸创造..." /> -->
      </div>
      <div class="navbar_right">
        <!-- <div class="nav_tiyan" @click="gotoExperience">立即体验</div> -->
        <div class="nav_btns" @click="moveMenu">
          <i class="el-icon-menu"></i>
        </div>
      </div>
    </div>
    <Affix>
      <div class="nav_menu" ref="menu">
        <router-link class="menu_item" to="/home" :class="currentActive === 0 ? 'active' : ''">首页</router-link>
        <router-link class="menu_item" to="/production/1" :class="currentActive === 1 ? 'active' : ''">产品</router-link>
        <!-- <div class="item_options" v-show="productShow">
          <a href="/production/1">产业大脑</a>
          <a href="/production/2">云招商</a>
          <a href="/production/3">企业创新服务</a>
          <a href="/production/4">产业咨询</a>
        </div> -->
        <router-link class="menu_item" to="/threenav" :class="currentActive === 2 ? 'active' : ''">新闻资讯</router-link>
        <router-link class="menu_item" to="/fournav/2" :class="currentActive === 3 ? 'active' : ''">发展历程</router-link>
        <!-- <div class="item_options" v-show="centerShow">
          <a href="/fournav/1" style="height: 33.3%">行业报告</a>
          <a href="/fournav/2" style="height: 33.3%">精选文章</a>
          <a href="/fournav/3" style="height: 33.3%">媒体报道</a>
        </div> -->
        <router-link class="menu_item" to="/fivenav/2" :class="currentActive === 4 ? 'active' : ''">联系我们</router-link>
        <!-- <div class="item_options" v-show="fireShow"> -->
        <!-- <a href="/fivenav/1">云逸介绍</a> -->
        <!-- <a href="/fivenav/2">发展历程</a> -->
        <!-- <a href="/fivenav/3">荣誉资质</a> -->
        <!-- <a href="/fivenav/2">联系云逸</a> -->
        <!-- </div> -->
      </div>
    </Affix>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuShow: false,
      productShow: false,
      centerShow: false,
      fireShow: false,
    }
  },
  props: {
    currentActive: {
      default: 0,
      type: Number,
    },
  },
  methods: {
    moveMenu() {
      this.menuShow = !this.menuShow
      if (this.menuShow) {
        this.$refs.menu.style.top = '56PX'
      } else {
        this.$refs.menu.style.top = '-1000PX'
      }
    },
    // changeProductShow() {
    //   this.productShow = !this.productShow
    //   this.centerShow = false
    //   this.fireShow = false
    // },
    // changeCenterShow() {
    //   this.centerShow = !this.centerShow
    //   this.fireShow = false
    //   this.productShow = false
    // },
    // changefireShow() {
    //   this.fireShow = !this.fireShow
    //   this.centerShow = false
    //   this.productShow = false
    // },
    gotoExperience() {
      this.$router.push('/demo').catch(() => { })
    },
    gobackHome() {
      this.$router.replace('/home').catch(() => { })
    }
  },
}
</script>

<style lang="scss" scoped>
.mobile_nav_wrap {
  box-sizing: border-box;
  width: 100%;
  height: 56PX;
  background: #fff;
  z-index: 1000;
  display: flex;
  padding: 15PX 0 15PX 15PX;
  align-items: center;
  position: fixed;
  top: 0;

  .navbar_left {
    flex: 1;
    background: #fff;
    width: 26vw !important;
    font-size: 5em;
    letter-spacing: 0.1em;
    font-weight: 700;
    color: #666;
    // img {
    //   width: 100%;
    // }
  }

  .navbar_right {
    flex: 2;
    height: 56PX;
    display: flex;
    justify-content: flex-end;
    background: #fff;

    .nav_tiyan {
      width: 88PX;
      height: 100%;
      background: #1a63c4;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14PX;
    }

    .nav_btns {
      width: 56PX;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      i {
        font-size: 30PX;
      }
    }
  }
}

.active {
  color: #F39C00 !important;
  font-weight: bold;
}

.nav_menu {
  position: absolute;
  width: 100%;
  height: 300PX;
  list-style: none;
  left: 0;
  right: 0;
  top: -1000PX;
  padding-bottom: 0;
  box-sizing: border-box;
  background: #EFF0F1;
  box-shadow: 0 10PX 20PX rgba(0, 0, 0, .1);
  z-index: 10;
  transition: all 0.8s;

  .menu_item {
    width: 100%;
    height: 40PX;
    font-size: 16PX;
    background: #EFF0F1;
    color: #1c212d;
    padding: 30PX;
    display: flex;
    align-items: center;
  }

  .item_options {
    width: 100%;
    padding: 5PX 10PX;
    height: 150PX;
    font-size: 14PX;
    background: #fff;

    a {
      display: inline-block;
      width: 100%;
      color: #666;
      height: 25%;
      padding: 20px 30PX;
    }
  }
}
</style>