<script setup>
import Link from './components/Link.vue';
</script>

<template>
  <header>
    <img class="header-logo" src="./assets/Images/IceMaur.png" />
  </header>
  <div id="icemaur-body">
  <div>
    <i class="fa-brands fa-github"></i>&nbsp;
    <Link href="https://github.com/IceMaur/IceMaur">GitHub</Link>
  </div>
  <div>
    <i class="fa-brands fa-spotify"></i>&nbsp;
    <Link href="https://open.spotify.com/playlist/1AFisGmwc7zEHbP3MZiyl1">Spotify</Link>
  </div>
  </div> 
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.25rem 2rem;
  border: 1px var(--color-secondary) solid;
  background: linear-gradient(125deg, var(--color-main) 70%, var(--color-tertiary) 30%);
  z-index: 1;
}

.header-logo {
  height: 4rem;
}
</style>
