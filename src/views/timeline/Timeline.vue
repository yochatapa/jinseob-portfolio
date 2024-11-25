<script setup lang="ts">
import TimelineCardTemplate from '@/components/card/TimelineCardTemplate.vue';
import GridLayout from '@/components/layout/GridLayout.vue';
import { useStore } from 'vuex';

const store = useStore();

const GRID_LAYOUT_INFO = {
    gap : {
        row : "var(--Spacer-3)",
        column : "var(--Spacer-3)"
    },
    row : {
        height : "auto"
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
            <TimelineCardTemplate v-for="(cell,index) in store.state.timeline.data.length" :index="index" :gridInfo="gridInfo" :default-length="3"></TimelineCardTemplate>
        </template>
    </GridLayout>
</template>

<style scoped>
</style>
