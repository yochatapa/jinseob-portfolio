<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

function closeModal() {
    store.dispatch('modal/closeModal');  // 'modal/closeModal'로 수정
}

const isModalOpen = computed(() => store.getters['modal/isModalOpen']);
const modalComponent = computed(() => store.getters['modal/modalComponent']);
const parameter = computed(()=>store.getters['modal/parameter']);

// 로딩 상태와 오류 상태를 추적할 변수
const isLoading = ref(false);
const hasError = ref(false);

// 동적 컴포넌트 로딩
const dynamicModalComponent = computed(() => {
    return defineAsyncComponent({
        loader: async () => {
            try {
                isLoading.value = true;
                hasError.value = false;
                const component = await import(`../views/popup/${modalComponent.value}.vue`);
                isLoading.value = false;
                return component.default;  // default export된 컴포넌트를 반환
            } catch (error) {
                isLoading.value = false;
                hasError.value = true;
                throw error;
            }
        },
        delay: 200,  // 로딩을 기다릴 시간
        timeout: 3000 // 타임아웃 시간
    });
});
</script>

<template>
    <div v-if="isModalOpen" class="modal">
        <header class="modal-header" :style="{
            width : parameter.width?parameter.width:'100%'
        }">
            <button class="close-button" @click="closeModal">X</button>
        </header>
        <main class="modal-content" :style="{
            width : parameter.width?parameter.width:'100%',
            height : parameter.height?parameter.height:'100%',
        }">
            <div v-if="isLoading">{{ store.state.system.message.loading[store.state.system.lang] }}</div>  <!-- 로딩 상태 표시 -->
            <div v-if="hasError">{{ store.state.system.message.pageNotFound[store.state.system.lang] }}</div>  <!-- 에러 상태 표시 -->
            <component :is="dynamicModalComponent" />
        </main>
    </div>
</template>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(128 128 128 / 30%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: var(--Spacer-5);
    z-index: 9999999;
}

.modal-header{
    display: flex;
    justify-content: flex-end;
    background-color: var(--Grayscale-40);
    padding: var(--Spacer-1);
    border-radius: var(--Spacer-3) var(--Spacer-3) 0 0;
    box-shadow: 0 var(--Spacer-1) var(--Spacer-3) rgb(0 0 0 / 30%);
}

button.close-button {
    background: var(--Dark-Red-40);
    width: var(--Spacer-4);
    height: var(--Spacer-4);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0px;
    font-size: var(--Spacer-3);
    cursor: pointer;
    color: var(--Grayscale-0);
    border-radius: 50%;
    box-shadow: 0 var(--Spacer-1) var(--Spacer-3) rgb(0 0 0 / 30%);
}

.modal-content {
    background: var(--Grayscale-0);
    padding: var(--Spacer-2);
    min-height: 20vh;
    border-radius: 0 0 var(--Spacer-3) var(--Spacer-3);
    box-shadow: 0 var(--Spacer-1) var(--Spacer-3) rgb(0 0 0 / 30%);
    overflow: auto;
}
</style>
