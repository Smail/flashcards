<template>
  <h1>Create</h1>
  <div class="link-selection">
    <router-link
      v-for="link in links"
      style="flex: 1"
      class="component translate-all-03s hover-tranform-animation"
      :to="link.href"
    >
      <h2>{{ link.title }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CreateView",
  components: {},
  data() {
    return {
      links: [
        { title: "New Flashcard", href: "/create/flashcard" },
        { title: "New Deck", href: "/create/deck" },
      ],
    };
  },
};
</script>

<style>
.link-selection {
  align-self: stretch;
  justify-content: stretch;
  align-items: stretch;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>
