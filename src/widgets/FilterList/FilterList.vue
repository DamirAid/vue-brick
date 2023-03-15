<template>
    <div class="filter_list">
        <FilterItem class="filter-item" label="Тип документа" :options="typeOptions" filterType="type" />
        <FilterItem class="filter-item" label="Статус" :options="statusOptions" filterType="status" />
    </div>
</template>

<script lang="ts">
import { DOCUMENT_STATUSES, DOCUMENT_TYPES } from '@/entity/Document/types/DocumentSchema';
import FilterItem from '@/shared/ui/FilterItem/FilterItem.vue';
import { defineComponent } from 'vue'

export default defineComponent({
    components: { FilterItem },
    computed: {
        typeOptions() {
            return Object.entries(DOCUMENT_TYPES).map(([key, value]) => ({
                value: key,
                text: value
            }))
        },
        statusOptions() {
            return Object.entries(DOCUMENT_STATUSES).map(([key,value]) => ({
                value: key,
                text: value
            }))
        }
    }
})
</script>

<style scoped>
.filter_list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.filter-item {
    margin-right: 180px;
}
</style>