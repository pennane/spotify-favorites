<template>
  <div class="loader"></div>
</template>

<script>
export default {
  name: "HelloWorld"
};
</script>
<style scoped>
.loader {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #2c92ff;
  border-radius: 50%;
  width: 2em;
  height: 2em;
  animation: spin 1s linear infinite;
      animation-timing-function: cubic-bezier(0.23, 0.34, 0.41, 0.65);
      will-change: transform;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

</style>