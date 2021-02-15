<template>
    <div class="artist item" :title="artistName">
        <div class="position">
            <span class="position">{{ position }}</span>
        </div>
        <div class="art">
            <img
                @click="closed = false"
                class="cover-image"
                :src="imageUrl"
                :alt="'Cover for ' + artistName"
                width="48"
                height="48"
            />
        </div>
        <div v-if="!closed" class="artist-modal" v-scroll-lock="!closed">
            <img :src="imageUrl" :alt="'Cover for ' + artistName" v-click-outside="onClickOutside" />
            <span>{{ artistName }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Artist',
    data() {
        return {
            closed: true
        }
    },
    props: {
        position: {
            type: Number,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        },
        artistName: {
            type: String,
            required: true
        }
    },
    methods: {
        openArtist: function() {
            this.closed = false
        },
        onClickOutside() {
            this.closed = true
        }
    }
}
</script>
<style scoped lang="scss">
.artist {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.art {
    box-sizing: border-box;
    width: var(--image-size);
    height: var(--image-size);
}

.cover-image {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    width: 100%;
    height: 100%;
    display: block;
    cursor: pointer;
    background-color: #ffffff05;
}

span.position {
    color: #98f6ba;
    font-weight: 600;
    text-align: center;
}

div.position {
    margin-bottom: 0.6rem;
}

.artist-modal {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.85);
    padding: 1em;
    box-sizing: border-box;
    text-align: center !important;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.artist-modal img {
    max-height: 60vh;
    max-width: 90vw;
    min-width: 150px;
    object-fit: contain;
}
.artist-modal span {
    text-align: center;
    font-weight: 450;
    color: #98f6ba;
    margin-top: 0.4em;
}

@keyframes artist-fade-in {
}
</style>
