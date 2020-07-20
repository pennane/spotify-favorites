<template>
  <div class="defaultView">
    <main>
      <div class="bodyText">
        <header>
          <h1>Spotify Favorites</h1>
        </header>
        <section class="introduction">
          <p>
            Display your most listened tracks and artists from Spotify. See what you have been
            listening to the most!
          </p>
          <p>
            The listening time is shown in three different ranges: last 2 weeks, last 6 months and
            last few years.
          </p>
        </section>
      </div>
      <SpotifyFavorites />
    </main>
    <BackgroundLines />
  </div>
</template>

<script>
import axios from "axios";
import SpotifyFavorites from "@/components/SpotifyFavorites.vue";
import BackgroundLines from "@/components/BackgroundLines.vue";

export default {
  name: "home",
  components: {
    SpotifyFavorites,
    BackgroundLines
  },
  methods: {
    track() {
      this.$ga.page({
        page: "/",
        title: "Spotifyfavorites homepage",
        location: window.location.href
      });
    },
    created() {
      this.track();
    }
  }
};
</script>

<style>
.bodyText {
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
  font-size: 3em;
  font-weight: 700;
  text-align: center;
}

main {
  padding: 0 calc(0.1em + 1vw);
  z-index: 2;
  position: relative;
}

section {
  margin: 1em auto 3em auto;
  max-width: 750px;
  padding: 0 calc(2vw + 0.8em);
  position: relative;
}

.introduction {
  line-height: 1.55;
  font-size: 1.13em;
  font-weight: 300;
  margin: 0;
  background-color: var(--bg-color);
  max-width: 580px;
}

.button {
  background-color: #0466ff;
  color: white;
  font-size: 1.1em;
  padding: 0.9em 1em;
  margin: 0 0.5em;
  border-radius: 2em;
  box-shadow: 0 1px 3px rgb(0, 0, 0, 0.15);
  text-transform: capitalize;
  font-weight: 400;
  text-shadow: 0 1px 3px rgb(0, 0, 0, 0.15);
  transition: background-color 0.2s, text-shadow 0.2s;
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
}

.button:hover,
.button:active {
  background-color: #106fd4;
  cursor: pointer;
}
</style>
