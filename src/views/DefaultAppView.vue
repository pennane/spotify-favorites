<template>
  <div class="defaultView">
    <main>
      <div class="bodyText">
        <header>
          <h1>Spotify Favorites</h1>
        </header>
        <section class="introduction">
          <p>Spotify favorites shows stats about what you listen the most on Spotify. Log in using your Spotify account, and you will be presented an array of artists and tracks that you have been listening to the most.</p>
          <p>The data, both artists and tracks, is divided into three categories. Short term, medium term and long term. The length of the term sets the time frame in which the stats have been calculated of.</p>
          <p>Short term shows your most listened artist and tracks from the previous few weeks. Whereas medium from the last six months and the long from several years.</p>
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
  }
};
</script>

<style>
.bodyText {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em
}

h3 {
  height: 50px;
}

h1 {
  letter-spacing: -1.5px;
  font-size: 3em;
  font-weight: 700;
}

main {
  padding: 0 calc(1em + 1vw);
  z-index: 2;
  position: relative;
}

section {
  margin: 1em auto 3em auto;
  max-width: 750px;
  padding: 0 calc(2.5em + 3vw);
  position: relative;
}

.introduction {
  line-height: 1.5;
  font-size: 1.1em;
  font-weight: 300;
  margin: 0;
  background-color: var(--bg-color);
}

.button {
  background-color: #2c92ff;
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
