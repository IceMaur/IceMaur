<script setup>
import Link from './components/Link.vue';
</script>

<template>
  <header>
    <img class="header-logo" src="./assets/Images/IceMaur.png" />
  </header>
  <div id="icemaur-body">
    <Link href="https://github.com/IceMaur/IceMaur">IceMaur</Link>
  </div> 
</template>

<style scoped>
header {
  position: fixed;
  width: 100%;
  background: white;
  z-index: 1;
  padding: 0.25rem 2rem;
}

.header-logo {
  height: 4rem;
}
</style>
