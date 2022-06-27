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
            name: "Card Name 1",
            sides: [
              {
                name: "Front",
                content: "This is the front side of a flash card 1",
              },
              {
                name: "Back",
                content: "This is the back side of a flash card 1",
              },
            ],
          },
          {
            id: 2,
            name: "Card name 2",
            sides: [
              {
                name: "Front",
                content: "This is the front side of a flash card 2",
              },
              {
                name: "Back",
                content: "This is the back side of a flash card 2",
              },
              {
                name: "Side 3",
                content: "This is the back side of a flash card 2",
              },
              {
                name: "Side 4",
                content: "This is the back side of a flash card 2",
              },
            ],
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
