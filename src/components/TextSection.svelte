<section class={clazz}>
  {#if background}
    <div class='background' style={`background-image: url(${background})`} />
  {/if}

  <div class='front'>
    <h1> {title} </h1>
    <p> {description} </p>
  </div>
</section>

<script>
  export let title, description, background
  export {clazz as class}
  let clazz = ''
</script>

<style>
  section {
    position: relative;

    display: flex;

    padding: 5em;

    font-size: 1.5em;
  }
  .full { height: 100vh; }
  :global(nav) + .full { height: calc(100vh - 74px); }
  .tac { text-align: center; }
  .tae { text-align: end; }
  .v-center { align-items: center; }
  .bottom   { align-items: end; }
  .h-center { justify-content: center; }
  .right    { justify-content: end; }
  .alt {
    background: var(--bg1);
    color: var(--fg1);
  }

  .max50 div { max-width: 50%; }
  .max60 div { max-width: 60%; }
  .max70 div { max-width: 70%; }
  .max80 div { max-width: 80%; }

  .background {
    position: absolute;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;

    background-size: cover;
    background-position: center;
  }
  .blur .background { filter: blur(var(--blur)); }

  h1 { font-family: var(--f-title); }
  p  {
    font-family: var(--f-description);
    white-space: preserve;
  }

  .front {
    z-index: 2;
  }
</style>
