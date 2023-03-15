<template>
    <div class="card" :class="{'full-width' : fullWidth}">
        <slot/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
 props: {
    fullWidth: {
        type: Boolean
    }
 }
})
</script>

<style scoped>
    .card {
        padding: 20px;
        background: #FFFFFF;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
    }
    .full-width {
        width: 100%;
    }
</style>