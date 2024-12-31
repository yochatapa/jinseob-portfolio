<script setup lang="ts">
import CardTemplate from '@/components/card/CardTemplate.vue';
import GridLayout from '@/components/layout/GridLayout.vue';
import { computed, markRaw, reactive, watch } from 'vue';
import type { ContactsData } from '@/store/index';

import { useStore } from 'vuex';
import FlipCard from '@/components/card/FlipCard.vue';

const store = useStore();

const contacts = store.state.contacts;

let contactsData = reactive(new Array());

function setData(rData:Array<ContactsData>){
    contactsData = new Array();

    rData.forEach((data:ContactsData) => {
        const flipData = {
            colspan : 1,
            rowspan : 1,
            mainText : data.name,
            template : markRaw(FlipCard),
            ...data,
        }
        
        contactsData.push(flipData)
    });
}


watch(contacts,(newValue, oldValue)=>{
    setData(newValue)
})

setData(contacts);

const flipDataSort = (a:any, b:any)=>{
    // 먼저 important가 true인 객체가 앞에 오도록 정렬
    if (a.important && !b.important) return -1; // a가 먼저 오도록
    if (!a.important && b.important) return 1; // b가 먼저 오도록
    
    // important가 같다면 proficiency 값에 따라 정렬 (내림차순)
    return b.proficiency - a.proficiency; 
}

contactsData = contactsData.sort(flipDataSort)

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
    <div class="contacts-container">
        <div class="contacts">
            <div  class="container">
                <GridLayout :grid-info="GRID_LAYOUT_INFO">
                    <template v-slot:default="gridInfo">
                        <CardTemplate v-for="(cell,index) in contactsData" :card-info="cell" :gridInfo="gridInfo"></CardTemplate>
                    </template>
                </GridLayout>
            </div>
        </div>
    </div>
</template>

<style scoped>
.contacts-container .contacts {
    margin-bottom: var(--Spacer-5);
}

.card-template:has(.flip-card.important)::after{
    content: "⭐";
    font-size: var(--Spacer-4);
    position: absolute;
    top: 0;
    right: 0;
}

.contacts-container .contacts .text {
    text-align: center;
    color: var(--Grayscale-0);
    font-size: var(--Spacer-4);
    font-weight: bold;
    margin-bottom: var(--Spacer-3);
}
</style>
