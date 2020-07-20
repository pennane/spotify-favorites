<template>
  <div class="track item">
    <div class="position">
      <span>{{ position }}</span>
    </div>
    <div class="middle">
      <span class="artist">{{ artistName }}</span>
    </div>
    <div class="art">
      <img
        class="cover-image"
        :src="imageUrl"
        :alt="'Cover for ' + artistName"
        width="48"
        height="48"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Artist",
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
  }
};
</script>
<style scoped>
.item {
  display: flex;
  align-items: start;
  justify-content: flex-start;
  min-height: 63px;
}

.art {
  margin-left: auto;
  padding-left: 0.3em;
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.middle {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding-top: 0.3em;
  padding-bottom: 0.2em;
}

.artist {
  color: #585858;
  white-space: nowrap;
  max-width: 14vw;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}

.position {
  color: #666;
  margin-left: 0.5vw;
  flex-basis: 8%;
  padding-left: 0.5em;
  padding-right: 0.1em;
  padding-top: 0.3em;
}

@media screen and (max-width: 920px) {
  .cover-image {
    width: 42px;
    height: 42px;
  }
}

@media screen and (max-width: 750px) {
  .art {
    display: none;
  }
  .artist {
    max-width: none;
    overflow: auto;
    text-overflow: unset;
    margin-right: 0.2em;
  }
}
</style>
