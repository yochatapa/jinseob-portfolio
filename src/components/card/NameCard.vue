<script setup lang="ts">
import { useStore } from 'vuex';

const store = useStore();

const imagePath = new URL(`${store.state[store.state.system.lang].about.nameCard.imagePath}`, import.meta.url).href;
</script>

<template>
    <div class="name-card">
        <div class="name-wrapper">
            <h2 v-if="store.state.userInfo.koreanName" class="ko-name">{{ store.state.userInfo.koreanName }}</h2>
            <h4 v-if="store.state.userInfo.englishName" class="en-name">{{ store.state.userInfo.englishName }}</h4>
            <span v-if="store.state[store.state.system.lang].about.nameCard.introduction && !store.state[store.state.system.lang].about.nameCard.introductionHtml" class="introduction">{{ store.state[store.state.system.lang].about.nameCard.introduction }}</span>
            <span v-if="store.state[store.state.system.lang].about.nameCard.introduction && store.state[store.state.system.lang].about.nameCard.introductionHtml" class="introduction" v-html="store.state[store.state.system.lang].about.nameCard.introduction"></span>
        </div>
        <div class="image-wrapper">
            <img :src="imagePath" alt="main-user-image" class="main-image"/>
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
    width: 100%;
    height: 70%;
    position: relative;
}

.main-image{
    width: 100%;
    border-radius: var(--Spacer-3);
    position: absolute;
    bottom: 0;
}

.name-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 30%;
}

.name-wrapper>*{
    text-align: center;
}

h2.ko-name {
    margin: var(--Spacer-3) 0 var(--Spacer-1) 0;
}

h4.en-name{
    margin: var(--Spacer-1) 0 var(--Spacer-3) 0;
}

.introduction{
    font-size: var(--Spacer-2);
}
</style>
