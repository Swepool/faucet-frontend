<script>
    import {fade} from "svelte/transition";
    import {state} from "../lib/store.js";
    import {goto} from "$app/navigation";

    const claim = async () => {
        const post = await fetch('https://blocksum.org/faucet/claim', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                address: $state.address
            })
        })
        const res = await post.json()
        console.log()
        $state.response = res.message
        $state.sent = res.sent

        console.log(res)
    }

    $: if ($state.response) {
        $state.step = 4
    }

</script>

<div in:fade>
    <h1>One more thing</h1>
    <p>Before you go, please consider following us on twitter and give us a star on github. Also, don't forget
        to tell your friends about kryptokrona and hugin messenger.</p>
</div>
<div in:fade class="socials-wrapper">
    <button on:click={() => goto('https://twitter.com/kryptokrona')}>Twitter</button>
    <button on:click={() => goto('https://github.com/kryptokrona/kryptokrona')}>Github</button>
    <button on:click={() => claim()}>Claim XKR</button>
</div>

<style lang="scss">
  .socials-wrapper {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 1rem;

    button {
      grid-column: span 6 / span 6;
      width: 100%;

      &:last-child {
        grid-column: span 12 / span 12;
        background-color: var(--success-color);
        border-color: #6affab;

        &:hover {
          background-color: #30ab66;
        }
      }
    }

    @media screen and (max-width: 568px) {
      flex-direction: column;
    }
  }
</style>