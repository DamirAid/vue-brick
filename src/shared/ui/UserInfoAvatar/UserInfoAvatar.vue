<template>
    <div class="avatar-block">
        <Avatar :src="user.userImg" :alt="user.userName" :size="size" />
        <span class="avatar-text">{{ user.userName }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Avatar, { SIZE } from '../Avatar/Avatar.vue';
import { UserProp } from './types';

export default defineComponent({
    props: {
        user: {
            type: Object as PropType<UserProp>,
            required: true
        }
    },
    computed: {
        size() {
            return SIZE.small
        }
    },
    components: { Avatar }
})
</script>

<style scoped>
.avatar-block {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.avatar-text {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #0D2839;
}
</style>