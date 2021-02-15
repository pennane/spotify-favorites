<template>
    <div class="default-view">
        <main>
            <div class="body-text">
                <header>
                    <h1>Spotify Favorites</h1>
                </header>
                <section class="introduction">
                    <p>
                        Display your most listened tracks and artists from Spotify. See what you have been rocking the
                        most!
                    </p>
                </section>
            </div>
            <SpotifyFavorites />
        </main>
        <BackgroundLines />
    </div>
</template>

<script>
import SpotifyFavorites from '@/components/SpotifyFavorites.vue'
import BackgroundLines from '@/components/BackgroundLines.vue'

export default {
    name: 'home',
    components: {
        SpotifyFavorites,
        BackgroundLines
    }
}
</script>

<style lang="scss">
.body-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1em;
    margin-bottom: 2em;
}

header {
    display: flex;
    justify-content: center;
    align-items: center;
}

h1 {
    letter-spacing: -1.5px;
    font-size: 2em;
    font-weight: 700;
    text-align: center;
}

p {
    font-size: 0.95em;
    line-height: 1.5;
}

main {
    z-index: 2;
    position: relative;
}

.introduction {
    margin: 1em auto 3em auto;
    max-width: 750px;
    padding: 0 calc(2vw + 0.8em);
    position: relative;
    line-height: 1.55;
    font-size: 1.13em;
    font-weight: 300;
    margin: 0;
    background-color: var(--bg-color);
    max-width: 470px;
    text-align: center;
}

.button {
    font-family: 'Inter', sans-serif;
    background-color: #1968e6;
    color: white;
    margin: 0 0.5em;
    border-radius: 2em;
    transition: background-color 0.2s, text-shadow 0.2s;
    border: none;
    display: -ms-inline-flexbox;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-decoration: none;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    background: linear-gradient(90deg, #1f5ba7, #3c23c2);
    font-weight: 450;
    letter-spacing: 0.1px;
    font-size: 0.9em;
    padding: 0.88rem 1.44rem;
    cursor: pointer;

    &:hover {
    }
    &:active {
        background: linear-gradient(90deg, hsl(214, 69%, 29%), hsl(249, 69%, 35%));
    }
}

.flexCenterParent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
