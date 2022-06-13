<template>
  <h1>Browse</h1>
  <!-- Display current deck name -->
  <h6 class="small-italic-header">{{ this.currentDeck }}</h6>
  <div></div>
</template>

<script>
export default {
  name: "BrowseView",
  components: {},
  computed: {
    currentDeck() {
      const currentDeckId = this.$store.state.currentDeckId;
      const currentDeck = this.$store.state.decks.find(
        (deck) => deck.id === currentDeckId
      );

      return currentDeck != null ? currentDeck.name : "No deck selected";
    },
  },
};
</script>
