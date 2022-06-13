<template>
  <div class="browse">
    <h1>Browse</h1>
    <!-- Display current deck name -->
    <h6 id="current-deck-header">{{ this.currentDeck }}</h6>
    <div></div>
  </div>
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

      return currentDeck;
    },
  },
};
</script>

<style>
.cards {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

#current-deck-header {
  font-weight: normal;
  font-style: italic;
}
</style>
