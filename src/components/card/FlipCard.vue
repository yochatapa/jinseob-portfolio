<!--
    앞면 : image로
    뒷면 : mainText, subText
    로 이루어진 1X1 카드
-->
<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const props = defineProps({
    "cardInfo" : {
        type : Object,
        required : true
    }
})

let isBackgroundLoaded = ref(false);

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

function onImageLoad(){
    isBackgroundLoaded.value = true;
};

function onImageError(){
    isBackgroundLoaded.value = false;
};

const mainText = computed(()=>props.cardInfo?.mainText?.[store.state.system.lang]??props.cardInfo.mainText);
const subText = computed(()=>props.cardInfo.subText?.[store.state.system.lang]??props.cardInfo.subText);

const imagePath = new URL(`${props.cardInfo.imagePath}`, import.meta.url).href;

const flipCard = ref<HTMLElement|null>(null);

const flipYn = ref(false);
const mouseOverYn = ref(false);

const aTag = ref(null);

const mouseOver = function(){
    flipYn.value = true;
    mouseOverYn.value = true;
}

const mouseOut = function(){
    flipYn.value = false;
    mouseOverYn.value = false;
}

const touchStart = function(e:TouchEvent){
    if(e.target !== aTag.value){
        if(flipYn.value && !mouseOverYn.value){
            e?.preventDefault();
            e?.stopPropagation();
            flipYn.value = false;
        }else if(mouseOverYn.value){
            e?.preventDefault();
            e?.stopPropagation();
            flipYn.value = !flipYn.value
        }
    }
}

onMounted(()=>{
    if(flipCard.value){
        flipCard.value.addEventListener("mouseover",mouseOver);
        flipCard.value.addEventListener("mouseout",mouseOut);
        flipCard.value.addEventListener("touchstart",touchStart);
    }
})

onUnmounted(()=>{
    flipCard.value?.removeEventListener("mouseover",mouseOver)
})

const openModal = (e:Event) => {
    // 모달을 열고 /modal-page로 라우트 이동
    store.dispatch('modal/openModal', {
        component : props.cardInfo.fileName,
        parameter : {
            width : "100%",
            height : "100%",
            cardInfo : props.cardInfo
        }
    });
};
</script>

<template>
    <div class="flip-card-template" ref="flipCard">
        <div :class="['flip-card',`${flipYn?'flipped':''}`,`${props.cardInfo.type?props.cardInfo.type:''}`]" >
            <div class="flip-card-front">
                <div class="loading-spinner" v-show="!isBackgroundLoaded"></div>
                <img class="image-box" :src="imagePath" :alt="mainText" v-show="isBackgroundLoaded" @load="onImageLoad" @error="onImageError"></img>
            </div>
            <div class="flip-card-back">
                <h3 v-if="mainText&& mainTextHtml" class="main-text" v-html="mainText"></h3>
                <h3 v-if="mainText && !mainTextHtml" class="main-text">{{ mainText }} <a class="url" v-if="props.cardInfo.url" :href="props.cardInfo.url">🔗</a></h3>
                <span v-if="subText && subTextHtml" class="sub-text" v-html="subText"></span>
                <span v-if="subText && !subTextHtml" class="sub-text">{{ subText }}</span>
                <a ref="aTag" v-if="props.cardInfo.fileName" class="btn" :onclick="openModal">View More</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.flip-card-template {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
}

.flip-card-template .main-text{
    text-align: center;
    word-break: keep-all;
    margin: 0;
}

.flip-card-template .sub-text{
    margin: var(--Spacer-2)0 0 0;
    text-align: center;
    word-break: keep-all;
    color: var(--Grayscale-40);
    line-height: var(--Spacer-5);
}

.flip-card-template .image-box {
    width: 100%;
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
}

.flip-card {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
}

.flip-card.flipped {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: var(--Spacer-3);
}

.flip-card-back {
  transform: rotateY(180deg);
}

.url{
    text-decoration: none;
}

.btn {
    margin: var(--Spacer-2)0 0 0;;
    padding: 8px 16px;
    background-color: var(--Grayscale-0);
    color: var(--Primary-50);
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
}

.btn:hover {
    background-color: var(--Primary-50);
    color: var(--Grayscale-0);
    cursor: pointer;
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
