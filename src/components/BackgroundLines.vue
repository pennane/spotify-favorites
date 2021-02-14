<template>
    <div class="bg-art">
        <div class="bg-item" />
        <div class="bg-item" />
        <div class="bg-item" />
        <div class="bg-item" />
        <div class="bg-item" />
    </div>
</template>

<script>
export default {
    name: 'Backgroundlines'
}
</script>

<style lang="scss">
.bg-art {
    display: flex;
    height: 100%;
    pointer-events: none;
    position: fixed;
    width: 100%;
    z-index: 1;
    top: 0;
    left: 0;
}

.bg-item {
    height: 100%;
    width: 20%;
    border-left: 1px solid rgba(162, 162, 162, 0.3);
    border-color: var(--bg-line-color);
}

.bg-item:first-child {
    border-left: none;
}

@media only screen and (max-width: 940px) {
    .bg-item:first-child {
        display: none;
    }

    .bg-item {
        width: 25%;
    }
}

@media only screen and (max-width: 670px) {
    .bg-item:last-child {
        display: none;
    }

    .bg-item {
        width: 33%;
    }
}
</style>
