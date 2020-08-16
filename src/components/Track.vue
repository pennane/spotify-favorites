<template>
  <div class="track item">
    <div class="position">
      <span>{{ position }}</span>
    </div>
    <div class="middle">
      <span class="name">{{ trackName }}</span>
      <span class="artist">{{ artists[0].name }}</span>
    </div>
    <div class="art">
      <img
        class="cover-image"
        :src="imageUrl"
        :alt="'Cover of ' + trackName"
        width="48"
        height="48"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Track",
  props: {
    position: {
      type: Number,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    trackName: {
      type: String,
      required: true
    },
    artists: {
      type: Array,
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
  padding-bottom: 0.4em;
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
}

.artist {
  color: #585858;
  display: block;
}

.position {
  color: #666;
  margin-left: 0.5vw;
  margin-right: 0.3em;
  flex-basis: 8%;
  padding-left: 0.5em;
  padding-right: 0.1em;
  padding-top: 0.3em;
}
</style>
