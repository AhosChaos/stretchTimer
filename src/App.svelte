<script>
	
	import { tweened } from 'svelte/motion';
	//import Typewriter from "svelte-typewriter";


	let original = 2 * 60; // TYPE NUMBER OF SECONDS HERE
		let timer = tweened(original)

  	setInterval(() => {
    	if ($timer > 0) $timer--;
  	}, 1000);

  	$: minutes = Math.floor($timer / 60);
  	$: minname = minutes > 1 ? "mins" : "min";
  	$: seconds = Math.floor($timer - minutes * 60)



	const stretched = () => { 
		$timer = original;
	}

	const close = () =>
	{
		window.api.close();
	}




</script>

<body>
	{#if $timer == 0 }
    <h1>
		STRETCH!
	</h1>
	{:else}
	<h1>
		Stretch in <span class="mins">{minutes}</span>{minname} 
		<span class="secs">{seconds}</span>s!
	</h1>
	{/if}

	<progress value={$timer/original}></progress>
	<hr>
	<button id="stretch" on:click={stretched}>Stretched</button>
	<button id="close" on:click={close}>Close</button>

	
</body>

<style>
body {
	-webkit-app-region: drag;
}
#stretch {
	-webkit-app-region: no-drag;
}
#close {
	-webkit-app-region: no-drag;
}

</style>