import {writable} from "svelte/store";

export const state = writable({
    step: 1,
    address: undefined,
    sent: undefined,
    response: undefined,
    unlocked: 0,
    locked: 0,
    total: 0,
    faucetAddress: undefined,
    claimers: 0,
})