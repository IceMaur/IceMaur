import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/main.less'
import Home from './pages/Home.vue'
import Spotify from './pages/Spotify.vue'
import SpotifyPlaylistDetail from './pages/SpotifyPlaylistDetail.vue'
import SpotifyTrackDetail from './pages/SpotifyTrackDetail.vue'
import BlogOverView from './pages/BlogOverView.vue'
import BlogDetail from './pages/BlogDetail.vue'
import Author from './pages/Author.vue'
import Settings from './pages/Settings.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/spotify', component: Spotify, meta: { pageClass: 'spotify'} },
    { path: '/spotify/playlist/:id', component: SpotifyPlaylistDetail, name: "spotifyPlaylistDetail", meta: { pageClass: 'spotify'} },
    { path: '/spotify/track/:id', component: SpotifyTrackDetail, name: "spotifyTrackDetail", meta: { pageClass: 'spotify'} },
    { path: '/blog', component: BlogOverView },
    { path: '/blog/:title', component: BlogDetail, name: "blogDetail" },
    { path: '/author/:name', component: Author, name: "author", meta: { pageClass: 'author-page'}  },
    { path: '/settings', component: Settings }
  ];
  
const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app');
