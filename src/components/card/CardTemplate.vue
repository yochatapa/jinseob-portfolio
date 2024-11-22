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
        <component :is="props.cardInfo.template" :data="props.cardInfo.data">{{ props.cardInfo.data }}</component>
        <slot></slot>
    </div>
</template>

<style scoped>
.card-template{
    background-color: #ffffff50;
    border-radius: var(--Spacer-3);
}
</style>
