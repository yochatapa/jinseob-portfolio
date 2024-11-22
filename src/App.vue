<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <background class="app-background">
        <div v-for="index in 5" :class="['circle', `circle-${index}`]"></div>
    </background>
    <header>
        <nav>
            <RouterLink to="/">About Me</RouterLink>
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

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
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
    filter: blur(70px);
    background: var(--Grayscale-50);
}

.circle {
    position: absolute;
    border-radius: 50%;
}

.circle-1 {
    width: max(80vw,80vh);
    height: max(80vw,80vh);
    top: 0;
    left: calc(-50% - max(-80vw, -80vh));
    animation: moveCircle 20s linear infinite, backgroundColorChange50 20s infinite alternate;
    background-color: var(--Orange-50);
}

.circle-2 {
    width: max(70vw,70vh);
    height: max(70vw,70vh);
    bottom: calc(-50% - 150px);
    right: calc(-50% + min(-20vw, -20vh));
    animation: moveCircleReverse 15s linear infinite, backgroundColorChange70 20s infinite alternate;
    background-color: var(--Orange-50);
}

/* .circle-3 {
    width: var(--Spacer-50);
    height: var(--Spacer-50);
    top: 80vh;
    left: 5vw;
    animation: moveCircle 15s linear infinite, backgroundColorChange50 20s infinite alternate;
}

.circle-4 {
    width: var(--Spacer-60);
    height: var(--Spacer-60);
    top: 80vh;
    left: 80vw;
    animation: moveCircleReverse 20s linear infinite, backgroundColorChange50 20s infinite alternate;
}

.circle-5 {
    width: var(--Spacer-30);
    height: var(--Spacer-30);
    top: 80vh;
    left: 50vw;
    animation: moveCircle 10s linear infinite, backgroundColorChange50 20s infinite alternate;
} */
</style>
