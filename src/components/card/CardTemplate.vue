<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    "cardInfo" : {
        type : Object,
        required : true
    },
    "gridInfo" : {
        type : Object,
        required : true
    }
})

const cardInfo = {
    mainText : props.cardInfo[1].mainText,
    mainTextHtml : props.cardInfo[1].subTextHtml,
    subText : props.cardInfo[1].subText,
    subTextHtml : props.cardInfo[1].subTextHtml,
    colspan : props.cardInfo[1].colspan,
    rowspan : props.cardInfo[1].rowspan,
    imagePath : props.cardInfo[1].imagePath
};

const rowXcol = cardInfo.rowspan * cardInfo.colspan;

console.log(cardInfo,props.cardInfo)

const colspan = computed(()=>Math.min(props.gridInfo.cellNumberInRow,cardInfo.colspan));
const rowspan = computed(()=>Math.ceil(rowXcol/colspan.value));
</script>

<template>
    <div class="card-template"
        :style="{
            gridRow : `auto / span ${rowspan}`,
            gridColumn : `auto / span ${colspan}`
        }"
    >
        <component :is="props.cardInfo[1].template" :cardInfo="cardInfo"></component>
        <slot></slot>
    </div>
</template>

<style scoped>
.card-template{
    background: linear-gradient(325deg, rgb(255 255 255 / 0.2), rgba(255, 255, 255, 0.1) , rgb(255 255 255 / 0.2) );
    backdrop-filter: blur(15px);
    box-shadow: 0 var(--Spacer-1) var(--Spacer-3) rgb(0 0 0 / 30%);
    border-radius: var(--Spacer-3);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.card-template * {
    color: var(--Grayscale-10);
}
</style>
