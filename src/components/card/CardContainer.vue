<script setup lang="ts">
</script>

<template>
    <div class="card-template">
        <slot></slot>
    </div>
</template>

<style scoped>
.card-template{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--Spacer-5) var(--Spacer-15);
}

/* 태블릿 (최대 1024px) */
@media (max-width: 1024px) {
    .card-template {
        padding: 0 var(--Spacer-10);
    }
}

</style>
