<script>
  export let depth = 0;
  export let value = "";
</script>

{#if depth > 1}
  <span>
    <svelte:self depth={depth - 1} {value} />
  </span>
{:else}
  <span>{value}</span>
{/if}
