<template>
    <footer>
        <section>
            <Logout v-if="accessToken" />
        </section>
    </footer>
</template>

<script>
import Logout from '@/components/Logout.vue'

export default {
    name: 'Footer',
    components: {
        Logout
    },
    computed: {
        accessToken: function() {
            return this.$store.state.accessToken
        }
    }
}
</script>

Logout
<style lang="scss">
footer {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    background: linear-gradient(294deg, #1f5ba7, #3c23c2);
    color: white;
    font-family: 'inter';
    font-weight: 300;
    font-size: 0.9em;
    letter-spacing: 0.001em;
    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.14);

    section {
        margin: 0.8em 2em;
        margin-bottom: 0.7em;
        display: flex;
        align-items: center;
        justify-content: center;

        a {
            color: white;
        }
    }
}
</style>
