<script>
    import { fade } from 'svelte/transition';
    let blink = true;

    setInterval(() => {
    	$blink =  !$blink;
	}, 1000);
	

</script>
<div id="display">
{#if $blink}
<h1 in:fade={{duration:500}} out:fade={{duration:500}}>
    STRETCH!
</h1>
{:else}
<h1 in:fade={{duration:500}} out:fade={{duration:500}}>
    STRETCH!
</h1>
{/if}
</div>
