import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/main.less'
import Home from './pages/Home.vue'
import Spotify from './pages/Spotify.vue'
import SpotifyDetail from './pages/SpotifyDetail.vue'
import BlogOverView from './pages/BlogOverView.vue'
import BlogDetail from './pages/BlogDetail.vue'
import Author from './pages/Author.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/spotify', component: Spotify, meta: { pageClass: 'spotify'} },
    { path: '/spotify/:spotifyPlaylistId', component: SpotifyDetail, name: "spotify", meta: { pageClass: 'spotify'} },
    { path: '/blog', component: BlogOverView },
    { path: '/blog/:title', component: BlogDetail, name: "blogDetail" },
    { path: '/author/:name', component: Author, name: "author", meta: { pageClass: 'author-page'}  },
  ];
  
const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app');
