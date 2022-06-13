import { createStore } from "vuex";

export default createStore({
  state: {
    firstName: "Max",
    lastName: "Mustermann",
    decks: [
      { id: 1, name: "Deck 1" },
      { id: 2, name: "Deck 2" },
      { id: 3, name: "Deck 3" },
    ],
    currentDeckId: 1,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
