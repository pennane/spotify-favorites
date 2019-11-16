<template>
  <div class="home">
    <a v-if="!accessToken" :href="spotifyURL">Login to spotify</a>
    <button
      v-if="accessToken && !data && !loading"
      @click="getSpotifyData(accessToken)"
    >Get favorite tracks &amp; artists</button>
    <div v-show="loading" class="loader-wrapper">
      <LoadingBar />
    </div>

    <h1 v-show="error">{{error}}</h1>
    <div v-if="data">
      <div class="tracks">
        <h2>Tracks</h2>
        <div class="data-wrapper">
          <div class="data">
            <div class="shortTerm column">
              <h3>Short term tracks</h3>
              <Track
                v-for="(track, index) in data.tracks.short"
                :key="index+'-track-short-'+track.id"
                :imageUrl="track.imgurl"
                :trackName="track.name"
                :artists="track.artists"
                :position="track.position"
              />
            </div>
            <div class="mediumTerm column">
              <h3>Medium term tracks</h3>
              <Track
                v-for="(track, index) in data.tracks.medium"
                :key="index+'-track-medium-'+track.id"
                :imageUrl="track.imgurl"
                :trackName="track.name"
                :artists="track.artists"
                :position="track.position"
              />
            </div>
            <div class="longTerm column">
              <h3>Long term tracks</h3>
              <Track
                v-for="(track, index) in data.tracks.long"
                :key="index+'-track-long-'+track.id"
                :imageUrl="track.imgurl"
                :trackName="track.name"
                :artists="track.artists"
                :position="track.position"
              />
            </div>
          </div>

          <div class="artists">
            <h2>Artists</h2>
            <div class="data-wrapper">
              <div class="shortTerm column">
                <h3>Short term artists</h3>
                <Artist
                  v-for="(artist, index) in data.artists.short"
                  :key="index+'-track-short-'+artist.id"
                  :imageUrl="artist.imgurl"
                  :artistName="artist.name"
                  :position="artist.position"
                />
              </div>
              <div class="mediumTerm column">
                <h3>Medium term artists</h3>
                <Artist
                  v-for="(artist, index) in data.artists.medium"
                  :key="index+'-track-medium-'+artist.id"
                  :imageUrl="artist.imgurl"
                  :artistName="artist.name"
                  :position="artist.position"
                />
              </div>
              <div class="longTerm column">
                <h3>Long term artists</h3>
                <Artist
                  v-for="(artist, index) in data.artists.long"
                  :key="index+'-track-long-'+artist.id"
                  :imageUrl="artist.imgurl"
                  :artistName="artist.name"
                  :position="artist.position"
                />
              </div>
            </div>
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
  name: "home",
  components: {
    Track,
    Artist,
    LoadingBar
  },
  data: function() {
    return {
      spotifyURL: `https://accounts.spotify.com/authorize?response_type=code&client_id=a3e009b8a73a416387140f5830d1862e&scope=${encodeURIComponent(
        "user-read-private user-top-read"
      )}&redirect_uri=${encodeURIComponent("http://localhost:8888/")}`,
      loading: null,
      error: null,
      data: null
    };
  },
  methods: {
    getSpotifyData(token) {
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
          console.log(response.data);
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
      console.log(this.$store.state.accessToken);
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
.data-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.data {
  display: flex;
  max-width: 1300px;
  padding: 2em calc(2vw + 0.8em);
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
}
</style>

<style >
span,
p {
  font-weight: 400;
  font-size: calc(0.6em + 0.43vw);
}
h3 {
  height: 50px;
}
</style>