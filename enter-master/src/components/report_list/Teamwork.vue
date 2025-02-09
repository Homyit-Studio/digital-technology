<template>
    <div>
        <!-- <div class="research_sp_wrap_mobile hidden-sm-and-up">
            <img src="@/assets/img/content1.png" alt="">
        </div> -->
        <div class="team_shows_wrap">
            <div class="team_title_wrap">
                <div class="team_inner">
                    <div class="inner_left">
                        <img src="../../assets/img/tupianright.png" alt="" />
                    </div>
                    <div class="inner_center">
                        <div class="team_title">项目团队</div>
                    </div>
                    <div class="inner_right">
                        <img src="../../assets/img/tupianleft.png" alt="" />
                    </div>
                </div>
            </div>
            <div class="card_fan_list">
                项目团队目前已形成一支结构合理、层次均衡、优势突出的学术队伍，
                聘请欧亚院士作为顾问；中青年学术带头人3人。
                项目人员的研究背景涉及地理学、建筑学、测绘科学与技术、计算机科学等学科领域，形成极具特色的多学科交叉团队，已经发展成为一支结构合理、年富力强、创新能力突出的科研群体。
                在遗产数字化领域深耕，实践能力强，对前沿理论持续探索，具有较好的工作基础。
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
.team_shows_wrap {
    width: 100%;
    background: #fff;
    // background-size: cover;
    padding: 50px 0 50px 0;
    // box-sizing: border-box;
    // margin-top: 150px;
    // margin-bottom: 100px;

    @media screen and (max-width: 768px) {
        // margin-top: 30px;
    }

    .team_title_wrap {
        width: 100%;
        // margin-top: 50px;

        @media screen and (max-width: 768px) {
            margin-top: 30px;
        }

        .team_inner {
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

                .team_title {
                    font-size: 40px;
                    font-weight: bold;

                    @media screen and (max-width: 768px) {
                        font-size: 1rem;
                    }
                }

                .team_desc {
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