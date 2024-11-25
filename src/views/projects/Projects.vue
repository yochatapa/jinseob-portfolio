<script setup lang="ts">
import CardTemplate from '@/components/card/CardTemplate.vue';
import GridLayout from '@/components/layout/GridLayout.vue';

import { useStore } from 'vuex';

const store = useStore();

const aboutInfo = store.state.about;

store.dispatch('calculateAgeFromBirthDate');

const GRID_LAYOUT_INFO = {
    gap : {
        row : "var(--Spacer-3)",
        column : "var(--Spacer-3)"
    },
    row : {
        height : "var(--Spacer-40)"
    },
    cell : {
        width : "var(--Spacer-50)"
    },
    maxColumnLength : 3,
}


</script>

<template>
    <GridLayout :grid-info="GRID_LAYOUT_INFO">
        <template v-slot:default="gridInfo">
            <CardTemplate v-for="(cell,index) in Object.entries(aboutInfo)" :card-info="cell" :gridInfo="gridInfo"></CardTemplate>
        </template>
    </GridLayout>
</template>

<style scoped>
</style>
