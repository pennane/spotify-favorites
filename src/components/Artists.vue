<template>
    <div class="artists flexCenterParent">
        <!-- <h2>Artists</h2> -->
        <Tabs v-if="artists">
            <Tab title="Short term">
                <Term term="4 weeks">
                    <div class="artists-wrapper">
                        <!-- <SequentialEntrance storeTarget="artists-short"> -->
                        <div v-for="(n, i) in 50" class="artist-wrapper" :key="i + '-short-artist'">
                            <Artist
                                v-if="artists.short[i]"
                                :key="'artist-row-' + i"
                                :imageUrl="artists.short[i].imgurl"
                                :artistName="artists.short[i].name"
                                :position="artists.short[i].position"
                            />
                        </div>
                        <!-- </SequentialEntrance> -->
                    </div>
                </Term>
            </Tab>
            <Tab title="Medium term">
                <Term term="6 months">
                    <div class="artists-wrapper">
                        <!-- <SequentialEntrance storeTarget="artists-medium"> -->
                        <div v-for="(n, i) in 50" class="artist-wrapper" :key="i + '-medium-artist'">
                            <Artist
                                v-if="artists.medium[i]"
                                :key="'artist-row-' + i"
                                :imageUrl="artists.medium[i].imgurl"
                                :artistName="artists.medium[i].name"
                                :position="artists.medium[i].position"
                            />
                        </div>
                        <!-- </SequentialEntrance> -->
                    </div>
                </Term>
            </Tab>
            <Tab title="Long term">
                <Term term="few years">
                    <div class="artists-wrapper">
                        <!-- <SequentialEntrance storeTarget="artists-long"> -->
                        <div v-for="(n, i) in 50" class="artist-wrapper" :key="i + '-long-artist'">
                            <Artist
                                v-if="artists.long[i]"
                                :key="'artist-row-' + i"
                                :imageUrl="artists.long[i].imgurl"
                                :artistName="artists.long[i].name"
                                :position="artists.long[i].position"
                            />
                        </div>
                        <!-- </SequentialEntrance> -->
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
// import SequentialEntrance from '@/components/SequentialEntrance.vue'

export default {
    name: 'Artists',
    props: ['artists'],
    components: {
        Tabs,
        Tab,
        Term,
        Artist
        // SequentialEntrance
    }
}
</script>

<style lang="scss">
.artists {
    padding: 0.2em 0;
    width: 800px;
    max-width: 93vw;
    box-sizing: border-box;
    padding-bottom: 2.6rem;
    --image-size: 90px;
}

.artists-wrapper {
    max-width: 80vw;
    width: 600px;
    padding: 0;
    margin-top: 1em;
    display: grid;
    grid-column-gap: 37px;
    grid-row-gap: 14px;
    grid-template-columns: repeat(auto-fill, var(--image-size));
    justify-content: center;
}

@media screen and (max-width: 760px) {
    .artists-wrapper {
        --image-size: 80px;
        grid-column-gap: 32px;
        grid-row-gap: 15px;
    }
}

@media screen and (max-width: 560px) {
    .artists-wrapper {
        --image-size: 70px;
        grid-column-gap: 32px;
        grid-row-gap: 15px;
    }
}

@media screen and (max-width: 370px) {
    .artists-wrapper {
        --image-size: 65px;
        grid-column-gap: 28px;
        grid-row-gap: 11px;
    }
}
</style>
