<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="scss">
:root {
    --bg-line-color: rgba(255, 255, 255, 0.03);
    --bg-color: #2c2c96;
    --container-color: #3636bb;
    --container-fade: #3143b2;
    --text-primary: #ffffff;
    --text-secondary: #f2f2f2;
}

#app {
    font-family: 'Inter', Helvetica, Arial, sans-serif;
    color: hsl(154, 20%, 14%);
}

body {
    background-color: #292789;
    background-color: var(--bg-color);
    margin: 0;
}

h1,
h2,
h3,
h4,
h5 {
    color: var(--text-secondary);
}

span,
p {
    color: var(--text-secondary);
}
</style>
