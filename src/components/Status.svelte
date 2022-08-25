<script>
    import {state} from "../lib/store.js";

</script>


<div>
    <h3>Address</h3>
    <p style="word-break: break-word">{$state.faucetAddress}</p>
</div>
<div>
    <h3>Balance</h3>
    <p>{$state.total / 100000} XKR</p>
</div>
<div>
    <h3>Claimers</h3>
    <p>{$state.claimers} XKR</p>
</div>
<button on:click={() => $state.step = 1}>Back</button>

<style lang="scss">
    h3 {
      margin-bottom: 10px;
    }

    p {
      margin: 0;
    }
</style>