<template>
  <h1>Study</h1>
  <h4>Select Deck</h4>
  <ul class="flex-column-start">
    <li v-for="deck in this.$store.state.decks">
      <router-link
        class="study-deck-link"
        :to="{ name: 'study-deck', params: { name: deck.name } }"
      >
        <h4>{{ deck.name }}</h4>
        <h6 class="due-header">Due: 6</h6>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "StudyView",
  components: {},
};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0;
  width: 100%;
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
