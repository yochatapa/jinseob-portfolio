<!--
    mainText, subText, image로 이루어진 1X1 카드
-->
<script setup lang="ts">
import { computed, reactive } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const props = defineProps({
    "cardInfo" : {
        type : Object,
        required : true
    }
})

const mainTextHtml = computed(()=>{
    if(typeof props.cardInfo.mainTextHtml === "boolean"){
        return props.cardInfo.mainTextHtml
    }else if(props.cardInfo.mainTextHtml){
        return props.cardInfo.mainTextHtml[store.state.system.lang];
    }
    return false;
})

const subTextHtml = computed(()=>{
    if(typeof props.cardInfo.subTextHtml === "boolean"){
        return props.cardInfo.subTextHtml
    }else if(props.cardInfo.subTextHtml){
        return props.cardInfo.subTextHtml[store.state.system.lang];
    }
    return false;
})

const imagePath = new URL(`${props.cardInfo.imagePath}`, import.meta.url).href;
</script>

<template>
    <div class="basic-1X1">
        <h3 v-if="props.cardInfo.mainText[store.state.system.lang] && mainTextHtml" class="main-text" v-html="props.cardInfo.mainText[store.state.system.lang]"></h3>
        <h3 v-if="props.cardInfo.mainText[store.state.system.lang] && !mainTextHtml" class="main-text">{{ props.cardInfo.mainText[store.state.system.lang] }}</h3>

        <span v-if="props.cardInfo.subText[store.state.system.lang] && subTextHtml" class="sub-text" v-html="props.cardInfo.subText[store.state.system.lang]"></span>
        <span v-if="props.cardInfo.subText[store.state.system.lang] && !subTextHtml" class="sub-text">{{ props.cardInfo.subText[store.state.system.lang] }}</span>
        <div v-if="props.cardInfo.imagePath" class="image-box" :style="{
            backgroundImage : `url(${imagePath})`
        }">
        </div>
    </div>
</template>

<style scoped>
.basic-1X1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--Spacer-3);
    height: 100%;
}

.basic-1X1 .main-text{
    margin: 0 0 var(--Spacer-2) 0;
    text-align: center;
}

.basic-1X1 .sub-text{
    margin: 0 0 var(--Spacer-2) 0;
    text-align: center;
    color: var(--Grayscale-40);
}

.basic-1X1 .image-box {
    width: 100%;
    flex : 1;
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
}
</style>
