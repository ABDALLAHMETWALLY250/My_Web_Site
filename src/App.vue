<template>
  <router-view />
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow-x: hidden;
}
@media screen and (max-width: 767px) {
  nav {
    padding: 0;
    a {
      padding: 0;
      &.router-link-exact-active {
        background-color: rgba($color: gray, $alpha: 0.5);
      }
    }
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  nav {
    padding: 0;
    a {
      padding: 0;
      &.router-link-exact-active {
        border-bottom: 2px solid white;
        padding: 0 0 10px 0;
      }
    }
  }
}
@media screen and (min-width: 1024px) {
  nav {
    padding: 0;
    a {
      padding: 0;
      &.router-link-exact-active {
        border-bottom: 3px solid white;
      }
    }
  }
}
</style>
