<template>
  <div class="track item">
    <span class="position">{{position}}</span>
    <div class="rightside">
      <div class="text">
        <span class="name">{{trackName}}</span>
        <span class="track-artist">{{artists[0].name}}</span>
      </div>
      <img class="cover-image" :src="imageUrl" :alt="'Cover of '+ trackName" width="48" height="48" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
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
.text {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}

.item {
  display: flex;
  padding: 0.5em 0.5em;
  box-shadow: 0 1px 3px rgb(0, 0, 0, 0.15);
  height: 77px;
  box-sizing: border-box;
  background-color: var(--bg-color);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.item:nth-of-type(even) {
  background-color: #f3f3f3;
}

.position {
  color: #666;
  margin-right: calc(0.2em + 0.5vw);
  margin-left: calc(0.5vw);
  flex-basis: 8%;
}

.cover-image {
  margin: 0;
  border: 1px groove black;
  width: calc(0.6em + 3.6vw);
  height: calc(0.6em + 3.6vw);
  object-fit: cover;
  max-height: 64px;
  max-width: 64px;
}

span,
p {
  font-weight: 400;
  font-size: calc(0.6em + 0.43vw);
}

.track-artist {
  float: left;
  color: #585858;
  white-space: nowrap;
  width: 17vw;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}

.rightside {
  flex: 1 1 auto;
  display: flex;
}

@media screen and (max-width: 700px) {
  .cover-image {
    display: none;
  }
}
</style>
