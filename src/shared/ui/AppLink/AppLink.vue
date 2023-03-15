<template>
    <RouterLink :to=to class="app-link">
        <slot />
    </RouterLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    to: {
        type: String,
        required: true
    }
  },
})
</script>

<style scoped>
    .app-link {
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        color: #0D2839;
    }
    .app-link.disabled {
        color: #86939C;
        pointer-events: none;
        cursor: default;
    }
</style>