<template>
  <nav-bar :links="navLinks" :translateLinkOnHover="true"></nav-bar>
  <div class="flex flex-1 flex-col items-start gap-2 m-2 p-4 rounded-lg">
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
:root {
  /* https://developer.apple.com/design/human-interface-guidelines/foundations/color/#specifications */
  --apple-gray-4-dark: rgb(58, 58, 60);
  --apple-gray-5-dark: rgb(44, 44, 46);
  --apple-gray-6-dark: rgb(28, 28, 30);
  --apple-red-dark: rgb(255, 69, 58);
  --apple-orange-dark: rgb(255, 159, 10);
  --apple-green-dark: rgb(48, 209, 88);
  --apple-blue-dark: rgb(10, 132, 255);
  --apple-pink-dark: rgb(255, 55, 95);
}

@media (prefers-color-scheme: light) {
  :root {
    --font-color: black;

    --primary-color: var(--apple-blue-dark);
    --secondary-color: var(--apple-green-dark);
    --background-color: white;
  }

  .component {
    background-color: rgba(0, 0, 0, 0.15);
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --font-color: white;

    --primary-color: var(--apple-pink-dark);
    --secondary-color: var(--apple-orange-dark);
    --background-color: var(--apple-gray-6-dark);
  }

  .component {
    background-color: rgba(255, 255, 255, 0.07);
  }
}

::selection {
  background-color: var(--primary-color);
}

body {
  margin: 0;
  padding: 0;
  min-width: 100vw;
  min-height: 100vh;
  color: var(--font-color);
  background-color: var(--background-color);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav.component {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5em;
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

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

ol,
ul {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}

.small-italic-header {
  font-weight: normal;
  font-style: italic;
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
