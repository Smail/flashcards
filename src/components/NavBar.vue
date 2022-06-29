<template>
  <nav class="m-2 p-4 rounded-lg">
    <template v-if="links != null">
      <router-link
        v-for="link in links"
        :to="link.href"
        class="translate-all-03s"
        :class="{ 'hover-transform-animation': translateLinkOnHover }"
      >
        {{ link.title }}
      </router-link>
    </template>
    <slot v-else></slot>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    links: {
      type: Array,
    },
    translateLinkOnHover: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
