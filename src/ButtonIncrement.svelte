<script>
    let count = 0;

    let increment = () => count++;
</script>

<button on:click={increment}>Clicked {count} {count === 1 ? 'time' : 'times'}</button>