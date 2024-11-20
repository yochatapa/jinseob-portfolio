<script setup lang="ts">
const props = defineProps(["cardInfo"])
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
        <slot></slot>
    </div>
</template>

<style scoped>
.card-template{
    background-color: #ffffff50;
    border-radius: var(--Spacer-3);
}
</style>
