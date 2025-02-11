<template>
    <div style="background-color: #f4f9fc;">
        <!-- <div class="research_sp_wrap_mobile hidden-sm-and-up">
            <img src="@/assets/img/content1.png" alt="">
        </div> -->
        <div class="ResPlatform_shows_wrap">
            <div class="ResPlatform_title_wrap">
                <div class="ResPlatform_inner">
                    <div class="inner_left">
                        <img src="../../assets/img/tupianright.png" alt="" />
                    </div>
                    <div class="inner_center">
                        <div class="ResPlatform_title">研究平台</div>
                    </div>
                    <div class="inner_right">
                        <img src="../../assets/img/tupianleft.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div class="sky_card">
            <div class="sky_wrap">
                <div class="sky_btn">
                    <div class="sky_item" v-for="(item, index) in skyList" :key="index"
                        :class="activeIndex === index ? 'active' : ''" @click="changeIndex(index)">
                        {{ item.tit }}
                    </div>
                </div>
                <div class="sky_content">
                    <div class="content_left">
                        <div class="left_tit">{{ skyTitle }}</div>
                        <!-- <div class="left_icon_wrap">
                            <div class="icon_item" v-for="(item, index) in skyImgList" :key="index" ref="iconItem">
                                <i :class="item.src"></i>
                                <span v-html="item.txt"></span>
                            </div>
                        </div>
                        <div class="left_btn hidden-xs-only" @click="handleToDeomo">获取产品演示</div> -->
                    </div>
                    <!-- <div class="content_right">
                        <img :src="skycurrentImg" alt="" />
                        <div class="left_btn hidden-sm-and-up" @click="handleToDeomo">获取产品演示</div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: 0,
            skyTitle:
                'HIST南昌分中心是联合国教科文组织国际自然与文化遗产空间技术中心的分支机构，依托江西师范大学成立于2019年3月。主要从事以空间信息技术为支撑，开展对自然遗产、生物圈保护区和地质公园等领域的保护和管理研究。HIST南昌分中心将围绕中心任务组织开展合作，充分发挥特色领域的研宄优势，面向我国华东地区的自然资源和文化资源，利用空间技术深入开展自然和文化遗产的监测、保护和管理工作，并将科研成果应用于教育培训，通过提供咨询、技术信息和人员培训等服务，为区内的自然和文化遗产的监测、保护、管理以及可持续发展提供决策依据。',
            // skyImgList: [
            //     {
            //         src: '',
            //         txt: '<span style="font-weight:bold;padding-right:10px;">一键发起</span>快速举办在线招商',
            //     },
            //     {
            //         src: '',
            //         txt: '<span style="font-weight:bold;padding-right:10px;">专属二维码</span>每个参会者都是VIP体验',
            //     },
            //     {
            //         src: '',
            //         txt: '<span style="font-weight:bold;padding-right:10px;">稳定流畅</span>会议成果报告秒生成',
            //     },
            // ],
            // skycurrentImg: require('../../assets/img/33342e3d61.png')
        }
    },
    props: {
        skyList: {
            type: Array,
            //   default: [],
        },
    },
    methods: {
        changeIndex(index) {
            this.activeIndex = index
            switch (this.activeIndex) {
                case 1:
                    this.skyTitle =
                        '鄱阳湖湿地与流域研究教育部重点实验室于2003年以省部共建方式筹建，2007年通过教育部验收。实验室以江西师范大学的地理与环境学院、江西省鄱阳湖综合治理与资源开发重点实验室、江西省亚热带植物资源保护与利用重点实验室、江西省绿色化学重点实验室、理化测试中心等为依托，遵循“前沿科学研究与辅助政府决策并举”的宗旨，以“开放、流动、联合、竞争”为建设方针，以鄱阳湖复杂环境系统为研究对象，重点围绕鄱阳湖湿地与流域的关键科学问题，开展湖泊湿地生态和环境健康、流域地表过程和水生态安全、区域开发与资源可持续利用、湿地与流域空间信息模型方法与系统应用、湿地与流域时空动态监测网络系统与决策支持等方向的研究。'
                    // this.skyImgList = [
                    //     {
                    //         src: '',
                    //         txt: '<span style="font-weight:bold;padding-right:10px;">定制化推荐模型</span>基于地域和领域招商逻辑构建45个预测模型，随需调用',
                    //     },
                    //     {
                    //         src: '',
                    //         txt: '<span style="font-weight:bold;padding-right:10px;">持续的数据获取</span>200万+医健企业、25万+产品库、70万+临床数据......',
                    //     },
                    //     {
                    //         src: '',
                    //         txt: '<span style="font-weight:bold;padding-right:10px;">强大的情报挖掘</span>从海量数据中挖掘招商情报信息，实时输出招商线索',
                    //     },
                    //     {
                    //         src: '',
                    //         txt: '<span style="font-weight:bold;padding-right:10px;">有效的线索对接</span>线上线下结合，对接关键决策人，促进项目落地',
                    //     },
                    // ]
                    // this.skycurrentImg = require('../../assets/img/222.a7a2174.png')
                    break
                case 2:
                    this.skyTitle =
                        '国家革命文物协同研究中心是由教育部、国家文物局批准设立的国家级人文社科重点研究平台，由井冈山革命博物馆—江西师范大学联合创建。国家革命文物协同研究中心重点研究方向为：革命文物与中国共产党人精神谱系研究、革命文物与大思政课建设研究、革命文物与革命文化传播研究、革命文物与数字化陈展研究、革命文物保护利用与革命老区振兴研究。在此基础上，中心依托江西师范大学的博士、硕士学位点和教学名师、一流课程等教育教学资源，与革命纪念馆、博物馆联合培养革命文物保护利用专门人才，以及革命文物研究与实践应用高层次复合型人才、青年后备人才。'
                    // this.skyImgList = [
                    //     {
                    //         src: '',
                    //         txt: '<span style="font-weight:bold;padding-right:10px;">VR全景</span>全面展现园区实景',
                    //     },
                    //     {
                    //         src: '',
                    //         txt: '<span style="font-weight:bold;padding-right:10px;">3D建模</span>直观呈现未来规划',
                    //     },
                    //     {
                    //         src: '',
                    //         txt: '<span style="font-weight:bold;padding-right:10px;">微园区</span>详细介绍园区配套',
                    //     },
                    // ]
                    // this.skycurrentImg = require('../../assets/img/111.855fbdc (1).png')
                    break
                default:
                    this.skyTitle =
                        'HIST南昌分中心是联合国教科文组织国际自然与文化遗产空间技术中心的分支机构，依托江西师范大学成立于2019年3月。主要从事以空间信息技术为支撑，开展对自然遗产、生物圈保护区和地质公园等领域的保护和管理研究。HIST南昌分中心将围绕中心任务组织开展合作，充分发挥特色领域的研宄优势，面向我国华东地区的自然资源和文化资源，利用空间技术深入开展自然和文化遗产的监测、保护和管理工作，并将科研成果应用于教育培训，通过提供咨询、技术信息和人员培训等服务，为区内的自然和文化遗产的监测、保护、管理以及可持续发展提供决策依据。'
                    this.$refs.iconItem.map(v => {
                        v.style.width = '90%'
                    })
                    // this.skyImgList = [
                    //     {
                    //         src: '',
                    //         txt: '<span style="font-weight:bold;padding-right:10px;">一键发起</span>快速举办在线招商',
                    //     },
                    //     {
                    //         src: '',
                    //         txt: '<span style="font-weight:bold;padding-right:10px;">专属二维码</span>每个参会者都是VIP体验',
                    //     },
                    //     {
                    //         src: '',
                    //         txt: '<span style="font-weight:bold;padding-right:10px;">稳定流畅</span>会议成果报告秒生成',
                    //     },
                    // ]
                    // this.skycurrentImg = require('../../assets/img/33342e3d61.png')
                    break
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.ResPlatform_shows_wrap {
    width: 100%;
    // background: #fff;
    // background-size: cover;
    padding: 10px 0 10px 0;
    // box-sizing: border-box;
    // margin-top: 150px;
    // margin-bottom: 100px;

    @media screen and (max-width: 768px) {
        // margin-top: 30px;
    }

    .ResPlatform_title_wrap {
        width: 100%;
        // margin-top: 50px;

        @media screen and (max-width: 768px) {
            margin-top: 30px;
        }

        .ResPlatform_inner {
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

                .ResPlatform_title {
                    font-size: 40px;
                    font-weight: bold;

                    @media screen and (max-width: 768px) {
                        font-size: 1rem;
                    }
                }

                .ResPlatform_desc {
                    font-size: 16px;
                    color: #787878;
                    margin-top: 10px;

                    @media screen and (max-width: 768px) {
                        margin-top: 10px;
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

    .card_fan_list {
        width: 50%;
        margin: 0 auto;
        font-size: 18px;
        line-height: 40PX;
        font-weight: bold;

        @media screen and (max-width: 768px) {
            width: 100%;
            padding: 1rem;
            font-size: 0.85rem;
        }
    }
}

.sky_card {
    display: flex;
    text-align: center;
    justify-content: center;
    margin-top: 50px;
    // height: 400px;

    @media screen and (max-width: 768px) {
        // height: 300px;
    }

    .sky_wrap {
        width: 70%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.02) inset;

        @media screen and (max-width: 768px) {
            width: 95%;
            background: #f7f7f7;
        }

        .sky_btn {
            width: 100%;
            display: flex;

            .sky_item {
                flex: 1;
                height: 80px;
                background: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 20px;
                position: relative;
                cursor: pointer;

                @media screen and (max-width: 768px) {
                    height: 60px;
                    text-align: center;
                    font-size: 13px;
                }
            }

            .active {
                color: #fff;
                background: #2091d3;
                font-weight: bold;

                &::before {
                    content: '▲';
                    position: absolute;
                    color: #2091d3;
                    font-size: 40px;
                    transform: rotateX(180deg);
                    bottom: -27px;
                }
            }
        }

        .sky_content {
            width: 100%;
            display: flex;
            padding: 30px;
            justify-content: center;

            @media screen and (max-width: 768px) {
                flex-direction: column;
            }

            .content_left {
                width: 100%;

                @media screen and (max-width: 768px) {
                    width: 100%;
                }

                .left_tit {
                    width: 90%;
                    margin: 0 auto;
                    font-size: 18px;
                    line-height: 40PX;
                    font-weight: bold;

                    @media screen and (max-width: 768px) {
                        line-height: 20PX;
                        width: 100%;
                        padding: 1rem;
                        font-size: 0.85rem;
                    }
                }

                // .left_icon_wrap {
                //     margin-top: 20px;
                //     display: flex;
                //     flex-wrap: wrap;
                //     padding-bottom: 30px;

                //     @media screen and (max-width: 768px) {
                //         justify-content: center;
                //     }

                //     .icon_item {
                //         width: 90%;
                //         height: 50px;

                //         @media screen and (max-width: 768px) {
                //             height: 50px;
                //         }

                //         i {
                //             color: #7bbde3;

                //             @media screen and (max-width: 768px) {
                //                 font-size: 20px;
                //             }
                //         }

                //         span {
                //             color: #646464;

                //             @media screen and (max-width: 768px) {
                //                 font-size: 14px;
                //             }
                //         }
                //     }
                // }

                // .left_btn {
                //     width: 150PX;
                //     height: 40PX;
                //     background: orange;
                //     border-radius: 30px;
                //     display: flex;
                //     align-items: center;
                //     justify-content: center;
                //     font-weight: bold;
                //     color: #fff;
                // }
            }

            // .content_right {
            //     width: 40%;

            //     @media screen and (max-width: 768px) {
            //         width: 100%;
            //         text-align: center;
            //     }

            //     text-align: right;

            //     img {
            //         margin-top: 30px;
            //         width: 80%;
            //     }

            //     .left_btn {
            //         width: 180px;
            //         height: 50px;
            //         background: orange;
            //         border-radius: 30px;
            //         display: flex;
            //         align-items: center;
            //         justify-content: center;
            //         font-weight: bold;
            //         color: #fff;
            //         cursor: pointer;

            //         @media screen and (max-width: 768px) {
            //             width: 120px;
            //             height: 35px;
            //             font-size: 14px;
            //             border-radius: 20px;
            //             margin: 20px auto;
            //             cursor: pointer;
            //         }
            //     }
            // }
        }
    }
}
</style>