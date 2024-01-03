<script>
    let count = 0;

    let increment = () => count++;

    $: doubled = count * 2;
</script>

<button on:click={increment}>Clicked {count} {count === 1 ? 'time' : 'times'}</button>
<p> Double of {count} is {doubled}</p>