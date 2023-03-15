<template>
    <button class="btn" :class="theme">
        <slot />
    </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export enum BUTTON_THEME {
    clear = "clear",
    contained = "contained"
}

export default defineComponent({
    props: {
        theme: {
            type: String as PropType<BUTTON_THEME>,
            default: BUTTON_THEME.clear
        }
    },
})
</script>

<style scoped>
.btn.clear {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-decoration-line: underline;
    color: #458AFB;
}

.btn.contained {
    background: #FFBD27;
    border-radius: 10px;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    padding: 17px;
}
</style>