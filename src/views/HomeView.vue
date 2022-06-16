<template>
  <h1>{{ this.$store.state.firstName }} {{ this.$store.state.lastName }}</h1>
  <ul id="quick-selection">
    <li v-for="item in quickSelectionButtons" class="quick-select-btn">
      <router-link
        style="flex: 1"
        class="component translate-all-03s hover-transform-animation"
        :to="item.href"
      >
        <h2>{{ item.title }}</h2>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      quickSelectionButtons: [
        { title: "Study", href: "/study" },
        { title: "Browse", href: "/browse" },
        { title: "Add", href: "" },
        { title: "Edit", href: "" },
        { title: "Statistics", href: "" },
      ],
    };
  },
};
</script>

<style>
#quick-selection {
  align-self: stretch;
  justify-content: stretch;
  align-items: stretch;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.quick-select-btn {
  display: flex;
  justify-content: center;
  align-items: stretch;
}
</style>
