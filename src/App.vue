<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <background class="app-background">
        <div v-for="index in 2" :class="['circle', `circle-${index}`]"></div>
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

header {
    z-index: 1;
}

main {
    z-index: 1;
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
