<template>
    <div :show="loading">
        <div class="frame">
            <iframe src="http://106.14.106.91/" class="frame-iframe" ref="frameRef"></iframe>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, unref, onMounted, nextTick } from 'vue';
import { useRoute } from 'vue-router';

const currentRoute = useRoute();
const loading = ref(false);
const frameRef = ref<HTMLFrameElement | null>(null);
const frameSrc = ref<string>('');

if (unref(currentRoute.meta)?.frameSrc) {
    frameSrc.value = unref(currentRoute.meta)?.frameSrc as string;
}

function hideLoading() {
    loading.value = false;
}

function init() {
    nextTick(() => {
        const iframe = unref(frameRef);
        if (!iframe) return;
        const _frame = iframe as any;
        if (_frame.attachEvent) {
            _frame.attachEvent('onload', () => {
                hideLoading();
            });
        } else {
            iframe.onload = () => {
                hideLoading();
            };
        }
    });
}

onMounted(() => {
    loading.value = true;
    init();
});
</script>

<style scoped>
.frame {
    box-sizing: border-box;
    /* 确保边框和间距不影响尺寸计算 */
    display: flex;
    /* 使用 flex 布局更可靠 */
}

.frame-iframe {
    width: 100vw;
    /* 视口宽度 */
    min-width: 100%;
    height: 85vh;
}
</style>