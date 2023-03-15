<template>
    <div class="filter_list">
        <FilterItem class="filter-item" label="Тип документа" :options="typeOptions" filterType="type" />
        <FilterItem class="filter-item" label="Статус" :options="statusOptions" filterType="status" />
        <SortItem class="filter-item" label="Сортировать по" :options="sortOptions" />

    </div>
</template>

<script lang="ts">
import { DOCUMENT_STATUSES, DOCUMENT_TYPES } from '@/entity/Document/types/DocumentSchema';
import FilterItem from '@/features/FilterDocuments/ui/FilterItem/FilterItem.vue';
import SortItem from '@/features/SortDocuments/ui/SortItem/SortItem.vue';
import { defineComponent } from 'vue'

export default defineComponent({
    components: { FilterItem, SortItem },
    computed: {
        typeOptions() {
            return Object.entries(DOCUMENT_TYPES).map(([key, value]) => ({
                value: key,
                text: value
            }))
        },
        statusOptions() {
            return Object.entries(DOCUMENT_STATUSES).map(([key, value]) => ({
                value: key,
                text: value
            }))
        },
        sortOptions() {
            return [
                {
                    value: "asc",
                    sortType: "start_date",
                    text: "По дате по возрастанию"
                },
                {
                    value: "desc",
                    sortType: "start_date",
                    text: "По дате по убыванию"
                },
            ]
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