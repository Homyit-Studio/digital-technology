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
            <!-- <div class="card_fan_list">
                项目团队目前已形成一支结构合理、层次均衡、优势突出的学术队伍，
                聘请欧亚院士作为顾问；中青年学术带头人3人。
                项目人员的研究背景涉及地理学、建筑学、测绘科学与技术、计算机科学等学科领域，形成极具特色的多学科交叉团队，已经发展成为一支结构合理、年富力强、创新能力突出的科研群体。
                在遗产数字化领域深耕，实践能力强，对前沿理论持续探索，具有较好的工作基础。
            </div> -->
            <div class="current_show_menu">
                <Row class-name="enter_card_wrap hidden-xs-only" :gutter="20" justify="center">
                    <Col span="14">
                    <Card :bordered="true" class="enter_card_item animate__animated animate__swing">
                        <!-- <p slot="title" class="title">高学历人才</p> -->
                        <br />
                        <br />
                        <br />
                        <p> 项目团队目前已形成一支结构合理、层次均衡、优势突出的学术队伍，
                            聘请欧亚院士作为顾问；中青年学术带头人3人。
                            项目人员的研究背景涉及地理学、建筑学、测绘科学与技术、计算机科学等学科领域，形成极具特色的多学科交叉团队，已经发展成为一支结构合理、年富力强、创新能力突出的科研群体。
                            在遗产数字化领域深耕，实践能力强，对前沿理论持续探索，具有较好的工作基础。</p>
                        <br />
                        <br />
                        <br />
                    </Card>
                    </Col>

                </Row>

                <div class="card_fan_list hidden-sm-and-up">
                    项目团队目前已形成一支结构合理、层次均衡、优势突出的学术队伍，
                    聘请欧亚院士作为顾问；中青年学术带头人3人。
                    项目人员的研究背景涉及地理学、建筑学、测绘科学与技术、计算机科学等学科领域，形成极具特色的多学科交叉团队，已经发展成为一支结构合理、年富力强、创新能力突出的科研群体。
                    在遗产数字化领域深耕，实践能力强，对前沿理论持续探索，具有较好的工作基础。
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
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

    .current_show_menu {
        max-width: 100%;
        // width: 80%;
        margin-bottom: 50px;

        .enter_card_wrap_mobile {
            width: 100%;

            img {
                width: 100%;
            }
        }

        .enter_card_wrap {
            max-width: 100%;
            width: 100%;
            margin-top: 50px;

            .enter_card_item {
                background: #f4f9fc;
                border-radius: 20px;
                text-align: center;

                p {
                    width: 60%;
                    text-align: center;
                    line-height: 40px;
                    margin: 0 auto;
                    font-size: 20px;
                    font-weight: 600;
                }

                .title {
                    font-size: 20px;
                    font-weight: bold;
                }
            }
        }

        .mall_wrap {
            width: 70%;
            display: flex;
            justify-content: center;
            margin: 34px auto;

            @media screen and (max-width: 768px) {
                width: 90%;
            }

            @media screen and (max-width: 768px) {
                flex-direction: column;
            }

            .mall_img {
                width: 50%;
                margin-right: 30px;
                padding: 0 30px;

                @media screen and (max-width: 768px) {
                    width: 100%;
                }

                img {
                    width: 100%;
                }
            }
        }

        .mall_details {
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            @media screen and (max-width: 768px) {
                width: 90%;
                text-align: center;
            }

            p {
                font-size: 20px;

                @media screen and (max-width: 768px) {
                    font-size: 14px;
                }
            }

            .mall_btn {
                margin-top: 40px;

                @media screen and (max-width: 768px) {
                    padding: 20px 0;
                }

                .btn_self {
                    background: orange;
                    color: #fff;
                    border-radius: 20px;
                    border: none;

                    @media screen and (max-width: 768px) {
                        width: 80px;
                        height: 35px;
                        border-radius: 20px;
                        font-size: 14px;
                    }
                }
            }
        }
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
        @media screen and (max-width: 768px) {
            line-height: 20PX;
            width: 100%;
            padding: 1rem;
            margin: 0 auto;
            font-weight: bold;
            font-size: 0.85rem;
        }
    }
}
</style>