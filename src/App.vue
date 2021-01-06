<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
:root {
  --bg-line-color: hsla(0, 0%, 63.5%, 0.3);
  --bg-color: #fafafa;
}

#app {
  font-family: "Inter", Helvetica, Arial, sans-serif;
  color: hsl(154, 20%, 14%);
}

body {
  background-color: #fafafa;
  background-color: var(--bg-color);
  margin: 0;
}
</style>
