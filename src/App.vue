<template>
  <nav-bar :links="navLinks" :translateLinkOnHover="true"></nav-bar>
  <div
    class="bg-secondary flex flex-1 flex-col items-start gap-2 m-2 p-4 rounded-lg"
  >
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: { NavBar },
  data() {
    return {
      navLinks: [
        { title: "Home", href: "/" },
        { title: "Create", href: "/create" },
        { title: "Browse", href: "/browse" },
        { title: "Study", href: "/study" },
        { title: "About", href: "/about" },
      ],
    };
  },
};
</script>

<style>
:root,
html,
body,
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none;
  font-weight: bold;
  color: var(--font-color);
}

a.router-link-exact-active {
  color: var(--primary-color);
}

a:hover {
  color: var(--primary-color);
}

ol,
ul {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}

.translate-all-03s {
  transition: all 0.3s ease 0s;
}

.hover-transform-animation:hover {
  transform: translateY(-0.25em);
}

math-field {
  outline: none;
}
</style>
