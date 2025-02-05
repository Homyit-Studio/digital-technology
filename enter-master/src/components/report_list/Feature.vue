<template>
    <div>
        <div class="research_title_wrap">
            <div class="research_inner">
                <div class="inner_left">
                    <img src="../../assets/img/tupianright.png" alt="" />
                </div>
                <div class="inner_center">
                    <div class="research_title">公司特色</div>
                    <div class="research_desc"></div>
                </div>
                <div class="inner_right">
                    <img src="../../assets/img/tupianleft.png" alt="" />
                </div>
            </div>
        </div>

        <div class="research_sp_wrap hidden-xs-only">
            <el-row type="flex" justify="space-between" class="research_sp_row" :gutter="10">
                <el-col :span="7" class="research_sp_col">
                    <div class="tit">面向政府</div>
                    <div class="desc">
                        面向政府的重大战略研究，支撑服务于国家发展改革委、科技部等的决策研究
                    </div>
                </el-col>
                <el-col :span="7" class="research_sp_col">
                    <div class="tit">面向数字经济</div>
                    <div class="desc">
                        面向数字经济时代的产业新基建研究，探索产业数字化管理新模式
                    </div>
                </el-col>
                <el-col :span="7" class="research_sp_col">
                    <div class="tit">面向行业</div>
                    <div class="desc">
                        面向行业的指数研究产品，着力构建新时代产业研究与评价的新标杆，为政府战略决策与产业研究提供工具和产品
                    </div>
                </el-col>
            </el-row>
        </div>

        <div class="research_sp_wrap_mobile hidden-sm-and-up">
            <img src="@/assets/img/content1.png" alt="">
        </div>

        <div class="product_shows_wrap">
            <div class="production_title_wrap">
                <div class="production_inner">
                    <div class="inner_left">
                        <img src="../../assets/img/tupianright.png" alt="" />
                    </div>
                    <div class="inner_center" style="width: 40%">
                        <div class="production_title">公司发展方向</div>
                    </div>
                    <div class="inner_right">
                        <img src="../../assets/img/tupianleft.png" alt="" />
                    </div>
                </div>
            </div>
            <div class="card_fan_list">
                <el-row class="card_fan_wrap" type="flex" justify="space-between">
                    <el-col class="card_fan_item" :span="11" v-for="(item, index) in cardList" :key="index">
                        <div class="card_left hidden-xs-only">
                            <img :src="item.img" alt="" />
                        </div>
                        <div class="card_right">
                            <h1>{{ item.tit }}</h1>
                            <p>{{ item.desc }}</p>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cardList: [
                {
                    tit: '面向政府重大战略研究',
                    desc: '国务院办公厅关于印发“十四五”文物保护和科技创新规划',
                    img: require('../../assets/img/researchInstitute/icon1.png')
                },
                {
                    tit: '面向新基建产业新基建',
                    desc: '产业新基建战略白皮书',
                    img: require('../../assets/img/researchInstitute/icon2.png')
                },
                {
                    tit: '面向行业指数研发产品',
                    desc: '文物保护产业现状及未来发展趋势分析',
                    img: require('../../assets/img/researchInstitute/icon3.png')
                },
                {
                    tit: '面向“数智”数字化产品',
                    desc: '“数智”带来活化新模式，赋能文化遗产保护传承利用',
                    img: require('../../assets/img/researchInstitute/icon4.png')
                },
            ]
        };
    }
};
</script>

<style lang="scss">
.research_title_wrap {
    width: 100%;

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

.research_sp_wrap {
    width: 70%;
    margin: 0 auto;
    margin-bottom: 50px;
    height: 300px;

    .research_sp_row {
        width: 100%;

        .research_sp_col {
            background-size: 100% 100%;
            height: 420px;
            padding: 200px;

            &:nth-child(1) {
                background: url('../../assets/img/researchInstitute/1.png');
            }

            &:nth-child(2) {
                background: url('../../assets/img/researchInstitute/2.png');
            }

            &:nth-child(3) {
                background: url('../../assets/img/researchInstitute/3.png');
            }

            .tit {
                font-size: 32px;
                color: #000;
                margin: 0 30px;
            }

            .desc {
                font-size: 19px;
                margin: 10px 30px;
            }
        }
    }
}

.research_sp_wrap_mobile {
    width: 90%;
    margin: 0 auto;

    img {
        width: 100%;
    }
}

.product_shows_wrap {
    width: 100%;
    background: #f4f9fc;
    background-size: cover;
    padding: 10px 0 50px 0;
    box-sizing: border-box;
    margin-top: 250px;
    margin-bottom: 50px;

    @media screen and (max-width: 768px) {
        margin-top: 30px;
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
        width: 70%;
        margin: 0 auto;

        @media screen and (max-width: 768px) {
            width: 90%;
        }

        .card_fan_wrap {
            flex-wrap: wrap;
            margin-top: 50px;
        }

        .card_fan_item {
            display: flex;
            align-items: center;
            background: #fff;
            margin-top: 50px;
            padding: 30px;
            box-shadow: 10px 10px 20px rgba($color: #000, $alpha: 0.1);

            @media screen and (max-width: 768px) {
                background: url('../../assets/img/icon2.png') 0 0 no-repeat;
                background-position: 100% 100%;
                background-size: 35%;
                height: 100px;

                &:nth-child(n+3) {
                    margin-top: 25px;
                }
            }

            .card_left {
                width: 20%;

                img {
                    width: 100%;
                }
            }

            .card_right {
                margin-left: 15px;

                h1 {
                    font-size: 25px;

                    @media screen and (max-width: 768px) {
                        font-size: 14px;
                    }
                }

                p {
                    font-size: 18px;
                    margin-top: 10px;

                    @media screen and (max-width: 768px) {
                        font-size: 12px;
                    }
                }
            }
        }
    }
}
</style>