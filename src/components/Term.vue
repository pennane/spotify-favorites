<template>
    <div class="tab">
        <span class="termdesc">Most listened from the last ~{{ term }}</span>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Term',
    props: {
        term: {
            type: String
        }
    },
    data() {
        return {
            isActive: false
        }
    }
}
</script>

<style lang="scss">
.termdesc {
    display: block;
    margin-top: 1.5em;
    font-weight: 300;
    color: var(--text-secondary);
    margin-bottom: 0.3em;
}
</style>
