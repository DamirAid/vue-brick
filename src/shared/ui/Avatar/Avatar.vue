<template>
    <div class="avatar" :class="size">
        <img :src="src" :alt="alt" />
    </div>
</template>
  
<script lang="ts">
import { defineComponent, PropType } from 'vue';

export enum SIZE {
    small = "small",
    large = "large"
}

export default defineComponent({
    props: {
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: true
        },
        size: {
            type: String as PropType<SIZE>,
            default: SIZE.small
        },
    }
});
</script>
  
<style scoped>
.avatar {

    border-radius: 50%;
}
.avatar.small {
    width: 40px;
    height: 40px;
    margin-right: 10px;
}
.avatar.large {
    width: 110px;
    height: 110px;
}
.avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>