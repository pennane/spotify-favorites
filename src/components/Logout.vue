<template>
    <div @click="logout" class="logout">
        <img :src="require('@/assets/spotify-white.png')" width="16" height="16" alt="spotify logo in black" />
        <span>logout</span>
    </div>
</template>

<script>
export default {
    name: 'Logout',
    methods: {
        logout() {
            this.$store.commit('setAccessToken', null)
            this.$store.commit('setData', null)
        }
    }
}
</script>

<style lang="scss">
.logout {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.1),
        inset 0 2px 4px 0 rgba(0, 0, 0, 0.13);
    padding: 0.5em 0.7em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    cursor: pointer;
    user-select: none;

    &:active {
        background-color: rgba(0, 0, 0, 0.1);
    }

    span {
        margin-left: 0.4em;
        color: #eae9f8;
        font-weight: 450;
        font-size: 0.9rem;
    }
}
</style>
