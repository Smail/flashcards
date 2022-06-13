<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style>
/* TODO GDPR - download font locally */
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

:root {
  /* https://developer.apple.com/design/human-interface-guidelines/foundations/color/#specifications */
  --apple-gray-6-dark: rgb(28, 28, 30);
  --apple-blue-dark: rgb(10, 132, 255);
  --apple-red-dark: rgb(255, 69, 58);
  --apple-pink-dark: rgb(255, 69, 58);
  --font-color: white;
}

body {
  margin: 0;
  padding: 0;
  min-width: 100vw;
  min-height: 100vh;
  color: var(--font-color);
  background-color: var(--apple-gray-6-dark);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-family: Poppins, Helvetica, Arial, sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: var(--apple-red-dark);
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
