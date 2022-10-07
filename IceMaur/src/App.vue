<script setup lang="ts">
import BrandLink from './components/links/BrandLink.vue';
import QuoteCards from './components/Cards/QuoteCards.vue';
</script>

<template>
  <header>
    <img class="header-logo" src="./assets/Images/IceMaur.png" />
  </header>
  <div id="icemaur-body">
    <h1>The IceMaur</h1>
    <P>Welcome to the most random place!</P>
    <suspense>
      <QuoteCards></QuoteCards>
    </suspense>
  </div> 
  <footer>
    <h2>Links</h2>
    <BrandLink href="https://github.com/IceMaur/IceMaur" name="GitHub"></BrandLink>
    <BrandLink href="https://stackoverflow.com/users/11383638/icemaur" name="Stack Overflow"></BrandLink>
    <BrandLink href="https://open.spotify.com/playlist/1AFisGmwc7zEHbP3MZiyl1" name="Spotify"></BrandLink>
  </footer>
</template>

<style scoped lang="less">
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

footer {
  background: linear-gradient(125deg, var(--color-secondary) 70%, var(--color-main) 30%);
  padding: 1.5rem 2rem 4rem;
}
</style>
