<script setup lang="ts">
import type { Projects } from '@/store';
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

const pCardInfo = props.cardInfo[1]??props.cardInfo

const cardInfo = computed(()=>pCardInfo);

const rowXcol = cardInfo.value.rowspan * cardInfo.value.colspan;

const colspan = computed(()=>Math.min(props.gridInfo.cellNumberInRow,cardInfo.value.colspan));
const rowspan = computed(()=>Math.ceil(rowXcol/colspan.value));
</script>

<template>
    <div class="card-template"
        :style="{
            gridRow : `auto / span ${rowspan}`,
            gridColumn : `auto / span ${colspan}`
        }"
    >
        <component :is="pCardInfo.template" :cardInfo="cardInfo"></component>
        <slot></slot>
    </div>
</template>

<style scoped>
.card-template{
    background: linear-gradient(325deg, rgb(255 255 255 / 0.2), rgba(255, 255, 255, 0.3) , rgb(255 255 255 / 0.2) );
    backdrop-filter: blur(15px);
    box-shadow: 0 var(--Spacer-1) var(--Spacer-3) rgb(0 0 0 / 30%);
    border-radius: var(--Spacer-3);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.card-template * {
    color: var(--Grayscale-10);
}
</style>
