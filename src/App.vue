<template>
  <nav class="component">
    <router-link to="/">Home</router-link>
    <router-link to="/study">Study</router-link>
    <router-link to="/decks">Decks</router-link>
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style>
/* TODO GDPR - download font locally */
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

:root {
  /* https://developer.apple.com/design/human-interface-guidelines/foundations/color/#specifications */
  --apple-gray-5-dark: rgb(44, 44, 46);
  --apple-gray-6-dark: rgb(28, 28, 30);
  --apple-red-dark: rgb(255, 69, 58);
  --apple-green-dark: rgb(48, 209, 88);
  --apple-blue-dark: rgb(10, 132, 255);
  --apple-pink-dark: rgb(255, 55, 95);
  --font-color: white;

  --primary-color: var(--apple-pink-dark);
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
  padding: 1.5em 2em;
  border-radius: 0.5em;
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

nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--apple-gray-5-dark);
  gap: 0.5em;
}

nav a {
  font-weight: bold;
  color: var(--font-color);
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: var(--primary-color);
}
</style>
