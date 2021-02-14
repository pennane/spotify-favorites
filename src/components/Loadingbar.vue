<template>
    <div class="loader"></div>
</template>

<script>
export default {
    name: 'LoadingBar'
}
</script>
<style scoped lang="scss">
.loader {
    width: 56px;
    height: 56px;
    border: 4px solid transparent;
    border-radius: 50%;
    position: relative;
    top: 50%;
    margin: 1em;

    &::before {
        content: '';
        border: 4px solid rgba(39, 78, 173, 0.5);
        border-radius: 50%;
        width: 67.2px;
        height: 67.2px;
        position: absolute;
        top: -9.6px;
        left: -9.6px;
        animation: loader 1s ease-out infinite;
        animation-delay: 1s;
        opacity: 0;
    }

    &::after {
        content: '';
        border: 4px solid rgba(39, 78, 173, 1);
        border-radius: 50%;
        width: 56px;
        height: 56px;
        position: absolute;
        top: -4px;
        left: -4px;
        animation: loader 1s ease-out infinite;
        animation-delay: 0.5s;
    }
}

@keyframes loader {
    0% {
        transform: scale(0);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: scale(1);
        opacity: 0;
    }
}
</style>
