import App from './App.svelte';
if(require('electron-squirrel-startup')) return;


const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;