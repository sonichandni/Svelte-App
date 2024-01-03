<script>
    let count = 0;

    let increment = () => count++;

    $: doubled = count * 2;
    
    $: if (count >= 10) {
		alert('count is dangerously high!');
		count = 0;
	}


</script>

<button on:click={increment}>Clicked {count} {count === 1 ? 'time' : 'times'}</button>
<p> Double of {count} is {doubled}</p>