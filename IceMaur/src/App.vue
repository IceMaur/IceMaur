<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import HeaderLink from './components/links/HeaderLink.vue';
import BrandLink from './components/links/BrandLink.vue';

const route = ref(useRoute());
const headerLinks = ["Blog", "Spotify"]
</script>

<template>
  <header :class="route?.meta?.pageClass">
    <router-link to="/">
      <img class="header-logo" src="./assets/Images/IceMaur.png" />
    </router-link>
    <HeaderLink v-for="headerLink in headerLinks" :name="headerLink"></HeaderLink>
  </header>
  <div id="icemaur-body" :class="route?.meta?.pageClass">
    <router-view :key="route.path"></router-view>
  </div> 
  <footer :class="route?.meta?.pageClass">
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
  display: flex;
  align-items: center;

  &.spotify {
    background: linear-gradient(125deg, var(--color-main) 70%, var(--color-spotify-primary) 30%);
  }

  &.author-page {
    background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
                radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);
  }
}

.header-logo {
  height: 4rem;
}

#icemaur-body {
  background-color: var(--color-secondary);
}

footer {
  background: linear-gradient(125deg, var(--color-secondary) 70%, var(--color-main) 30%);
  padding: 1.5rem 2rem 4rem;

  &.spotify {
    background: linear-gradient(125deg, var(--color-spotify-secondary) 70%, var(--color-spotify-primary) 30%);
  }

  &.author-page {
    background: linear-gradient(125deg, var(--color-tertiary) 70%, var(--color-main) 30%);
  }
}
</style>
