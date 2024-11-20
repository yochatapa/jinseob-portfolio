<script setup lang="ts">

</script>

<template>
    <div class="name-card">
        <div class="image-wrapper">
            <img src="@/assets/jinseob-original.png" alt="jinseob main image" class="main-image"/>
        </div>
    </div>
</template>

<style scoped>
.name-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
}

.image-wrapper{
    padding: var(--Spacer-10) var(--Spacer-5);
    height: 80%;
}

.main-image{
    height: 100%;
}
</style>
