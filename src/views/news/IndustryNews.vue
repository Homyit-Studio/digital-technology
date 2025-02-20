<template>
    <div class="company-news">
        <!-- 操作栏 -->
        <div class="operation-bar">
            <el-button type="primary" @click="handleAdd">添加行业资讯（页面只展示前10个行业最新资讯）</el-button>
        </div>

        <!-- 新闻列表 -->
        <div class="news-list">
            <el-card v-for="news, index in newsList" :key="news.id" class="news-item">
                <template #header>
                    <div class="card-header">
                        <span>{{ index + 1 }}. {{ news.title }}</span>
                        <div class="card-div">
                            <el-button type="primary" size="small" @click="handleEdit(news)">编辑</el-button>
                            <el-button type="danger" size="small"
                                @click="handleDelete(news.id, news.imageUrl)">删除</el-button>
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
                <el-form-item label="网址" prop="text">
                    <el-input v-model="form.text" type="textarea" :rows="4" />
                </el-form-item>
                <el-form-item label="图片" prop="imageUrl">
                    <el-upload action="#" :auto-upload="false" :show-file-list="false" :limit="1"
                        :on-exceed="() => ElMessage.warning('每次只能上传一张图片')" :on-change="handleImageChange">
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
        // console.log(data)
        newsList.value = data.data.reverse()
    } catch (error) {
        ElMessage.error('获取新闻列表失败')
    }
}

// 图片处理
const currentFile = ref(null) // 存储当前选中的文件

const handleImageChange = (file) => {
    currentFile.value = file.raw // 存储文件对象
    const reader = new FileReader()
    reader.onload = (e) => {
        form.value.imageUrl = e.target.result
    }
    reader.readAsDataURL(file.raw)
}

// 提交表单
const submitForm = async () => {
    await formRef.value.validate()
    let formData = new FormData();
    // 用户对象
    let parameterAdd = { text: form.value.text, title: form.value.title, type: '行业资讯' };
    let parameterEdit = { text: form.value.text, title: form.value.title, type: '行业资讯', id: form.value.id, imageUrl: form.value.imageUrl };
    formData.append('file', currentFile.value);
    if (isEdit.value) {
        const blobEdit = new Blob([JSON.stringify(parameterEdit)], { type: 'application/json;charset=utf-8' });
        formData.append('news', blobEdit);
    } else {
        const blobAdd = new Blob([JSON.stringify(parameterAdd)], { type: 'application/json;charset=utf-8' });
        formData.append('news', blobAdd);
    }
    try {
        const endpoint = isEdit.value ? '/new/updatenews' : '/new/insertnews'
        await request.post(endpoint, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },

        })
        ElMessage.success('操作成功')
        dialogVisible.value = false
        currentFile.value = null
        fetchNews()
    } catch (error) {
        ElMessage.error('操作失败')
    }
}

// 新增
const handleAdd = () => {
    isEdit.value = false
    form.value = { id: '', title: '', text: '', imageUrl: '' }
    currentFile.value = null // 新增时清空文件缓存
    dialogVisible.value = true
}
// 编辑
const handleEdit = (news) => {
    isEdit.value = true
    form.value = { ...news }
    dialogVisible.value = true
}

// 删除
const handleDelete = async (id, imageUrl) => {
    try {
        await ElMessageBox.confirm('确认删除该新闻？', '提示', { type: 'warning' })
        await request.post('/new/deletenews', { "id": id, "imageUrl": imageUrl, "type": '行业资讯' })
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