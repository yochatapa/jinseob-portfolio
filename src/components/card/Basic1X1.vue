<!--
    mainText, subText, image로 이루어진 1X1 카드
-->
<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
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

const mainText = computed(()=>props.cardInfo.mainText[store.state.system.lang]??props.cardInfo.mainText);
const subText = computed(()=>props.cardInfo.subText[store.state.system.lang]??props.cardInfo.subText);

const imagePath = new URL(`${props.cardInfo.imagePath}`, import.meta.url).href;

let isBackgroundLoaded = ref(false);

const imageBox = ref<HTMLDivElement | null>(null);
const image = ref<HTMLImageElement | null>(null);

function onImageLoad(){
    isBackgroundLoaded.value = true;
    if(imageBox.value){
        if(image.value) image.value.style.height = imageBox.value.getBoundingClientRect().height + "px"
    }
};

function onImageError(){
    isBackgroundLoaded.value = false;
};
</script>

<template>
    <div class="basic-1X1">
        <h3 v-if="mainText&& mainTextHtml" class="main-text" v-html="mainText"></h3>
        <h3 v-if="mainText && !mainTextHtml" class="main-text">{{ mainText }}</h3>

        <span v-if="subText && subTextHtml" class="sub-text" v-html="subText"></span>
        <span v-if="subText && !subTextHtml" class="sub-text">{{ subText }}</span>

        <div class="image-box" ref="imageBox">
            <div class="loading-spinner" v-show="!isBackgroundLoaded && props.cardInfo.imagePath"></div>
            <img ref="image" v-if="props.cardInfo.imagePath" :src="imagePath" :alt="mainText" v-show="isBackgroundLoaded" @load="onImageLoad" @error="onImageError"></img>
        </div>
        
        <!--  v-if="props.cardInfo.imagePath" class="image-box" :style="{
            backgroundImage : `url(${imagePath})`
        }"> 
        </div> -->
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
    word-break: keep-all;
}

.basic-1X1 .sub-text{
    margin: 0 0 var(--Spacer-2) 0;
    text-align: center;
    color: var(--Grayscale-40);
    word-break: keep-all;
}

.basic-1X1 .image-box {
    width: 100%;
    flex : 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.loading-spinner {
  width: 30%;
  height: 30%;
  border: 4px solid var(--Grayscale-0);
  border-top: 4px solid var(--Primary-50);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
