<template>
    <div class="avatar-block">
        <div class="avatar">
            <img :src="user.userImg" :alt="user.userName">
        </div>
        <span class="avatar-text">{{ user.userName }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { UserProp } from './types';

export default defineComponent({
  props: {
    user: {
        type: Object as PropType<UserProp>,
        required: true
    }
  },
})
</script>

<style scoped>
    .avatar-block {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
    }
    .avatar-text {
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #0D2839;
    }
</style>