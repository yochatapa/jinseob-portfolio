<script setup lang="ts">
const props = defineProps({
    "cardInfo" : {
        type : Object,
        required : true
    }
})

</script>

<template>
    <div class="card-template"
        :style="{
            gridRow : `auto / span ${props.cardInfo.rowspan}`,
            gridColumn : `auto / span ${props.cardInfo.colspan}`
        }"
    >
        CardTemplate
        {{props.cardInfo.colspan}}
        {{props.cardInfo.rowspan}}
        <component :is="props.cardInfo.template" :card-info="props.cardInfo"></component>
        <slot></slot>
    </div>
</template>

<style scoped>
.card-template{
    background-color: #ffffff50;
    border-radius: var(--Spacer-3);
}
</style>
