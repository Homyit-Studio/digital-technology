<template>
    <el-container class="h-screen">
        <el-aside class="admin-sidebar">
            <div class="title-container">
                <span class="title">子午数智后台</span>
            </div>
            <el-menu class="admin-menu" background-color="#1f2937" text-color="#fff" active-text-color="#409EFF" router>
                <!-- <el-menu-item index="/home/banner" class="admin-menu-item">
                    <el-icon>
                        <icon-ep-picture />
                    </el-icon>
                    <span>首页轮播图</span>
                </el-menu-item> -->
                 <el-sub-menu class="admin-sub-menu">
                    <template #title>
                        <el-icon>
                            <icon-ep-home-filled /> 
                        </el-icon>
                        <span>首页</span>
                    </template>
                    <el-menu-item index="/home/banner" class="admin-menu-item">
                        <el-icon>
                            <icon-ep-picture />
                        </el-icon>
                        轮播图
                    </el-menu-item>
                    <el-menu-item index="/home/partner" class="admin-menu-item">
                        <el-icon>
                            <icon-ep-office-building />
                        </el-icon>
                        合作公司
                    </el-menu-item>
                </el-sub-menu>
                <el-sub-menu class="admin-sub-menu">
                    <template #title>
                        <el-icon>
                            <icon-ep-collection />
                        </el-icon>
                        <span>案例展示</span>
                    </template>
                    <el-menu-item index="/cases/digital" class="admin-menu-item">
                        <el-icon>
                            <icon-ep-menu />
                        </el-icon>
                        文物数字化
                    </el-menu-item>
                    <el-menu-item index="/cases/panorama" class="admin-menu-item">
                        <el-icon><icon-ep-video-play /></el-icon>
                        全景漫游
                    </el-menu-item>
                </el-sub-menu>
                <el-sub-menu class="admin-sub-menu">
                    <template #title>
                        <el-icon><icon-ep-Memo /></el-icon>
                        <span>新闻资讯</span>
                    </template>
                    <el-menu-item index="/news/company" class="admin-menu-item">
                        <el-icon>
                            <icon-ep-document />
                        </el-icon>
                        公司资讯
                    </el-menu-item>
                    <el-menu-item index="/news/industry" class="admin-menu-item">
                        <el-icon><icon-ep-data-board /></el-icon>
                        行业资讯
                    </el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-aside>

        <el-container>
            <el-header class="admin-header">
                <div class="items-center">
                    <el-icon class="mr-2">
                        <user />
                    </el-icon>
                    <span>欢迎，管理员！</span>
                </div>
                <el-button type="danger" @click="logout">
                    <el-icon><icon-ep-switch-button /></el-icon>
                    退出登录
                </el-button>
            </el-header>

            <el-main class="admin-main">
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()

const logout = () => {
    authStore.removeToken()
    router.push('/login')
}
</script>

<style scoped>
/* 侧边栏优化 */
.admin-sidebar {
    height: 100vh;
    background-color: #fff;
    box-shadow: 4px 0 6px -1px rgba(0, 0, 0, 0.1);
    z-index: 10;
    /* 确保侧边栏在内容区之上 */
}

.title-container {
    height: 50px;
    background-color: #fff;

    .title {
        color: #4a5568;
        font-weight: 800;
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}


.admin-sidebar-header {
    background-color: #1f2937;
    color: white;
}

/* 菜单项优化 */
.admin-menu {
    --el-menu-active-color: #409EFF;
    --el-menu-hover-bg-color: rgba(255, 255, 255, 0.1);
}

.admin-menu-item {
    transition: all 0.3s ease;
    margin: 4px 8px;
    border-radius: 6px;
}

.admin-menu-item.is-active {
    background-color: rgba(66, 153, 225, 0.1) !important;
    border-left: 3px solid #409EFF;
}

/* 图标间距统一 */
.admin-menu-item .el-icon,
.admin-sub-menu__title .el-icon {
    margin-right: 12px;
    font-size: 1.2em;
}

/* 头部优化 */
.admin-header {
    font-size: 26px;
    padding: 0 24px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
}

.admin-header .el-button {
    padding: 8px 16px;
    display: flex;
}

/* 主内容区优化 */
.admin-main {
    background-color: #f8fafc;
    padding: 24px;
    position: relative;
}

/* 子菜单标题样式 */
.admin-sub-menu__title {
    font-weight: 500;
    transition: all 0.2s ease;
}

/* 用户信息展示 */
.admin-header .user-info {
    font-size: 16px;
    color: #4a5568;
    display: flex;
    align-items: center;
    gap: 8px;
}

/* 响应式调整 */
@media (max-width: 768px) {
    .admin-sidebar {
        width: 150px;
        /* 修改宽度为100%以适应屏幕 */
    }

    .admin-header {
        padding: 0 16px;
    }
}
</style>