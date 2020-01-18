<template>
  <div class="track item">
    <span class="position">{{position}}</span>
    <div class="rightside">
      <div class="text">
        <span class="name">{{artistName}}</span>
      </div>
      <img
        class="cover-image"
        :src="imageUrl"
        :alt="'Cover for '+ artistName"
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
.text {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}

.item {
  display: flex;
  padding: 0.5em 0.5em;
  height: 77px;
  box-sizing: border-box;
      min-height: 63px;
}

.name {
  max-width: 14vw;
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
  margin-left: 0.5em;
}

.rightside {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;
}

@media screen and (max-width: 700px) {
  .cover-image {
    display: none;
  }
    .name {
    min-width: 20vw;
  }
}
</style>