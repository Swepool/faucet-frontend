<script>
    import {fade} from "svelte/transition";
    import {state} from "../lib/store.js";

</script>

<div in:fade>
    <h1>Hugin faucet</h1>
    <p>This faucet is maintained and refilled by the community to make it easier onboarding Hugin Messenger.
        Feel
        free to give back by donating to this faucet in the near future and <span
                style="text-decoration: underline">please ask yourself if you're actually in need of 5 XKR</span>.
    </p>
</div>
<button in:fade on:click={() => $state.step = 2}>I understand</button>

<style lang="scss">



</style>