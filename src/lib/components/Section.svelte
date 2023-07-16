<div class="section">
  <div class="container">
    <slot />
  </div>
</div>

<style>
  .section {
      padding: 4rem 0;
  }
  .container {
      max-width: 1080px;
      margin: 0 auto;
      padding: 0 4rem;
  }
  @media (max-width: 480) {
      .section {
          padding: 2rem 0;
      }
      .container {
          padding: 0 1rem;
      }
  }
</style>