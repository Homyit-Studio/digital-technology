<template>
  <div class="report_wrap" ref="turtor">
    <div class="repost_mobile_shiying">
      <div class="report_img">
        <div class="img_tit">内容中心</div>
      </div>
      <div class="report_options">
        <el-row class="option" type="flex" justify="space-between">
          <el-col class="option_item" v-for="(item, index) in optionsList" :key="index"
            @click.native="changeOptionIndex(index)">
            <div class="item_top">
              <img :src="item.icon" alt="" />
            </div>
            <div class="item_bottom" :class="optionActive === index ? 'active' : ''">
              {{ item.txt }}
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="report_avtive_wrap" v-show="optionActive === 0">
        <div class="repost_tag_wrap hidden-xs-only">
          <span>热门标签：</span>
          <Tag color="blue" checkable :checked="tag.isSelect" size="large" v-for="(tag, index) in tagList" :key="index"
            :name="index" @on-change="changeSelectTag">{{ tag.txt }}</Tag>
        </div>
        <div class="book_list">
          <p class="hidden-xs-only" style="width: 60%; margin: 0 auto">
            共<span style="color: #2091d3; padding: 0 6px">{{
              this.bookList.length
            }}</span>个行业报告
          </p>
          <Tabs :value="activeIndex + ''" class="tabs_wrap" draggable style=" margin: 0 auto">
            <TabPane label="最新" name="0" class="tabs_item">
              <div class="book_content">
                <div class="book_item" v-for="(item, index) in bookList[0]" :key="index">
                  <div class="book_left">
                    <img :src="'http://www.mtx.cn' + item.front_path" alt="" />
                  </div>
                  <div class="book_right" @click="reportNavigate(item.report_id)">
                    <span class="hvr-grow">{{ item.report_name }}</span>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane label="医药健康" name="1" class="tabs_item">
              <div class="book_content">
                <div class="book_item" v-for="(item, index) in bookList[1]" :key="index">
                  <div class="book_left">
                    <img :src="'http://www.mtx.cn' + item.front_path" alt="" />
                  </div>
                  <div class="book_right" @click="reportNavigate(item.report_id)">
                    <span class="hvr-grow">{{ item.report_name }}</span>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane label="5G通信" name="2" class="tabs_item">
              <div class="book_content">
                <div class="book_item" v-for="(item, index) in bookList[2]" :key="index">
                  <div class="book_left">
                    <img :src="'http://www.mtx.cn' + item.front_path" alt="" />
                  </div>
                  <div class="book_right" @click="reportNavigate(item.report_id)">
                    <span class="hvr-grow">{{ item.report_name }}</span>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane label="智慧城市" name="3" class="tabs_item">
              <div class="book_content">
                <div class="book_item" v-for="(item, index) in bookList[3]" :key="index">
                  <div class="book_left">
                    <img :src="'http://www.mtx.cn' + item.front_path" alt="" />
                  </div>
                  <div class="book_right" @click="reportNavigate(item.report_id)">
                    <span class="hvr-grow">{{ item.report_name }}</span>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane label="消费品" name="4" class="tabs_item">
              <div class="book_content">
                <div class="book_item" v-for="(item, index) in bookList[4]" :key="index">
                  <div class="book_left">
                    <img :src="'http://www.mtx.cn' + item.front_path" alt="" />
                  </div>
                  <div class="book_right" @click="reportNavigate(item.report_id)">
                    <span class="hvr-grow">{{ item.report_name }}</span>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane label="旅游体育" name="5" class="tabs_item">
              <div class="book_content">
                <div class="book_item" v-for="(item, index) in bookList[5]" :key="index">
                  <div class="book_left">
                    <img :src="'http://www.mtx.cn' + item.front_path" alt="" />
                  </div>
                  <div class="book_right" @click="reportNavigate(item.report_id)">
                    <span class="hvr-grow">{{ item.report_name }}</span>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane label="产业地产" name="6" class="tabs_item">
              <div class="book_content">
                <div class="book_item" v-for="(item, index) in bookList[6]" :key="index">
                  <div class="book_left">
                    <img :src="'http://www.mtx.cn' + item.front_path" alt="" />
                  </div>
                  <div class="book_right" @click="reportNavigate(item.report_id)">
                    <span class="hvr-grow">{{ item.report_name }}</span>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane label="新材料" name="7" class="tabs_item">
              <div class="book_content">
                <div class="book_item" v-for="(item, index) in bookList[7]" :key="index">
                  <div class="book_left">
                    <img :src="'http://www.mtx.cn' + item.front_path" alt="" />
                  </div>
                  <div class="book_right" @click="reportNavigate(item.report_id)">
                    <span class="hvr-grow">{{ item.report_name }}</span>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane label="环球新工业" name="8" class="tabs_item">
              <div class="book_content">
                <div class="book_item" v-for="(item, index) in bookList[8]" :key="index">
                  <div class="book_left">
                    <img :src="'http://www.mtx.cn' + item.front_path" alt="" />
                  </div>
                  <div class="book_right" @click="reportNavigate(item.report_id)">
                    <span class="hvr-grow">{{ item.report_name }}</span>
                  </div>
                </div>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>

      <div class="report_avtive_wrap" v-show="optionActive === 1">
        <!-- <div class="repost_tag_wrap hidden-xs-only">
          <span>热门标签：</span>
          <Tag
            color="blue"
            checkable
            :checked="tag.isSelect"
            size="large"
            v-for="(tag, index) in tagList2"
            :key="index"
            :name="index"
            @on-change="changeSelectTag2"
            >{{ tag.txt }}</Tag
          >
        </div> -->
        <div class="book_list">
          <div class="new_title">
            <div style="font-size: 20px; text-align: center">
              <span>— 年报 —</span>
            </div>
            <div style="font-size: 16px; text-align: center">
              <span>ANNUAL REPORT</span>
            </div>
          </div>
          <Tabs :value="activeIndex2 + ''" class="tabs_wrap" draggable @on-click="tongBuTags" style=" margin: 0 auto">
            <TabPane :label="cardItem.industry_name" :name="cardIndex + ''" class="tabs_item"
              v-for="(cardItem, cardIndex) in cardListObj.industry_list" :key="cardIndex">
            </TabPane>
          </Tabs>
          <div class="book_list_scroll" ref="listScroll">
            <el-row class="card_list">
              <el-col class="card_item" v-for="(item, index) in cardListObj.report_group_list[
                activeIndex2
              ]" :key="index">
                <div class="big_box" @click="reportNavigate(item.report_id)">
                  <div class="item_left">
                    <img :src="'http://www.mtx.cn' + item.front_path" alt="" />
                  </div>
                  <div class="item_right">
                    <h1>{{ item.report_name }}</h1>
                  </div>
                </div>
              </el-col>
            </el-row>
            <div class="list_scroll_btn">
              <el-button class="scroll_btn" @click="showMoreForReport">查看更多</el-button>
            </div>
          </div>
        </div>
        <!-- ---------------------------------------------------------------------分层辨认... -->
        <div class="book_list">
          <div class="new_title">
            <div style="font-size: 20px; text-align: center">
              <span>— 观察 —</span>
            </div>
            <div style="font-size: 16px; margin-bottom: 15px; text-align: center">
              <span>RESEARCH REPORT</span>
            </div>
          </div>
          <Tabs :value="activeIndex3 + ''" class="tabs_wrap" draggable @on-click="tongBuTags2" style=" margin: 0 auto">
            <TabPane :label="cardItem.industry_name" :name="cardIndex + ''" class="tabs_item"
              v-for="(cardItem, cardIndex) in cardListObj2.industry_list" :key="cardIndex">
            </TabPane>
          </Tabs>
          <div class="book_list_scroll" ref="listScroll2">
            <el-row class="card_list">
              <el-col class="card_item" v-for="(item, index) in cardListObj2.report_group_list[
                activeIndex3
              ]" :key="index">
                <div class="big_box" @click="reportNavigate(item.report_id)">
                  <div class="item_left">
                    <img :src="'http://www.mtx.cn' + item.front_path" alt="" />
                  </div>
                  <div class="item_right">
                    <h1>{{ item.report_name }}</h1>
                  </div>
                </div>
              </el-col>
            </el-row>
            <div class="list_scroll_btn">
              <el-button class="scroll_btn" @click="showMoreForReport">查看更多</el-button>
            </div>
          </div>
        </div>
        <!-- ---------------------------------------------------------------------分层辨认... -->
        <div class="book_list">
          <div class="new_title">
            <div style="font-size: 20px; margin-top: 20px; text-align: center">
              <span>— 研究 —</span>
            </div>
            <div style="font-size: 16px; margin-bottom: 15px; text-align: center">
              <span>RESEARCH REPORT</span>
            </div>
          </div>
          <Tabs :value="activeIndex4 + ''" class="tabs_wrap" draggable @on-click="tongBuTags3" style=" margin: 0 auto">
            <TabPane :label="cardItem.industry_name" :name="cardIndex + ''" class="tabs_item"
              v-for="(cardItem, cardIndex) in cardListObj3.industry_list" :key="cardIndex">
            </TabPane>
          </Tabs>
          <div class="book_list_scroll" ref="listScroll3">
            <el-row class="card_list">
              <el-col class="card_item" v-for="(item, index) in cardListObj3.report_group_list[
                activeIndex4
              ]" :key="index">
                <div class="big_box" @click="reportNavigate(item.report_id)">
                  <div class="item_left">
                    <img :src="'http://www.mtx.cn' + item.front_path" alt="" />
                  </div>
                  <div class="item_right">
                    <h1>{{ item.report_name }}</h1>
                  </div>
                </div>
              </el-col>
            </el-row>
            <div class="list_scroll_btn">
              <el-button class="scroll_btn" @click="showMoreForReport">查看更多</el-button>
            </div>
          </div>
        </div>
        <!-- ---------------------------------------------------------------------分层辨认... -->
        <div class="book_list">
          <div class="new_title">
            <div style="font-size: 20px; margin-top: 20px; text-align: center">
              <span>— 数据 —</span>
            </div>
            <div style="font-size: 16px;text-align: center">
              <span>DATA</span>
            </div>
          </div>
          <Tabs :value="activeIndex5 + ''" class="tabs_wrap" draggable @on-click="tongBuTags4" style=" margin: 0 auto">
            <TabPane :label="cardItem.industry_name" :name="cardIndex + ''" class="tabs_item"
              v-for="(cardItem, cardIndex) in cardListObj4.industry_list" :key="cardIndex">
            </TabPane>
          </Tabs>
          <div class="book_list_scroll" ref="listScroll4">
            <el-row class="card_list">
              <el-col class="card_item" v-for="(item, index) in cardListObj4.report_group_list[
                activeIndex5
              ]" :key="index">
                <div class="big_box" @click="reportNavigate(item.report_id)">
                  <div class="item_left">
                    <img :src="'http://www.mtx.cn' + item.front_path" alt="" />
                  </div>
                  <div class="item_right">
                    <h1>{{ item.report_name }}</h1>
                  </div>
                </div>
              </el-col>
            </el-row>
            <div class="list_scroll_btn">
              <el-button class="scroll_btn" @click="showMoreForReport">查看更多</el-button>
            </div>
          </div>
        </div>
        <div class="new_title">
          <div style="font-size: 20px; margin-top: 20px; text-align: center">
            <span>— 专栏 —</span>
          </div>
          <div style="font-size: 16px; margin-bottom: 15px; text-align: center">
            <span>INDUSTRY COLUMN</span>
          </div>
        </div>
        <el-row class="zhuan_column" type="flex">
          <el-col :span="4" :xs="12" v-for="(item, index) in columnList" :key="index" class="zhuan_item">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="'http://www.mtx.cn/' + item.front_path" class="image" />
              <div class="zhuan_content">
                <h1>{{ item.column_name }}</h1>
                <p class="details">
                  {{
                    '已更' +
                    item.episode +
                    '期|' +
                    item.sub_count +
                    '人订阅|' +
                    item.update_time
                  }}
                </p>
                <p class="desc">{{ item.column_description }}</p>
                <el-button class="btn">免费订阅+</el-button>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <div class="list_scroll_btn" style="text-align: center; margin-top: 30px">
          <el-button class="scroll_btn hidden-xs-only" @click="showColumn" plain type="warning">查看更多</el-button>
          <el-button class="scroll_btn2 hidden-sm-and-up" @click="showColumn">查看更多</el-button>

        </div>
        <div class="new_title">
          <div style="font-size: 20px; margin-top: 20px; text-align: center">
            <span>— 视频 —</span>
          </div>
          <div style="font-size: 16px; margin-bottom: 15px; text-align: center">
            <span>VIDEO</span>
          </div>
        </div>
        <el-row class="video_column" type="flex">
          <el-col :span="4" :xs="12" v-for="(item, index) in videoList" :key="index" class="video_item">
            <el-card :body-style="{ padding: '0px' }" @click.native="videoNavigate(item.video_id)">
              <img :src="'http://www.mtx.cn/' + item.front_path" class="image" />
              <div class="video_content">
                <h1>{{ item.video_name }}</h1>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <div class="list_scroll_btn" style="text-align: center; margin-top: 30px">
          <el-button class="scroll_btn hidden-xs-only" @click="showVideo" plain type="warning">查看所有视频</el-button>
          <el-button class="scroll_btn2 hidden-sm-and-up" @click="showVideo" plain type="warning">查看所有视频</el-button>
        </div>
      </div>
      <!-- 完毕-------------------------------------------- -->
      <div class="report_avtive_wrap" v-show="optionActive === 2">
        <div class="book_list book_list_speial">
          <div class="">
            <p style="font-size: 12px">
              共<span style="color: #2091d3; padding: 0 6px">{{
                mediaList.length
              }}</span>篇媒体报道
            </p>
            <el-row class="card_list" type="flex" justify="space-between">
              <el-col class="card_item" v-for="(item, index) in mediaList" :key="index"
                @click.native="handleNewsDetails(item.url)">
                <div class="item_left">
                  <img :src="item.img" alt="" />
                </div>
                <div class="item_right">
                  <h1>{{ item.title }}</h1>
                  <p>{{ item.intro }}</p>
                  <p>{{ item.createTime }}</p>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
import MouseWheel from '@better-scroll/mouse-wheel'
BScroll.use(Pullup)
BScroll.use(MouseWheel)
// import MediaList from '@/utils/mediaList.json'
export default {
  data() {
    return {
      optionsList: [
        {
          icon: require('@/assets/img/63.png'),
          txt: '行业报告',
        },
        {
          icon: require('@/assets/img/64.png'),
          txt: '精选文章',
        },
        {
          icon: require('@/assets/img/65.png'),
          txt: '媒体报道',
        },
      ],
      optionActive: 0,
      tagList: [
        {
          isSelect: true,
          txt: '最新',
        },
        {
          isSelect: false,
          txt: '医药健康',
        },
        {
          isSelect: false,
          txt: '5G通信',
        },
        {
          isSelect: false,
          txt: '智慧城市',
        },
        {
          isSelect: false,
          txt: '消费品',
        },
        {
          isSelect: false,
          txt: '旅游体育',
        },
        {
          isSelect: false,
          txt: '产业地产',
        },
        {
          isSelect: false,
          txt: '新材料',
        },
        {
          isSelect: false,
          txt: '环球新工业',
        },
      ],
      tagList2: [
        {
          isSelect: true,
          txt: '全部',
        },
        {
          isSelect: false,
          txt: '招商月报',
        },
        {
          isSelect: false,
          txt: '热点解读',
        },
      ],
      bookList: [
        {
          icon: require('@/assets/img/Jey8DRSC2T1635155480914.jpg'),
          txt: '2021年生物医药专业服务体系建设专业报告',
        },
        {
          icon: require('@/assets/img/EQWQ6CirG61634107019389.jpg'),
          txt: '《2021年中国特医食品产业发展专题报告》',
        },
        {
          icon: require('@/assets/img/DPWmMfikTc1634106711716.jpg'),
          txt: '《2021年中国第三代半导体产业发展专题报告》',
        },
        {
          icon: require('@/assets/img/JRDhGAnjC81629106363407.jpg'),
          txt: '《2021年医药外包服务产业图谱专题报告》',
        },
        {
          icon: require('@/assets/img/NPFcadZW6a1634106943049.jpg'),
          txt: '《2021年中国汽车产业发展专题报告》',
        },
        {
          icon: require('@/assets/img/wdkYBTNfFW1634106816405.jpg'),
          txt: '《2021年8月产业大脑数字专刊》',
        },
        {
          icon: require('@/assets/img/YTSr8WDtaM1629106376130.jpg'),
          txt: '《2021年中医药产业发展专题报告》',
        },
        {
          icon: require('@/assets/img/zyZpHiYFPM1629106347965.jpg'),
          txt: '《2021年6月产业大脑数字专刊》',
        },
      ],
      activeIndex: 0,
      cardListObj: {
        industry_list: [],
        report_group_list: [],
      },
      cardListObj2: {
        industry_list: [],
        report_group_list: [],
      },
      cardListObj3: {
        industry_list: [],
        report_group_list: [],
      },
      cardListObj4: {
        industry_list: [],
        report_group_list: [],
      },
      mediaList: [],
      scroll: null,
      scroll2: null,
      scroll3: null,
      scroll4: null,
      timer: null,
      pageNo: 1,
      pageNoMedia: 1,
      total1: 0,
      total2: 0,
      activeIndex2: 0,
      activeIndex3: 0,
      activeIndex4: 0,
      activeIndex5: 0,
      columnList: [],
      videoList: [],
    }
  },
  created() {
    this.optionActive =
      this.$route.path.substr(this.$route.path.length - 1) * 1 - 1
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.listScroll, {
      scrollX: true, //X轴滚动启用
      eventPassthrough: 'vertical',
      mouseWheel: {
        speed: 20,
        invert: false,
        easeTime: 300,
      },
    })
    this.scroll2 = new BScroll(this.$refs.listScroll2, {
      scrollX: true, //X轴滚动启用
      eventPassthrough: 'vertical',
      mouseWheel: {
        speed: 20,
        invert: false,
        easeTime: 300,
      },
    })
    this.scroll3 = new BScroll(this.$refs.listScroll3, {
      scrollX: true, //X轴滚动启用
      eventPassthrough: 'vertical',
      mouseWheel: {
        speed: 20,
        invert: false,
        easeTime: 300,
      },
    })
    this.scroll4 = new BScroll(this.$refs.listScroll4, {
      scrollX: true, //X轴滚动启用
      eventPassthrough: 'vertical',
      mouseWheel: {
        speed: 20,
        invert: false,
        easeTime: 300,
      },
    })

    this.getBookList()
    this.getCardListData()
    this.getCardListData2()
    this.getCardListData3()
    this.getCardListData4()
    this.getColumnList()
    this.getVideoList()
    // this.mediaList = MediaList.mediaList
    this.axios
      .get('http://glowworm.club:9093/mediaList.json')
      .then((res) => {
        this.mediaList = res.data.mediaList
      })
      .catch((err) => {
        console.log(err.message)
      })
    // this.getReportData()
    // this.scroll.on('pullingUp', () => {
    //   if (this.optionActive === 1) {
    //     console.log('请求数据...')
    //     switch (this.activeIndex) {
    //       case 0:
    //         this.getCardListData()
    //         break
    //       case 1:
    //         this.getCardListData('招商月报')
    //         break
    //       default:
    //         this.getCardListData('热点解读')
    //         break
    //     }
    //   } else if (this.optionActive === 2) {
    //     // this.getReportData()
    //   } else {
    //     // this.scroll.finishPullUp()
    //   }
    // })
  },
  methods: {
    changeOptionIndex(index) {
      this.optionActive = index
      if (index === 1) {
        this.$nextTick(() => {
          this.scroll.refresh()
          this.scroll2.refresh()
          this.scroll3.refresh()
          this.scroll4.refresh()
        })
      }
    },
    changeSelectTag(checked, name) {
      this.activeIndex = name
      this.tagList.map((v, i) => {
        if (name === i) {
          v.isSelect = checked
        } else {
          v.isSelect = false
        }
      })
    },
    changeSelectTag2(checked, name) {
      this.activeIndex2 = name
      this.tagList2.map((v, i) => {
        if (name === i) {
          v.isSelect = checked
        } else {
          v.isSelect = false
        }
      })
    },
    tongBuTags(name) {
      this.activeIndex2 = name * 1
      this.scroll.scrollTo(0)
    },
    tongBuTags2(name) {
      this.activeIndex3 = name * 1
      this.scroll.scrollTo(0)
    },
    tongBuTags3(name) {
      this.activeIndex4 = name * 1
      this.scroll.scrollTo(0)
    },
    tongBuTags4(name) {
      this.activeIndex5 = name * 1
      this.scroll.scrollTo(0)
    },
    handleNewsDetails(url) {
      // this.$router.push(`/news_detail/${id}`)
      window.open(url)
    },
    async getCardListData() {
      const res = await this.axios.get(
        'https://api.mtx.cn/report?command=front_yj'
      )
      this.cardListObj = res.data.data
    },
    async getBookList() {
      const res = await this.axios.get(
        'https://api.mtx.cn/report?command=front_nb'
      )
      this.bookList = res.data.data.report_group_list
    },
    async getCardListData2() {
      const res = await this.axios.get(
        'https://api.mtx.cn/report?command=front_gc'
      )
      this.cardListObj2 = res.data.data
    },
    async getCardListData3() {
      const res = await this.axios.get(
        'https://api.mtx.cn/report?command=front_nb'
      )
      this.cardListObj3 = res.data.data
    },
    async getCardListData4() {
      const res = await this.axios.get(
        'https://api.mtx.cn/report?command=front_yj'
      )
      this.cardListObj4 = res.data.data
    },
    async getColumnList() {
      const res = await this.axios.get(
        'https://api.mtx.cn/column?command=front_all'
      )
      this.columnList = res.data.data.column_list
    },
    async getVideoList() {
      const res = await this.axios.get(
        'https://api.mtx.cn/video?command=front_list'
      )
      this.videoList = res.data.data.video_list
    },
    reportNavigate(id) {
      window.open(`http://www.mtx.cn/#/report?id=${id}`)
    },
    videoNavigate(id) {
      window.open(`http://www.mtx.cn/#/video?id=${id}`)
    },
    showMoreForReport() {
      window.open('http://www.mtx.cn/#/search?type=0')
    },
    showColumn() {
      window.open('http://www.mtx.cn/#/search?type=2')
    },
    showVideo() {
      window.open('http://www.mtx.cn/#/videolist')
    }
    //云逸发送请求 媒体报道
    // async getReportData() {
    //   const res = await this.axios.get(
    //     `/news/officialNews/listPage?keyword=&newsColumn=3&tags=&pageNo=${this.pageNoMedia}&pageSize=10`
    //   )
    //   this.pageNoMedia += 1
    //   this.mediaList = [...this.mediaList, ...res.data.result.records]
    //   this.total2 = res.data.result.total
    //   this.$nextTick(() => {
    //     this.scroll.finishPullUp()
    //     this.scroll.refresh()
    //   })
    // },
  },
  watch: {
    $route() {
      this.optionActive =
        this.$route.path.substr(this.$route.path.length - 1) * 1 - 1
    },
  },
}
</script>

<style lang="scss">
.report_wrap {

  // height: 100vh;
  // overflow: hidden;
  .repost_mobile_shiying {
    @media screen and (max-width: 768px) {}

    .report_img {
      width: 100%;
      height: 600px;

      @media screen and (max-width: 768px) {
        height: 50vw;
      }

      background: url('../../assets/img/newbg.22e89fc.jpg') 0 0 no-repeat;
      background-size: 100% 100%;
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
    }

    .report_options {
      width: 100%;
      height: 120px;
      box-shadow: 0px 5px 5px rgba($color: #000000, $alpha: 0.1);

      @media screen and (max-width: 768px) {
        height: 105px;
        display: flex;
      }

      .option {
        width: 70%;
        margin: 0 auto;
        align-items: center;

        @media screen and (max-width: 768px) {
          width: 90%;
        }

        .option_item {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          cursor: pointer;

          .item_top {
            width: 15%;
            margin-top: 10px;

            @media screen and (max-width: 768px) {
              width: 30%;
            }

            img {
              width: 100%;
            }
          }

          .item_bottom {
            margin-left: 5px;
            font-weight: bold;
            font-size: 20px;

            @media screen and (max-width: 768px) {
              font-size: 14px;
            }
          }

          .active {
            color: #2091d3;
          }
        }
      }
    }

    .repost_tag_wrap {
      width: 60%;
      height: 100px;
      background: #f4f9fc;
      margin: 50px auto;
      display: flex;
      align-items: center;
      padding: 0 30px;

      span {
        color: #8a989c;
        font-size: 18px;
      }
    }

    .book_list {
      @media screen and (max-width:768px) {
        height: 470px;
      }

      .new_title {
        @media screen and (min-width:768px) {
          margin-top: 30px;
        }

        &:nth-child(n+2) {
          margin-top: 60px;
        }

        @media screen and (max-width: 768px) {
          padding-top: 15px;
        }
      }

      @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0 20px;
        background: #f4f9fc;
      }

      .book_list_scroll {
        width: 1500px;
        margin: 0 auto;
        overflow: hidden;

        @media screen and (max-width:768px) {
          width: 100%;
        }

        .card_list {
          width: 3000px;

          @media screen and (max-width:768px) {
            width: 2000px;
            margin-top: 30px;
          }

          .card_item {
            @media screen and (max-width:768px) {
              width: 200px;
              height: 200px;
            }

            float: left;
            width: 300px;
            text-align: center;

            &:hover {
              transform: scale(1);
              box-shadow: none;
            }

            .big_box {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;

              @media screen and (max-width:768px) {
                height: 100%;
              }

              .item_left {
                width: 300px;
                text-align: center;
                user-select: none;

                @media screen and (max-width:768px) {
                  width: 100%;
                  height: 100%;
                }

                img {
                  transition: all .6s;
                  width: 80%;
                  min-height: 300px;
                  margin-left: 20px;
                  border: solid 1px rgb(235, 235, 235);

                  &:hover {
                    box-shadow: 0 0 20px rgba($color: #000000, $alpha: .1);
                  }

                  @media screen and (max-width:768px) {
                    max-height: 300px;
                  }
                }
              }

              .item_right {
                padding: 10px 20px !important;

                h1 {
                  font-size: 0.1rem !important;
                  font-weight: 400;
                  text-align: center;
                  white-space: normal;

                  @media screen and (max-width:768px) {
                    font-size: 14px !important;
                  }
                }
              }
            }
          }
        }

        .list_scroll_btn {
          text-align: center;

          .scroll_btn {
            background: #FFA400;
            color: #fff;
            font-size: 14PX;
            border-radius: 15PX;

            @media screen and (max-width:768px) {
              width: 80px;
              height: 35px;
              margin-top: 40px;
            }
          }
        }
      }

      .book_content {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        @media screen and (max-width: 768px) {
          width: 100%;
        }

        .book_item {
          width: 45%;
          display: flex;

          @media screen and (max-width: 768px) {
            width: 100%;
            background: #fff;
            margin-top: 20px;
            margin: 10px auto;
            padding: 10px;
          }

          &:nth-child(n + 3) {
            margin-top: 20px;
          }

          .book_left {
            width: 50%;
            margin-right: 40px;

            @media screen and (max-width: 768px) {
              width: 40%;
            }

            img {
              width: 100%;
            }
          }

          .book_right {
            font-weight: bold;
            font-size: 20px;

            span {
              cursor: pointer;
            }

            @media screen and (max-width: 768px) {
              font-size: 16px;
              color: #000;
            }
          }
        }
      }

      .tabs_wrap {
        width: 60%;

        @media screen and (max-width:768px) {
          width: 100%;
        }

        padding-top: 1rem;
      }
    }
  }

  .ivu-tabs-tab {
    font-size: 1rem !important;
    height: 2rem !important;
  }

  .card_list {
    flex-wrap: wrap;

    .card_item {
      display: flex;
      margin-top: 1rem;
      padding: 20px;
      cursor: pointer;
      transition: all 0.5s;

      &:hover {
        box-shadow: 10px 10px 20px rgba($color: #000000, $alpha: 0.2);
        transform: scale(1.05);
      }

      .item_left {
        flex: 1;

        img {
          width: 90%;
          height: 100%;
          max-height: 350px;
          object-fit: cover;
          -webkit-user-drag: none;
        }
      }

      .item_right {
        flex: 1;
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        h1 {
          color: #666;
          font-size: 28px;

          @media screen and (max-width: 768px) {
            font-size: 1rem;
          }
        }

        p {
          font-size: 13px;

          @media screen and (max-width: 768px) {
            &:nth-child(2) {
              display: none;
            }

            font-size: 13px;
          }
        }
      }
    }
  }
}

.zhuan_column {
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-evenly;

  img {
    width: 100%;
  }

  .zhuan_item {
    @media screen and (max-width:768px) {
      &:nth-child(n+3) {
        margin-top: 10px;
      }
    }

    .zhuan_content {
      padding: 14px;

      @media screen and (max-width:768px) {
        pad: 10px;
      }

      h1 {
        min-height: 80px;
        color: #FFA400;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 1.1rem;

        @media screen and (max-width:768px) {
          min-height: 55px;
        }
      }

      .btn {
        background: #FFA400;
        float: right;
        color: #fff;
        margin-top: 20px;
        width: 80PX;
        height: 35PX;
        border-radius: 20PX;

        @media screen and (max-width:768px) {
          font-size: 12px;
        }
      }

      .details {
        color: #999;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;

        @media screen and (max-width:768px) {
          font-size: 13px;
        }
      }

      .desc {
        color: #666;
        min-height: 60px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        margin: 10px 0;

        @media screen and (max-width:768px) {
          font-size: 13px;
        }
      }
    }
  }
}

.video_column {
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-evenly;

  .video_item {
    .video_content {
      cursor: pointer;
      padding: 14px;

      h1 {
        color: #666;
        font-size: 0.9rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;

        @media screen and (max-width:768px) {
          min-height: 65px;
        }
      }
    }

    img {
      width: 100%;
      min-height: 180px;
      cursor: pointer;

      @media screen and (max-width:768px) {
        min-height: 106px;
      }
    }
  }
}

.book_list_speial {
  padding-top: 16px;
  width: 70%;
  margin: 0 auto;
}

.scroll_btn2 {
  @media screen and (max-width:768px) {
    width: 280px;
    height: 35px;
    background: #fff !important;
    color: #FFA400 !important;
    border: solid 1px #FFA400 !important;
    font-size: 12px;
  }
}
</style>