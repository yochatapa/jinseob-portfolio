<script setup lang="ts">
import CardTemplate from '@/components/card/CardTemplate.vue';
import NavButton from '@/components/NavButton.vue'
import GridLayout from '@/components/layout/GridLayout.vue';
import NameCard from '@/components/card/NameCard.vue';

const CARD_INFO = [
        {
            colspan : 1,
            rowspan : 2,
            template : NameCard
        },
        {
            colspan : 1,
            rowspan : 1,
        },
        {
            colspan : 1,
            rowspan : 1,
            //template : ProfileCardDetail
        },
        {
            colspan : 1,
            rowspan : 1,
            //template : ProfileCardDetail
        },
        {
            colspan : 1,
            rowspan : 1,
            //template : CardTemplate
        }
    ]

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
        <CardTemplate v-for="(cell,index) in CARD_INFO" :card-info="cell" :card-index="index"></CardTemplate>
    </GridLayout>
    <NavButton></NavButton>
</template>

<style scoped>
</style>
