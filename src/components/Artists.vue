<template>
    <div class="artists flexCenterParent">
        <!-- <h2>Artists</h2> -->
        <Tabs v-if="artists">
            <Tab title="Short term">
                <Term term="4 weeks">
                    <div class="artists-wrapper">
                        <div v-for="(n, i) in 50" class="artist-wrapper" :key="i + '-short-artist'">
                            <Artist
                                v-if="artists.short[i]"
                                :key="'artist-row-' + i"
                                :imageUrl="artists.short[i].imgurl"
                                :artistName="artists.short[i].name"
                                :position="artists.short[i].position"
                            />
                        </div>
                    </div>
                </Term>
            </Tab>
            <Tab title="Medium term">
                <Term term="6 months">
                    <div class="artists-wrapper">
                        <div v-for="(n, i) in 50" class="artist-wrapper" :key="i + '-medium-artist'">
                            <Artist
                                v-if="artists.medium[i]"
                                :key="'artist-row-' + i"
                                :imageUrl="artists.medium[i].imgurl"
                                :artistName="artists.medium[i].name"
                                :position="artists.medium[i].position"
                            />
                        </div>
                    </div>
                </Term>
            </Tab>
            <Tab title="Long term">
                <Term term="few years">
                    <div class="artists-wrapper">
                        <div v-for="(n, i) in 50" class="artist-wrapper" :key="i + '-long-artist'">
                            <Artist
                                v-if="artists.long[i]"
                                :key="'artist-row-' + i"
                                :imageUrl="artists.long[i].imgurl"
                                :artistName="artists.long[i].name"
                                :position="artists.long[i].position"
                            />
                        </div>
                    </div>
                </Term>
            </Tab>
        </Tabs>
    </div>
</template>

<script>
import Artist from '@/components/Artist.vue'
import Tabs from '@/components/Tabs.vue'
import Tab from '@/components/Tab.vue'
import Term from '@/components/Term.vue'

export default {
    name: 'Artists',
    props: ['artists'],
    components: {
        Tabs,
        Tab,
        Term,
        Artist
    }
}
</script>

<style lang="scss">
.artists {
    padding: 0.2em 0;
    width: 800px;
    max-width: 90vw;
    box-sizing: border-box;
    padding-bottom: 2rem;
}

.artists-wrapper {
    display: flex;
    flex-wrap: wrap;
    max-width: 80vw;
    width: 600px;
    padding: 0;
    justify-content: center;
    margin-top: 1em;
}
</style>
