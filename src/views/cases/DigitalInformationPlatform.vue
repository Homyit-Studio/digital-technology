<template>
    <div class="company-news">
        <!-- 操作栏 -->
        <div class="operation-bar">
            <el-button type="primary" @click="handleAdd">添加新的数字信息平台</el-button>
        </div>

        <!-- 数字信息化平台列表 -->
        <div class="news-list">
            <el-card v-for="news, index in newsList" :key="news.id" class="news-item">
                <template #header>
                    <div class="card-header">
                        <span style="font-weight: bolder;">第 {{ index + 1 }} 个数字信息平台项目</span>
                        <div class="card-div">
                            <el-button type="primary" size="small" @click="handleEdit(news)">编辑</el-button>
                            <el-button type="danger" size="small"
                                @click="handleDelete(news)">删除</el-button>
                        </div>
                    </div>
                </template>
                <div class="news-content">
                    <img v-if="news.imageUrl" :src="news.imageUrl" class="news-image" alt="数字信息平台项目" />
                    <div class="news-text">{{ news.caseIntroduction }}</div>
                </div>
            </el-card>
        </div>

        <!-- 编辑/添加对话框 -->
        <el-dialog v-model="dialogVisible" :title="isEdit ? '编辑数字信息平台项目' : '新增数字信息平台项目'">
            <el-form :model="form" :rules="rules" ref="formRef">
                <el-form-item label="数字信息平台的简要描述" prop="caseIntroduction">
                    <el-input v-model="form.caseIntroduction" />
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
import request from '@/utils/request' 

// 数字信息化平台列表数据
const newsList = ref([])
const dialogVisible = ref(false)
const isEdit = ref(false)
const formRef = ref(null)

// 表单数据
const form = ref({
    id: '',
    caseIntroduction: '',
    imageUrl: '',
    baseImageURL: ""
})

// 验证规则
const rules = {
    caseIntroduction: [{ required: true, message: '请输入数字信息平台简要描述', trigger: 'blur' }],
}

// 获取数字信息化平台列表
const fetchNews = async () => {
    try {
        const { data } = await request.get('/case/getallcases');
        // 过滤出 type 为 "数字信息化平台" 的项目
        newsList.value = data.data.filter(item => item.type === '数字信息平台').reverse();
        console.log(newsList.value)
    } catch (error) {
        ElMessage.error('获取数字信息平台列表失败');
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
    let parameterAdd = { caseIntroduction: form.value.caseIntroduction,type: '数字信息平台' };
    let parameterEdit = {id:form.value.id, imageUrl: form.value.baseImageURL,caseIntroduction: form.value.caseIntroduction,type: '数字信息平台' };
    formData.append('file', currentFile.value);

    if (isEdit.value) {
        const blobEdit = new Blob([JSON.stringify(parameterEdit)], { type: 'application/json;charset=utf-8' });
        formData.append('cases', blobEdit);
    } else {
        const blobAdd = new Blob([JSON.stringify(parameterAdd)], { type: 'application/json;charset=utf-8' });
        formData.append('cases', blobAdd);
    }
    console.log(formData)
    try {
        const endpoint = isEdit.value ? '/case/updatecase' : '/case/insertcase'
        const { data } = await request.post(endpoint, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },

        })
        console.log(data)
        if (data.code == 607) ElMessage.error('添加失败')
        else if (data.code == 609) ElMessage.error('修改失败')
        else ElMessage.success('操作成功')
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
    form.value = { id: '', caseIntroduction: '', imageUrl: '' }
    currentFile.value = null // 新增时清空文件缓存
    dialogVisible.value = true
}

// 编辑
const handleEdit = (news) => {
    isEdit.value = true
    form.value = { ...news }
    form.value.baseImageURL = news.imageUrl
    dialogVisible.value = true
}

// 删除
const handleDelete = async (news) => {
    try {
        await ElMessageBox.confirm('确认删除该数字信息平台项目？', '提示', { type: 'warning' });
        await request.post('/case/deletecase', news);
        ElMessage.success('删除成功');
        fetchNews();
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