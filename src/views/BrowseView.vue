<template>
  <h1>Browse</h1>
  <div id="browser-wrapper" class="component">
    <!-- Only show the navbar if the user has any decks -->
    <template v-if="hasDecks">
      <!-- Deck navigation bar -->
      <nav-bar>
        <router-link
          v-for="deck in this.$store.state.decks"
          class="translate-all-03s"
          :to="{ name: 'browse', params: { id: deck.id } }"
        >
          <h4>{{ deck.name }}</h4>
        </router-link>
      </nav-bar>
      <!-- Display current deck -->
      <div v-if="currentDeck != null" class="component deck-browser">
        <!-- Display flash card contents -->
        <flash-card v-if="currentCard != null" :card="currentCard"></flash-card>
        <h4
          v-else-if="
            currentDeck.cards == null || currentDeck.cards.length === 0
          "
        >
          The selected deck is currently empty. {{ currentDeck.name }}
        </h4>
        <h4 v-else>⚠️ Unknown Error.</h4>
      </div>
    </template>
    <div
      v-else
      style="
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      "
    >
      <h4>Oops... You don't have any decks yet 🤷</h4>
      <router-link
        to="/create"
        class="component translate-all-03s hover-transform-animation"
      >
        Create one here
      </router-link>
    </div>
  </div>
</template>

<script>
import FlashCard from "@/components/FlashCard.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "BrowseView",
  components: { FlashCard, NavBar },
  computed: {
    currentDeck() {
      const decks = this.$store.state.decks;
      let id = this.$route.params.id;

      // Return the deck requested by the route parameter, i.e., URL
      // or the first available deck if no specific deck was requested.
      if (id != null) {
        id = Number.parseInt(this.$route.params.id);
        return decks.find((deck) => deck.id === id);
      } else {
        // Get first available deck
        if (decks != null && decks.length > 0) {
          return decks[0];
        }
      }

      return null;
    },
    currentCard() {
      // TODO dont select automatically the first deck card...
      if (
        this.currentDeck != null &&
        this.currentDeck.cards != null &&
        this.currentDeck.cards.length > 0
      ) {
        return this.currentDeck.cards[0];
      }
      return null;
    },
    hasDecks() {
      console.log("sds");
      const test = document.getElementById("test");
      document.addEventListener("DOMContentLoaded", function () {
        renderMathInElement(test);
      });
      return (
        this.$store.state.decks != null && this.$store.state.decks.length > 0
      );
    },
    mounted() {
      console.log("sds");
      // const test = document.getElementById("test");
      // document.addEventListener("DOMContentLoaded", function () {
      //   renderMathInElement(test);
      // });
    },
  },
};
</script>

<style>
#browser-wrapper {
  display: flex;
  flex: 1;
  align-self: stretch;
  padding: 0;
  margin: 0;
}

#deck-nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.deck-browser {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5em;
}

.card {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/* Remove double margin */
.component.card {
  margin: 0;
}

textarea {
  color: inherit;
  flex: 1;
  align-self: stretch;
  background: transparent;
  border: none;
  outline: none;
  resize: none;
  margin-top: 0.5em;
}
</style>
