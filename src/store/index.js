import { createStore } from "vuex";

export default createStore({
  state: {
    firstName: "Max",
    lastName: "Mustermann",
    decks: [
      {
        id: 1,
        name: "Deck 1",
        cards: [
          {
            id: 1,
            front: "This is the front page of a flash card 1",
            back: "This is the back page of a flash card 1",
          },
          {
            id: 2,
            front: "This is the front page of a flash card 2",
            back: "This is the back page of a flash card 2",
          },
        ],
      },
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
