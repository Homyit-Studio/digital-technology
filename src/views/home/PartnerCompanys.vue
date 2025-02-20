<template>
    <div class="company-news">
        <!-- 操作栏 -->
        <div class="operation-bar">
            <el-button type="primary" @click="handleAdd">添加新的轮播图</el-button>
        </div>

        <!-- 合作公司列表 -->
        <div class="news-list">
            <el-card v-for="news, index in newsList" :key="news.id" class="news-item">
                <template #header>
                    <div class="card-header">
                        <span style="font-weight: bolder;">第 {{ index + 1 }} 张合作公司内容</span>
                        <div class="card-div">
                            <el-button type="primary" size="small" @click="handleEdit(news)">编辑</el-button>
                            <el-button type="danger" size="small" @click="handleDelete(news)">删除</el-button>
                        </div>
                    </div>
                </template>
                <div class="news-content">
                    <img v-if="news.companyImageUrl" :src="news.companyImageUrl" class="news-image" alt="合作公司背景图片" />
                    <div class="news-text">{{ news.companyName }}</div>
                </div>
            </el-card>
        </div>

        <!-- 编辑/添加对话框 -->
        <el-dialog v-model="dialogVisible" :title="isEdit ? '编辑轮播图' : '新增轮播图'">
            <el-form :model="form" :rules="rules" ref="formRef">
                <el-form-item label="文字内容" prop="text">
                    <el-input v-model="form.companyName" type="textarea" :rows="4" />
                </el-form-item>
                <el-form-item label="图片" prop="companyImageUrl">
                    <el-upload action="#" :auto-upload="false" :show-file-list="false" :on-change="handleImageChange">
                        <el-button type="primary">点击上传</el-button>
                        <template v-if="form.companyImageUrl">
                            <img :src="form.companyImageUrl" class="preview-image" alt="预览" />
                        </template>
                    </el-upload>
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="submitForm">确认</el-button>
            </template>
        </el-dialog>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import request from '@/utils/request' 

// 轮播图列表数据
const newsList = ref([])
const dialogVisible = ref(false)
const isEdit = ref(false)
const formRef = ref(null)

// 表单数据
const form = ref({
    id: '',
    companyName: '',
    companyImageUrl: ''
})

// 验证规则
const rules = {
    companyName: [{ required: true, message: '请输入图片上的文字', trigger: 'blur' }]
}

// 获取合作公司列表
const fetchNews = async () => {
    try {
        const { data } = await request.get('/collaboratingcompany/getallcollaboratingcompanies')
        // console.log(data)
        newsList.value = data.data.reverse()
    } catch (error) {
        ElMessage.error('获取轮播图列表失败')
    }
}

// 图片处理
const handleImageChange = (file) => {
    form.value.imageUrl = file.raw // 直接使用文件对象
}

// 提交表单
const submitForm = async () => {
    try {
        await formRef.value.validate()
    } catch (error) {
        ElMessage.error('请检查表单内容是否正确')
        return
    }

    const formData = new FormData()
    formData.append('imageWord', form.value.companyName)
    formData.append('imageFile', form.value.companyImageUrl) 

    try {
        if (isEdit.value) {
            await request.post('/image/updateimage', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        } else {
            await request.post('/image/uploadimage', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        }
        ElMessage.success('操作成功')
        dialogVisible.value = false
        fetchNews()
    } catch (error) {
        ElMessage.error('操作失败')
    }
}

// 新增
const handleAdd = () => {
    isEdit.value = false
    form.value = {
        id: '',
        companyName: '',
        companyImageUrl: ''
    }
    dialogVisible.value = true
}

// 编辑
const handleEdit = (news) => {
    isEdit.value = true
    form.value = { ...news }
    dialogVisible.value = true
}

// 删除
const handleDelete = async (news) => {
    try {
        await ElMessageBox.confirm('确认删除该轮播图？', '提示', { type: 'warning' })
        await request.post('/image/deleteimage', news)
        ElMessage.success('删除成功')
        fetchNews()
    } catch (error) {
        // 取消删除不处理
    }
}

onMounted(() => {
    fetchNews()
})
</script>

<style scoped>
.news-list {
    display: grid;
    gap: 20px;
    padding: 20px 0;
}

.news-item {
    margin-bottom: 20px;
}

.card-header {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */

    .card-div {
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-end;
        width: 200px;
    }

    @media (max-width: 768px) {
        width: 250px;

        .card-div {
            flex-wrap: wrap;
            width: 100px;
            /* margin-top: 20px; */
        }
    }
}

.news-image {
    max-width: 400px;
    max-height: 200px;
    margin-right: 20px;
}

.preview-image {
    max-width: 200px;
    margin-top: 10px;
}

.news-content {
    display: flex;
    align-items: flex-start;
    font-size: 20px;
    /* font-weight: bold; */


    @media (max-width: 768px) {
        flex-direction: column;
        

        .news-text {
            font-size: 15px;
        }
    }

}
</style>