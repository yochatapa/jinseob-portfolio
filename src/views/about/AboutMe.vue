<script setup lang="ts">
import CardContainer from '@/components/card/CardContainer.vue';
import CardDetail from '@/components/card/CardDetail.vue';
import ProfileCard from '@/components/card/ProfileCard.vue';
import NavButton from '@/components/NavButton.vue'
</script>

<template>
    <CardContainer>
        <ProfileCard></ProfileCard>
        <CardDetail></CardDetail>
    </CardContainer>
    <NavButton>
        <div class="hihi"></div>
    </NavButton>
</template>

<style scoped>
</style>
