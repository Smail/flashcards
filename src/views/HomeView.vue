<template>
  <div class="home">
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

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.statistic {
  background-color: var(--apple-gray-5-dark);
}
</style>
