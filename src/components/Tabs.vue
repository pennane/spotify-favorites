<template>
  <div class="tabs">
    <div class="tabs-header">
      <div
        v-for="(tab, index) in tabs"
        :key="tab.title"
        @click="selectTab(index)"
        :class="{ 'tab-selected': index == selectedIndex }"
      >
        {{ tab.title }}
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedIndex: 0, // the index of the selected tab,
      tabs: [] // all of the tabs
    };
  },
  created() {
    this.tabs = this.$children;
  },
  mounted() {
    this.selectTab(0);
  },
  methods: {
    selectTab(i) {
      this.selectedIndex = i;

      // loop over all the tabs
      this.tabs.forEach((tab, index) => {
        tab.isActive = index === i;
      });
    }
  }
};
</script>

<style>
.tabs-header {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.tabs-header > div {
  padding: 15px 30px;
  margin: 0;
  display: inline-block;
  margin-right: 5px;
  cursor: pointer;
  font-weight: 300;
  width: 105px;
  text-align: center;
}

.tabs-header > .tab-selected {
  font-weight: bold;
}

.tab {
  display: inline-block;
  color: black;
  width: 100%;
}

@media screen and (max-width: 650px) {
  .tabs-header {
    margin: 0;
  }
  .tabs-header > div {
    padding: 15px 10px;
  }
}
</style>
