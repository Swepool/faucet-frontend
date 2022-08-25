<script>
    import {fade} from "svelte/transition";
    import {onMount} from "svelte";
    import {state} from "../lib/store.js";
    import Status from "../components/Status.svelte";

    let incomingUrl = null;

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

        const search = location.search;
        const params = new URLSearchParams(search);
        incomingUrl = params.get('address');

        if (incomingUrl) {
            $state.address = incomingUrl
        }
    })

</script>

<main in:fade>
    <slot/>
</main>

<style>
    @import '../theme/global.scss';

    main {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        gap: 2rem;
        padding: 20px;
    }
</style>