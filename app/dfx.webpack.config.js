const path = require('path');

let localCanisters, prodCanisters, canisters

function initCanisterIds() {
    try {
        localCanisters = require(path.resolve('.dfx', 'local', 'canister_ids.json'));
    } catch (err) {
        console.log("No local canister ids found. Continuing production");
    }
    console.log("Local canisters: ", localCanisters);

    try {
        prodCanisters = require(path.resolve('canister_ids.json'));
    } catch (err) {
        console.log("No production canisters found. Continuing with local.");
    }

    const network = 
        process.env.DFX_NETWORK || 
        (process.env.NODE_ENV === "production" ? "ic": "local")

    console.info(`initCanisterIds: network=${network}`)
    console.info(`initCanisterIds: DFX_NETWORK=${process.env.DFX_NETWORK}`)

    canisters = network === "local" ? localCanisters : prodCanisters;

    console.log("Canisters: ", canisters);
    if (!canisters) {
        throw new Error("No canister configuration found for the selected network.");
    }
    
    for (const canister in canisters) {
        console.log(canister);
        process.env[`NEXT_PUBLIC_CANISTER_ID_${canister.toUpperCase()}`] = 
            canisters[canister][network]
    }
}

module.exports = {
    initCanisterIds: initCanisterIds
}
