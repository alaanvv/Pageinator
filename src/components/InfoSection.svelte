<section class={clazz}>
  {#if background}
    <div class='background' style={`background-image: url(${background})`} />
  {/if}

  <div class='front'>
    <h1> {title} </h1>
    <p> {description} </p>
    {#if button_text && button_action}
      <button on:click={button_action}> {button_text} </button>
    {/if}
  </div>
</section>

<script>
  export let title, description, background, button_text, button_action
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

  button {
    margin-top: 1.5em;
    border: 0;
    padding: 0.7em 1em;
    border-radius: var(--br-button);

    background: var(--bg0-button);
    box-shadow: var(--sh-button);
    cursor: pointer;

    font-family: var(--f-button);
    color: var(--fg0-button);
    font-size: 1.1em;
  }
  .alt button {
    background: var(--bg1-button);
    color: var(--bg1-button);
  }

  .front {
    z-index: 2;
  }

  @media (max-width: 800px) {
    .max50 div { max-width: 100%; }
    .max60 div { max-width: 100%; }
    .max70 div { max-width: 100%; }
    .max80 div { max-width: 100%; }

    section { padding: 3em; }
  }

  @media (max-width: 600px) {
    section { padding: 1em; }
  }

  @media (max-width: 400px) {
    section { font-size: 1.3em; }
  }
</style>
