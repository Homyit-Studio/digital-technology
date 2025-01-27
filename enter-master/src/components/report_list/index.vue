<template>
    <div class="report_wrap" ref="turtor">
        <div class="repost_mobile_shiying">
            <div class="report_img">
                <div class="img_tit">
                    发展历程
                </div>
            </div>
        </div>
        <div class="research_title_wrap">
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
        </div>
        <!-- 添加时间轴 -->
        <section class="timeline">
            <ol>
                <li v-for="(event, index) in eventList" :key="index">
                    <div>
                        <time>{{ event.year }}</time>
                        {{ event.txt }}
                    </div>
                </li>
                <li></li>
            </ol>
        </section>
        <Feature></Feature>
        <CallMe />
        <MobileCallme />
    </div>

</template>

<script>
import CallMe from '@/components/callme/index'
import MobileCallme from '@/components/callme/MobileCallme.vue'
// import BoottomTab from '@/components/consulting/BoottomTab.vue'
import Feature from './Feature.vue';
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
        Feature
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

            background: url('../../assets/img/cydcbg.80d9b0b.jpg') 0 0 no-repeat;
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

    .research_title_wrap {
        width: 100%;
        margin-top: 40px;

        @media screen and (max-width: 768px) {
            margin-top: 30px;
        }

        .research_inner {
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

                .research_title {
                    font-size: 40px;
                    font-weight: bold;


                    @media screen and (max-width: 768px) {
                        font-size: 1rem;
                    }
                }

                .research_desc {
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


    // 添加时间轴样式
    .timeline {
        position: relative;
        white-space: nowrap;
        max-width: 1400px;
        padding: 0 10px;
        margin: 0 auto;
    }

    .timeline::before,
    .timeline::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 30px;
        width: 100px;
        z-index: 2;
    }

    .timeline .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px 40px;
        color: #e8eef2;
        background: #01565b;
        white-space: normal;
        border-radius: 10px;
    }

    .timeline .info img {
        margin-bottom: 20px;
    }

    .timeline .info p {
        margin-top: 10px;
        color: #a8dadd;
    }

    .timeline .info a {
        text-decoration: none;
    }

    .timeline ol::-webkit-scrollbar {
        height: 12px;
    }

    .timeline ol::-webkit-scrollbar-thumb,
    .timeline ol::-webkit-scrollbar-track {
        border-radius: 92px;
    }

    .timeline ol::-webkit-scrollbar-thumb {
        background: #01565b;
    }

    .timeline ol::-webkit-scrollbar-track {
        background: #e8eef2;
    }

    .timeline ol {
        font-size: 0;
        padding: 250px 0;
        margin-bottom: 100px;
        transition: all 1s;
        overflow-x: scroll;
        -ms-scroll-snap-type: x mandatory;
        scroll-snap-type: x mandatory;
        scrollbar-color: #409EFF #e8eef2;
    }

    .timeline ol li {
        position: relative;
        display: inline-block;
        list-style-type: none;
        width: 160px;
        height: 5px;
        background: #e8eef2;
        scroll-snap-align: start;
    }

    .timeline ol li:last-child {
        width: 340px;
    }

    .timeline ol li:not(:first-child) {
        margin-left: 14px;
    }

    .timeline ol li:not(:last-child)::after {
        content: "";
        position: absolute;
        top: 50%;
        left: calc(100% + 1px);
        bottom: 0;
        width: 16px;
        height: 16px;
        transform: translateY(-50%);
        border-radius: 50%;
        background: #409EFF;
        z-index: 1;
    }

    .timeline ol li div {
        position: absolute;
        left: calc(100% + 7px);
        width: 280px;
        padding: 15px;
        font-size: 1rem;
        white-space: normal;
        color: #666;
        background: #e8eef2;
        border-radius: 0 10px 10px 10px;
    }

    .timeline ol li div::before {
        content: "";
        position: absolute;
        top: 100%;
        left: 0;
        width: 0;
        height: 0;
        border-style: solid;
    }

    .timeline ol li:nth-child(odd) div {
        top: -16px;
        transform: translateY(-100%);
        border-radius: 10px 10px 10px 0;
    }

    .timeline ol li:nth-child(odd) div::before {
        top: 100%;
        border-width: 8px 8px 0 0;
        border-color: #e8eef2 transparent transparent transparent;
    }

    .timeline ol li:nth-child(even) div {
        top: calc(100% + 16px);
    }

    .timeline ol li:nth-child(even) div::before {
        top: -8px;
        border-width: 8px 0 0 8px;
        border-color: transparent transparent transparent #e8eef2;
    }

    .timeline time {
        display: block;
        font-size: 1.4rem;
        font-weight: bold;
        margin-bottom: 8px;
        color: #666;
    }

    @media screen and (max-width: 800px) {
        .timeline {
            display: block;
            margin-bottom: 40px;
        }

        .timeline::before,
        .timeline::after {
            width: 50px;
        }

        .timeline::before {
            left: 0;
        }

        .timeline .info {
            display: none;
        }

        .timeline ol {
            font-size: 0;
            padding: 20vw 0;
            transition: all 1s;
            overflow-x: scroll;
            -ms-scroll-snap-type: x mandatory;
            scroll-snap-type: x mandatory;
            scrollbar-color: #409EFF #e8eef2;
        }

        .timeline ol li div {

            font-size: 0.4rem;

            color: #666;
            background: #e8eef2;
        }

        .timeline time {
            display: block;
            font-size: 0.6rem;
            font-weight: bold;
            margin-bottom: 8px;
            color: #666;
        }
    }
}
</style>