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

const cardData = store.state.timeline.data[props.index];
</script>

<template>
    <div :class="['timeline-card-template',cardData.type]"
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
        <div class='timeline-card'>
            <h3>{{ cardData.eventName[store.state.system.lang] }}</h3>
            <span v-if="cardData.eventDetailHtml">{{ cardData.eventDetail[store.state.system.lang] }}</span>
            <span v-else v-html="cardData.eventDetail[store.state.system.lang]"></span>
        </div>
    </div>
    <slot></slot>
</template>

<style scoped>
.timeline-card-template{
    display: flex;

    --company-basic-color : var(--Gold-40);
    --company-sub-color : var(--Gold-20);

    --personal-basic-color : var(--Teal-40);
    --personal-sub-color : var(--Teal-20);
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
    background: linear-gradient(125deg, var(--Grayscale-10) 0%, var(--Grayscale-30) 100%);
    box-shadow: 0 4px 6px rgb(0 0 0 / 30%);
    z-index: 1;
}

.company-project .timeline-line>.dot{
    background: linear-gradient(125deg, var(--company-sub-color) 0%, var(--company-basic-color) 100%);
}

.personal-project .timeline-line>.dot{
    background: linear-gradient(125deg, var(--personal-sub-color) 0%, var(--personal-basic-color) 100%);
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

.company-project .timeline-line>.horizontal-line{
    background: linear-gradient(125deg, var(--company-sub-color) 0%, var(--company-basic-color) 100%);
}

.personal-project .timeline-line>.horizontal-line{
    background: linear-gradient(125deg, var(--personal-sub-color) 0%, var(--personal-basic-color) 100%);
}

.timeline-line>.horizontal-line>.date{
    position: absolute;
    top: var(--Spacer-2);
    left: var(--Spacer-3);
    font-size: var(--Spacer-2);
    color: var(--Grayscale-30);
    font-weight: bold;
    line-height: var(--Spacer-3);
}

.timeline-card{
    width: calc(100% - var(--Spacer-10));
    height: 100%;
    background: linear-gradient(325deg, rgb(255 255 255 / 0.2), rgba(255, 255, 255, 0.3) , rgb(255 255 255 / 0.2) );
    backdrop-filter: blur(15px);
    box-shadow: 0 var(--Spacer-1) var(--Spacer-3) rgb(0 0 0 / 30%);
    border-radius: var(--Spacer-3);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: var(--Spacer-3);
}

.company-project .timeline-card{
    border-color: var(--company-basic-color);
}

.personal-project .timeline-card{
    border-color: var(--personal-basic-color);
}

.company-project h3{
    color: var(--company-basic-color);
}

.personal-project h3{
    color: var(--personal-basic-color);
}

/*.timeline-card.personal-project {
    background: linear-gradient(325deg, rgb(1224 160 237 / 10%) 0%, rgb(224 160 237 / 40%) 100%);
} */

.timeline-card h3{
    margin-top: 0;
    font-size: var(--Spacer-3);
    word-break: keep-all;
}

.timeline-card span{
    font-size: var(--Spacer-2);
    line-height: var(--Spacer-4);
    word-break: keep-all;
}

.timeline-card span hr {
    border-style: dashed;
    border-color: var(--Grayscale-50);
}

.timeline-card * {
    color: var(--Grayscale-10);
}
</style>
