<template>
  <h1 class="text-3xl font-medium capitalize mb-4">{{ title }}</h1>
  <slot></slot>
</template>

<script>
export default {
  name: "MainContent",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
