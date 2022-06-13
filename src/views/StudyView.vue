<template>
  <h1>Study</h1>
  <div>
    <h2>Select Deck</h2>
    <ul>
      <li v-for="deck in decks">
        <h3>{{ deck.name }}</h3>
        <button>Study</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "StudyView",
  components: {},
};
</script>
