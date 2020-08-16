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
  min-height: 58px;
  padding-top: 7px;
}

.cover-image {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
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
</style>
