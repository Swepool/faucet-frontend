<script>
    import {fade} from "svelte/transition";
    import {state} from "../lib/store.js";
    import Info from "./icons/Info.svelte";

</script>

<div in:fade>
    <div style="display: flex; gap: 1rem; align-items: center">
        <h1>Hugin faucet</h1>
        <Info green={$state.total > 10000000} red={$state.total < 10000000} on:click={() => $state.step = 'info'}/>
    </div>
    <p>This faucet is maintained and refilled by the community to make it easier onboarding Hugin Messenger.
        Feel
        free to give back by donating to this faucet in the near future and <span
                style="text-decoration: underline">please ask yourself if you're actually in need of 5 XKR</span>.
    </p>
</div>
<button in:fade on:click={() => $state.step = 2}>I understand</button>

<style lang="scss">



</style>