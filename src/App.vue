<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import NavButton from './components/NavButton.vue';
import ModalView from './components/ModalView.vue';

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
    <div class="app-background">
        <div v-for="index in 2" :class="['circle', `circle-${index}`]"></div>
    </div>
    <header :class="[`${headerBackgroundChangeYn?'change':''}`]">
        <nav>
            <RouterLink to="/">About</RouterLink>
            <RouterLink to="/timeline">Timeline</RouterLink>
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
        <NavButton :scrollYn="headerBackgroundChangeYn"></NavButton>
    </footer>
    <ModalView></ModalView>
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

/* header.change{
    background: linear-gradient(180deg, #90c8ff 0%, #90c8ff9e 70%, rgba(255, 255, 255, 0) 100%);
}

header.change nav a{
    color: var(--Grayscale-0);
} */

main {
    z-index: 1;
    padding-bottom: var(--Spacer-4);
}

footer {
    z-index: 1;
    position: fixed;
    bottom: 0;
    right: 0;
}

nav {
    width: 100%;
    margin: var(--Spacer-4) 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

nav a.router-link-exact-active {
    color: var(--Grayscale-0) !important;
    font-size: 1rem;
    font-weight: bold;
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 var(--Spacer-2);
    color: var(--Grayscale-40);
    font-size: var(--Spacer-2);
    text-decoration-line: none;
    position: relative;
    text-align: center;
}

nav a.router-link-exact-active::before {
    background: linear-gradient(325deg, rgb(255 255 255 / 0.3), rgba(255, 255, 255, 0.4), rgb(255 255 255 / 0.3));
}

nav a::before {
    content: "";
    position: absolute;
    top: calc(var(--Spacer-1)* -1);
    left: var(--Spacer-1);
    width: calc(100% - var(--Spacer-2));
    height: calc(100% + var(--Spacer-2));
    background: linear-gradient(325deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.3), rgb(255 255 255 / 0.2));
    backdrop-filter: blur(15px);
    box-shadow: 0 4px 6px rgb(0 0 0 / 20%);
    border-radius: var(--Spacer-3);
    z-index: -1;
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
    background: url(/src/assets/waves-macos-big-sur-colorful.png) no-repeat;
    background-size: cover;
    background-position: center;
}

.circle {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
}

/* .circle-1 {
    width: max(80vw,80vh);
    height: max(80vw,80vh);
    top: calc(-50% );
    left: calc(-50%);
    background-color: var(--Royal-Blue-20);
}

.circle-2 {
    width: max(70vw,70vh);
    height: max(70vw,70vh);
    bottom: calc(-50% );
    right: calc(-50%);
    background-color: var(--Blue-Purple-20);
} */
</style>
