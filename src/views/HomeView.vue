<template>
  <h1>{{ this.$store.state.firstName }} {{ this.$store.state.lastName }}</h1>
  <div class="statistic"></div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style>
.statistic {
  background-color: var(--apple-gray-5-dark);
}
</style>
