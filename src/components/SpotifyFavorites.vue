<template>
    <div class="spotifyFavorites flexCenterParent">
        <a class="button" v-if="!accessToken" :href="spotifyUrl">Login to spotify</a>
        <button class="button" v-if="accessToken && !data && !loading" @click="getSpotifyData(accessToken)">
            Get favorite tracks &amp; artists
        </button>
        <div v-show="loading" class="loader-wrapper">
            <LoadingBar />
        </div>

        <p v-show="error" class="error-message">{{ error }}</p>
        <div class="favorites-content" v-if="data">
            <Tabs toggle>
                <Tab title="Tracks">
                    <Tracks :tracks="data.tracks" />
                </Tab>

                <Tab title="Artists">
                    <Artists :artists="data.artists" />
                </Tab>
            </Tabs>
        </div>
        <Footer />
    </div>
</template>

<script>
import axios from 'axios'
import LoadingBar from '@/components/Loadingbar.vue'
import Tracks from '@/components/Tracks.vue'
import Artists from '@/components/Artists.vue'
import Footer from '@/components/Footer.vue'
import Tab from '@/components/Tab.vue'
import Tabs from '@/components/Tabs.vue'

export default {
    name: 'SpotifyFavorites',
    components: {
        Tracks,
        Artists,
        LoadingBar,
        Footer,
        Tab,
        Tabs
    },
    data() {
        return {
            loading: null,
            error: null,
            permissions: 'user-read-private user-top-read'
        }
    },
    methods: {
        async getSpotifyData(token) {
            this.loading = true
            this.error = null
            try {
                let response = await axios.get('.netlify/functions/listeningData', { params: { token: token } })
                this.loading = false
                this.setData(response.data)
                this.$ga.event({
                    eventCategory: 'Spotify',
                    eventAction: 'Spotify information analyze'
                })
            } catch (e) {
                this.loading = false
                this.error = e
            }
        },
        setToken: function(token) {
            this.$store.commit('setAccessToken', token)
        },
        setData: function(data) {
            this.$store.commit('setData', data)
        }
    },
    computed: {
        data: function() {
            return this.$store.state.data
        },
        accessToken: function() {
            return this.$store.state.accessToken
        },
        redirectUrl: function() {
            // return 'http://localhost:8888/'
            return 'https://spotifyfavorites.pennanen.dev/'
        },
        spotifyUrl: function() {
            return `https://accounts.spotify.com/authorize?response_type=code&client_id=a3e009b8a73a416387140f5830d1862e&scope=${encodeURIComponent(
                this.permissions
            )}&redirect_uri=${encodeURIComponent(this.redirectUrl)}`
        }
    },
    created: function() {
        if (this.$route.query && this.$route.query.code) {
            this.setToken(this.$route.query.code)
            let query = Object.assign({}, this.$route.query)
            delete query.code
            this.$router.replace({ query })
        }
    }
}
</script>

<style scoped lang="scss">
.favorites-content {
    padding-bottom: 8em;
}

.error-message {
    color: #dc2626;
}

@media screen and (max-width: 800px) {
    .favorites-content {
        font-size: 0.95em;
    }
}
</style>
