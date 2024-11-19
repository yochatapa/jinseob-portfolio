<script setup lang="ts">
</script>

<template>
    <div class="profile-card">
        ProfileCard
    </div>
</template>

<style scoped>
.profile-card{
    --card-width: 52;
    --card-height: 86;

    height: 100%;
    aspect-ratio: calc(var(--card-width) / var(--card-height));
    border: 1px solid blue;
}

/* 모바일 (최대 768px) 태블릿 (768px ~ 1024px) */
@media (max-width: 1024px) {
    .profile-card {
        width: unset;
        height: calc(100% - var(--Spacer-15));
        border-color: yellow;
    }
    
    @media (max-height: 1000px) {
        .profile-card {
            width: 100%;
            height: unset;
            border-color: red;
        }
    }
}

@media (max-height: 1024px) {
    .profile-card {
        width: unset;
        height: calc(100% - var(--Spacer-15));
    }
}
</style>
