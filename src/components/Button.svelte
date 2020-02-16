<script>
  export let mode = "";
  export let disabled = false;
</script>

<style>
  button {
    font: inherit;
    border: 1px solid #efc418;
    background: #efc418;
    padding: 0.5rem 1rem;
    color: white;
    border-radius: 5px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.26);
    cursor: pointer;
    text-decoration: none;
  }

  button:focus {
    outline: none;
  }

  button:hover,
  button:active {
    background: #ae8e0c;
    border-color: #ae8e0c;
    box-shadow: 1px 1px 8px rgba(77, 51, 51, 0.26);
  }

  button:disabled,
  button:disabled:hover,
  button:disabled:active {
    background: #ccc;
    border-color: #ccc;
    color: #959595;
    box-shadow: none;
    cursor: not-allowed;
  }

  .outline {
    background: transparent;
    color: #efc418;
    box-shadow: none;
  }

  .outline:hover,
  .outline:active {
    background: #f9e9a7;
    box-shadow: none;
  }

  .outline:disabled,
  .outline:disabled:hover,
  .outline:disabled:active {
    background: transparent;
    color: #ccc;
  }
</style>

<button class={mode} type="button" on:click {disabled}>
  <slot />
</button>
