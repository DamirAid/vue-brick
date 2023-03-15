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

export interface IOption {
    value: string;
    text: string;
}

export default defineComponent({
    props: {
        label: {
            type: String,
        },
        options: {
            type: Array as PropType<IOption[]>,
            default: []
        },
        filterType: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            queryFilter: new URLSearchParams(window.location.search).get(this.filterType) || ""
        }
    },
    methods: {

        ...mapActions(["getDocuments"]),
        setQuery(key: string, value: string) {
            const search = new URLSearchParams(window.location.search);
            if (value) {
                search.set(key, value);
            } else {
                search.delete(key);
            }
            console.log(search.toString())
            this.$router.push(`/?${search.toString()}`);

        },
    },
    watch: {
        queryFilter(value) {
            this.setQuery(this.filterType, value)
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