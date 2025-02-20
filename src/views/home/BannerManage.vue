<template>
  <div class="carousel-management">
    <div class="header">
      <h1>轮播图管理</h1>
      <button @click="showAddModal = true" class="add-button">添加轮播图</button>
    </div>

    <div class="image-list">
      <div v-for="(image, index) in images" :key="index" class="image-item">
        <img :src="image.url" alt="轮播图" class="image" />
        <div class="image-text">{{ image.text }}</div>
        <div class="actions">
          <button @click="editImage(index)" class="edit-button">编辑</button>
          <button @click="deleteImage(index)" class="delete-button">删除</button>
        </div>
      </div>
    </div>

    <!-- 添加/编辑轮播图模态框 -->
    <div v-if="showAddModal || showEditModal" class="modal">
      <div class="modal-content">
        <span @click="closeModal" class="close">&times;</span>
        <h2>{{ isEditing ? '编辑轮播图' : '添加轮播图' }}</h2>
        <input type="file" @change="handleFileUpload" accept="image/*" />
        <input v-model="currentImage.text" placeholder="输入图片描述" />
        <button @click="submitImage" class="submit-button">{{ isEditing ? '更新' : '添加' }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      images: [],
      showAddModal: false,
      showEditModal: false,
      isEditing: false,
      currentImage: {
        url: '',
        text: '',
        file: null
      },
      editIndex: -1
    };
  },
  created() {
    this.fetchImages();
  },
  methods: {
    async fetchImages() {
      try {
        const response = await axios.get('/image/getallimages');
        this.images = response.data;
      } catch (error) {
        console.error('获取图片失败:', error);
      }
    },
    handleFileUpload(event) {
      this.currentImage.file = event.target.files[0];
    },
    async submitImage() {
      const formData = new FormData();
      formData.append('image', this.currentImage.file);
      formData.append('text', this.currentImage.text);

      try {
        if (this.isEditing) {
          await axios.put(`/image/update/${this.editIndex}`, formData);
        } else {
          await axios.post('/image/upload', formData);
        }
        this.fetchImages();
        this.closeModal();
      } catch (error) {
        console.error('上传图片失败:', error);
      }
    },
    editImage(index) {
      this.currentImage = { ...this.images[index] };
      this.editIndex = index;
      this.isEditing = true;
      this.showEditModal = true;
    },
    async deleteImage(index) {
      try {
        await axios.delete(`/image/delete/${index}`);
        this.fetchImages();
      } catch (error) {
        console.error('删除图片失败:', error);
      }
    },
    closeModal() {
      this.showAddModal = false;
      this.showEditModal = false;
      this.isEditing = false;
      this.currentImage = { url: '', text: '', file: null };
      this.editIndex = -1;
    }
  }
};
</script>

<style scoped>
.carousel-management {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.add-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}

.image-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.image-item {
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
}

.image {
  width: 100%;
  height: auto;
}

.image-text {
  padding: 10px;
  font-size: 16px;
}

.actions {
  display: flex;
  justify-content: space-around;
  padding: 10px;
}

.edit-button, .delete-button {
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  border-radius: 3px;
}

.edit-button {
  background-color: #2196F3;
  color: white;
}

.delete-button {
  background-color: #f44336;
  color: white;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  text-align: center;
}

.close {
  float: right;
  cursor: pointer;
  font-size: 24px;
}

.submit-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .image-list {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
}
</style>