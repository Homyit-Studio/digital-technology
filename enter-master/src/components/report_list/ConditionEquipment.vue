<template>
    <div>
        <div class="condition_shows_wrap">
            <!-- 标题部分保持不变 -->
            <div class="condition_title_wrap">
                <div class="condition_inner">
                    <div class="inner_left">
                        <img src="../../assets/img/tupianright.png" alt="" />
                    </div>
                    <div class="inner_center">
                        <div class="condition_title">条件设备</div>
                    </div>
                    <div class="inner_right">
                        <img src="../../assets/img/tupianleft.png" alt="" />
                    </div>
                </div>
            </div>

            <!-- 设备展示区域修改 -->
            <div class="advantage_out_wrap">
                <el-row class="advantage_wrap">
                    <el-col class="advantage_item" v-for="(item, index) in advantageList" :key="index" :span="7"
                        :xs="11">
                        <div class="square-box" :style="{ backgroundImage: `url(${item.src})` }">
                            <div class="item_top">
                                <div class="tit">{{ item.title }}</div>
                            </div>
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
            advantageList: [
                {
                    icon: '',
                    title: '机载激光扫描仪',
                    src: require('@/assets/Z_img/ConEquipment/C.jpg')
                },
                {
                    icon: '',
                    title: '全景相机',
                    src: require('@/assets/Z_img/ConEquipment/C1.jpg')
                },
                {
                    icon: '',
                    title: '地面站激光扫描仪',
                    src: require('@/assets/Z_img/ConEquipment/C2.jpg')
                },
                {
                    icon: '',
                    title: '手持激光扫描仪',
                    src: require('@/assets/Z_img/ConEquipment/C3.jpg')
                },
                {
                    icon: '',
                    title: '专业测绘无人机',
                    src: require('@/assets/Z_img/ConEquipment/C4.jpg')
                },
                {
                    icon: '',
                    title: '3D打印机',
                    src: require('@/assets/Z_img/ConEquipment/C5.jpg')
                },
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
.condition_shows_wrap {
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

    .condition_title_wrap {
        width: 100%;
        // margin-top: 50px;

        @media screen and (max-width: 768px) {
            margin-top: 30px;
        }

        .condition_inner {
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

                .condition_title {
                    font-size: 40px;
                    font-weight: bold;

                    @media screen and (max-width: 768px) {
                        font-size: 1rem;
                    }
                }

                .condition_desc {
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

    .advantage_out_wrap {
        .advantage_wrap {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

            .advantage_item {
                padding: 10px;
                margin: 15px;
                transition: all 0.3s ease;
                cursor: pointer;

                .square-box {
                    position: relative;
                    width: 100%;
                    padding-top: 100%;
                    /* 关键：创建正方形 */
                    background-size: cover;
                    background-position: center;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);

                    /* 半透明黑色遮罩增强文字可读性 */
                    &::after {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: rgba(0, 0, 0, 0.3);
                        z-index: 1;
                    }

                    .item_top {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        z-index: 2;
                        padding: 20px;
                        color: white;
                        text-align: center;

                        .tit {
                            font-size: 20px;
                            font-weight: bold;
                            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
                        }
                    }
                }

                &:hover {
                    transform: translateY(-5px);

                    .square-box::after {
                        background: rgba(0, 0, 0, 0.2);
                    }
                }

                @media (max-width: 768px) {
                    margin: 10px 0;
                    padding: 5px;

                    .square-box {
                        .item_top {
                            padding: 10px;

                            .tit {
                                font-size: 16px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>