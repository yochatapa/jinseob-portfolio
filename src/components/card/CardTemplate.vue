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

const rowXcol = props.cardInfo.rowspan * props.cardInfo.colspan;

const colspan = computed(()=>Math.min(props.gridInfo.cellNumberInRow,props.cardInfo.colspan));
const rowspan = computed(()=>Math.ceil(rowXcol/colspan.value));
</script>

<template>
    <div class="card-template"
        :style="{
            gridRow : `auto / span ${rowspan}`,
            gridColumn : `auto / span ${colspan}`
        }"
    >
        <component :is="props.cardInfo.template" :type="props.cardInfo.type" :detail="props.cardInfo.detail">{{ props.cardInfo.data }}</component>
        <slot></slot>
    </div>
</template>

<style scoped>
.card-template{
    background: linear-gradient(325deg, rgba(255, 255, 255, 0.1) 0%, rgb(255 255 255 / 40%) 100%);
    backdrop-filter: blur(15px);
    box-shadow: 0 4px 6px rgb(0 0 0 / 30%);
    border-radius: var(--Spacer-3);
}

.card-template * {
    color: var(--Grayscale-100);
}
</style>
