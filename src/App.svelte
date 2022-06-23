<script>
	
	import { tweened } from 'svelte/motion';
	import { fade } from 'svelte/transition';
	import display from "./components/display.svelte"
	let original = 5; // TYPE NUMBER OF SECONDS HERE
		let timer = tweened(original);

  	setInterval(() => {
    	if ($timer > 0) 
		{
			$timer--;
		
		}
		}, 1000);

	$: hours = Math.floor($timer / 3600);
	$: hourname = hours > 1 ? "hours" : "hour";
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
	<h1 in:fade={{duration:500}}>
		STRETCH!
	</h1>
	{:else}
	<h1>
		Stretch in 
		<span class="hours">{hours}</span>
		{hourname}
		<span class="mins">{minutes}</span>
		{minname} 
		<span class="secs">{seconds}</span>s!
	</h1>
	{/if}
	<progress id="countdown" value={$timer/original}></progress>
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

	background: none;
	border: 0;
}

#stretch:hover{
	-webkit-app-region: no-drag;
	background: white;
	border: 0;
}

#countdown{
	width: 100%;
	height: 10px;
}


#close {
	-webkit-app-region: no-drag;
	background: none;
	border: 0;
}
#close:hover {
	-webkit-app-region: no-drag;
	background: white;
}


</style>