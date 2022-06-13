<template>
  <div class="home component">
    <h1>{{ this.$store.state.firstName }} {{ this.$store.state.lastName }}</h1>
    <div class="statistic"></div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>
.home {
  background-color: var(--apple-gray-5-dark);
  display: flex;
  flex-direction: column;
}

.statistic {
  background-color: var(--apple-gray-5-dark);
}

h1 {
  margin: 0;
}
</style>
