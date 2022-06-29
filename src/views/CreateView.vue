<template>
  <main-content title="Create">
    <div class="link-selection">
      <router-link
        v-for="link in links"
        class="bg-tertiary text-center flex-1 m-2 p-4 rounded-lg translate-all-03s hover-transform-animation"
        :to="link.href"
      >
        <h2>{{ link.title }}</h2>
      </router-link>
    </div>
  </main-content>
</template>

<script>
import MainContent from "@/components/MainContent.vue";

export default {
  name: "CreateView",
  components: { MainContent },
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
