<template>
  <div class="loader"></div>
</template>

<script>
export default {
  name: "LoadingBar"
};
</script>
<style scoped>
.loader {
  width: 56px;
  height: 56px;
  border: 4px solid transparent;
  border-radius: 50%;
  position: relative;
  top: 50%;
}

.loader::before {
  content: "";
  border: 4px solid hsla(219, 100%, 44%, 0.5);
  border-radius: 50%;
  width: 67.2px;
  height: 67.2px;
  position: absolute;
  top: -9.6px;
  left: -9.6px;
  animation: loader-scale 1s ease-out infinite;
  animation-delay: 1s;
  opacity: 0;
}
.loader::after {
  content: "";
  border: 4px solid #2c92ff;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  position: absolute;
  top: -4px;
  left: -4px;
  animation: loader-scale 1s ease-out infinite;
  animation-delay: 0.5s;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes loader-scale {
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