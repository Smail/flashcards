<template>
  <main-content title="Browse">
    <div
      id="browser-wrapper"
      class="bg-tertiary rounded-lg flex flex-1 self-stretch"
    >
      <!-- Only show the navbar if the user has any decks -->
      <template v-if="hasDecks">
        <!-- Deck navigation bar -->
        <nav-bar class="m-0 border-r">
          <router-link
            v-for="deck in $store.state.decks"
            class="translate-all-03s font-medium"
            :to="{ name: 'browse', params: { deckId: deck.id } }"
          >
            <h4>{{ deck.name }}</h4>
          </router-link>
        </nav-bar>
        <template v-if="currentDeck != null">
          <!-- Card navigation bar -->
          <nav-bar class="m-0">
            <router-link
              v-for="card in this.currentDeck.cards"
              class="translate-all-03s font-medium"
              :to="{
                name: 'browse',
                params: { deckId: currentDeck.id, cardId: card.id },
              }"
            >
              <h4>{{ card.name }}</h4>
            </router-link>
          </nav-bar>
          <!-- Display current flash card sides -->
          <div class="flex flex-col items-start gap-2 flex-1 m-2 rounded-lg">
            <flash-card
              class="bg-tertiary"
              v-if="currentCard != null"
              :card="currentCard"
            ></flash-card>
            <!-- Display warnings/errors -->
            <!-- Error 1 -->
            <h4
              class="p-4"
              v-else-if="
                currentDeck.cards == null || currentDeck.cards.length === 0
              "
            >
              The selected deck is currently empty. {{ currentDeck.name }}
            </h4>
            <!-- Error 2 -->
            <h4 class="p-4" v-else>⚠️ Unknown Error.</h4>
          </div>
        </template>
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
          class="m-2 p-4 rounded-lg translate-all-03s hover-transform-animation"
        >
          Create one here
        </router-link>
      </div>
    </div>
  </main-content>
</template>

<script>
import FlashCard from "@/components/FlashCard.vue";
import NavBar from "@/components/NavBar.vue";
import MainContent from "@/components/MainContent.vue";

export default {
  name: "BrowseView",
  components: { FlashCard, NavBar, MainContent },
  computed: {
    currentDeck() {
      const decks = this.$store.state.decks;

      console.log();

      // Return the deck requested by the route parameter, i.e., URL
      // or the first available deck if no specific deck was requested.
      if (this.$route.params.deckId != null) {
        const deckId = Number.parseInt(this.$route.params.deckId);

        return decks.find((deck) => deck.id === deckId);
      } else {
        // Get first available deck
        if (decks != null && decks.length > 0) {
          return decks[0];
        }
      }

      console.debug("Current deck is null");
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
      const test = document.getElementById("test");
      document.addEventListener("DOMContentLoaded", function () {
        renderMathInElement(test);
      });

      return (
        this.$store.state.decks != null && this.$store.state.decks.length > 0
      );
    },
    mounted() {
      // const test = document.getElementById("test");
      // document.addEventListener("DOMContentLoaded", function () {
      //   renderMathInElement(test);
      // });
    },
  },
};
</script>

<style>
#deck-nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
