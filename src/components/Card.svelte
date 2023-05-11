<script>
    export let text = 'some ref buttn'
    const handleClick = () => {
        console.log('clicked!')
    }

</script>



<div>
    <button on:click={handleClick}> {text} </button>
</div>