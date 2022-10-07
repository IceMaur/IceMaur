import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/main.less'
import Home from './pages/Home.vue'
import Spotify from './pages/Spotify.vue'
import BlogOverView from './pages/BlogOverView.vue'
import BlogDetail from './pages/BlogDetail.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/spotify', component: Spotify, name: "spotify", meta: { pageClass: 'spotify'} },
    { path: '/blog', component: BlogOverView },
    { path: '/blog/:title', component: BlogDetail, name: "blogDetail" },
  ]
  
const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app');
