<section class='faq {clazz}'>
  <h2> {title} </h2>
  <ul>
    {#each faqs as faq}
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <li tabindex='0'>
        <h3> {faq.question} </h3>
        <p> {faq.answer} </p>
      </li>
    {/each}
  </ul>
</section>

<script>
  export let faqs, title
  export {clazz as class}
  let clazz = ''
</script>

<style>
  section {
    padding: 5em;

    font-size: 1.5em;
  }
  .full { height: 100vh; }
  :global(nav) + .full { height: calc(100vh - 74px); }
  .v-center { align-items: center; }
  .bottom   { align-items: end; }
  .h-center { justify-content: center; }
  .right    { justify-content: end; }
  .alt {
    background: var(--bg1);
    color: var(--fg1);
  }


  h2, h3 { font-family: var(--f-title); }

  p  {
    font-family: var(--f-description);
  }

  @media (max-width: 800px) {
    section { padding: 3em; }
  }

  @media (max-width: 600px) {
    section { padding: 1em; }
  }

  @media (max-width: 400px) {
    section { font-size: 1.3em; }
  }

  li {
    margin-bottom: 1rem;
    cursor: pointer;
  }

  li h3 {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  li p {
    margin: 0;
    padding-left: 1rem;
    display: none;
  }

  li:focus-within p, li:focus p {
    display: block;
  }
</style>
