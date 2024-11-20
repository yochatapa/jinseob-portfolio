<script setup lang="ts">
import { useStore } from 'vuex';

const store = useStore();
</script>

<template>
    <div class="name-card">
        <div class="image-wrapper">
            <img src="@/assets/main-user-image.png" alt="main-user-image" class="main-image"/>
        </div>
        <div class="name-wrapper">
            <h2 class="ko-name">{{ store.state.about.koreanName }}</h2>
            <h4 class="en-name">{{ store.state.about.englishName }}</h4>
            <span>{{ store.state.about.introduction }}</span>
        </div>
    </div>
</template>

<style scoped>
.name-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
}

.image-wrapper{
    padding: var(--Spacer-7) var(--Spacer-5);
    height: 70%;
}

.main-image{
    height: 100%;
}

.name-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 30%;
}

h2.ko-name {
    margin: var(--Spacer-1) 0;
}

h4.en-name{
    margin: var(--Spacer-1) 0 var(--Spacer-4) 0;
}
</style>
