/**
 * mainText, subText, image로 이루어진 1X1 카드
 */
<script setup lang="ts">
const props = defineProps({
    "data" : {
        type : Object,
        required : false
    }
})

const imagePath = new URL(`${props.data?.imagePath}`, import.meta.url).href;
</script>

<template>
    <div class="basic-1X1">
        <h3 v-if="props.data?.mainText && props.data?.mainTextHtml" class="main-text" v-html="props.data?.mainText"></h3>
        <h3 v-if="props.data?.mainText && !props.data?.mainTextHtml" class="main-text">{{ props.data?.mainText }}</h3>

        <span v-if="props.data?.subText && props.data?.subTextHtml" class="sub-text" v-html="props.data?.subText"></span>
        <span v-if="props.data?.subText && !props.data?.subTextHtml" class="sub-text">{{ props.data?.subText }}</span>
        <div v-if="props.data?.imagePath" class="image-box" :style="{
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
