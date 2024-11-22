<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

const scrollPosition = ref(0);
const headerBackgroundChangeYn = computed(()=>scrollPosition.value>0);

const handleScroll = () => {
    scrollPosition.value = document.documentElement.scrollTop;
};

// 컴포넌트가 마운트된 후 스크롤 이벤트 리스너 추가
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

// 컴포넌트가 언마운트되면 이벤트 리스너를 제거
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <background class="app-background">
        <div v-for="index in 2" :class="['circle', `circle-${index}`]"></div>
    </background>
    <header :class="[`${headerBackgroundChangeYn?'change':''}`]">
        <nav>
            <RouterLink to="/">About</RouterLink>
            <RouterLink to="/career">Career</RouterLink>
            <RouterLink to="/projects">Projects</RouterLink>
            <RouterLink to="/skills">Skills</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
        </nav>
    </header>
    <main>
        <div class="main-container">
            <RouterView/>
        </div>
    </main>
    <footer>
    </footer>
</template>

<style scoped>
main, .main-container {
    flex: 1;
    display: flex;
    flex-direction: column;
}

header {
    z-index: 2;
    position: sticky;
    top: 0;
}

header.change{
    background: linear-gradient(180deg, #90c8ff 0%, #90c8ff9e 70%, rgba(255, 255, 255, 0) 100%);
}

header.change nav a{
    color: var(--Grayscale-0);
}

main {
    z-index: 1;
}

nav {
    width: 100%;
    margin: var(--Spacer-4) 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

nav a.router-link-exact-active {
    color: var(--Grayscale-80) !important;
    font-size: 1rem;
    font-weight: bold;
}

nav a.router-link-exact-active:after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background: var(--Grayscale-80);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 var(--Spacer-2);
    color: var(--Grayscale-50);
    font-size: var(--Spacer-2);
    text-decoration-line: none;
}

nav a:first-of-type {
    border: 0;
}

.app-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    filter: blur(80px);
    background: linear-gradient(325deg, var(--Blue-Purple-20) 0%, var(--Sky-Blue-20) 100%);
}

.circle {
    position: absolute;
    border-radius: 50%;
}

.circle-1 {
    width: max(80vw,80vh);
    height: max(80vw,80vh);
    top: calc(-50% );
    left: calc(-50%);
    /*animation: moveCircle 20s linear infinite, backgroundColorChange40 20s infinite alternate;*/
    background-color: var(--Royal-Blue-20);
}

.circle-2 {
    width: max(70vw,70vh);
    height: max(70vw,70vh);
    bottom: calc(-50% );
    right: calc(-50%);
    /*animation: moveCircleReverse 15s linear infinite, backgroundColorChange60 20s infinite alternate;*/
    background-color: var(--Purple-20);
}
</style>
