// 3. Reactivity Fundamentals [<script setup>]
// 11. Router
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
