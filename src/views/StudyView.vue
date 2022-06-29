<template>
  <main-content title="Study">
    <h4>Select Deck</h4>
    <ul class="flex flex-col items-start gap-2">
      <li v-for="deck in this.$store.state.decks">
        <router-link
          class="study-deck-link translate-all-03s"
          :to="{ name: 'study-deck', params: { name: deck.name } }"
        >
          <h4>{{ deck.name }}</h4>
          <h6 class="due-header">Due: 6</h6>
        </router-link>
      </li>
    </ul>
  </main-content>
</template>

<script>
import MainContent from "@/components/MainContent.vue";

export default {
  name: "StudyView",
  components: { MainContent },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-self: stretch;
  padding: 0;
  gap: 0.5em;
}

li {
  display: flex;
  gap: 1em;
  flex: 1;
  font-size: larger;
  border-radius: 0.5em;
  background-color: rgba(255, 255, 255, 0.1);
}

li span {
  padding: 0.5em;
  border-radius: 0.5em;
  background-color: rgba(255, 255, 255, 0.1);
}

.study-deck-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

a.study-deck-link {
  display: flex;
  padding: 0.5em;
  flex: 1;
}

a.study-deck-link:hover {
  color: var(--primary-color);
}

.due-header {
  color: var(--apple-green-dark);
}
</style>
