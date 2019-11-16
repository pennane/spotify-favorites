<template>
  <div class="track item">
    <span class="position">{{position}}</span>
    <div class="text">
      <img
        class="cover-image"
        :src="imageUrl"
        :alt="'Cover for '+ artistName"
        width="48"
        height="48"
      />
      <span class="name">{{artistName}}</span>
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
    artistName: {
      type: String,
      required: true
    }
  }
};
</script>
<style scoped>
.item:nth-of-type(even) {
  background-color: #f3f3f3;
}

.item {
  display: flex;
  padding: 0.5em 0.5em;
  box-shadow: 0 1px 3px rgb(0, 0, 0, 0.15);
}

.position {
  color: #666;
  margin-right: calc(0.2em + 0.5vw);
  margin-left: calc(0.5vw);
  flex-basis: 8%;
}

.cover-image {
  float: right;
  margin: 0;
  border: 1px groove black;
  width: calc(0.6em + 3.6vw);
  height: calc(0.6em + 3.6vw);
  object-fit: cover;
  max-height: 64px;
  max-width: 64px;
}

.name {
  float: left;
  white-space: nowrap;
  width: 17vw;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
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

.text {
    flex: 1 1 auto;
}

span,
p {
  font-weight: 400;
  font-size: calc(0.6em + 0.43vw);
}

@media screen and (max-width: 700px) {
  .cover-image {
    display: none;
  }
}
</style>