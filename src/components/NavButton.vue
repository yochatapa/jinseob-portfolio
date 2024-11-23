<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';

const props = defineProps(["scrollYn"]);
const store = useStore();

const menuYn = ref(false);

const onOffMenu = function(){
    menuYn.value = !menuYn.value
}

const moveTop = function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}

const changeLang = function(){
    store.dispatch("changeLanguage",{lang:(store.state.system.lang==="ko"?"en":"ko")});
    menuYn.value = false;
}
</script>

<template>
    <div class="nav-button-container">
        <div v-if="menuYn" class="nav-menu-container">
            <div class="nav-button-wrapper" :onclick="changeLang">
                <label class="nav-button text menu">{{ store.state.system.lang }}</label>
            </div>
        </div>
        <div class="nav-button-div">
            <div v-show="props.scrollYn" class="nav-button-wrapper" :onclick="moveTop">
                <label class="nav-button up">▲</label>
            </div>
            <div class="nav-button-wrapper" :onclick="onOffMenu">
                <label class="nav-button text menu">MENU</label>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
.nav-button-container{
    --horizontal: calc(var(--Spacer-1)* 1.5);
    --vertical: calc(var(--Spacer-2)* 1.5);

    --button-color: var(--Grayscale-60);
    --button-hover-color: var(--Grayscale-70);

    width: 100%;
    display: flex;
    padding: var(--Spacer-6) var(--Spacer-4) var(--Spacer-4) 0;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
}

.nav-button-div{
    display: flex;
}

.nav-button-wrapper{
    width: var(--Spacer-7);
    height: var(--Spacer-7);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: var(--Spacer-1) 0 0 var(--Spacer-1);
    background-image: linear-gradient(325deg, rgba(255, 255, 255, 0.1) 0%, rgb(255 255 255 / 40%) 100%);
    border: 1px solid var(--Grayscale-50);
    border-radius: var(--Spacer-2);
}

.nav-button-wrapper:hover{
    cursor: pointer;
}

.nav-button{
    color: var(--Grayscale-60);
}

.nav-button:hover{
    cursor: pointer;
    color: var(--Grayscale-80);
}

.nav-button.up:hover{
    border-color: transparent transparent var(--button-hover-color) transparent;
}

.nav-button.up{
    font-size: var(--Spacer-4);
}

.nav-button.text{
    font-size: var(--Spacer-2);
}
</style>
