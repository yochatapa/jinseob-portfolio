<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

function closeModal() {
    store.dispatch('modal/closeModal');  // 'modal/closeModal'로 수정
}

const isModalOpen = computed(() => store.getters['modal/isModalOpen']);  // 'modal/isModalOpen' 형식으로 호출
const modalComponent = computed(() => store.getters['modal/modalComponent']);  // 'modal/modalComponent' 형식으로 호출

// 로딩 상태와 오류 상태를 추적할 변수
const isLoading = ref(false);
const hasError = ref(false);

// 동적 컴포넌트 로딩
const dynamicModalComponent = computed(() => {
    return defineAsyncComponent({
        loader: async () => {
            try {
                isLoading.value = true;
                const component = await import(`../views/popup/${modalComponent.value}.vue`);
                isLoading.value = false;
                return component.default;  // default export된 컴포넌트를 반환
            } catch (error) {
                isLoading.value = false;
                hasError.value = true;
                throw error;
            }
        },
        loadingComponent: {
            template: '<div>Loading...</div>',
        },
        errorComponent: {
            template: '<div>페이지를 찾을 수 없습니다.</div>',
        },
        delay: 200,  // 로딩을 기다릴 시간
        timeout: 5000 // 타임아웃 시간
    });
});
</script>

<template>
    <div v-if="isModalOpen" class="modal">
        <div class="modal-content">
            <button @click="closeModal">Close</button>
            <div v-if="isLoading">로딩 중...</div>  <!-- 로딩 상태 표시 -->
            <div v-if="hasError">페이지를 찾을 수 없습니다.</div>  <!-- 에러 상태 표시 -->
            <component :is="dynamicModalComponent" />
        </div>
    </div>
</template>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999999;
}
.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
}
</style>
