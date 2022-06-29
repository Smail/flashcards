<template>
  <main-content
    :title="`${this.$store.state.firstName} ${this.$store.state.lastName}`"
  >
    <button-link-group :links="quickSelectionButtons" />
  </main-content>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
import ButtonLinkGroup from "@/components/ButtonLinkGroup.vue";

export default {
  name: "HomeView",
  components: { MainContent, ButtonLinkGroup },
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
