<template>
    <div class="company-news">
        <!-- 操作栏 -->
        <div class="operation-bar">
            <el-button type="primary" @click="handleAdd">添加行业资讯（页面只展示前10个行业最新资讯）</el-button>
        </div>

        <!-- 新闻列表 -->
        <div class="news-list">
            <el-card v-for="news in newsList" :key="news.id" class="news-item">
                <template #header>
                    <div class="card-header">
                        <span>{{ news.title }}</span>
                        <div class="card-div">
                            <el-button type="primary" size="small" @click="handleEdit(news)">编辑</el-button>
                            <el-button type="danger" size="small" @click="handleDelete(news.id)">删除</el-button>
                        </div>
                    </div>
                </template>
                <div class="news-content">
                    <img v-if="news.imageUrl" :src="news.imageUrl" class="news-image" alt="新闻图片" />
                    <div class="news-text">{{ news.text }}</div>
                </div>
            </el-card>
        </div>

        <!-- 编辑/添加对话框 -->
        <el-dialog v-model="dialogVisible" :title="isEdit ? '编辑新闻' : '新增新闻'">
            <el-form :model="form" :rules="rules" ref="formRef">
                <el-form-item label="标题" prop="title">
                    <el-input v-model="form.title" />
                </el-form-item>
                <el-form-item label="详情" prop="text">
                    <el-input v-model="form.text" type="textarea" :rows="4" />
                </el-form-item>
                <el-form-item label="图片" prop="imageUrl">
                    <el-upload action="#" :auto-upload="false" :show-file-list="false" :on-change="handleImageChange">
                        <el-button type="primary">点击上传</el-button>
                        <template v-if="form.imageUrl">
                            <img :src="form.imageUrl" class="preview-image" alt="预览" />
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
import request from '@/utils/request' // 根据实际路径调整

// 新闻列表数据
const newsList = ref([])
const dialogVisible = ref(false)
const isEdit = ref(false)
const formRef = ref(null)

// 表单数据
const form = ref({
    id: '',
    title: '',
    text: '',
    imageUrl: ''
})

// 验证规则
const rules = {
    title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
    text: [{ required: true, message: '请输入详情', trigger: 'blur' }]
}

// 获取新闻列表
const fetchNews = async () => {
    try {
        const { data } = await request.post('/new/getnews', { type: '行业资讯' })
        console.log(data)
        newsList.value = data.data
    } catch (error) {
        ElMessage.error('获取新闻列表失败')
    }
}

// 图片处理
const handleImageChange = (file) => {
    const reader = new FileReader()
    reader.onload = (e) => {
        form.value.imageUrl = e.target.result
    }
    reader.readAsDataURL(file.raw)
}

// 提交表单
const submitForm = async () => {
    await formRef.value.validate()

    const payload = {
        ...form.value,
        type: '行业资讯'
    }

    try {
        if (isEdit.value) {
            await request.post('/new/updatenews', payload)
        } else {
            await request.post('/new/insertnews', payload)
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
    form.value = { id: '', title: '', text: '', imageUrl: '' }
    dialogVisible.value = true
}

// 编辑
const handleEdit = (news) => {
    isEdit.value = true
    form.value = { ...news }
    dialogVisible.value = true
}

// 删除
const handleDelete = async (id) => {
    try {
        await ElMessageBox.confirm('确认删除该新闻？', '提示', { type: 'warning' })
        await request.post('/new/deletenews', { id })
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
    max-width: 300px;
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



    @media (max-width: 768px) {
        flex-direction: column;

        .news-text {
            font-size: 12px;
        }
    }

}
</style>