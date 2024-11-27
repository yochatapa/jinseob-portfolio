<script setup lang="ts">
import CardTemplate from '@/components/card/CardTemplate.vue';
import GridLayout from '@/components/layout/GridLayout.vue';
import { computed, markRaw, reactive, watch } from 'vue';
import type { SkillsData } from '@/store/index';

import { useStore } from 'vuex';
import FlipCard from '@/components/card/FlipCard.vue';

const store = useStore();

const skills = store.state.skills;

let frontendData = reactive(new Array());
let backendData = reactive(new Array()); 
let etcData = reactive(new Array());

function setData(rData:Array<SkillsData>){
    frontendData = new Array();
    backendData = new Array();
    etcData = new Array();

    rData.forEach((data:SkillsData) => {
        const flipData = {
            colspan : 1,
            rowspan : 1,
            mainText : data.name,
            template : markRaw(FlipCard),
            subText : "⭐".repeat(data.proficiency),
            ...data,
        }

        if(flipData.important) flipData.type += " important"
        
        switch(data.type){
            case "frontend":
                frontendData.push(flipData)
                break;
            case "backend":
                backendData.push(flipData)
                break;
            case "etc":
                etcData.push(flipData) 
                break;
        }
    });
}


watch(skills,(newValue, oldValue)=>{
    setData(newValue)
})

setData(skills);

const flipDataSort = (a:any, b:any)=>{
    // 먼저 important가 true인 객체가 앞에 오도록 정렬
    if (a.important && !b.important) return -1; // a가 먼저 오도록
    if (!a.important && b.important) return 1; // b가 먼저 오도록
    
    // important가 같다면 proficiency 값에 따라 정렬 (내림차순)
    return b.proficiency - a.proficiency; 
}

frontendData = frontendData.sort(flipDataSort)

backendData = backendData.sort(flipDataSort)

etcData = etcData.sort(flipDataSort)

store.dispatch('calculateAgeFromBirthDate');

const GRID_LAYOUT_INFO = {
    gap : {
        row : "var(--Spacer-3)",
        column : "var(--Spacer-3)"
    },
    row : {
        height : "var(--Spacer-25)"
    },
    cell : {
        width : "var(--Spacer-25)"
    },
    maxColumnLength : 5,
}


</script>

<template>
    <div class="skills-container">
        <div class="frontend skills">
            <div class="text">
                <label>{{ store.state.system.lang === "ko" ? "프론트엔드" : "Front-end" }}</label>
            </div>
            <div  class="container">
                <GridLayout :grid-info="GRID_LAYOUT_INFO">
                    <template v-slot:default="gridInfo">
                        <CardTemplate v-for="(cell,index) in frontendData" :card-info="cell" :gridInfo="gridInfo"></CardTemplate>
                    </template>
                </GridLayout>
            </div>
        </div>
        <div class="backend skills">
            <div class="text">
                <label>{{ store.state.system.lang === "ko" ? "백엔드" : "Back-end" }}</label>
            </div>
            <div  class="container">
                <GridLayout :grid-info="GRID_LAYOUT_INFO">
                    <template v-slot:default="gridInfo">
                        <CardTemplate v-for="(cell,index) in backendData" :card-info="cell" :gridInfo="gridInfo"></CardTemplate>
                    </template>
                </GridLayout>
            </div>
        </div>
        <div class="etc skills">
            <div class="text">
                <label>{{ store.state.system.lang === "ko" ? "기타" : "etc" }}</label>
            </div>
            <div  class="container">
                <GridLayout :grid-info="GRID_LAYOUT_INFO">
                    <template v-slot:default="gridInfo">
                        <CardTemplate v-for="(cell,index) in etcData" :card-info="cell" :gridInfo="gridInfo"></CardTemplate>
                    </template>
                </GridLayout>
            </div>
        </div>
    </div>
</template>

<style scoped>
.skills-container .skills {
    margin-bottom: var(--Spacer-5);
}

.card-template:has(.flip-card.important)::after{
    content: "⭐";
    font-size: var(--Spacer-4);
    position: absolute;
    top: 0;
    right: 0;
}

.skills-container .skills .text {
    text-align: center;
    color: var(--Grayscale-0);
    font-size: var(--Spacer-4);
    font-weight: bold;
    margin-bottom: var(--Spacer-3);
}
</style>
