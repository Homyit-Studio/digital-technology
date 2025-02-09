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
</style>