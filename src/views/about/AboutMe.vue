<script setup lang="ts">
import CardContainer from '@/components/card/CardContainer.vue';
import ProfileCardDetail from '@/components/card/ProfileCardDetail.vue';
import ProfileCard from '@/components/card/ProfileCard.vue';
import NavButton from '@/components/NavButton.vue'
</script>

<template>
    <CardContainer>
        <ProfileCard></ProfileCard>
        <ProfileCardDetail></ProfileCardDetail>
    </CardContainer>
    <NavButton></NavButton>
</template>

<style scoped>

</style>
