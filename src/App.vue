<template>
  <nav class="component">
    <router-link
      v-for="nav in navLinks"
      :to="nav.href"
      class="translate-all-03s hover-tranform-animation"
      >{{ nav.title }}
    </router-link>
  </nav>
  <div id="content" class="component flex-column-start">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
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
/* TODO GDPR - download font locally */
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

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
  --font-color: white;

  --primary-color: var(--apple-pink-dark);
  --secondary-color: var(--apple-orange-dark);
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
  background-color: var(--apple-gray-6-dark);
}

.component {
  margin: 0.5em;
  padding: 1em;
  border-radius: 0.5em;
  background-color: rgba(255, 255, 255, 0.07);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-family: Poppins, Helvetica, Arial, sans-serif;
  text-align: center;
  display: flex;
  flex-direction: row;

  height: 100vh;
}

/* Use full width on first component, that is not nav, i.e., make nav a slim component. */
#content {
  flex: 1;
  display: flex;
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

.flex-column-start {
  display: flex;
  gap: 0.5em;
  flex-direction: column;
  align-items: flex-start;
}

.small-italic-header {
  font-weight: normal;
  font-style: italic;
}

.translate-all-03s {
  transition: all 0.3s ease 0s;
}

.hover-tranform-animation:hover {
  transform: translateY(-0.25em);
}

math-field {
  outline: none;
}
</style>
