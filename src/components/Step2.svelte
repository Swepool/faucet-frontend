<script>
    import {fade} from "svelte/transition";
    import {state} from "../lib/store.js";

</script>

<div in:fade>
    <h1>Claim & chat</h1>
    <p>You're only able to claim ONCE per address, the address will be hashed and saved to check if you already
        claimed. Please do not misuse the faucet or it will be taken down.</p>
</div>
<div in:fade>
    <p>If empty, please enter your kryptokrona address to claim.</p>
    <div class="input-wrapper">
        <input type="text" placeholder="SEKR..." bind:value={$state.address}>
        <button on:click={() => $state.step = 3}>Claim</button>
    </div>
</div>

<style lang="scss">
  .input-wrapper {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    button {
      width: 30%;
    }

    @media screen and (max-width: 568px) {
      flex-direction: column;

      button {
        width: 100%;
      }
    }
  }

  input {
    border: 1px solid #505050;
    background-color: transparent;
    border-radius: 5px;
    padding: 10px 15px;
    height: 48px;
    width: 100%;
    color: var(--text-color);
    font-size: 1rem;
    font-family: "Roboto Mono", monospace;
    transition: 200ms ease-in-out;

    &:focus {
      outline: none;
      border-color: white;
    }
  }
</style>