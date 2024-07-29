<TopBar icon='/assets/img/facebook.webp' name='Seguro' {items} {socials} class='compact right' />

<InfoSection title={text_sections[0].title} description={text_sections[0].description} class='full blur' background='/assets/img/placeholder.webp' button_text='Button' button_action={console.log} />
<InfoSection title={text_sections[0].title} description={text_sections[0].description} class='right alt tae' />
<FAQSection  title='FAQ' {faqs} />

<script>
  import InfoSection from './components/InfoSection.svelte'
  import FAQSection  from './components/FAQSection.svelte'
  import TopBar      from './components/TopBar.svelte'

  const items = [
    { href: '#', name: 'Sobre' },
    { href: '#', name: 'Preços' },
    { href: '#', name: 'Contato' }
  ]

  const socials = [
    { href: '#', icon: '/assets/img/facebook.webp' },
    { href: '#', icon: '/assets/img/linkedin.webp' },
    { href: '#', icon: '/assets/img/youtube.webp'  }
  ]

  const text_sections = [{
    title: 'Hello world!',
    description: 'Repellat eum et dolorum cumque quaerat voluptas aliquam. \nHic impedit alias consectetur fugiat iste autem nisi. \nVoluptatibus qui sunt delectus illo ut consequatur. \nQuia quisquam qui iure assumenda. \nQuam dolorem minima sequi.'
  }]

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "Our return policy allows returns within 30 days of purchase."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we offer 24/7 customer support via phone, email, and live chat."
    }
  ]
</script>

<style>
  :root {
    --bg0: #eee;
    --bg1: #ccc;

    --fg0: #111;
    --fg1: #333;

    --f0: 'Sarabun', sans-serif;

    --sh0: 0 0 10px 3px #00000022;
    --blur: 5px;

    --bg-topbar: var(--bg1);
    --bg-topbar-transparent: #cccccc00;
    --fg-topbar: var(--fg1);
    --f-topbar-name: var(--f0);
    --f-topbar-items: var(--f0);
    --sh-topbar: var(--sh0);

    --f-title: var(--f0);
    --f-description: var(--f0);
    --f-button: var(--f0);
    --bg0-button: var(--fg0);
    --bg1-button: var(--fg1);
    --fg0-button: var(--bg0);
    --fg1-button: var(--bg1);
    --sh-button: var(--sh0);
    --br-button: 80px;
  }

  :global(*) {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :global(body) {
    background: var(--bg0);

    color: var(--fg0);
  }

  :global(h1, h2, h3, h4, h5, h6) {
    margin-bottom: 1em;
  }

  :global(.tas) { text-align: start;  }
  :global(.tac) { text-align: center; }
  :global(.tae) { text-align: end;    }
</style>
