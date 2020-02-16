<script>
  export let value;
</script>

<style>
  input {
    display: block;
    width: 100%;
    font: inherit;
    border: none;
    border-bottom: 2px solid #ccc;
    border-radius: 3px 3px 0 0;
    background: white;
    padding: 0.15rem 0.25rem;
    transition: border-color 0.1s ease-out;
    text-align: center;
  }

  input:focus {
    border-color: #ae8e0c;
    outline: none;
  }

  .form-control {
    padding: 0.3rem 0;
    width: 100%;
  }
</style>

<div class="form-control">
  <input {value} on:input />
</div>
