<!--
    mainText, subText, image로 이루어진 1X1 카드
-->
<script setup lang="ts">
import { computed, reactive } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const props = defineProps({
    "type" : {
        type : String,
        required : true
    },
    "detail" : {
        type : String,
        required : true
    }
})

const cardData = computed(()=>store.state[store.state.system.lang]?.[props.type]?.[props.detail])

const imagePath = new URL(`${cardData.value.imagePath}`, import.meta.url).href;
</script>

<template>
    <div class="basic-1X1">
        <h3 v-if="cardData.mainText && cardData.mainTextHtml" class="main-text" v-html="cardData.mainText"></h3>
        <h3 v-if="cardData.mainText && !cardData.mainTextHtml" class="main-text">{{ cardData.mainText }}</h3>

        <span v-if="cardData.subText && cardData.subTextHtml" class="sub-text" v-html="cardData.subText"></span>
        <span v-if="cardData.subText && !cardData.subTextHtml" class="sub-text">{{ cardData.subText }}</span>
        <div v-if="cardData.imagePath" class="image-box" :style="{
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
    color: var(--Grayscale-60);
}

.basic-1X1 .image-box {
    width: 100%;
    flex : 1;
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
}
</style>
