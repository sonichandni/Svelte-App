import App from './App.svelte';
import Price from './Price.svelte';

// var app = new App({
// 	target: document.body
// });

// export default app;

export const app1 = new App({ target: document.body });   
export const app2 = new Price({ target: document.body });