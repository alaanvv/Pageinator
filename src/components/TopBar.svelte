<nav class='topbar {clazz}'>
  {#if name || icon}
    <div class='brand'>
      {#if icon}
        <img src={icon} alt={icon.split('.')[0].split('/').pop()}>
      {/if}
      {#if name}
        <h2> {name} </h2>
      {/if}
    </div>
  {/if}

  {#if items}
    <ul class='items'>
      {#each items as item}
        <li> <a href={item.href}> {item.name} </a> </li>
      {/each}
    </ul>
  {/if}

  {#if socials}
    <ul class='socials'>
      {#each socials || [] as social}
        <li> <a href={social.href}>
          <img src={social.icon} alt={social.icon.split('.')[0].split('/').pop()}>
        </a> </li>
      {/each}
    </ul>
  {/if}
</nav>

<script>
  export let name, icon, items, socials
  export {clazz as class}
  let clazz = ''
</script>

<style>
  .topbar {
    position: relative;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5em;

    width: 100vw;
    padding: 1.3em 3em;

    font-family: var(--f-topbar-items);
    color: var(--fg-topbar);
    user-select: none;
  }
  .gradient {
    padding-bottom: 3em;
    background: linear-gradient(to bottom, var(--bg-topbar) 20%, var(--bg-topbar-transparent) 100%);
  }
  .transparent { background: transparent; }
  .topbar:not(.gradient):not(.transparent) {
    background: var(--bg-topbar);
    box-shadow: var(--sh-topbar);
  }
  .fixed {
    position: fixed;
    top: 0;
  }
  .left  { justify-content: start; }
  .right { justify-content: end;   }

  .brand {
    display: flex;
    justify-content: center;
    align-items: end;
    gap: 1em;
  }
  .right .brand {
    margin-right: auto;
  }

  h2 {
    font-family: var(--f-topbar-name);
    margin: 0;
  }

  ul {
    display: flex;
    justify-content: space-around;
    gap: 2em;

    max-width: 40vw;

    list-style: none;
  }
  .compact ul {
    justify-content: center;
  }

  .items:not(.compact .items) {
    flex-grow: 2;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }

  .brand img { height: 2em; }
  img { height: 1.5em; }

  .socials {
    justify-content: end !important;
    margin-left: auto;
  }
  .right .socials {
    margin-left: 0;
  }

  @media (max-width: 800px) {
    .brand { display: none; }
    .items { margin-right: auto; }
  }

  @media (max-width: 600px) {
    ul { gap: 1em; }
  }

  @media (max-width: 500px) {
    .topbar { padding: 1.3em 1em; }
  }
</style>
