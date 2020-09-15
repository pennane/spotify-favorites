<template>
  <div :class="'artist item '+ positionClass"  :title='artistName'>
    <div class="position">
      <span>{{ position }}</span>
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
  },
  computed: {
    positionClass: function() {
      if (this.position <= 3) {
        return "topThree";
      } else if (this.position <= 10) {
        return "topTen";
      } else {
        return "";
      }
    }
  }
};
</script>
<style scoped>
.artist {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: flex-end;
}

.art {
  box-sizing: border-box;
  padding: 0.2em;
  width: 90px;
  height: 90px;
}

.cover-image {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  width: 100%;
  height: 100%;
  display: block;
}

.position {
  color: #666;
  text-align: center;
}
</style>
