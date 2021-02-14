<template>
    <transition name="tab-slide" mode="out-in">
        <div class="tab" v-show="isActive">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Tab'
        }
    },
    data() {
        return {
            isActive: false,
            current: null,
            direction: 'left'
        }
    }
}
</script>

<style lang="scss"></style>
