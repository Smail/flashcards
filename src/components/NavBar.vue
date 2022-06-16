<template>
  <nav class="component">
    <router-link
      v-for="link in links"
      :to="link.href"
      class="translate-all-03s"
      :class="{ 'hover-tranform-animation': translateLinkOnHover }"
    >
      {{ link.title }}
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    links: {
      type: Array,
      required: true,
    },
    translateLinkOnHover: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
