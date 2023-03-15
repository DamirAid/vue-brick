<template>
    <Teleport to="body">
        <div class="modal" :class="{ opened: isOpen === true, isClosing: isClosing }">
            <div class="overlay" @click="closeHandler">
                <div class="content" @click.stop>
                    <slot />
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'



export default defineComponent({
    props: {
        isOpen: {
            type: Boolean,
            default: false
        },
        onClose: {
            type: Function
        }
    },
    data() {
        return {
            isClosing: false
        }
    },
    methods: {
        closeHandler() {
            if (this.onClose) {
                this.onClose()
                this.isClosing = false
            }
        }
    }
})
</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    opacity: 0;
    pointer-events: none;
    z-index: -1;
    color: #0D2839;
}

.overlay {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.content {
    padding: 20px;
    border-radius: 12px;
    background: #fff;
    transition: 0.3s transform;
    transform: scale(0.5);
    max-width: 60%;
    width: 60%;
}

.opened {
    pointer-events: auto;
    opacity: 1;
    z-index: 1;


}

.opened .content {
    transform: scale(1);
}

.isClosing .content {
    transform: scale(0.2);
}
</style>