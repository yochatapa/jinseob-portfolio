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

const mainText = computed(()=>props.cardInfo?.mainText?.[store.state.system.lang]??props.cardInfo.mainText);
const subText = computed(()=>props.cardInfo.subText?.[store.state.system.lang]??props.cardInfo.subText);

const imagePath = new URL(`${props.cardInfo.imagePath}`, import.meta.url).href;

const flipCard = ref<HTMLElement|null>(null);

const flipYn = ref(false)

const mouseOver = function(){
    flipYn.value = true;
}

const mouseOut = function(){
    flipYn.value = false;
}

onMounted(()=>{
    if(flipCard.value){
        flipCard.value.addEventListener("mouseover",mouseOver);
        flipCard.value.addEventListener("mouseout",mouseOut);
    }
})

onUnmounted(()=>{
    flipCard.value?.removeEventListener("mouseover",mouseOver)
})

const openModal = () => {
    // 모달을 열고 /modal-page로 라우트 이동
    store.dispatch('modal/openModal', "Kitri");
};
</script>

<template>
    <div class="flip-card-template" ref="flipCard">
        <div :class="['flip-card',`${flipYn?'flipped':''}`]" >
            <div class="flip-card-front">
                <img class="image-box" :src="imagePath" :alt="mainText"></img>
            </div>
            <div class="flip-card-back">
                <h3 v-if="mainText&& mainTextHtml" class="main-text" v-html="mainText"></h3>
                <h3 v-if="mainText && !mainTextHtml" class="main-text">{{ mainText }}</h3>
                <span v-if="subText && subTextHtml" class="sub-text" v-html="subText"></span>
                <span v-if="subText && !subTextHtml" class="sub-text">{{ subText }}</span>
                <a  class="btn" :onclick="openModal">View More</a>
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
    margin: 0 0 var(--Spacer-2) 0;
    text-align: center;
    word-break: keep-all;
}

.flip-card-template .sub-text{
    margin: 0 0 var(--Spacer-2) 0;
    text-align: center;
    word-break: keep-all;
    color: var(--Grayscale-40);
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

.btn {
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

</style>
