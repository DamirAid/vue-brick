<template>
    <div>
        <h3>{{ label }}</h3>
        <select v-model="queryFilter" @change="getDocuments">
            <option selected value="">Не выбрано</option>
            <option v-for="(option, i) in options" :key="i" :value="option.value">{{ option.text }}</option>
        </select>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { mapActions } from 'vuex';

export interface ISortOption {
    value: string;
    sortType: string;
    text: string;
}

export default defineComponent({
    props: {
        label: {
            type: String,
        },
        options: {
            type: Array as PropType<ISortOption[]>,
            default: []
        }
    },
    data() {
        return {
            queryFilter: ""
        }
    },
    methods: {

        ...mapActions(["getDocuments"]),
        setQuery(keyType: string, valueType: string, keyOrder: string, valueOrder: string ) {
            const search = new URLSearchParams(window.location.search);
            if (valueType && valueOrder) {
                search.set(keyType, valueType);
                search.set(keyOrder, valueOrder);
            } else {
                search.delete(keyType);
                search.delete(keyOrder);
            }
            this.$router.push(`/?${search.toString()}`);

        },
    },
    watch: {
        queryFilter(value) {
            const sortType = this.options.find((option) => option.value === value)?.sortType as string
            this.setQuery("_sort", sortType, "_order", value)
        }
    }
})
</script>

<style scoped>
h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #86939C;
}

select {
    background: none;
    border: none;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #458AFB;
    outline: none;
}

</style>