<template>
  <router-link
    :to="href"
    class="bg-tertiary text-center flex-1 p-8 rounded-lg translate-all-03s hover-transform-animation text-2xl"
  >
    <h2 class="font-medium">{{ title }}</h2>
  </router-link>
</template>

<script>
export default {
  name: "ButtonLink",
  components: {},
  props: {
    title: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
  },
};
</script>
