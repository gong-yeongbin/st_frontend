import App from './App.svelte';
import axios from 'axios';
axios.defaults.baseURL = 'http://13.124.229.234';
// axios.defaults.baseURL = 'http://localhost:3000';

const app = new App({
  target: document.body,
  props: {
    name: 'world'
  }
});

export default app;
