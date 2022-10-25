<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import HeaderLink from './components/links/HeaderLink.vue';
import BrandLink from './components/links/BrandLink.vue';
import { useSpotifyStore } from './store/spotify.js'
import SpotifyIFrame from './components/iFrames/SpotifyIFrame.vue';
import { useSettingsStore } from './store/settings';

const route = ref(useRoute());
const headerLinks = ["Blog"];
const settingsStore = useSettingsStore();
const spotifyStore = useSpotifyStore();
</script>

<template>
  <header :class="[route?.meta?.pageClass, settingsStore.appearance]">
    <router-link to="/" class="header-logo">
      <img src="./assets/Images/IceMaur.png" />
    </router-link>
    <SpotifyIFrame v-if="spotifyStore?.playlistÌdForHeader" class="spotify-header-iframe" type="playlist" :id="spotifyStore.playlistÌdForHeader"></SpotifyIFrame>
    <SpotifyIFrame v-else-if="spotifyStore?.trackÌdForHeader" class="spotify-header-iframe" type="track" :id="spotifyStore.trackÌdForHeader"></SpotifyIFrame>
    <HeaderLink v-for="headerLink in headerLinks" :name="headerLink"></HeaderLink>
    <RouterLink to="/spotify"><i class="fa-brands fa-spotify"></i></RouterLink>
    <RouterLink to="/settings"><i class="fa-solid fa-gear"></i></RouterLink>
  </header>
  <div id="icemaur-body" :class="[route?.meta?.pageClass, settingsStore.appearance]">
    <router-view :key="route.path"></router-view>
  </div> 
  <SpotifyIFrame v-if="spotifyStore?.playlistÌdForBottom" class="spotify-bottom-iframe" type="playlist" :id="spotifyStore.playlistÌdForBottom"></SpotifyIFrame>
  <SpotifyIFrame v-else-if="spotifyStore?.trackÌdForBottom" class="spotify-bottom-iframe" type="track" :id="spotifyStore.trackÌdForBottom"></SpotifyIFrame>
  <footer :class="[route?.meta?.pageClass, settingsStore.appearance]">
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
  right: 0;
  padding: 0.25rem 1rem;
  background: linear-gradient(var(--color-main) 40%, var(--color-tertiary) 80%);
  z-index: 1;
  display: flex;
  align-items: center;


  .fa-spotify {
    color: var(--color-secondary);
  }

  &.dark {
    background: linear-gradient(var(--color-primary-dark) 40%, var(--color-secondary-dark) 80%);

    .fa-gear,
    .fa-spotify {
      color: var(--color-main);
    }
  }

  &.spotify {
    background: linear-gradient(25deg, var(--color-spotify-secondary) 20%, var(--color-spotify-primary) 90%);

    .fa-gear,
    .fa-spotify {
      color: var(--color-spotify-secondary);
    }
  }

  &.author-page {
    background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
                radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);

    .fa-gear,
    .fa-spotify {
      color: var(--color-main);
    }
  }

  @media (min-width: 768px) {
    padding: 0.25rem 2rem;
  }
}

.header-logo {
  margin-right: auto;

  & img {
    height: 4rem;
  }
}

#icemaur-body {
  background: linear-gradient(90deg,var(--color-primary) 75%, var(--color-secondary) 100%);
  
  &.dark {
    background: linear-gradient(90deg,var(--color-secondary) 75%, var(--color-primary) 100%);
  }

  &.spotify {
    background: linear-gradient(90deg,var(--color-secondary) 50%, var(--color-spotify-secondary) 90%);
  }

  &.author-page {
    background: var(--color-secondary);
  }
}

footer {
  background: linear-gradient(125deg, var(--color-secondary) 25%, var(--color-main) 100%);
  padding: 1.5rem 2rem 4rem;

  &.spotify {
    background: linear-gradient(125deg, var(--color-spotify-secondary) 70%, var(--color-spotify-primary) 100%);
  }

  &.author-page {
    background: linear-gradient(125deg, var(--color-tertiary) 80%, var(--color-main) 100%);
  }
}
</style>
