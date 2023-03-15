<template>
    <nav>
        <ul class="breadcrumb">
            <li
                v-for="(crumb,i) in crumbs"
                :key="i"
                class="breadcrumb-item"
                >
                <AppLink to="/"  :class="{ disabled: isLast(i) }">
                    {{ crumb }} {{ isLast(i) ? "" : separator }}
                </AppLink>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppLink from '@/shared/ui/AppLink/AppLink.vue';

export default defineComponent({
  props: {
    crumbs: {
        type: Array,
        required: true
    },
    separator: {
        type: String,
    }
  },
  components: {
    AppLink
  },
  methods: {
    isLast(index: number) {
        return index === this.crumbs.length - 1
    }
  }
})
</script>

<style scoped>
    .breadcrumb {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .breadcrumb-item {
        margin-right: 5px;
    } 
    .breadcrumb-item:last-child {
        margin-right: 0;
    }
</style>