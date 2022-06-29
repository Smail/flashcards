<template>
  <main-content title="Create">
    <button-link-group :links="links" />
  </main-content>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
import ButtonLinkGroup from "@/components/ButtonLinkGroup.vue";

export default {
  name: "CreateView",
  components: { MainContent, ButtonLinkGroup },
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
