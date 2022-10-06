<script setup lang="ts">
import BrandLink from './components/links/BrandLink.vue';
import QouteCard from './components/Cards/QouteCard.vue';
import Author from './objects/Author';

const iceMaurAuthor : Author = {
  name: "IceMaur",
  imageUrl: "/src/assets/Images/IceMaur.png"
}
</script>

<template>
  <header>
    <img class="header-logo" src="./assets/Images/IceMaur.png" />
  </header>
  <div id="icemaur-body">
    <h1>The IceMaur</h1>
    <P>Welcome to the most random place!</P>
    <h2>Quote cards</h2>
    <div class="quote-cards">
      <QouteCard :author="iceMaurAuthor">Better an unique name than a good name.</QouteCard>
      <QouteCard>Sustainability can also be beautiful.</QouteCard>
      <QouteCard :author="iceMaurAuthor">I have never seen a happy Dutchman with a German flag before.</QouteCard>
      <QouteCard>What the flip? Why on earth do you want to store a boolean as a string.</QouteCard>
      <QouteCard>I had my hairs in my head.</QouteCard>
    </div>
    <h2>Links</h2>
    <BrandLink href="https://github.com/IceMaur/IceMaur" name="GitHub"></BrandLink>
    <BrandLink href="https://stackoverflow.com/users/11383638/icemaur" name="Stack Overflow"></BrandLink>
    <BrandLink href="https://open.spotify.com/playlist/1AFisGmwc7zEHbP3MZiyl1" name="Spotify"></BrandLink>
  </div> 
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

.quote-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
