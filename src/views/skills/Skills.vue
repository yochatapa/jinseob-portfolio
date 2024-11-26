<script setup lang="ts">
import CardTemplate from '@/components/card/CardTemplate.vue';
import GridLayout from '@/components/layout/GridLayout.vue';
import { computed } from 'vue';

import { useStore } from 'vuex';

const store = useStore();

const advancedData = store.state.skills.advanced;
const intermediateData = store.state.skills.intermediate;
const beginnerData = store.state.skills.beginner;

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
        <div class="advanced skills">
            <div class="text">
                <label>advanced</label>
            </div>
            <div  class="container">
                <GridLayout :grid-info="GRID_LAYOUT_INFO">
                    <template v-slot:default="gridInfo">
                        <CardTemplate v-for="(cell,index) in advancedData" :card-info="cell" :gridInfo="gridInfo"></CardTemplate>
                    </template>
                </GridLayout>
            </div>
        </div>
        <div class="intermediate skills">
            <div class="text">
                <label>intermediate</label>
            </div>
            <div  class="container">
                <GridLayout :grid-info="GRID_LAYOUT_INFO">
                    <template v-slot:default="gridInfo">
                        <CardTemplate v-for="(cell,index) in intermediateData" :card-info="cell" :gridInfo="gridInfo"></CardTemplate>
                    </template>
                </GridLayout>
            </div>
        </div>
        <div class="beginner skills">
            <div class="text">
                <label>beginner</label>
            </div>
            <div  class="container">
                <GridLayout :grid-info="GRID_LAYOUT_INFO">
                    <template v-slot:default="gridInfo">
                        <CardTemplate v-for="(cell,index) in beginnerData" :card-info="cell" :gridInfo="gridInfo"></CardTemplate>
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

.skills-container .skills .text {
    text-align: center;
    color: var(--Grayscale-0);
    font-size: var(--Spacer-4);
    font-weight: bold;
    margin-bottom: var(--Spacer-3);
}
</style>
