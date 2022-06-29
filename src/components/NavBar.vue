<template>
  <nav class="flex flex-col items-start gap-2 p-4">
    <template v-if="links != null">
      <router-link
        v-for="link in links"
        :to="link.href"
        class="translate-all-03s font-medium"
        :class="{ 'hover-transform-animation': translateLinkOnHover }"
      >
        {{ link.title }}
      </router-link>
    </template>
    <slot v-else></slot>
    <ul class="flex flex-col items-start gap-2">
      <li><button @click="applyTheme()">Default</button></li>
      <li v-for="theme in themes">
        <button @click="applyTheme(theme)" class="capitalize">
          {{ theme.substring(6) }}
        </button>
      </li>
    </ul>
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
  data() {
    return {
      themes: ["theme-coffee", "theme-neon"],
    };
  },
  methods: {
    applyTheme(theme) {
      console.debug("Change to theme: " + theme);

      const app = document.getElementById("app");

      for (const theme of this.themes) {
        app.classList.remove(theme);
      }

      if (theme != null) {
        app.classList.add(theme);
      }
    },
  },
};
</script>
