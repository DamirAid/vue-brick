<template>
    <nav>
        <ul class="breadcrumb">
            <li
                v-for="(crumb,i) in crumbs"
                :key="i"
                class="breadcrumb-item"
                >
                <button class="btn" :class="{ disabled: isLast(i) }">
                    {{ crumb }}
                </button>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    crumbs: {
        type: Array,
        required: true
    }
  },
  methods: {
    isLast(index: number) {
        return index === this.crumbs.length - 1
    }
  }
})
</script>

<style scoped>

</style>