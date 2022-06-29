<template>
  <h1 class="text-3xl font-medium capitalize">{{ title }}</h1>
  <slot></slot>
</template>

<script>
export default {
  name: "MainContent",
  props: {
    title: {
      type: String,
      require: true,
    },
  },
};
</script>
