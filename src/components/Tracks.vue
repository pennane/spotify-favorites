<template>
    <div class="tracks flexCenterParent">
        <!-- <h2>Tracks</h2> -->
        <Tabs v-if="tracks">
            <Tab title="Short term">
                <Term term="4 weeks">
                    <div class="tracks-wrapper">
                        <SequentialEntrance storeTarget="tracks-short">
                            <div class="track-wrapper" v-for="(n, i) in 50" :key="'track-row-' + i">
                                <Track
                                    v-if="tracks.short[i]"
                                    :imageUrl="tracks.short[i].imgurl"
                                    :trackName="tracks.short[i].name"
                                    :artists="tracks.short[i].artists"
                                    :position="tracks.short[i].position"
                                />
                            </div>
                        </SequentialEntrance>
                    </div>
                </Term>
            </Tab>
            <Tab title="Medium term">
                <Term term="6 months">
                    <div class="tracks-wrapper">
                        <SequentialEntrance storeTarget="tracks-medium">
                            <div class="track-wrapper" v-for="(n, i) in 50" :key="'track-row-' + i">
                                <Track
                                    v-if="tracks.medium[i]"
                                    :imageUrl="tracks.medium[i].imgurl"
                                    :trackName="tracks.medium[i].name"
                                    :artists="tracks.medium[i].artists"
                                    :position="tracks.medium[i].position"
                                />
                            </div>
                        </SequentialEntrance>
                    </div>
                </Term>
            </Tab>
            <Tab title="Long term">
                <Term term="few years">
                    <div class="tracks-wrapper">
                        <SequentialEntrance storeTarget="tracks-long">
                            <div class="track-wrapper" v-for="(n, i) in 50" :key="'track-row-' + i">
                                <Track
                                    v-if="tracks.long[i]"
                                    :imageUrl="tracks.long[i].imgurl"
                                    :trackName="tracks.long[i].name"
                                    :artists="tracks.long[i].artists"
                                    :position="tracks.long[i].position"
                                />
                            </div>
                        </SequentialEntrance>
                    </div>
                </Term>
            </Tab>
        </Tabs>
    </div>
</template>

<script>
import Track from '@/components/Track.vue'
import Tabs from '@/components/Tabs.vue'
import Tab from '@/components/Tab.vue'
import Term from '@/components/Term.vue'
import SequentialEntrance from '@/components/SequentialEntrance.vue'

export default {
    name: 'Tracks',
    props: ['tracks'],
    components: {
        Tabs,
        Tab,
        Term,
        Track,
        SequentialEntrance
    }
}
</script>

<style lang="scss">
.tracks {
    padding: 0.2em 0;
    width: 800px;
    max-width: 93vw;
    box-sizing: border-box;
}

.tracks-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 80vw;
    width: 600px;
    padding: 0;
}
</style>
