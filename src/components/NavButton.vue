<script setup lang="ts">
</script>

<template>
    <div class="nav-button-wrapper">
        <div class="nav-button left"></div>
        <div class="nav-button right"></div>
    </div>
</template>

<style scoped>
.nav-button-wrapper{
    --horizontal    : var(--Spacer-2);
    --vertical      : var(--Spacer-4);

    --button-color  : var(--Grayscale-40);
    --button-hover-color  : var(--Grayscale-60);

    display: flex;
    justify-content: space-between;
    padding: var(--Spacer-2) var(--Spacer-1);
}

.nav-button{
    width: 0;
    height: 0;
    border-style: solid;
    position: relative;
}

.nav-button:hover{
    cursor: pointer;
}

.nav-button::after{
    content: "";
    display: block;
    position: absolute;
    width: calc(var(--vertical) + var(--Spacer-3));
    height: calc(var(--horizontal) * 2  + var(--Spacer-3));
    border: 1px solid var(--Grayscale-50);
    border-radius: 50%;
    box-sizing: border-box;
    background-color: var(--Grayscale-10);
    z-index: -1;
}

.nav-button.left {
    border-width: var(--horizontal) var(--vertical) var(--horizontal) 0;
    border-color: transparent var(--button-color) transparent transparent;
}

.nav-button.left:hover{
    border-color: transparent var(--button-hover-color) transparent transparent;
}

.nav-button.left::after {
    top: calc(var(--horizontal) * -1 - var(--Spacer-3) * 0.5);
    left: calc(var(--Spacer-1) * -1);
}

.nav-button.right {
    border-width: var(--horizontal) 0 var(--horizontal) var(--vertical);
    border-color: transparent transparent transparent var(--button-color);
}

.nav-button.right:hover{
    border-color: transparent transparent transparent var(--button-hover-color);
}

.nav-button.right::after {
    top: calc(var(--horizontal) * -1 + var(--Spacer-3) * -0.5);
    left: calc(var(--vertical) * -1 - var(--Spacer-2));
}
</style>
