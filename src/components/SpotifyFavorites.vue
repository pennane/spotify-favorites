<template>
  <div class="spotifyFavorites">
    <a class="button" v-if="!accessToken" :href="spotifyURL">Login to spotify</a>
    <button
      class="button"
      v-if="accessToken && !data && !loading"
      @click="getSpotifyData(accessToken)"
    >
      Get favorite tracks &amp; artists
    </button>
    <div v-show="loading" class="loader-wrapper">
      <LoadingBar />
    </div>

    <h1 v-show="error">{{ error }}</h1>
    <div class="favorites-content" v-if="data">
      <div class="tracks">
        <h2>Tracks</h2>
        <div class="data-wrapper">
          <div class="data">
            <table v-if="data.tracks">
              <thead>
                <tr>
                  <th>
                    <h3>Short term tracks</h3>
                    <span class="termdesc">Most listened last ~4 weeks</span>
                  </th>
                  <th>
                    <h3>Medium term tracks</h3>
                    <span class="termdesc">Most listened last ~6 months</span>
                  </th>
                  <th>
                    <h3>Long term tracks</h3>
                    <span class="termdesc">Most listened last ~few years</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(n, i) in 50" :key="'track-row-' + i">
                  <th>
                    <Track
                      v-if="data.tracks.short[i]"
                      :imageUrl="data.tracks.short[i].imgurl"
                      :trackName="data.tracks.short[i].name"
                      :artists="data.tracks.short[i].artists"
                      :position="data.tracks.short[i].position"
                    />
                  </th>
                  <th>
                    <Track
                      v-if="data.tracks.medium[i]"
                      :imageUrl="data.tracks.medium[i].imgurl"
                      :trackName="data.tracks.medium[i].name"
                      :artists="data.tracks.medium[i].artists"
                      :position="data.tracks.medium[i].position"
                    />
                  </th>
                  <th>
                    <Track
                      v-if="data.tracks.long[i]"
                      :imageUrl="data.tracks.long[i].imgurl"
                      :trackName="data.tracks.long[i].name"
                      :artists="data.tracks.long[i].artists"
                      :position="data.tracks.long[i].position"
                    />
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="artists">
        <h2>Artists</h2>
        <div class="data-wrapper">
          <div class="data">
            <table v-if="data.artists">
              <thead>
                <tr>
                  <th>
                    <h3>Short term artists</h3>
                    <span class="termdesc">Most listened from the last ~4 weeks</span>
                  </th>
                  <th>
                    <h3>Medium term artists</h3>
                    <span class="termdesc">Most listened from the last ~6 motnhs</span>
                  </th>
                  <th>
                    <h3>Long term artists</h3>
                    <span class="termdesc">Most listened from the last ~few years</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(n, i) in 50" :key="'artist-row-' + i">
                  <th>
                    <Artist
                      v-if="data.artists.short[i]"
                      :imageUrl="data.artists.short[i].imgurl"
                      :artistName="data.artists.short[i].name"
                      :position="data.artists.short[i].position"
                    />
                  </th>
                  <th>
                    <Artist
                      v-if="data.artists.medium[i]"
                      :imageUrl="data.artists.medium[i].imgurl"
                      :artistName="data.artists.medium[i].name"
                      :position="data.artists.medium[i].position"
                    />
                  </th>
                  <th>
                    <Artist
                      v-if="data.artists.long[i]"
                      :imageUrl="data.artists.long[i].imgurl"
                      :artistName="data.artists.long[i].name"
                      :position="data.artists.long[i].position"
                    />
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Track from "@/components/Track.vue";
import Artist from "@/components/Artist.vue";
import LoadingBar from "@/components/Loadingbar.vue";

export default {
  name: "SpotifyFavorites",
  components: {
    Track,
    Artist,
    LoadingBar
  },
  data: function() {
    return {
      spotifyURL: `https://accounts.spotify.com/authorize?response_type=code&client_id=a3e009b8a73a416387140f5830d1862e&scope=${encodeURIComponent(
        "user-read-private user-top-read"
      )}&redirect_uri=${encodeURIComponent("https://spotifyfavorites.pennanen.dev/")}`,
      loading: null,
      error: null,
      data: null
    };
  },
  methods: {
    getSpotifyData(token) {
      this.$ga.event({
        eventCategory: "Analyze",
        eventAction: "Spotify information",
        eventLabel: "Searched for spotify favorites",
        eventValue: "searching"
      });
      this.loading = true;
      this.error = null;
      axios
        .get(".netlify/functions/listeningData", {
          params: {
            token: token
          }
        })
        .then(response => {
          this.loading = false;
          this.data = response.data;
        })
        .catch(err => {
          this.loading = false;
          this.errror = err;
        });
    },
    setToken: function(token) {
      this.$store.commit("setAccessToken", token);
    }
  },
  computed: {
    accessToken: function() {
      return this.$store.state.accessToken;
    }
  },
  created: function() {
    if (this.$route.query && this.$route.query.code) {
      this.setToken(this.$route.query.code);
      let query = Object.assign({}, this.$route.query);
      delete query.code;
      this.$router.replace({ query });
    }
  }
};
</script>

<style scoped>
.favorites-content {
  padding: 0 calc(2.5vw + 0.2em);
}

table {
  width: 100%;
  table-layout: fixed;
  background-color: var(--bg-color);
}

table,
tr,
th {
  border-spacing: 0;
}

thead th {
  padding-right: 0.4em;
}

th {
  font-weight: inherit;
  text-align: left;
  box-sizing: border-box;
  padding: 0;
  vertical-align: baseline;
  overflow: hidden;
}

tbody {
  font-size: 0.95em;
}

tbody tr {
  background-color: var(--bg-color);
  box-shadow: 0 1px 3px rgb(0, 0, 0, 0.15);
  min-height: 70px;
}

tbody th {
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
tbody th:last-child {
  border-right: 0;
}

tbody tr:nth-of-type(even) {
  background-color: hsl(0, 0%, 97%);
}

.tracks,
.artists {
  padding: 0.2em 0;
  background-color: var(--bg-color);
}

.artists {
  margin-top: 6em;
}

.spotifyFavorites {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3em;
}
.data-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.data {
  display: flex;
  max-width: 1300px;
  padding: 0;
  flex-direction: column;
}

.column {
  flex: 1 1 33%;
}

span.name {
  font-weight: 600;
}

.loader-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em 0;
}

h3 {
  margin: 0;
  font-weight: 300;
}

.termdesc {
  margin-top: 0.5em;
  margin-bottom: 1.4em;
  display: block;
  margin-right: 2em;
}

h2 {
  font-weight: 600;
}
</style>
