<style>
  .layout {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-width: 300px;
  }

  main {
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: auto;
  }
</style>

<div class="layout">
  <slot name="header" />
  <main>
    <slot />
  </main>
  <slot name="footer" />
</div>
