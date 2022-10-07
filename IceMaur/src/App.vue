<script setup lang="ts">
import { ref } from 'vue';
import BrandLink from './components/links/BrandLink.vue';
import Home from './pages/Home.vue';
import Spotify from './pages/Spotify.vue';
import BlogOverview from './pages/BlogOverview.vue';

const routes = {
  '/': Home,
  '/spotify': Spotify,
  '/blog': BlogOverview
}

function getCurrentView() {
  return routes[window.location.hash.slice(1) || '/'];
}

const currentView = ref(getCurrentView());

function getIsSpotify():boolean {
  return getCurrentView() === Spotify;
}

const isSpotify = ref(getIsSpotify());

window.addEventListener('hashchange', () => {
  currentView.value = getCurrentView();
  isSpotify.value = getIsSpotify();
});
</script>

<template>
  <header :class="{ spotify: isSpotify }">
    <a href="#/">
      <img class="header-logo" src="./assets/Images/IceMaur.png" />
    </a>
    <a class="header-link" href="#/blog">Blog</a>
    <a class="header-link" href="#/spotify">Spotify</a>
  </header>
  <div id="icemaur-body">
    <component :is="currentView" />
  </div> 
  <footer :class="{ spotify: isSpotify }">
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
}

.header { 
  &-logo {
    height: 4rem;
  }

  &-link {
    margin-left: 1rem;
    margin-right: 1rem;

    &:nth-child(2) {
      margin-left: auto;
    }

    &:last-of-type {
      margin-right: 5rem;
    }
    
    color: var(--color-secondary);
    text-decoration: none;
    font-weight: bold;
  }
}

footer {
  background: linear-gradient(125deg, var(--color-secondary) 70%, var(--color-main) 30%);
  padding: 1.5rem 2rem 4rem;

  &.spotify {
    background: linear-gradient(125deg, var(--color-spotify-secondary) 70%, var(--color-spotify-primary) 30%);
  }
}
</style>
