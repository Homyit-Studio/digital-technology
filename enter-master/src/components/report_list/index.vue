<template>
    <div class="report_wrap" ref="turtor">
        <div class="repost_mobile_shiying">
            <div class="report_img">
                <div class="img_tit">
                    公司概况
                </div>
            </div>
        </div>
        <div class="product_shows_wrap">
            <div class="production_title_wrap">
                <div class="production_inner">
                    <div class="inner_left">
                        <img src="../../assets/img/tupianright.png" alt="" />
                    </div>
                    <div class="inner_center">
                        <div class="production_title">公司介绍</div>
                    </div>
                    <div class="inner_right">
                        <img src="../../assets/img/tupianleft.png" alt="" />
                    </div>
                </div>
            </div>
            <div class="table_wrap hidden-xs-only">
                <el-form label-position="left" label-width="70px" class="table_form">
                    <el-form-item label="使命：" class="table_form_item">
                        匠心筑史，科技维新
                    </el-form-item>
                    <el-form-item label="愿景：" class="table_form_item">
                        我们深信，每一件文物都是历史的见证者，承载着丰富的文化信息和民族记忆。因此，我们致力于运用前沿的三维扫描、建模、修复技术，精准捕捉并复原文物的每一寸细节，让历史的痕迹在数字世界中得以永恒留存。结合VR大空间技术，让文物在虚拟世界中“活起来”。通过构建高精度的数字模型，我们不仅实现了文物的数字化存档，更为学术研究、公众教育及创意产业提供了丰富的资源。
                    </el-form-item>
                    <el-form-item label="价值观：" class="table_form_item">
                        尊重历史，创新未来。
                        在这里，每一位成员都是文化的守护者与科技的探索者，我们携手并进，在尊重与创新的双重驱动下，共同书写文物保护与传承的新篇章。
                    </el-form-item>
                </el-form>
            </div>
            <div class="table_wrap_mobile hidden-sm-and-up">
                <p>
                    为实现文物数字化保护、修复以及活化，我们公司秉承“尊重历史，创新未来”的价值观，以“匠心筑史，科技维新”为核心企业文化。通过构建高精度的数字模型，我们实现了文物的数字化存档，为学术研究、公众教育及创意产业提供了丰富的资源。
                </p>
                <div class="table_form">
                    <div class="table_form_item">
                        <span>使命:</span>匠心筑史，科技维新
                    </div>
                    <div class="table_form_item">
                        <span>愿景:</span>
                        我们深信，每一件文物都是历史的见证者，承载着丰富的文化信息和民族记忆。因此，我们致力于运用前沿的三维扫描、建模、修复技术，精准捕捉并复原文物的每一寸细节，让历史的痕迹在数字世界中得以永恒留存。结合VR大空间技术，让文物在虚拟世界中“活起来”。
                    </div>
                    <div class="table_form_item">
                        <span>价值观:</span>
                        在这里，每一位成员都是文化的守护者与科技的探索者，我们携手并进，在尊重与创新的双重驱动下，共同书写文物保护与传承的新篇章。
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="research_title_wrap">
            <div class="research_inner">
                <div class="inner_left">
                    <img src="../../assets/img/tupianright.png" alt="" />
                </div>
                <div class="inner_center">
                    <div class="research_title">公司大事件</div>
                    <div class="research_desc"></div>
                </div>
                <div class="inner_right">
                    <img src="../../assets/img/tupianleft.png" alt="" />
                </div>
            </div>
        </div> -->
        <!-- 添加时间轴 -->
        <!-- <section class="timeline">
            <ol>
                <li v-for="(event, index) in eventList" :key="index">
                    <div>
                        <time>{{ event.year }}</time>
                        {{ event.txt }}
                    </div>
                </li>
                <li></li>
            </ol>
        </section> -->
        <Teamwork />
        <!-- <Feature></Feature> -->
        <CallMe />
        <MobileCallme />
    </div>

</template>

<script>
import CallMe from '@/components/callme/index'
import MobileCallme from '@/components/callme/MobileCallme.vue'
// import BoottomTab from '@/components/consulting/BoottomTab.vue'
// import Feature from './Feature.vue';
import Teamwork from './Teamwork.vue';
export default {
    data() {
        return {
            eventList: [
                {
                    year: '2025.1.13',
                    txt: '江西子午数智信息技术有限公司正式成立',
                },
                {
                    year: '2026.6',
                    txt: '公司将在文物保护领域迈出一大步，为未来进一步发展打下坚实基础',
                },
                {
                    year: '2027.3',
                    txt: '公司将进以创新为目标，广泛吸纳人才，达到行业中等水平',
                },
                {
                    year: '2028.3',
                    txt: '以高科技融合历史为目标，最后公司将达到行业顶尖水平',
                },
                // 可以继续添加更多事件
            ],
        }
    },
    components: {
        CallMe,
        MobileCallme,
        // BoottomTab
        // Feature
        Teamwork
    }
}
</script>

<style lang="scss">
.report_wrap {

    .repost_mobile_shiying {
        @media screen and (max-width: 768px) {}

        .report_img {
            width: 100%;
            height: 600px;

            @media screen and (max-width: 768px) {
                height: 50vw;
            }

            background: url('../../assets/Z_img/bg_Old2.png') 0 0 no-repeat;
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

                display: flex;
                align-items: center;
                justify-content: center;
            }

        }
    }

    .production_title_wrap {
        width: 100%;
        margin-top: 50px;

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
        background: url('../../assets/Z_img/bg2.1.jpg') 0 0 no-repeat;
        background-size: cover;
        padding: 10px 0 50px 0;
        margin-top: -7px;
        box-sizing: border-box;
        height: 700px;
        position: relative;

        @media screen and (max-width: 768px) {
            background: #f4f9fc;
            height: auto;
        }

        .table_wrap {
            position: absolute;
            top: 23%;
            left: 20%;
            width: 500px;

            .table_form {
                .table_form_item {
                    font-weight: bold;
                }
            }
        }

        .table_wrap_mobile {
            padding: 1rem;

            p {
                font-size: 0.9rem;
            }

            .table_form {
                .table_form_item {
                    font-weight: bold;
                    margin-top: 1rem;
                    font-size: 0.85rem;

                    span {
                        color: #000;
                        font-size: 0.9rem;
                        padding-right: 30px;
                    }
                }
            }
        }
    }

    // .research_title_wrap {
    //     width: 100%;
    //     margin-top: 40px;

    //     @media screen and (max-width: 768px) {
    //         margin-top: 30px;
    //     }

    //     .research_inner {
    //         display: flex;
    //         justify-content: center;

    //         .inner_left {
    //             display: flex;
    //             justify-content: flex-end;
    //             align-items: center;

    //             @media screen and (max-width: 768px) {
    //                 flex: 1;
    //             }

    //             img {
    //                 width: 30%;
    //             }
    //         }

    //         .inner_center {
    //             width: 400px;
    //             display: flex;
    //             flex-direction: column;
    //             justify-content: center;
    //             align-items: center;
    //             padding: 0 50px;

    //             @media screen and (max-width: 768px) {
    //                 flex: 2.2;
    //             }

    //             .research_title {
    //                 font-size: 40px;
    //                 font-weight: bold;


    //                 @media screen and (max-width: 768px) {
    //                     font-size: 1rem;
    //                 }
    //             }

    //             .research_desc {
    //                 font-size: 16px;
    //                 color: #787878;
    //                 margin-top: 10px;

    //                 @media screen and (max-width: 768px) {
    //                     margin-top: 10px;
    //                 }
    //             }
    //         }

    //         .inner_right {
    //             display: flex;
    //             justify-content: flex-start;
    //             align-items: center;

    //             @media screen and (max-width: 768px) {
    //                 flex: 1;
    //             }

    //             img {
    //                 width: 30%;
    //             }
    //         }
    //     }
    // }


    // 添加时间轴样式
    // .timeline {
    //     position: relative;
    //     white-space: nowrap;
    //     max-width: 1400px;
    //     padding: 0 10px;
    //     margin: 0 auto;
    // }

    // .timeline::before,
    // .timeline::after {
    //     content: "";
    //     position: absolute;
    //     top: 0;
    //     bottom: 30px;
    //     width: 100px;
    //     z-index: 2;
    // }

    // .timeline .info {
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: center;
    //     padding: 20px 40px;
    //     color: #e8eef2;
    //     background: #01565b;
    //     white-space: normal;
    //     border-radius: 10px;
    // }

    // .timeline .info img {
    //     margin-bottom: 20px;
    // }

    // .timeline .info p {
    //     margin-top: 10px;
    //     color: #a8dadd;
    // }

    // .timeline .info a {
    //     text-decoration: none;
    // }

    // .timeline ol::-webkit-scrollbar {
    //     height: 12px;
    // }

    // .timeline ol::-webkit-scrollbar-thumb,
    // .timeline ol::-webkit-scrollbar-track {
    //     border-radius: 92px;
    // }

    // .timeline ol::-webkit-scrollbar-thumb {
    //     background: #01565b;
    // }

    // .timeline ol::-webkit-scrollbar-track {
    //     background: #e8eef2;
    // }

    // .timeline ol {
    //     font-size: 0;
    //     padding: 250px 0;
    //     margin-bottom: 100px;
    //     transition: all 1s;
    //     overflow-x: scroll;
    //     -ms-scroll-snap-type: x mandatory;
    //     scroll-snap-type: x mandatory;
    //     scrollbar-color: #409EFF #e8eef2;
    // }

    // .timeline ol li {
    //     position: relative;
    //     display: inline-block;
    //     list-style-type: none;
    //     width: 160px;
    //     height: 5px;
    //     background: #e8eef2;
    //     scroll-snap-align: start;
    // }

    // .timeline ol li:last-child {
    //     width: 340px;
    // }

    // .timeline ol li:not(:first-child) {
    //     margin-left: 14px;
    // }

    // .timeline ol li:not(:last-child)::after {
    //     content: "";
    //     position: absolute;
    //     top: 50%;
    //     left: calc(100% + 1px);
    //     bottom: 0;
    //     width: 16px;
    //     height: 16px;
    //     transform: translateY(-50%);
    //     border-radius: 50%;
    //     background: #409EFF;
    //     z-index: 1;
    // }

    // .timeline ol li div {
    //     position: absolute;
    //     left: calc(100% + 7px);
    //     width: 280px;
    //     padding: 15px;
    //     font-size: 1rem;
    //     white-space: normal;
    //     color: #666;
    //     background: #e8eef2;
    //     border-radius: 0 10px 10px 10px;
    // }

    // .timeline ol li div::before {
    //     content: "";
    //     position: absolute;
    //     top: 100%;
    //     left: 0;
    //     width: 0;
    //     height: 0;
    //     border-style: solid;
    // }

    // .timeline ol li:nth-child(odd) div {
    //     top: -16px;
    //     transform: translateY(-100%);
    //     border-radius: 10px 10px 10px 0;
    // }

    // .timeline ol li:nth-child(odd) div::before {
    //     top: 100%;
    //     border-width: 8px 8px 0 0;
    //     border-color: #e8eef2 transparent transparent transparent;
    // }

    // .timeline ol li:nth-child(even) div {
    //     top: calc(100% + 16px);
    // }

    // .timeline ol li:nth-child(even) div::before {
    //     top: -8px;
    //     border-width: 8px 0 0 8px;
    //     border-color: transparent transparent transparent #e8eef2;
    // }

    // .timeline time {
    //     display: block;
    //     font-size: 1.4rem;
    //     font-weight: bold;
    //     margin-bottom: 8px;
    //     color: #666;
    // }

    // @media screen and (max-width: 800px) {
    //     .timeline {
    //         display: block;
    //         margin-bottom: 40px;
    //     }

    //     .timeline::before,
    //     .timeline::after {
    //         width: 50px;
    //     }

    //     .timeline::before {
    //         left: 0;
    //     }

    //     .timeline .info {
    //         display: none;
    //     }

    //     .timeline ol {
    //         font-size: 0;
    //         padding: 20vw 0;
    //         transition: all 1s;
    //         overflow-x: scroll;
    //         -ms-scroll-snap-type: x mandatory;
    //         scroll-snap-type: x mandatory;
    //         scrollbar-color: #409EFF #e8eef2;
    //     }

    //     .timeline ol li div {

    //         font-size: 0.4rem;

    //         color: #666;
    //         background: #e8eef2;
    //     }

    //     .timeline time {
    //         display: block;
    //         font-size: 0.6rem;
    //         font-weight: bold;
    //         margin-bottom: 8px;
    //         color: #666;
    //     }
    // }
}
</style>