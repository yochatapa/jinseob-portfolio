<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
    "defaultLength" : {
        type : Number,
        required : true
    },
    "gridInfo" : {
        type : Object,
        required : true
    },
    "index" : {
        type : Number,
        required : true
    },
})

const store = useStore();

const rowXcol = props.defaultLength;

const colspan = computed(()=>Math.min(props.gridInfo.cellNumberInRow,props.defaultLength));
const rowspan = 1;

const cardData = store.state[store.state.system.lang].timeline.data[props.index];
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
                <label class="date">{{ cardData.date }}</label>
            </div>
        </div> 
        <div :class="['timeline-card',cardData.type]">
            <h3>{{ cardData.eventName }}</h3>
            <span v-if="cardData.eventDetailHtml">{{ cardData.eventDetail }}</span>
            <span v-else v-html="cardData.eventDetail"></span>
        </div>
    </div>
    <slot></slot>
</template>

<style scoped>
.timeline-card-template{
    display: flex;
}

.timeline-line{
    width: var(--Spacer-14);
    position: relative;
}

.timeline-line>.dot{
    width: var(--Spacer-2);
    height: var(--Spacer-2);
    position: absolute;
    top: var(--Spacer-3);
    left: 0;
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
    left: calc(var(--Spacer-1) - 1.5px);
    box-shadow: 1px 0px 6px rgb(0 0 0 / 30%);
    background: rgb(255 255 255 / 40%);
}

.timeline-line>.horizontal-line{
    width: 100%;
    height: 3px;
    position: absolute;
    top: calc(var(--Spacer-3) + var(--Spacer-1) - 1.5px);
    left: 0;
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
    line-height: var(--Spacer-3);
}

.timeline-card{
    width: calc(100% - var(--Spacer-10));
    height: 100%;
    background: linear-gradient(325deg, rgba(255, 255, 255, 0.1) 0%, rgb(255 255 255 / 40%) 100%);
    backdrop-filter: blur(15px);
    box-shadow: 0 4px 6px rgb(0 0 0 / 30%);
    border-radius: var(--Spacer-3);
    padding: var(--Spacer-3);
}

/* .timeline-card.company-project{
    background: linear-gradient(325deg, rgb(92 212 255 / 15%) 0%, rgb(92 212 255 / 30%) 100%);
}

.timeline-card.personal-project {
    background: linear-gradient(325deg, rgb(1224 160 237 / 10%) 0%, rgb(224 160 237 / 40%) 100%);
} */

.timeline-card h3{
    margin-top: 0;
    font-size: var(--Spacer-3);
}

.timeline-card span{
    font-size: var(--Spacer-2);
    line-height: var(--Spacer-4);
}

.timeline-card span hr {
    border-style: dashed;
    border-color: var(--Grayscale-50);
}

.timeline-card * {
    color: var(--Grayscale-100);
}
</style>
