<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    "defaultLength" : {
        type : Number,
        required : true
    },
    "gridInfo" : {
        type : Object,
        required : true
    }
})

const rowXcol = props.defaultLength;

const colspan = computed(()=>Math.min(props.gridInfo.cellNumberInRow,props.defaultLength));
const rowspan = 1;
</script>

<template>
    <div class="timeline-card-template"
        :style="{
            gridRow : `auto / span ${rowspan}`,
            gridColumn : `auto / span ${colspan}`
        }"
    >
    <div class="timeline-line">
        <div class="dot"></div>
        <div class="vertical-line"></div>
        <div class="horizontal-line">
            <label class="date">2024.01</label>
        </div>
    </div> 
    <div class="timeline-card"></div>
        <slot></slot>
    </div>
</template>

<style scoped>
.timeline-card-template{
    display: flex;
}

.timeline-line{
    width: var(--Spacer-15);
    position: relative;
}

.timeline-line>.dot{
    width: var(--Spacer-2);
    height: var(--Spacer-2);
    position: absolute;
    top: var(--Spacer-3);
    left: var(--Spacer-3);
    border-radius: 50%;
    background: linear-gradient(325deg, var(--Blue-40) 0%, var(--Sky-Blue-40) 100%);
    box-shadow: 0 4px 6px rgb(0 0 0 / 30%);
    z-index: 1;
}

.timeline-line>.vertical-line{
    width: 3px;
    height: calc(100% + var(--Spacer-3));
    position: absolute;
    top: calc(var(--Spacer-3) / -2);
    left: calc(var(--Spacer-3) + var(--Spacer-1) - 1.5px);
    box-shadow: 1px 0px 6px rgb(0 0 0 / 30%);
    background: rgb(255 255 255 / 40%);
}

.timeline-line>.horizontal-line{
    width: 100%;
    height: 3px;
    position: absolute;
    top: calc(var(--Spacer-3) + var(--Spacer-1) - 1.5px);
    left: var(--Spacer-3);
    background: rgb(255 255 255 / 40%);
    box-shadow: 0 4px 6px rgb(0 0 0 / 30%);
}

.timeline-line>.horizontal-line>.date{
    position: absolute;
    top: var(--Spacer-2);
    left: var(--Spacer-3);
    font-size: var(--Spacer-2);
    color: var(--Grayscale-70);
    font-weight: bold;
}

.timeline-card{
    flex: 1;
    height: 100%;
    background: linear-gradient(325deg, rgba(255, 255, 255, 0.1) 0%, rgb(255 255 255 / 40%) 100%);
    backdrop-filter: blur(15px);
    box-shadow: 0 4px 6px rgb(0 0 0 / 30%);
    border-radius: var(--Spacer-3);
}

.timeline-card * {
    color: var(--Grayscale-100);
}
</style>
