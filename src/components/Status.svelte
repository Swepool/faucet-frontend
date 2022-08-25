<script>
    import {onMount} from "svelte";
    import {state} from "../lib/store.js";


    onMount(async () => {
        const get = await fetch("https://blocksum.org/faucet/status");
        const res = await get.json()

        state.update(current => {
            return {
                ...current,
                faucetAddress: res.address,
                unlocked: res.unlocked,
                locked: res.locked,
                total: res.total,
                claimers: res.claimers,
            }
        })

        console.log(res)
    });

</script>

<nav>
    <p>Status:</p>

</nav>

<style lang="scss">
  nav {
    position: absolute;
    top: 0;
    width: 100%;
    padding: 20px;
    background-color: var(--card-background);
    border: 1px solid var(--card-border);

    p {
      margin: 0;
    }
  }
</style>