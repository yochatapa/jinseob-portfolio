<script setup lang="ts">
import CardTemplate from '@/components/card/CardTemplate.vue';
import FlipCard from '@/components/card/FlipCard.vue';
import GridLayout from '@/components/layout/GridLayout.vue';
import type { Projects } from '@/store';
import { computed, markRaw, watch } from 'vue';

import { useStore } from 'vuex';

const store = useStore();


function setProjectData(rawData:Array<Projects>){
    let filteredData = new Array();

    rawData.forEach(rData=>{
        filteredData.push({
            mainText : rData.name,
            colspan : 1,
            rowspan : 1,
            template : markRaw(FlipCard),
            viewMore : true,
            fileName : "ProjectDetail",
            ...rData
        })
    })

    return filteredData;
};

let projectsData = setProjectData(store.state.projects);

watch(store.state.projects,()=>{
    projectsData = setProjectData(store.state.projects);
})

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
    <GridLayout :grid-info="GRID_LAYOUT_INFO">
        <template v-slot:default="gridInfo">
            <CardTemplate v-for="(cell,index) in projectsData" :card-info="cell" :gridInfo="gridInfo"></CardTemplate>
        </template>
    </GridLayout>
</template>

<style scoped>
</style>
