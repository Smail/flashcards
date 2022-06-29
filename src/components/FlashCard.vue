<template v-if="card != null && card.sides != null">
  <div v-for="(side, index) in card.sides" class="self-stretch flex-1 flex flex-col items-start m-2 p-4 rounded-lg">
    <h4>{{ sides[index].name }}</h4>
    <!-- TODO add :key -->
    <textarea
      v-model="sides[index].content"
      :title="`Content of side '${sides[index].name}' of card '${card.name}'`"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "FlashCard",
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  methods: {
    updateServer() {
      console.log("Update card on server");
      this.$emit("UpdateCard");
    },
  },
  watch: {
    content(newValue, oldValue) {
      if (newValue === oldValue) return;
      console.log("aaaaaaaaaaaaaaaaa");
    },
  },
  data() {
    return {
      sides: this.card.sides,
    };
  },
};
</script>
