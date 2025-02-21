<template>
    <div class="login-container">
        <div class="login-glass">
            <el-card class="login-box">
                <h2 class="login-title">子午数智后台管理系统</h2>
                <el-form :model="form" :rules="rules" ref="loginForm">
                    <el-form-item prop="name" class="form-item">
                        <el-input v-model="form.name" prefix-icon="user" placeholder="用户名" class="custom-input" />
                    </el-form-item>

                    <el-form-item prop="password" class="form-item">
                        <el-input v-model="form.password" type="password" show-password prefix-icon="lock"
                            placeholder="密码" class="custom-input" />
                    </el-form-item>

                    <el-form-item class="remember-item">
                        <el-checkbox v-model="autoLogin">自动登录</el-checkbox>
                    </el-form-item>

                    <el-button type="primary" class="login-btn" @click="handleLogin" :loading="loading">
                        登 录
                    </el-button>
                </el-form>
            </el-card>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import request from '@/utils/request'

const form = ref({
    name: '',
    password: ''
})

const autoLogin = ref(false)
const loading = ref(false)
const router = useRouter()
const authStore = useAuthStore()

// 自动填充已保存的账号
onMounted(() => {
    const savedUser = localStorage.getItem('autoLoginUser')
    if (savedUser) {
        const { name, password } = JSON.parse(savedUser)
        form.value = { name, password }
        autoLogin.value = true
    }
})

const rules = {
    name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
}
const handleLogin = async () => {
    try {
        loading.value = true
        authStore.removeToken()
        const { data } = await request.post('/login', form.value)
        // console.log(data)
        authStore.setToken(data.data.token)
        if (data.data.code == 603) {
            ElMessage.error('登录失败')
        } else {
            if (autoLogin.value) {
                localStorage.setItem('autoLoginUser', JSON.stringify(form.value))
            } else {
                localStorage.removeItem('autoLoginUser')
            }
            ElMessage.success('登录成功')
            router.push('/')
        }
        // console.log(authStore.token)

    } catch (e) {
        // ElMessage.error(error.response?.data?.message || '登录失败')
    } finally {
        loading.value = false
    }
}

</script>

<style scoped>
.login-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('../../public/bg_buttom.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
}

.login-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.login-glass {
    position: relative;
    z-index: 1;
    width: 400px;
    height: 400px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}

.login-box {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
}

.login-title {
    color: #fff;
    text-align: center;
    font-family: '宋体';
    margin-bottom: 2rem;
    font-size: 1.8rem;
    letter-spacing: 2px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

:deep(.custom-input) {
    background: rgba(255, 255, 255, 0.1) !important;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    color: #fff !important;
    transition: all 0.3s ease;
}

:deep(.custom-input:hover) {
    border-color: rgba(255, 255, 255, 0.5);
}

:deep(.custom-input .el-input__wrapper) {
    background: transparent !important;
    box-shadow: none !important;
}

:deep(.custom-input .el-input__inner) {
    color: rgba(255, 255, 255, 1) !important;
}

:deep(.custom-input .el-input__inner::placeholder) {
    color: rgba(255, 255, 255, 0.7) !important;
}

:deep(.el-icon) {
    color: #fff !important;
    font-size: 1.2rem;
}

.login-btn {
    background: linear-gradient(45deg, #409EFF, #3375e0) !important;
    width: 80%;
    border: none !important;
    border-radius: 10px !important;
    padding: 10px 0;
    font-size: 1rem;
    letter-spacing: 2px;
    transition: all 0.3s ease !important;
    display: block;
    margin: 0 auto;
}

.login-btn:hover {
    /* transform: translateY(-2px); */
    box-shadow: 0 5px 15px rgba(64, 158, 255, 0.4) !important;
}

:deep(.el-form-item:last-child) {
    margin-bottom: 0;
    text-align: center;
}

.form-item {
    margin-bottom: 24px;
}

.remember-item {
    margin-left: 5px;
    margin-bottom: 32px;
    text-align: left;
}

:deep(.el-checkbox__label) {
    color: rgba(255, 255, 255, 0.8);
}

:deep(.el-checkbox__inner) {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
}

@media (max-width: 480px) {
    .login-glass {
        width: 90%;
        height: auto;
        padding: 2rem;
    }
}
</style>