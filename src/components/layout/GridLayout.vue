<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed} from 'vue'

const props = defineProps(["gridInfo","cardInfo"])

const gridDiv = ref<HTMLDivElement | null>(null);
const windowWidth = ref(0);
const cellNumberInRow = computed(()=>(gridDiv.value?
                                        Math.floor((windowWidth.value)/parseFloat(window.getComputedStyle(gridDiv.value).gridTemplateColumns)):1));

const updateWindowSize = function(){
    if (gridDiv.value) {
        const style = window.getComputedStyle(gridDiv.value);
        const paddingLeft = parseFloat(style.paddingLeft);
        const paddingRight = parseFloat(style.paddingRight);
        const columnGap = parseFloat(style.gridColumnGap);

        windowWidth.value = gridDiv.value.clientWidth - paddingLeft - paddingRight - (cellNumberInRow.value * columnGap);
    }
}

onMounted(()=>{
    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);
})

onUnmounted(()=>{
    window.removeEventListener('resize', updateWindowSize);
})
</script>

<template>
    <div class="grid-layout"
        ref="gridDiv" 
        :style="{ 
            gridRowGap: `${props.gridInfo.gap.row}`,
            gridColumnGap: `${props.gridInfo.gap.column}`, 
            gridAutoRows: props.gridInfo.row.height,
            gridTemplateColumns: `repeat(${Math.min((cellNumberInRow===0?1:cellNumberInRow),props.gridInfo.maxColumnLength)}, ${props.gridInfo.cell.width})`
        }"
    >
    <slot :cellNumberInRow="cellNumberInRow"></slot>
    </div>
</template>

<style scoped>
.grid-layout{
    display: grid;
    justify-content: center;
}
</style>
