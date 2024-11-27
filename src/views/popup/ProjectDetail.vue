<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const lang = store.getters["getLang"]
const parameter = store.getters['modal/parameter']

const description = computed(()=>parameter.cardInfo.description) 
const role = computed(()=>parameter.cardInfo.role)
const skills = computed(()=>parameter.cardInfo.skills) 
const tasks = computed(()=>parameter.cardInfo.tasks) 

</script>

<template>
    <div class="flip-card-template" ref="flipCard">
        <div class="container">
            <h1>{{ parameter.cardInfo.name[lang] }}</h1>
            <h2>{{ parameter.cardInfo.name[lang==="ko"?"en":"ko"] }}</h2>

            <!-- Slider Section -->
            <div class="slider">
            <div class="slides">
                <!-- <img src="project1-1.jpg" alt="Project Image 1">
                <img src="project1-2.jpg" alt="Project Image 2">
                <img src="project1-3.jpg" alt="Project Image 3"> -->
            </div>
            <button class="prev" onclick="prevSlide()">&#10094;</button>
            <button class="next" onclick="nextSlide()">&#10095;</button>
            </div>

            <!-- Project Details -->
            <div class="details">
            <h3>{{ lang==="ko"?"프로젝트 설명":"Project Description" }}:</h3>
            <p>
                {{ typeof description.value === "string"?description.value:description[lang] }}
            </p>

            <h3>{{ lang==="ko"?"내 역할":"My Role" }}:</h3>
            <p>
                {{ typeof role.value === "string"?role.value:role[lang] }}
            </p>

            <h3>{{ lang==="ko"?"사용한 기술":"Technologies Used" }}:</h3>
            <div class="tags">
                <span class="tag" v-for="(skill,index) in skills">{{ skill }}</span>
            </div>

            <h3>{{ lang==="ko"?"내가 한 작업":"Tasks I Worked On" }}:</h3>
            <ul>
                <li v-for="(task,index) in tasks">{{ typeof task === "string" ? task : task[lang] }}</li>
            </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1, h2 {
    text-align: center;
    color: var(--Green-30);
}
.slider {
    position: relative;
    max-width: 100%;
    margin: 1rem auto;
    overflow: hidden;
    border-radius: 8px;
}
.slides {
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: 100%;
}
.slides img {
    width: 100%;
    height: auto;
    border-radius: 8px;
}
.prev, .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 50%;
}
.prev {
    left: 10px;
}
.next {
    right: 10px;
}
.details {
    margin: 1rem 0;
    line-height: 1.6;
}
.details h3 {
    color: var(--Green-30);
}
.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}
.tag {
    background-color: #e0f7fa;
    color: var(--Green-50);
    padding: 0.3rem 0.6rem;
    border-radius: 3px;
    font-size: 0.9rem;
}
</style>
